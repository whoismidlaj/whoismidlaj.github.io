<template>
    <div class="fixed inset-0 flex items-end justify-center pb-20 px-5 z-[999]">
        <!-- Transparent backdrop to capture outside clicks -->
        <div class="absolute inset-0 bg-transparent" @click="handleClick"></div>

        <!-- Menu container -->
        <div class="relative w-full z-10">
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
                    <NuxtLink @click="handleClick" :class="{'active': $route.path === '/fediverse'}" class="menuItem" to="/fediverse">Fediverse 
                        <div class="icon w-6">
                            <Icon name="heroicons:at-symbol" class="w-6 h-6" />
                        </div>
                    </NuxtLink>
                </div>
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