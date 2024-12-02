<template>
    <div class="container fixed z-10 top-0 left-1/2 -translate-x-1/2 flex items-center p-5" :class="{'justify-end': $route.path === '/' , 'justify-between' : $route.path !== '/'}">
        <NuxtLink v-show="colorMode.preference !== 'matrix'" to="/"><img class="w-10 h-10 bg-gray-100 border border-gray-100 rounded-full" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic.png" alt="profile-pic"></NuxtLink>
        <NuxtLink v-show="colorMode.preference === 'matrix'" to="/"><img class="w-10 h-10 bg-[#00FF41] border-none rounded-none" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic-black.png" alt="profile-pic"></NuxtLink>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

</script>