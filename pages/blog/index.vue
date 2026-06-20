<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col gap-12 items-start">
        <div class="w-full flex justify-start items-center">
            <h1 class="text-center">Blog</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            <NuxtLink :to="`/blog/${post.slug}`" v-for="post in posts" :key="post.id" class="blog-item">
                <div class="mb-6 p-5">
                    <h3 class="text-3xl font-light mb-2">{{ post.title.rendered }}</h3>
                    <div class="" v-html="post.excerpt.rendered"></div>
                </div>
                <div class="flex gap-2 justify-between blog-details">
                    <span>{{ post._embedded.author[0].name }}</span>
                    <span class="">{{ formatDate(post.date) }}</span>
                </div>
            </NuxtLink>  
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

const posts = ref([])

// Access runtime config
const config = useRuntimeConfig()
const apiUrl = `${config.public.wpApiBaseUrl}posts?_embed`

const { data, pending, error } = await useFetch(apiUrl)

if (data.value) {
  posts.value = data.value
}
</script>