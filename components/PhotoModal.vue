<template>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center bg-gray-700/30 backdrop-blur">
    <div class="max-w-xl bg-gray-700/30 backdrop-blur border border-gray-900/10 dark:border-gray-300/10 rounded-xl overflow-clip">
        <div class="px-5 h-8"></div>
        <div class="flex justify-center items-center">
        <img :src="imageSrc" alt="">
        </div>
        <div class="p-5 flex gap-2 justify-end">
        <a :href="firstLink" target="_blank" class="btn btn-primary">Follow</a>
        <a :href="secondLink" target="_blank" class="btn btn-primary">Follow</a>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
}>();
</script>