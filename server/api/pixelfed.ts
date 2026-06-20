import { defineEventHandler } from 'h3'

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
  try {
    // 1. Fetch account metadata
    const accountResponse = await fetch('https://pixelfed.social/api/v1/accounts/lookup?acct=midlaj')
    if (!accountResponse.ok) {
      throw new Error(`Failed to lookup Pixelfed account: ${accountResponse.statusText}`)
    }
    const accountData = await accountResponse.json()

    // 2. Fetch Atom XML feed
    const atomResponse = await fetch('https://pixelfed.social/users/midlaj.atom')
    if (!atomResponse.ok) {
      throw new Error(`Failed to fetch Atom feed: ${atomResponse.statusText}`)
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

    return {
      account: {
        username: accountData.username || 'midlaj',
        display_name: accountData.display_name || 'Midlaj M',
        followers_count: accountData.followers_count || 0,
        following_count: accountData.following_count || 0,
        statuses_count: accountData.statuses_count || 0,
        note: accountData.note ? decodeHTMLEntities(accountData.note.replace(/<[^>]*>/g, '')) : 'random nub posts...',
        avatar: accountData.avatar || '',
        url: accountData.url || 'https://pixelfed.social/midlaj'
      },
      posts
    }
  } catch (error: any) {
    console.error('Pixelfed API error:', error)
    return {
      error: true,
      message: error.message || 'Failed to retrieve Pixelfed feed'
    }
  }
})
