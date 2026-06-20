<template>
    <div v-if="$route.path !== '/fediverse'" class="container fixed z-10 top-0 left-1/2 -translate-x-1/2 flex items-center p-5" :class="{'justify-end': $route.path === '/' , 'justify-between' : $route.path !== '/'}">
        <NuxtLink to="/"><img class="TopBarProfile" :class="{'hidden': $route.path === '/'}" src="~/assets/img/profile-pic.png" alt="profile-pic"></NuxtLink>
    </div>
</template>

<script setup>
</script>