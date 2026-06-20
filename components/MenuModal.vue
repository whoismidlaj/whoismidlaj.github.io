<template>
    <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-screen flex justify-center items-center px-5">
        <div class="menuContainer w-full overflow-clip">
            <div class="flex flex-col">
                <NuxtLink @click="handleClick" :class="{'active': $route.path === '/'}" class="menuItem" to="/">Home 
                    <div class="icon w-6">
                        <Icon name="heroicons:home" class="w-6 h-6" />
                    </div>
                </NuxtLink>
                <NuxtLink @click="handleClick" :class="{'active': $route.path === '/about'}" class="menuItem" to="/about">About 
                    <div class="icon w-6">
                         <Icon name="heroicons:user" class="w-6 h-6" />
                    </div>
                </NuxtLink>
                <NuxtLink @click="handleClick" :class="{'active': $route.path === '/projects'}" class="menuItem" to="/projects">Projects 
                    <div class="icon w-6">
                        <Icon name="heroicons:briefcase" class="w-6 h-6" />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { emit } from '../utils/eventBus.js';
const emitCloseMenu = ref(null); // Function to emit the event

function handleClick() {
  emit('closeMenu');
}
</script>