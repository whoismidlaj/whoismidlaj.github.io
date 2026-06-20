import { defineEventHandler } from 'h3'

let cachedData: any = null
let lastFetched = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes cache

export default defineEventHandler(async () => {
  const now = Date.now()

  // Serve from cache if within TTL
  if (cachedData && (now - lastFetched < CACHE_TTL)) {
    return cachedData
  }

  try {
    // 1. Lookup Mastodon account to get ID and profile details
    const lookupResponse = await fetch('https://mastodon.social/api/v1/accounts/lookup?acct=midlaj')
    if (!lookupResponse.ok) {
      throw new Error(`Failed to lookup Mastodon account: ${lookupResponse.statusText} (${lookupResponse.status})`)
    }
    const accountData = await lookupResponse.json()
    const accountId = accountData.id

    // 2. Fetch public statuses for this account
    const statusesResponse = await fetch(`https://mastodon.social/api/v1/accounts/${accountId}/statuses?exclude_replies=true&limit=20`)
    if (!statusesResponse.ok) {
      throw new Error(`Failed to fetch Mastodon statuses: ${statusesResponse.statusText} (${statusesResponse.status})`)
    }
    const statusesData = await statusesResponse.json()

    // 3. Process and return clean payload
    const posts = statusesData.map((status: any) => {
      return {
        id: status.id,
        created_at: status.created_at,
        url: status.url,
        content: status.content, // HTML format
        favourites_count: status.favourites_count || 0,
        reblogs_count: status.reblogs_count || 0,
        replies_count: status.replies_count || 0,
        media: (status.media_attachments || []).map((media: any) => ({
          type: media.type, // 'image', 'video', 'gifv'
          url: media.url,
          preview_url: media.preview_url,
          description: media.description
        }))
      }
    })

    cachedData = {
      account: {
        username: accountData.username || 'midlaj',
        display_name: accountData.display_name || 'Midlaj',
        followers_count: accountData.followers_count || 0,
        following_count: accountData.following_count || 0,
        statuses_count: accountData.statuses_count || 0,
        note: accountData.note || '', // Contains HTML
        avatar: accountData.avatar || '',
        url: accountData.url || 'https://mastodon.social/@midlaj'
      },
      posts
    }
    lastFetched = now
    return cachedData

  } catch (error: any) {
    console.error('Mastodon API error:', error)

    // If rate-limited or offline, return stale cache if available
    if (cachedData) {
      console.log('Serving stale Mastodon cache.')
      return cachedData
    }

    return {
      error: true,
      message: error.message || 'Failed to retrieve Mastodon feed'
    }
  }
})
