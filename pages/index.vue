<template>
    <div class="container mx-auto min-h-screen flex flex-col justify-center items-start px-5 pt-24 pb-24">
        <img class="Profile" src="~/assets/img/profile-pic.png" alt="profile-pic">
        <h1 class="mb-8 text-5xl md:text-6xl">
        I'm midlaj
        </h1>
        <div class="flex items-center gap-2 text-md text-gray-500 dark:text-gray-400 mb-6">
            <Icon name="heroicons:map-pin" class="w-4 h-4 text-[var(--accent-color)]" />
            <span>living in kerala, india.</span>
        </div>

        <div class="flex flex-wrap items-center gap-4 mb-10">
            <div class="flex gap-4">
                <a href="mailto:midlaj@tuta.io" target="_blank" class="btn btn-primary">Email Me</a>
                <a href="../midlaj-resume.pdf" target="_blank" class="btn btn-primary">Resume</a>
            </div>
            <div class="h-6 w-[1px] bg-[var(--border-color)] hidden sm:block"></div>
            <div class="flex space-x-2 text-gray-100">
                <a href="https://github.com/whoismidlaj" target="_blank" class="icon-btn flex justify-center items-center">
                    <Icon name="simple-icons:github" class="w-6 h-6" />
                </a>
                <a href="https://pixelfed.social/midlaj" target="_blank" class="icon-btn flex justify-center items-center">
                    <Icon name="simple-icons:pixelfed" class="w-6 h-6" />
                </a>
                <a rel="me" href="https://mastodon.social/@midlaj" target="_blank" class="icon-btn flex justify-center items-center">
                    <Icon name="simple-icons:mastodon" class="w-6 h-6" />
                </a>
                <a href="https://t.me/whatismidlaj" target="_blank" class="icon-btn flex justify-center items-center">
                    <Icon name="simple-icons:telegram" class="w-6 h-6" />
                </a>
            </div>
        </div>

        <div class="mb-10 max-w-xl border-l-2 border-[var(--border-color)] pl-4 ml-2 space-y-3.5">
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <span class="font-serif italic text-[var(--accent-color)] font-semibold text-base mr-1.5">building:</span>websites, web apps, and whatever random ideas pop into my head.
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <span class="font-serif italic text-[var(--accent-color)] font-semibold text-base mr-1.5">focusing:</span>keeping things simple. good design, clean layouts, and making stuff that just works.
            </div>
            <div class="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <span class="font-serif italic text-[var(--accent-color)] font-semibold text-base mr-1.5">exploring:</span>finding ways to make the digital things we use every day feel a bit more warm and human.
            </div>
        </div>

        <div class="py-12 w-full">
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
