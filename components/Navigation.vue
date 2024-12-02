<script setup>
const showMenuModal = ref(false)
function toggleMenu() {
  showMenuModal.value = !showMenuModal.value
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
}

function handleClick() {
  showPop.value = false
}

const setTheme = (theme) => {
    colorMode.preference = theme;
};
</script>

<template>
  <nav class="Navigation px-5">
    <div class="NavContainer container mx-auto flex justify-between">
      <div class="menu hidden space-x-2 md:flex items-stretch">
        <NuxtLink :class="{ 'btn-primary active': $route.path === '/' }" class="btn btn-primary rounded-full" to="/">Home</NuxtLink>
        <NuxtLink :class="{ 'btn-primary active': $route.path === '/about' }" class="btn btn-primary rounded-full" to="/about">About
        </NuxtLink>
        <NuxtLink :class="{ 'btn-primary active': $route.path === '/projects' }" class="btn btn-primary rounded-full" to="/projects">
          Projects</NuxtLink>
        <!-- <NuxtLink :class="{'btn-primary active': $route.path === '/photodump'}" class="btn btn-primary" to="/photodump">Photos</NuxtLink> -->
      </div>
      <div @click="toggleMenu" class="menuMobile flex justify-center items-center btn btn-primary p-2 rounded-full md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div @click="togglePop" class="menuMobile flex justify-center items-center btn btn-primary p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
        </svg>
      </div>
    </div>
  </nav>
  <MenuModal v-show="showMenuModal" />
  <div v-if="showPop" @click="handleClick" class="fixed top-0 left-0 z-0 w-screen h-screen"></div>
  <div v-show="showPop"
    class="fixed top-20 md:top-8 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] h-fit max-w-[400px] updates">
    <div class="p-5">
      <h2 class="text-md mb-4">Updates</h2>
    <ul class="list-decimal list-outside ps-5 flex flex-col gap-2">
      <!-- <li class="text-sm">
        <NuxtLink to="/guestbook">Guestbook</NuxtLink> is here, sign it now
      </li> -->
      <li class="text-sm">Added <a @click="setTheme('matrix')"
          class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal">matrix</a> theme</li>
      <li class="text-sm">Projects page is live, checkout my recent <NuxtLink
          class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal" @click="handleClick"
          to="/projects">projects</NuxtLink>
      </li>
      <li class="text-sm">
        <NuxtLink class="underline underline-offset-2 text-gray-800 dark:text-gray-100 font-normal" @click="handleClick"
          to="/blog">Blog</NuxtLink> is under construction
      </li>
    </ul>
    </div>
    <div class="p-3 border-t matrix:border-t-2 border-gray-900/10 dark:border-gray-300/10">
      <DarkModeToggle />
    </div>
  </div>
</template>