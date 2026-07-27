<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-center items-start">
        <div class="w-full flex justify-start items-center mb-10">
            <h1 class="text-center">About</h1>
        </div>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
            I'm Midlaj, a web developer and front-end developer. With a keen eye for design and a passion for coding, I specialize in creating responsive, user-friendly interfaces that pair clean layouts with simple, intuitive interactions.
        </p>

        <div class="flex items-center gap-2 text-md text-gray-500 dark:text-gray-400 mb-6">
            <Icon name="heroicons:map-pin" class="w-4 h-4 text-[var(--accent-color)]" />
            <span>living in kerala, india.</span>
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
        <hr class="divider">
        <h2 class="mb-8">Experience</h2>
        <div class="flex flex-col gap-4 w-full">
            <div class="experience-item">
                <div class="flex flex-col gap-2 justify-center items-start">
                    <h3 class="text-xl">Rexav LLP</h3>
                    <p class="text-sm">Software Engineer</p>
                </div>
                <p class="exp-year">2023 - Present</p>
            </div>
            <div class="experience-item">
                <div class="flex flex-col gap-2 justify-center items-start">
                    <h3 class="text-xl">BlazonWeb</h3>
                    <p class="text-sm">Web Developer</p>
                </div>
                <p class="exp-year">2022 - 2023</p>
            </div>
        </div>
        <hr class="divider">
        <div class="skills w-full">
            <h2 class="mb-4">Tools I Use</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <div class="skill">
                    <Icon name="logos:react" class="w-6 h-6" />
                    <span class="text-sm font-medium">React</span>
                </div>
                <div class="skill">
                    <Icon name="logos:nextjs-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">Next.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:vue" class="w-6 h-6" />
                    <span class="text-sm font-medium">Vue.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:nuxt-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">Nuxt.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:javascript" class="w-6 h-6" />
                    <span class="text-sm font-medium">JavaScript</span>
                </div>
                <div class="skill">
                    <Icon name="logos:nodejs-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">Node.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:python" class="w-6 h-6" />
                    <span class="text-sm font-medium">Python</span>
                </div>
                <div class="skill">
                    <Icon name="simple-icons:fastapi" class="w-6 h-6 text-[#009688]" />
                    <span class="text-sm font-medium">FastAPI</span>
                </div>
                <div class="skill">
                    <Icon name="logos:postgresql" class="w-6 h-6" />
                    <span class="text-sm font-medium">PostgreSQL</span>
                </div>
                <div class="skill">
                    <Icon name="logos:mongodb-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">MongoDB</span>
                </div>
                <div class="skill">
                    <Icon name="logos:docker-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">Docker</span>
                </div>
                <div class="skill">
                    <Icon name="logos:tailwindcss-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">TailwindCSS</span>
                </div>
                <div class="skill">
                    <Icon name="logos:php" class="w-6 h-6" />
                    <span class="text-sm font-medium">PHP</span>
                </div>
                <div class="skill">
                    <Icon name="logos:wordpress-icon" class="w-6 h-6" />
                    <span class="text-sm font-medium">WordPress</span>
                </div>
                <div class="skill">
                    <Icon name="logos:html-5" class="w-6 h-6" />
                    <span class="text-sm font-medium">HTML5</span>
                </div>
                <div class="skill">
                    <Icon name="logos:css-3" class="w-6 h-6" />
                    <span class="text-sm font-medium">CSS3</span>
                </div>
                <div class="skill">
                    <Icon name="logos:figma" class="w-6 h-6" />
                    <span class="text-sm font-medium">Figma</span>
                </div>
                <div class="skill justify-center opacity-60">
                    <span class="text-xs font-semibold uppercase tracking-wider">More to learn</span>
                </div>
            </div>
        </div>
        <hr class="divider">
        <div class="elsewhere w-full">
            <h2 class="mb-6">Elsewhere</h2>
            <div class="border border-[var(--border-color)] rounded-xl overflow-hidden divide-y divide-[var(--border-color)] bg-[var(--card-bg)]">
                <a href="https://github.com/whoismidlaj" target="_blank" class="flex justify-between items-center p-4 hover:bg-[var(--card-details-bg)] transition-colors duration-300 group">
                    <div class="flex items-center gap-3">
                        <Icon name="simple-icons:github" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Github</span>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors font-mono">@whoismidlaj</span>
                </a>
                <a href="https://pixelfed.social/midlaj" target="_blank" class="flex justify-between items-center p-4 hover:bg-[var(--card-details-bg)] transition-colors duration-300 group">
                    <div class="flex items-center gap-3">
                        <Icon name="simple-icons:pixelfed" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Pixelfed</span>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors font-mono">@midlaj</span>
                </a>
                <a href="https://mastodon.social/@midlaj" target="_blank" class="flex justify-between items-center p-4 hover:bg-[var(--card-details-bg)] transition-colors duration-300 group">
                    <div class="flex items-center gap-3">
                        <Icon name="simple-icons:mastodon" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Mastodon</span>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors font-mono">@midlaj</span>
                </a>
                <a href="https://t.me/whatismidlaj" target="_blank" class="flex justify-between items-center p-4 hover:bg-[var(--card-details-bg)] transition-colors duration-300 group">
                    <div class="flex items-center gap-3">
                        <Icon name="simple-icons:telegram" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Telegram</span>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors font-mono">@whatismidlaj</span>
                </a>
                <a href="mailto:midlaj@tuta.io" class="flex justify-between items-center p-4 hover:bg-[var(--card-details-bg)] transition-colors duration-300 group">
                    <div class="flex items-center gap-3">
                        <Icon name="heroicons:envelope" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors" />
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Email Me</span>
                    </div>
                    <span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-[var(--accent-color)] transition-colors font-mono">midlaj@tuta.io</span>
                </a>
            </div>
        </div>
        <hr class="divider">
        <h2 class="mt-4 mb-4">About this site</h2>
        <ul class="credits list-none flex flex-col gap-3 text-[var(--text-muted)] text-xs md:text-sm">
            <li class="flex items-center flex-wrap gap-1.5">
                Design inspired by 
                <a href="https://claude.ai" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-4 h-4 fill-current"><path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"></path></svg> Claude</a>
            </li>
            <li class="flex items-center flex-wrap gap-1.5">
                Powered by 
                <a href="https://nuxt.com" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors"><Icon name="logos:nuxt-icon" class="w-4 h-4" /> Nuxt.js</a> 
                and 
                <a href="https://tailwindcss.com" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors"><Icon name="logos:tailwindcss-icon" class="w-4 h-4" /> TailwindCSS</a>
            </li>
            <li class="flex items-center flex-wrap gap-1.5">
                Hosted with 
                <a href="https://cloud.oracle.com" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors"><Icon name="simple-icons:oracle" class="w-4 h-4 text-red-500" /> Oracle Cloud</a> 
                & managed using 
                <a href="https://dokploy.com" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors">
                    <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/dokploy.svg" alt="Dokploy" class="w-4 h-4 object-contain dark:invert" /> Dokploy</a>
            </li>
            <li class="flex items-center flex-wrap gap-1.5">
                Tracking data using 
                <a href="https://umami.is" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors">
                    <Icon name="simple-icons:umami" class="w-4 h-4" /> Umami</a>, open-source analytics
            </li>
        </ul>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'about / @whoismidlaj',
  ogTitle: 'about / @whoismidlaj',
  description: 'Learn more about Midlaj, a web developer based in Kerala, India, specializing in React, Next.js, Vue, and Nuxt.js.',
  ogDescription: 'Learn more about Midlaj, a web developer based in Kerala, India, specializing in React, Next.js, Vue, and Nuxt.js.',
  ogType: 'profile',
})
</script>