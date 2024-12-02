<script setup>
import works from "~/content/data.json";
import { computed } from "vue";

// Define a `limit` prop
const props = defineProps({
  limit: {
    type: Number,
    default: works.length, // Default to show all works if no limit is provided
  },
});

// Use a computed property to limit the works
const limitedWorks = computed(() => works.slice(0, props.limit));
</script>

<template>
    <div class="WorkCard flex flex-col justify-between" v-for="work in limitedWorks" :key="work.id">
        <div class="flex flex-col p-5 gap-2">
            <h3 class="text-xl">{{ work.name }}</h3>
            <p>{{ work.desc }}</p>
        </div>
        <div class="px-5 py-3 flex justify-between WorkDetails">
            <div class="flex items-center gap-4">
                <div v-for="tech in work.tech" :key="tech" class="technology-icon">
                    <component :is="techIcons[tech]" class="w-5 h-5" />
                </div>
            </div>
            <div class="flex gap-2">
                <a v-if="work.git"  :href="`${ work.git }`" target="_blank" class="icontext-btn">
                    <span class="hidden md:block">Source</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </a>
                <a v-if="work.link" :href="`${ work.link }`" target="_blank" class="icontext-btn">
                    <span class="hidden md:block">See Live</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>