<template>
  <div class="theme-switcher-container">
    <!-- Sliding active indicator -->
    <div class="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] active-indicator rounded-full transition-transform duration-300 ease-out"
         :class="colorMode.preference === 'dark' ? 'translate-x-full' : 'translate-x-0'"></div>
    
    <!-- Tab Buttons -->
    <button 
      @click="setTheme('light')"
      class="relative flex-1 py-1.5 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-full transition-colors duration-300 z-10"
      :class="colorMode.preference === 'light' ? 'text-gray-950 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
      </svg>
      Light
    </button>
    <button 
      @click="setTheme('dark')"
      class="relative flex-1 py-1.5 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 rounded-full transition-colors duration-300 z-10"
      :class="colorMode.preference === 'dark' ? 'text-gray-950 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
      </svg>
      Dark
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const setTheme = (theme) => {
    colorMode.preference = theme;
};


</script>

