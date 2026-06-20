<template>
    <div class="container mx-auto min-h-screen flex flex-col justify-center items-start px-5 pt-24 pb-24">
        <img v-show="colorMode.preference !== 'matrix'" class="Profile" src="~/assets/img/profile-pic.png" alt="profile-pic">
        <img v-show="colorMode.preference === 'matrix'" class="Profile" src="~/assets/img/profile-pic-black.png" alt="profile-pic">
        <h1 class="mb-8 text-5xl md:text-6xl">
        I'm midlaj
        </h1>
        <p class="mb-10">
            Web developer and Front-end developer from India. With a keen eye for design and a passion for coding.
        </p>
        <div class="flex space-x-2 justify-center text-gray-100">
        <a href="https://github.com/whoismidlaj" target="_blank" class="icon-btn flex justify-center items-center">
            <Icon name="simple-icons:github" class="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/whoismidlaj/" target="_blank" class="icon-btn flex justify-center items-center">
            <Icon name="simple-icons:instagram" class="w-6 h-6" />
        </a>
        <a rel="me" href="https://mastodon.social/@midlaj" target="_blank" class="icon-btn flex justify-center items-center">
            <Icon name="simple-icons:mastodon" class="w-6 h-6" />
        </a>
        <a href="https://t.me/whatismidlaj" target="_blank" class="icon-btn flex justify-center items-center">
            <Icon name="simple-icons:telegram" class="w-6 h-6" />
        </a>
        </div>
        <div class="flex gap-4">
            <a href="mailto:midlaj@tuta.io" target="_blank" class="btn btn-primary mt-8">Email Me</a>
            <a href="../midlaj-resume.pdf" target="_blank" class="btn btn-primary mt-8">Resume</a>
        </div>
        <div class="py-12">
            <div class="mb-6 flex justify-between">
                <h2>Projects</h2>
                <NuxtLink to="/projects" class="">View All</NuxtLink>
            </div>
            <div class="flex flex-col gap-4">
                <WorkCard :limit="2" />
            </div>
        </div>
    <!-- <VisitorsCounter /> -->
    </div>
</template>

<script setup>


const colorMode = useColorMode();
</script>