<template>
  <div class="container mx-auto pt-12 pb-32 px-5 min-h-screen">
    <!-- Consolidated Loading States -->
    <div v-if="pixelfedPending || mastodonPending" class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-12 animate-pulse">
        <div class="w-24 h-24 md:w-28 md:h-28 bg-gray-400/20 rounded-full"></div>
        <div class="flex-1 space-y-4 py-1 w-full max-w-md">
          <div class="h-6 bg-gray-400/20 rounded w-1/3 mx-auto md:mx-0"></div>
          <div class="h-4 bg-gray-400/20 rounded w-3/4 mx-auto md:mx-0"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-1 md:gap-2">
        <div v-for="i in 6" :key="i" class="aspect-square bg-gray-400/10 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <!-- Consolidated Error States (Both fail) -->
    <div v-else-if="(pixelfedError || !pixelfedFeed || pixelfedFeed.error) && (mastodonError || !mastodonFeed || mastodonFeed.error)" class="max-w-xl mx-auto text-center py-16">
      <Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h2 class="text-2xl font-semibold mb-2">Failed to load Fediverse Feeds</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">We couldn't retrieve your Pixelfed or Mastodon posts.</p>
      <div class="flex justify-center gap-4">
        <a :href="'https://pixelfed.social/midlaj'" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs font-semibold py-2 px-4 rounded-lg inline-flex items-center gap-2">
          <Icon name="simple-icons:pixelfed" class="w-4 h-4 text-indigo-500" />
          Pixelfed
        </a>
        <a :href="'https://mastodon.social/@midlaj'" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs font-semibold py-2 px-4 rounded-lg inline-flex items-center gap-2">
          <Icon name="simple-icons:mastodon" class="w-4 h-4 text-sky-400" />
          Mastodon
        </a>
      </div>
    </div>

    <!-- Feed Content -->
    <div v-else class="max-w-4xl mx-auto">
      
      <!-- 1. PROFILE HEADER (Conditional) -->
      <!-- Pixelfed Header -->
      <header v-if="activeTab === 'pixelfed' && !pixelfedError && pixelfedFeed && !pixelfedFeed.error" 
              class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 pb-12 border-b border-gray-400/20 dark:border-gray-800 mb-8">
        <div class="w-24 h-24 md:w-28 md:h-28 border border-gray-300/80 dark:border-gray-300/10 rounded-full p-1 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md">
          <img :src="pixelfedFeed.account.avatar" :alt="pixelfedFeed.account.display_name" class="w-full h-full object-cover rounded-full" />
        </div>

        <div class="flex-1 text-center md:text-left">
          <!-- Title (Display Name) -->
          <h1 class="text-2xl font-bold tracking-wide text-gray-950 dark:text-white mb-2">{{ pixelfedFeed.account.display_name }}</h1>
          
          <!-- Bio -->
          <div class="max-w-md mb-4">
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-wrap">{{ pixelfedFeed.account.note }}</p>
          </div>

          <!-- Handle & View button -->
          <div class="flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center md:justify-start">
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">@{{ pixelfedFeed.account.username }}@pixelfed.social</span>
            <a :href="pixelfedFeed.account.url" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs py-1 px-3 rounded-md font-medium inline-flex items-center gap-1.5 hover:scale-[1.02] transition-transform">
              <Icon name="simple-icons:pixelfed" class="w-3.5 h-3.5 text-[#6366f1]" />
              View on Pixelfed
            </a>
          </div>

          <!-- Stats -->
          <div class="flex justify-center md:justify-start gap-8">
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ pixelfedFeed.account.statuses_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">posts</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ pixelfedFeed.account.followers_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">followers</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ pixelfedFeed.account.following_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">following</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Mastodon Header -->
      <header v-else-if="activeTab === 'mastodon' && !mastodonError && mastodonFeed && !mastodonFeed.error" 
              class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 pb-12 border-b border-gray-400/20 dark:border-gray-800 mb-8">
        <div class="w-24 h-24 md:w-28 md:h-28 border border-gray-300/80 dark:border-gray-300/10 rounded-full p-1 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md">
          <img :src="mastodonFeed.account.avatar" :alt="mastodonFeed.account.display_name" class="w-full h-full object-cover rounded-full" />
        </div>

        <div class="flex-1 text-center md:text-left">
          <!-- Title (Display Name) -->
          <h1 class="text-2xl font-bold tracking-wide text-gray-950 dark:text-white mb-2">{{ mastodonFeed.account.display_name }}</h1>
          
          <!-- Bio -->
          <div class="max-w-md mb-4">
            <div class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal bio-content" v-html="mastodonFeed.account.note"></div>
          </div>

          <!-- Handle & View button -->
          <div class="flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center md:justify-start">
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">@{{ mastodonFeed.account.username }}@mastodon.social</span>
            <a :href="mastodonFeed.account.url" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs py-1 px-3 rounded-md font-medium inline-flex items-center gap-1.5 hover:scale-[1.02] transition-transform">
              <Icon name="simple-icons:mastodon" class="w-3.5 h-3.5 text-sky-400" />
              View on Mastodon
            </a>
          </div>

          <!-- Stats -->
          <div class="flex justify-center md:justify-start gap-8">
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ mastodonFeed.account.statuses_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">toots</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ mastodonFeed.account.followers_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">followers</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ mastodonFeed.account.following_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">following</p>
            </div>
          </div>
        </div>
      </header>

      <!-- 2. TAB SWITCHER (Placed here: on top of posts, below the header!) -->
      <div class="flex justify-center mb-10">
        <div class="relative flex p-1 bg-[#FAF8F5]/96 dark:bg-[#191816]/98 border border-gray-300/80 dark:border-gray-300/20 backdrop-blur-md rounded-full w-full max-w-[280px]">
          <!-- Sliding active indicator matching navbar active button style -->
          <div class="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] active-indicator rounded-full transition-transform duration-300 ease-out"
               :class="activeTab === 'mastodon' ? 'translate-x-full' : 'translate-x-0'"></div>
          
          <!-- Tab Buttons -->
          <button 
            @click="activeTab = 'pixelfed'"
            class="relative flex-1 py-2 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-full transition-colors duration-300 z-10"
            :class="activeTab === 'pixelfed' ? 'text-[var(--accent-color)]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
            <Icon name="heroicons:camera" class="w-4 h-4" />
            Pixelfed
          </button>
          <button 
            @click="activeTab = 'mastodon'"
            class="relative flex-1 py-2 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-full transition-colors duration-300 z-10"
            :class="activeTab === 'mastodon' ? 'text-[var(--accent-color)]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'">
            <Icon name="simple-icons:mastodon" class="w-4 h-4" />
            Mastodon
          </button>
        </div>
      </div>

      <!-- 3. POSTS GRID/TIMELINE (Conditional) -->
      <!-- Pixelfed Posts Tab -->
      <div v-if="activeTab === 'pixelfed'">
        <div v-if="pixelfedError || !pixelfedFeed || pixelfedFeed.error" class="text-center py-12 text-gray-500">
          <p>Failed to retrieve Pixelfed posts.</p>
        </div>
        <div v-else class="grid grid-cols-3 gap-1 md:gap-2">
          <div v-for="post in pixelfedFeed.posts" :key="post.id"
               class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-900/5 dark:border-gray-100/5 hover:shadow-md transition-all duration-300"
               @click="openPost(post)">
            
            <img :src="post.media[0]" :alt="post.caption || 'Pixelfed post'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />

            <div v-if="post.media.length > 1" class="absolute top-2 right-2 md:top-3 md:right-3 bg-black/60 backdrop-blur-md w-7 h-7 flex items-center justify-center rounded-lg text-white leading-none">
              <Icon name="heroicons:squares-2x2-20-solid" class="w-4 h-4" />
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <div class="text-center text-white px-2">
                <p class="text-sm font-medium line-clamp-3 leading-snug">{{ post.caption || 'View Photo' }}</p>
                <span class="text-[10px] text-white/70 block mt-2 font-mono">{{ formatDate(post.updated_at) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mastodon Posts Tab -->
      <div v-else-if="activeTab === 'mastodon'">
        <div v-if="mastodonError || !mastodonFeed || mastodonFeed.error" class="text-center py-12 text-gray-500">
          <p>Failed to retrieve Mastodon posts.</p>
        </div>
        <div v-else class="max-w-2xl mx-auto space-y-6">
          <article v-for="post in mastodonFeed.posts" :key="post.id" 
                   class="border border-gray-400/15 dark:border-gray-800 rounded-xl p-5 md:p-6 bg-white/40 dark:bg-gray-950/40 backdrop-blur-md shadow-sm hover:border-gray-450 dark:hover:border-gray-700/80 transition-colors">
            
            <!-- Author row -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <img :src="mastodonFeed.account.avatar" :alt="mastodonFeed.account.display_name" class="w-10 h-10 object-cover rounded-full border border-gray-200 dark:border-gray-800" />
                <div>
                  <h3 class="text-sm font-semibold text-gray-950 dark:text-white leading-tight">{{ mastodonFeed.account.display_name }}</h3>
                  <span class="text-xs text-gray-500 dark:text-gray-400">@{{ mastodonFeed.account.username }}@mastodon.social</span>
                </div>
              </div>
              <a :href="post.url" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-sky-400 transition-colors">
                <Icon name="simple-icons:mastodon" class="w-5 h-5" />
              </a>
            </div>

            <!-- Content HTML -->
            <div class="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-4 mastodon-content" v-html="post.content"></div>

            <!-- Media Attachments -->
            <div v-if="post.media.length > 0" class="mb-4 rounded-lg overflow-hidden border border-gray-450 dark:border-gray-800 bg-black flex gap-1 justify-center max-h-[350px]">
              <div v-for="(media, idx) in post.media" :key="idx" class="flex-1 overflow-hidden relative group cursor-pointer" @click="openMastodonMedia(post.media, idx)">
                <img :src="media.preview_url || media.url" :alt="media.description || 'Mastodon media'" class="w-full h-full object-cover max-h-[350px] transition-transform duration-300 group-hover:scale-102" />
                <div v-if="media.type === 'video' || media.type === 'gifv'" class="absolute inset-0 flex items-center justify-center bg-black/35 text-white">
                  <Icon name="heroicons:play-circle" class="w-12 h-12 opacity-80 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </div>

            <!-- Footer Stats / Meta -->
            <div class="flex items-center justify-between border-t border-gray-450/40 dark:border-gray-800/40 pt-4 text-xs text-gray-500 dark:text-gray-400">
              <span class="font-mono">{{ formatDate(post.created_at) }}</span>
              <div class="flex items-center gap-6">
                <span class="flex items-center gap-1.5 hover:text-green-500 transition-colors">
                  <Icon name="heroicons:arrow-path" class="w-4 h-4" />
                  {{ post.reblogs_count }}
                </span>
                <span class="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                  <Icon name="heroicons:heart" class="w-4 h-4" />
                  {{ post.favourites_count }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>

    <!-- ==================== PIXELFED LIGHTBOX MODAL ==================== -->
    <Transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
      <div v-if="selectedPost" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
           @click.self="closePost">
        
        <button class="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 transition-colors" @click="closePost">
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>

        <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden w-full max-w-5xl max-h-[90vh] md:max-h-[80vh] flex flex-col md:flex-row shadow-2xl border border-gray-200/10">
          <!-- Left: Image Slider -->
          <div class="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-0 aspect-square md:aspect-auto">
            <img :src="selectedPost.media[activeImageIndex]" :alt="selectedPost.caption || 'Pixelfed post'" class="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]" />

            <!-- Nav Arrows -->
            <button v-if="selectedPost.media.length > 1 && activeImageIndex > 0"
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105"
                    @click="prevImage">
              <Icon name="heroicons:chevron-left" class="w-6 h-6" />
            </button>
            <button v-if="selectedPost.media.length > 1 && activeImageIndex < selectedPost.media.length - 1"
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105"
                    @click="nextImage">
              <Icon name="heroicons:chevron-right" class="w-6 h-6" />
            </button>

            <!-- Slide Dots -->
            <div v-if="selectedPost.media.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              <span v-for="(img, idx) in selectedPost.media" :key="idx"
                    class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    :class="idx === activeImageIndex ? 'bg-white scale-110 shadow-md' : 'bg-white/40'"></span>
            </div>
          </div>

          <!-- Right: Sidebar details -->
          <div class="w-full md:w-[380px] flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
            <div class="overflow-y-auto max-h-[35vh] md:max-h-[60vh] space-y-4">
              <!-- Account info -->
              <div class="flex items-center gap-3">
                <img :src="pixelfedFeed.account.avatar" :alt="pixelfedFeed.account.display_name" class="w-10 h-10 object-cover rounded-full border border-gray-200 dark:border-gray-800" />
                <div>
                  <h3 class="text-sm font-semibold text-gray-950 dark:text-white leading-tight">{{ pixelfedFeed.account.username }}</h3>
                  <span class="text-xs text-gray-500 dark:text-gray-400">Pixelfed</span>
                </div>
              </div>
              <hr class="border-gray-100 dark:border-gray-800 my-3" />
              
              <!-- Caption -->
              <div class="space-y-2">
                <p v-if="selectedPost.caption" class="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-normal whitespace-pre-wrap">
                  <span class="font-semibold text-gray-950 dark:text-white mr-1">{{ pixelfedFeed.account.username }}</span>
                  {{ selectedPost.caption }}
                </p>
                <p v-else class="text-sm text-gray-400 italic font-normal">No caption provided.</p>
              </div>
            </div>

            <!-- Footer: date and original button -->
            <div class="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 space-y-4">
              <span class="text-xs text-gray-400 font-mono block">
                Posted on {{ formatDate(selectedPost.updated_at) }}
              </span>
              <a :href="selectedPost.url" target="_blank" rel="noopener noreferrer"
                 class="w-full btn btn-primary text-center justify-center font-medium text-xs py-2 rounded-lg flex items-center gap-2">
                <Icon name="simple-icons:pixelfed" class="w-4 h-4 text-indigo-500" />
                Open on Pixelfed.social
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ==================== MASTODON MEDIA LIGHTBOX MODAL ==================== -->
    <Transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
      <div v-if="mastodonLightboxMedia" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
           @click.self="closeMastodonMedia">
        
        <button class="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50" @click="closeMastodonMedia">
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>

        <div class="relative max-w-5xl max-h-[90vh]">
          <img :src="mastodonLightboxMedia[mastodonLightboxIndex].url" :alt="mastodonLightboxMedia[mastodonLightboxIndex].description || 'Mastodon media'" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
          <p v-if="mastodonLightboxMedia[mastodonLightboxIndex].description" class="text-white/80 text-center mt-3 text-sm font-medium">{{ mastodonLightboxMedia[mastodonLightboxIndex].description }}</p>

          <!-- Nav Arrows -->
          <button v-if="mastodonLightboxMedia.length > 1 && mastodonLightboxIndex > 0"
                  class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105"
                  @click="mastodonLightboxIndex--">
            <Icon name="heroicons:chevron-left" class="w-6 h-6" />
          </button>
          <button v-if="mastodonLightboxMedia.length > 1 && mastodonLightboxIndex < mastodonLightboxMedia.length - 1"
                  class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:scale-105"
                  @click="mastodonLightboxIndex++">
            <Icon name="heroicons:chevron-right" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref('pixelfed')

// Fetch Pixelfed & Mastodon feeds
const { data: pixelfedFeed, pending: pixelfedPending, error: pixelfedError } = await useFetch<any>('/api/pixelfed')
const { data: mastodonFeed, pending: mastodonPending, error: mastodonError } = await useFetch<any>('/api/mastodon')

// Pixelfed Modal State
const selectedPost = ref<any>(null)
const activeImageIndex = ref(0)

const openPost = (post: any) => {
  selectedPost.value = post
  activeImageIndex.value = 0
  document.body.style.overflow = 'hidden'
}

const closePost = () => {
  selectedPost.value = null
  document.body.style.overflow = ''
}

const prevImage = () => {
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--
  }
}

const nextImage = () => {
  if (activeImageIndex.value < selectedPost.value.media.length - 1) {
    activeImageIndex.value++
  }
}

// Mastodon Lightbox Modal State
const mastodonLightboxMedia = ref<any[] | null>(null)
const mastodonLightboxIndex = ref(0)

const openMastodonMedia = (mediaArray: any[], startIndex: number) => {
  mastodonLightboxMedia.value = mediaArray
  mastodonLightboxIndex.value = startIndex
  document.body.style.overflow = 'hidden'
}

const closeMastodonMedia = () => {
  mastodonLightboxMedia.value = null
  document.body.style.overflow = ''
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style>
/* Style helper for HTML content parsed from Pixelfed/Mastodon */
.mastodon-content p, .bio-content p {
  margin-bottom: 0.75rem;
}
.mastodon-content p:last-child, .bio-content p:last-child {
  margin-bottom: 0;
}
.mastodon-content a, .bio-content a {
  @apply text-sky-500 dark:text-sky-400 hover:underline break-all;
}
.mastodon-content .hashtag {
  @apply text-indigo-500 dark:text-indigo-400 hover:underline;
}
.bg-gray-850 {
  background-color: #1f2937;
}
.dark .bg-gray-850 {
  background-color: #1e293b;
}
</style>
