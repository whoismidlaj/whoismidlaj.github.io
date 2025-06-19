<template>
  <Preloader v-if="isLoading" />
  <div v-else class="min-h-screen">
    <div v-show="colorMode.preference === 'dark'" class="fixed top-0 left-0 -z-10 w-full h-full opacity-30">
      <MatrixRain />
    </div>
    <TopBar/>
    <NuxtPage />
    <Navigation />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
const colorMode = useColorMode();

const isLoading = ref(true);
const useLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};

onMounted(useLoading);
</script>
