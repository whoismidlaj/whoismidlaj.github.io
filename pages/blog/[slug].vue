<template>
  <div v-if="post" class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col gap-6 items-start">
    <div class="w-full flex justify-start items-center">
      <h1 class="text-center">{{ post.title.rendered }}</h1>
    </div>
    <div class="" v-html="post.content.rendered"></div>
    <!-- <div class="flex gap-2 justify-between border-t bg-gray-300/30 dark:bg-gray-800 border-gray-900/10 dark:border-gray-300/10 py-2 px-5 rounded-b-xl">
      <span>{{ post._embedded.author[0].name }}</span>
      <span class="">{{ formatDate(post.date) }}</span>
    </div> -->
  </div>
  <!-- <div v-if="pending" class="w-full flex justify-center items-center">
      <p>Loading...</p>
    </div>
    <div v-if="error" class="w-full flex justify-center items-center">
      <p>{{ error.message }}</p>
    </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRuntimeConfig, useRoute } from '#imports'
import { usePost } from '@/composables/usePost'

const route = useRoute()
const slug = route.params.slug
const post = ref(null)
const error = ref<Error | null>(null)
const pending = ref<boolean>(true)

onMounted(async () => {
  try {
    const fetchedPost = await usePost(slug)
    post.value = fetchedPost
  } catch (err) {
    error.value = err
  } finally {
    pending.value = false
  }
})
</script>
