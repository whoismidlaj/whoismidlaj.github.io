import { defineEventHandler } from 'h3'

let cachedData: any = null
let lastFetched = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes cache

function decodeHTMLEntities(str: string) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export default defineEventHandler(async () => {
  const now = Date.now()

  // Serve from cache if within TTL
  if (cachedData && (now - lastFetched < CACHE_TTL)) {
    return cachedData
  }

  try {
    // 1. Fetch account metadata via API (optional/fallback)
    let accountData: any = null
    try {
      const accountResponse = await fetch('https://pixelfed.social/api/v1/accounts/lookup?acct=midlaj')
      if (accountResponse.ok) {
        accountData = await accountResponse.json()
      } else {
        console.warn(`Pixelfed API lookup failed with status: ${accountResponse.status}`)
      }
    } catch (e) {
      console.warn('Pixelfed API lookup request failed:', e)
    }

    // 2. Fetch Atom XML feed (usually CDN-cached and less rate-limited)
    const atomResponse = await fetch('https://pixelfed.social/users/midlaj.atom')
    if (!atomResponse.ok) {
      throw new Error(`Failed to fetch Atom feed: ${atomResponse.statusText} (${atomResponse.status})`)
    }
    const xmlText = await atomResponse.text()

    // 3. Parse XML feed
    const posts: any[] = []
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
    let match

    while ((match = entryRegex.exec(xmlText)) !== null) {
      const entryContent = match[1]

      // Extract ID
      const idMatch = entryContent.match(/<id>(.*?)<\/id>/)
      const id = idMatch ? idMatch[1] : ''

      // Extract Title (Caption)
      const titleMatch = entryContent.match(/<title>([\s\S]*?)<\/title>/)
      let caption = titleMatch ? titleMatch[1].trim() : ''
      if (caption === 'No caption') {
        caption = ''
      } else {
        caption = decodeHTMLEntities(caption)
      }

      // Extract Updated Date
      const updatedMatch = entryContent.match(/<updated>(.*?)<\/updated>/)
      const updatedAt = updatedMatch ? updatedMatch[1] : ''

      // Extract alternate Link
      const linkMatch = entryContent.match(/<link[^>]+href="([^"]+)"/)
      const postUrl = linkMatch ? linkMatch[1] : ''

      // Extract all media content URLs
      const mediaUrls: string[] = []
      const mediaContentRegex = /<media:content[^>]+url="([^"]+)"/g
      let mediaMatch
      while ((mediaMatch = mediaContentRegex.exec(entryContent)) !== null) {
        mediaUrls.push(mediaMatch[1])
      }

      // Fallback: search for media-item img tags in html content if media:content is empty
      if (mediaUrls.length === 0) {
        const imgRegex = /<img[^>]+src="([^"]+)"/g
        let imgMatch
        while ((imgMatch = imgRegex.exec(entryContent)) !== null) {
          mediaUrls.push(imgMatch[1])
        }
      }

      posts.push({
        id,
        caption,
        updated_at: updatedAt,
        url: postUrl,
        media: mediaUrls
      })
    }

    // 4. Extract profile info from Atom XML feed if API lookup failed
    let parsedUsername = 'midlaj'
    let parsedDisplayName = 'Midlaj'
    let parsedBio = 'random posts...'
    let parsedAvatar = ''
    let parsedUrl = 'https://pixelfed.social/midlaj'

    const feedTitleMatch = xmlText.match(/<feed[\s\S]*?<title>([\s\S]*?)<\/title>/)
    if (feedTitleMatch) {
      const titleText = feedTitleMatch[1].trim()
      const cleanTitle = titleText.split(' on ')[0].split(' (')[0].trim()
      parsedDisplayName = cleanTitle
      parsedUsername = cleanTitle
    }
    const feedSubtitleMatch = xmlText.match(/<subtitle>([\s\S]*?)<\/subtitle>/)
    if (feedSubtitleMatch) {
      parsedBio = decodeHTMLEntities(feedSubtitleMatch[1].replace(/<[^>]*>/g, '').trim())
    }
    const feedLogoMatch = xmlText.match(/<logo>([\s\S]*?)<\/logo>/) || xmlText.match(/<icon>([\s\S]*?)<\/icon>/)
    if (feedLogoMatch) {
      parsedAvatar = feedLogoMatch[1].trim()
    }
    const authorUriMatch = xmlText.match(/<author>[\s\S]*?<uri>([\s\S]*?)<\/uri>/)
    if (authorUriMatch) {
      parsedUrl = authorUriMatch[1].trim()
    }

    cachedData = {
      account: {
        username: accountData?.username || parsedUsername,
        display_name: accountData?.display_name || parsedDisplayName,
        followers_count: accountData?.followers_count || (cachedData?.account?.followers_count || 0),
        following_count: accountData?.following_count || (cachedData?.account?.following_count || 0),
        statuses_count: accountData?.statuses_count || (cachedData?.account?.statuses_count || posts.length),
        note: accountData?.note ? decodeHTMLEntities(accountData.note.replace(/<[^>]*>/g, '')) : parsedBio,
        avatar: accountData?.avatar || parsedAvatar,
        url: accountData?.url || parsedUrl
      },
      posts
    }
    lastFetched = now
    return cachedData

  } catch (error: any) {
    console.error('Pixelfed API error:', error)
    
    // If rate-limited or offline, return stale cache if available
    if (cachedData) {
      console.log('Serving stale Pixelfed cache.')
      return cachedData
    }

    return {
      error: true,
      message: error.message || 'Failed to retrieve Pixelfed feed'
    }
  }
})
