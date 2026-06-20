<template>
  <div class="container mx-auto pt-12 pb-32 px-5 min-h-screen">
    <!-- Header/Loading/Error States -->
    <div v-if="pending" class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-16 mb-12 animate-pulse">
        <div class="w-24 h-24 md:w-36 md:h-36 bg-gray-400/20 rounded-full"></div>
        <div class="flex-1 space-y-4 py-1 w-full max-w-md">
          <div class="h-6 bg-gray-400/20 rounded w-1/3 mx-auto md:mx-0"></div>
          <div class="h-4 bg-gray-400/20 rounded w-3/4 mx-auto md:mx-0"></div>
          <div class="h-4 bg-gray-400/20 rounded w-1/2 mx-auto md:mx-0"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-1 md:gap-2">
        <div v-for="i in 6" :key="i" class="aspect-square bg-gray-400/10 rounded-lg animate-pulse"></div>
      </div>
    </div>

    <div v-else-if="error || !feed || feed.error" class="max-w-xl mx-auto text-center py-16">
      <Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h2 class="text-2xl font-semibold mb-2">Failed to load Feed</h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">We couldn't retrieve the Pixelfed posts at this time.</p>
      <a :href="'https://pixelfed.social/midlaj'" target="_blank" rel="noopener noreferrer" class="btn btn-primary inline-flex items-center gap-2">
        <Icon name="simple-icons:pixelfed" class="w-5 h-5 text-indigo-500" />
        Visit Profile Directly
      </a>
    </div>

    <div v-else class="max-w-4xl mx-auto">
      <!-- Profile Header -->
      <header class="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 pb-12 border-b border-gray-400/20 dark:border-gray-800 mb-8">
        <!-- Avatar -->
        <div class="relative group">
          <div class="absolute inset-0 -m-[4px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-[2px] opacity-75 group-hover:blur-[4px] transition-all duration-300"></div>
          <div class="relative w-24 h-24 md:w-28 md:h-28 bg-gray-200 dark:bg-gray-800 rounded-full p-[3px]">
            <img :src="feed.account.avatar" :alt="feed.account.display_name" class="w-full h-full object-cover rounded-full bg-white dark:bg-gray-900" />
          </div>
        </div>

        <!-- Meta info -->
        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-col sm:flex-row items-center gap-4 mb-4 justify-center md:justify-start">
            <h1 class="text-2xl font-semibold tracking-wide text-gray-950 dark:text-white mb-0">{{ feed.account.username }}</h1>
            <div class="flex gap-2">
              <a :href="feed.account.url" target="_blank" rel="noopener noreferrer" class="btn btn-primary text-xs py-1.5 px-4 rounded-md font-medium inline-flex items-center gap-2 hover:scale-[1.02] transition-transform">
                <Icon name="simple-icons:pixelfed" class="w-4 h-4 text-[#6366f1]" />
                View on Pixelfed
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div class="flex justify-center md:justify-start gap-8 mb-6">
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ feed.account.statuses_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">posts</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ feed.account.followers_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">followers</p>
            </div>
            <div class="text-center md:text-left">
              <span class="font-semibold text-gray-950 dark:text-white">{{ feed.account.following_count }}</span>
              <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">following</p>
            </div>
          </div>

          <!-- Bio -->
          <div class="max-w-md">
            <h2 class="text-sm font-bold text-gray-900 dark:text-white mb-1">{{ feed.account.display_name }}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-wrap">{{ feed.account.note }}</p>
          </div>
        </div>
      </header>

      <!-- Tabs -->
      <div class="flex justify-center border-t border-transparent mb-8">
        <div class="flex gap-12 -mt-[1px]">
          <button class="border-t border-gray-950 dark:border-white pt-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-950 dark:text-white">
            <Icon name="heroicons:squares-2x2" class="w-4 h-4" />
            Posts
          </button>
        </div>
      </div>

      <!-- Post Grid -->
      <div class="grid grid-cols-3 gap-1 md:gap-2">
        <div v-for="post in feed.posts" :key="post.id"
             class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-900/5 dark:border-gray-100/5 hover:shadow-md transition-all duration-300"
             @click="openPost(post)">
          
          <!-- Image -->
          <img :src="post.media[0]" :alt="post.caption || 'Pixelfed post'"
               class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />

          <!-- Multiple Images Badge -->
          <div v-if="post.media.length > 1" class="absolute top-2 right-2 md:top-3 md:right-3 bg-black/60 backdrop-blur-md p-1.5 rounded-lg text-white">
            <Icon name="heroicons:squares-2x2-20-solid" class="w-4 h-4" />
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <div class="text-center text-white px-2">
              <p class="text-sm font-medium line-clamp-3 leading-snug">
                {{ post.caption || 'View Photo' }}
              </p>
              <span class="text-[10px] text-white/70 block mt-2 font-mono">
                {{ formatDate(post.updated_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Instagram-style Modal -->
    <Transition enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95">
      <div v-if="selectedPost" class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
           @click.self="closePost">
        
        <!-- Close button -->
        <button class="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 transition-colors" @click="closePost">
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>

        <!-- Modal Content Container -->
        <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden w-full max-w-5xl max-h-[90vh] md:max-h-[80vh] flex flex-col md:flex-row shadow-2xl border border-gray-200/10">
          
          <!-- Left: Image Slider -->
          <div class="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-0 aspect-square md:aspect-auto">
            <img :src="selectedPost.media[activeImageIndex]" :alt="selectedPost.caption || 'Pixelfed post'"
                 class="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]" />

            <!-- Nav Arrows -->
            <button v-if="selectedPost.media.length > 1 && activeImageIndex > 0"
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-105"
                    @click="prevImage">
              <Icon name="heroicons:chevron-left" class="w-6 h-6" />
            </button>
            <button v-if="selectedPost.media.length > 1 && activeImageIndex < selectedPost.media.length - 1"
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-105"
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
                <img :src="feed.account.avatar" :alt="feed.account.display_name" class="w-10 h-10 object-cover rounded-full border border-gray-200 dark:border-gray-800" />
                <div>
                  <h3 class="text-sm font-semibold text-gray-950 dark:text-white leading-tight">{{ feed.account.username }}</h3>
                  <span class="text-xs text-gray-500 dark:text-gray-400">Pixelfed</span>
                </div>
              </div>
              <hr class="border-gray-100 dark:border-gray-800 my-3" />
              
              <!-- Caption -->
              <div class="space-y-2">
                <p v-if="selectedPost.caption" class="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-normal whitespace-pre-wrap">
                  <span class="font-semibold text-gray-950 dark:text-white mr-1">{{ feed.account.username }}</span>
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
  </div>
</template>

<script setup lang="ts">
const { data: feed, pending, error } = await useFetch<any>('/api/pixelfed')

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
