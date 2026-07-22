<template>
    <div v-if="$route.path !== '/fediverse'" class="container fixed z-10 top-0 left-1/2 -translate-x-1/2 flex items-center p-5" :class="{'justify-end': $route.path === '/' , 'justify-between' : $route.path !== '/'}">
        <NuxtLink to="/" class="TopBarProfileContainer" :class="{'hidden': $route.path === '/'}">
            <img class="TopBarProfile" :src="profilePicSrc" alt="profile-pic">
        </NuxtLink>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useColorMode } from '#imports'
import profilePic from '~/assets/img/profile-pic.png'
import profilePicBlack from '~/assets/img/profile-pic-black.png'

const colorMode = useColorMode()
const profilePicSrc = computed(() => {
  return colorMode.preference === 'matrix' ? profilePicBlack : profilePic
})
</script>