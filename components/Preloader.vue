<template>
    <div class="fixed top-0 left-0 w-screen h-screen preloader">
        <div class="w-full h-full p-10 flex justify-center items-center">
            <div class="text-4xl md:text-6xl">{{ progress }}%</div>
        </div>
    </div>
  </template>
  
  <script setup>
  const progress = ref(0);
  
  const simulateLoading = async () => {
    const increment = 2; // Adjust increment for smoother progress
    const interval = 10; // Adjust interval for desired speed (in milliseconds)
    const minDisplayTime = 500; // Minimum display time (in milliseconds)
  
    let intervalId = setInterval(() => {
      progress.value += increment;
      if (progress.value >= 100) {
        clearInterval(intervalId);
      }
    }, interval);
  
    await new Promise((resolve) => setTimeout(resolve, minDisplayTime)); // Ensure minimum display
  
    clearInterval(intervalId);
    progress.value = 100;
  };
  
  onMounted(async () => {
    await simulateLoading();
  });
  </script>
  