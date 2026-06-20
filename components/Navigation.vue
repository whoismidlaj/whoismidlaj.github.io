<script setup>
const showMenuModal = ref(false)
function toggleMenu() {
  showMenuModal.value = !showMenuModal.value
  if (showMenuModal.value) {
    showPop.value = false
  }
}

// Listen for the event emitted from Component2
const closeMenuListener = ref(null);

function closeMenu() {
  showMenuModal.value = false;
}

onMounted(() => {
  on('closeMenu', closeMenu);
});

onUnmounted(() => {
  off('closeMenu', closeMenu);
});

const showPop = ref(false)
function togglePop() {
  showPop.value = !showPop.value
  if (showPop.value) {
    showMenuModal.value = false
  }
}

function handleClick() {
  showPop.value = false
}

const route = useRoute()
const activeIndex = computed(() => {
  const path = route.path
  if (path === '/') return 0
  if (path.startsWith('/about')) return 1
  if (path.startsWith('/projects')) return 2
  if (path.startsWith('/fediverse')) return 3
  return -1
})

const colorMode = useColorMode()
const setTheme = (theme) => {
    colorMode.preference = theme;
};
</script>

<template>
  <nav class="Navigation px-5">
    <div class="NavContainer container mx-auto flex justify-between">
      <div class="menu hidden relative md:flex items-center gap-1">
        <!-- Sliding active indicator matching tab style -->
        <div class="absolute top-0 bottom-0 left-0 w-12 active-indicator rounded-full transition-all duration-300 ease-out"
             :style="{ transform: `translateX(${activeIndex * 52}px)` }"
             :class="{ 'opacity-0 scale-95': activeIndex === -1, 'opacity-100 scale-100': activeIndex !== -1 }"></div>
        
        <NuxtLink class="relative z-10 flex items-center justify-center w-12 h-9 rounded-full transition-colors duration-300"
                  to="/" aria-label="Home"
                  :class="activeIndex === 0 ? 'text-[var(--accent-color)] font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
          <Icon name="heroicons:home" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink class="relative z-10 flex items-center justify-center w-12 h-9 rounded-full transition-colors duration-300"
                  to="/about" aria-label="About"
                  :class="activeIndex === 1 ? 'text-[var(--accent-color)] font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
          <Icon name="heroicons:user" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink class="relative z-10 flex items-center justify-center w-12 h-9 rounded-full transition-colors duration-300"
                  to="/projects" aria-label="Projects"
                  :class="activeIndex === 2 ? 'text-[var(--accent-color)] font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
          <Icon name="heroicons:briefcase" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink class="relative z-10 flex items-center justify-center w-12 h-9 rounded-full transition-colors duration-300"
                  to="/fediverse" aria-label="Fediverse"
                  :class="activeIndex === 3 ? 'text-[var(--accent-color)] font-semibold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
          <Icon name="heroicons:at-symbol" class="w-5 h-5" />
        </NuxtLink>
      </div>
      <div @click="toggleMenu" class="menuMobile flex justify-center items-center rounded-full cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div @click="togglePop" class="theme-toggle-btn flex justify-center items-center rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
        </svg>
      </div>
    </div>
  </nav>
  <MenuModal v-show="showMenuModal" />
  <div v-if="showPop" @click="handleClick" class="fixed top-0 left-0 w-screen h-screen updates-backdrop"></div>
  <div v-show="showPop"
    class="fixed top-20 md:top-8 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] h-fit max-w-[400px] updates">
    <div class="p-5">
      <h2 class="text-md mb-4">Updates</h2>
    <ul class="list-decimal list-outside ps-5 flex flex-col gap-2">


      <li class="text-sm">Claude-inspired warm design styling</li>
      <li class="text-sm">Projects page is live, checkout my recent <NuxtLink
          class="underline underline-offset-2 text-[var(--accent-color)] hover:opacity-80 transition-opacity font-normal" @click="handleClick"
          to="/projects">projects</NuxtLink>
      </li>
      <li class="text-sm">Fediverse feed is live, checkout my <NuxtLink
          class="underline underline-offset-2 text-[var(--accent-color)] hover:opacity-80 transition-opacity font-normal" @click="handleClick"
          to="/fediverse">Pixelfed posts</NuxtLink>
      </li>
    </ul>
    </div>
    <div class="p-3 border-t border-gray-900/10 dark:border-gray-300/10">
      <DarkModeToggle />
    </div>
  </div>
</template>