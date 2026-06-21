<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-start items-start">
        <div class="w-full flex justify-start items-center mb-10">
            <h1 class="text-center">Projects</h1>
        </div>
        <div class="w-full grid grid-cols-1 gap-4 justify-center">
            <WorkCard />
            
            <!-- Placeholder -->
            <div class="WorkCard flex flex-col justify-between">
                <div class="flex flex-col p-5 gap-2">
                    <h3 class="text-xl">Ready to enhance your digital presence?</h3>
                    <p>I specialize in creating responsive, user-friendly websites and web apps, available for hire.</p>
                </div>
                <div class="px-5 py-3 flex justify-end WorkDetails">
                    <!-- <div class="flex items-center gap-4">
                        <div class="technology-icon">
                            <img class="w-7 h-7 bg-gray-300 rounded-full" src="../assets/img/profile-pic.png" alt="" srcset="">
                        </div>
                    </div> -->
                    <div class="flex gap-2">
                        <a href="mailto:midlaj@tuta.io" target="_blank" class="icontext-btn">
                            <span class="hidden md:block">Email</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Placeholder -->
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Projects | Midlaj',
  ogTitle: 'Projects by Midlaj',
  description: 'Explore the portfolio projects, open-source work, and websites created by Midlaj, including ListenLoop and Time Tracker.',
  ogDescription: 'Explore the portfolio projects, open-source work, and websites created by Midlaj, including ListenLoop and Time Tracker.',
})
</script>
