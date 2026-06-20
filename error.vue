<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col gap-12 justify-center items-center">
        <div class="w-full flex flex-col gap-4 justify-center items-center">
            <h1 class="text-center text-6xl">{{ error.statusCode }}</h1>
            <a class="btn btn-primary" @click="handleError">Clear errors</a>
        </div>
    </div>
</template>