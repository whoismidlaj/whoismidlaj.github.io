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
        <ul class="credits list-none flex flex-col gap-3 text-[var(--text-muted)]">
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559 446" class="w-4 h-4"><path class="fill-current stroke-current" d="M390 56v12c.1 2.3.5 4 1 6a73 73 0 0 0 12 24c2 2.3 5.7 4 7 7 4 3.4 9.6 6.8 14 9 1.7.6 5.7 1.1 7 2 1.9 1.3 2.9 2.3 0 4v1c-.6 1.8-1.9 3.5-3 5q-3 4-7 7c-4.3 3.2-9.5 6.8-15 7h-1q-2 1.6-5 2h-4c-5.2.7-12.9 2.2-18 0h-6c-1.6 0-3-.8-4-1h-3a17 17 0 0 1-6-2h-1c-2.5-.1-4-1.2-6-2l-4-1c-8.4-2-20.3-6.6-27-12h-1c-4.6-1-9.5-4.3-13.7-6.3s-10.5-3-13.3-6.7h-1c-4-1-8.9-3.5-12-6h-1c-6.8-1.6-13.6-6-20-9-6.5-2.8-14.6-5.7-20-10h-1c-7-1.2-15.4-4-22-6h-97c-5.3 4.3-13.7 4.3-18.7 10.3S90.8 101 88 108c-.4 1.5-.8 2.3-1 4-.2 1.6-.8 4-1 5v51c.2 1.2.8 3.2 1 5 .2 2 .5 3.2 1 5a79 79 0 0 0 6 12c.8.7 1.4 2.2 2 3 1.8 2 4.9 3.4 6 6 9.5 8.3 23.5 10.3 33 18h1c5.1 1.2 12 4.8 16 8h1c4 1 8.9 3.5 12 6h1q4.6 1.2 8 4h1c2 .1 2.6 1.3 4 2 1.6.8 2.7.7 4 2h1q2.5.3 4 2h1c3 .7 6.7 2 9 4h1c4.7.8 13.4 3.1 17 6h1c2.5.1 4 1.3 6 2 1.8.4 3 .8 5 1q3 .4 5 1c1.6-.2 2 0 3 1h1q2.5-.5 4 1h1q2.5-.5 4 1h1c2.2-.2 4.5-.3 6 1h1q4-.4 7 1h45c1.2-.2 3.1-1 5-1h6c1.5-.6 2.9-1.3 5-1h1q1.5-1.4 4-1h1q1.5-1.4 4-1h1c2.4-1.3 5-1.6 8-2l5-1c2-.7 3.6-1.6 6-2 4-.7 7.2-1.7 11-3 2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.9-2 6-3q2.9-1.6 6-3a95 95 0 0 0 11-5c4.4-2.8 8.9-6 14-8 0 0 .6.2 1 0 1.8-2.8 7-4.8 10-6 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.3-2 3.8-3.1 6-4 0 0 .6.2 1 0 2-3 7.7-5.6 11-7l5-2c6.3-3.8 11.8-9.6 18-14v-1c0-1.9-.4-4.2 0-6-1-4.5-3.9-5.5-7-8h-1c-1.2 0-2.8-.2-4 0-8.9 1.7-16.5 11.3-25.2 14.8-8.8 3.4-16.9 10.7-25.8 14.2h-1c-10.9 10.6-29.2 16-42.7 23.3S343.7 234.6 328 235h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-1.5 1.3-3.9 1.2-6 1h-1c-1.7 1.3-4.6 1.2-7 1-1 .2-2.4 1-4 1h-5c-6.6 0-13.4.4-20 0-1.9-.1-2.7.3-4-1h-8c-2.8-.2-5.7-1.3-8-2h-2q-5.7.4-10-2h-1q-4.5 0-8-2h-1a10 10 0 0 1-6-2h-1c-5.9-.2-12-3.8-17-6l-4-1c-1.7-.5-2.8-.7-4-2h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-3.5-.8-7.3-2.9-10-5h-1c-1.7 0-2.2-.7-3-2h-1c-11.6-2.7-23.2-11.5-34.2-15.8-11-4.2-25.9-9.2-29.8-21.2h4c16.2 0 32.8-1 49 0 1.7.1 3 .8 4 1 2.1.4 3.4-.5 5 1h1c3.6.1 8.4 1.8 11 4h1a45 45 0 0 1 18 8h1q4.6 1.2 8 4h1c4.2 1 8.3 3.4 12 5q3.4 1.2 7 2c5.7 1.3 13 2.3 18 5h1c3.7-.2 7 1.1 10 2h9c1.6 0 3 .8 4 1h32c2.2-1.6 6-1 9-1h1a63 63 0 0 1 22-4 22 22 0 0 1 8-2c1.7-1.4 3.7-1.6 6-2a81 81 0 0 0 12-3c2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.6-2.2 6-3l3-1c4.1-2.3 8.4-5.2 13-7 0 0 .6.2 1 0 1.5-2.4 6.3-5 9-6 0 0 .6.2 1 0 5.3-8.1 17.6-12.5 24.8-20.2C439.9 144 445 133 452 126v-1a12 12 0 0 1 2-5c2.1-2.2 8.9-1 12-1q2 .2 4 0c1-.2 2.3-1.2 4-1h1q2.1-1.5 5-2h1q2.1-1.9 5-3s.6.2 1 0c9-9.3 18-15.4 23-28 1.1-2.8 3.5-6.4 4-9 .2-1 .2-3 0-4-1.5-6-12.3-2.4-15.7 2.3S484.7 80 479 80h-7c-7.8 4.3-19.3 5.7-23 16a37 37 0 0 0-22-24c-1.5-.5-2.5-.7-4-1-2.1-.5-3.6-.2-5-2h-1a22 22 0 0 1-12-8c-2-2.9-3.4-6.5-6-9h-1c-3.9-.6-6.1 1-8 4m-181 45h1c2.2-.2 4.5-.3 6 1h1q2.5-.5 4 1h1a33 33 0 0 1 17 7h1c4.4 1 8.2 4.1 12 6 2.1 1 4.1 1.5 6 3h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1a61 61 0 0 1 21 10h1c3.5.8 7.3 2.9 10 5h1c6.1 1.4 12.3 5 18 7 1.8.4 3 .8 5 1 1.8.2 3.7.8 5 1q2.5-.5 4 1h6c2.5 0 4 .3 6 1h3q-.7 2.1-3 2a46 46 0 0 1-16 7l-10 3c-2 .8-3.4 1.9-6 2h-1c-2.6 2.1-7.5 3-11 3h-1c-3.1 2.5-10.7 3.5-15 3h-1c-1.5 1.3-3.9 1.2-6 1-1 .2-2.4 1-4 1h-11c-3.8.4-8.3.4-12 0h-9c-2.3 0-4.3-.7-6-1h-3c-1.8 0-2.9-.7-4-1-3.5-.8-7-.7-10-2h-1c-4.1-.7-9.8-1.4-13-4h-1q-4-.6-7-3h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-7.2-1.7-13.3-5.9-20.2-8.8-7-2.8-16.2-4.3-22.8-7.2h-11c-14 0-28.9.3-42-1-2.3 0-4.8.3-7 0a6 6 0 0 1-5-5c-1.8-4.8-.4-10.4 0-15 0-4.3-.4-8.7 0-13 .2-3.2 2.2-7.3 4-10q2-3 5-5c2.1-2 5.4-2.3 8-3 15.6-3.9 36.3-1 53-1 5.2 0 12-.5 17 0s12.2-1.8 16 1Z"></path><path class="fill-current stroke-current" d="M162 132v1c1.8 2.9 4.5 5.3 8 6 .3-.2 3.7-.2 4 0 7-1.4 9.2-8.8 7-15v-1a14 14 0 0 0-7-4c-.3.2-3.7.2-4 0-6.5 1.3-8.6 6.8-8 13Z"></path><path class="fill-current stroke-current" d="M465 211h-1c-18.2 14.6-41.2 24.6-60 39-19 14.2-42.7 29.3-66 34l-4 1c-2.4 1-4 2-7 2h-1q-3.5 2-8 2h-1c-1.3 1.2-3 1.1-5 1h-2q-2.6 1.1-6 1h-2c-3 1.2-6.5 1-10 1-6.3.6-13.8.6-20 0-3.4 0-8.4.9-11-1h-1c-2.2.2-4.5.3-6-1h-1c-2 .2-3.7.2-5-1h-1c-7.6.5-16.5-3.4-23-6l-4-1a129 129 0 0 1-36.2-15.8c-10.4-6.6-23.2-12.8-32.5-20.5-9.2-7.7-23.8-12.8-30.3-22.7h-1c-2.3-1.4-4.5-2.7-6-5h-1c-4-2.5-8.5-5.2-12-8h-9a9 9 0 0 0-6 7c.3 3.3 0 6.7 0 10v9c.2 1.6 1 3.8 1 6v3c.2 1 1.2 2.2 1 4v1c1.2 1.2.8 2.2 1 4 .8 6.7 3 12.6 5 19 1.7 4.3 4.2 9.1 5 14v1q1.8 1.5 2 4v1a36 36 0 0 1 5 10c.7 2 1 3 2 5 8 12.7 15.7 25.5 25.8 37.3 10 11.7 20.8 20.6 32.4 30.4 11.7 9.9 28.3 14 39.8 23.3h1q2.5.3 4 2h1c2.8.4 4.8 2 7 3l7 2c5.7 1.3 13 2.3 18 5h1c2.1-.3 3.6.8 5 1h3c2.8.2 5.8 1 8 2h8c2.1 0 4.6.8 6 1h21c1.2-.2 3.2-1 5-1h9c3.3-1 7-2.4 11-2h1c2.7-2.2 7.4-2.4 11-3a55 55 0 0 0 8-2c6.5-2.6 13.9-6.3 21-8h1c8.5-6.8 20.6-9.7 29.2-16.8 8.7-7 18.3-12.8 26.8-20.2 4.4-3.8 9-9 13-13 14.8-14.8 20.7-34.6 33-50v-1q.9-3.4 3-6v-1q.3-2.5 2-4v-1c.5-3.3 2-8.6 4-11v-1q0-3.5 2-6v-1c1.1-6.7 2.4-15 5-21v-1c-.2-2-.2-3.7 1-5v-8c0-5.3-.5-10.8 0-16a14 14 0 0 0-4-6c-1-.5-1.1-.4-2-1h-6q-2.1 1.5-5 2m-6 38c-2.1 13.4-21.2 20.3-31 30-10 9.5-23.7 19-35 27-11.5 8-25.1 19.7-39 23h-1a22 22 0 0 1-10 4h-1a25 25 0 0 1-12 4h-1q-3.5 2-8 2h-1c-1.1 1.1-2.3 1-4 1h-2c-1.2.4-2.2 1-4 1h-2c-1.8.7-3.6 1.3-6 1h-1c-1.2 1.2-2.3 1-4 1h-5c-5.7.6-12.3.8-18 0h-4c-1.9 0-2.7-.6-4-1h-6c-1.9 0-2.7.3-4-1h-1q-2.5.5-4-1h-1c-8.1.5-16.8-3.6-24.2-5.8S210 329.8 204 325h-1c-12.8-5-27.1-15.6-37.7-24.3S138.8 284.2 131 273c-.3-.2-1 0-1 0-5.7-4.4-16.6-10-19-17-.9-2.6-1-5.4-2-8-.8-2.2-2.5-5-2-8a667 667 0 0 0 88 56h1q3.4.9 6 3h1c2.8.4 4.8 2 7 3q5 1.8 10 3l6 2q2.9.6 6 1 3 .4 5 1c1.6-.2 2 0 3 1h1c2-.2 3.7-.2 5 1h1c2.2-.3 3.4.4 5 1h8c1.6 0 3 .9 4 1h40c1.8-1.3 4.6-1.2 7-1h1c1.2-1.2 3.2-1.2 5-1h1c1.2-1.2 3.2-1.2 5-1h1c1.1-1.1 2.3-1 4-1h2c3.5-1.7 6.9-2.3 11-3l4-1c3.4-1.4 7.1-3 11-4 1.5-.4 2.5-.5 4-1 1.4-.7 2-1.9 4-2h1q2.6-2.1 6-3h1c2.5-2 6-3.8 9-5l3-1c1.4-.9 2-2.5 4-3h1q1.4-2.2 4-3h1c7.3-7.7 19-13.2 27.7-19.3 8.8-6.1 18.2-15 28.3-18.7.4-.2 1 0 1 0q3.8-3.9 9-6c1.3 2.5-.5 6.7-1 10m-20 55c-.2.4 0 1 0 1-3.4 9.6-12.7 19-19 27a88 88 0 0 1-12 12 214 214 0 0 1-26.7 20.3c-9.5 5.8-20 14.8-31.3 16.7h-1a22 22 0 0 1-10 4h-1c-3.2 2.6-8.9 3.3-13 4h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-4.9 2.3-10.5 1-16 2-1 .2-2.5 1-4 1-6.2.4-12.8.3-19 0-1.8 0-3.8-.8-5-1h-4c-1.6 0-3-.9-4-1h-4c-3.9-.3-8.8-1.3-12-3h-1c-3.3-.5-7.5-1-10-3h-1c-3.6-.1-8.4-1.8-11-4h-1c-3.9-.6-8-2.6-11-5h-1c-16.1-3.8-32.2-18.9-45-29a200 200 0 0 1-40-51c17.7 11.5 35 25.5 52 38h1c4 1.6 12.8 5.4 15 9h1c4.6 1 10.4 4.1 14 7h1q2.5.3 4 2h1c3.3.5 8.6 2 11 4h1q3.5 0 6 2h1q2.5-.5 4 1h1q2.5-.5 4 1h1c3.8-.2 7.9 1 11 2h9c1.6 0 3 .8 4 1h32c1.2-.2 3.2-1 5-1h8a139 139 0 0 1 20-4l5-1c2-.7 3.7-1.5 6-2l4-1c1.5-.6 3-1.7 5-2h1q3-2.4 7-3h1q2.6-2.1 6-3h1c11.7-9.4 27.6-14.6 39-25 11.6-10.3 25-18.5 37-28a15 15 0 0 1-5 10Z"></path></svg> Dokploy</a>
            </li>
            <li class="flex items-center flex-wrap gap-1.5">
                Tracking data using 
                <a href="https://ackee.electerious.com" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors">
                    <span class="w-4 h-4 rounded-full" style="background: linear-gradient(135deg, #73fac8, #00bee1);"></span> Ackee
                </a>, open-source analytics
            </li>
        </ul>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Midlaj | Web Developer',
  ogTitle: 'About Midlaj | Web Developer',
  description: 'Learn more about Midlaj, a web developer based in Kerala, India, specializing in React, Next.js, Vue, and Nuxt.js.',
  ogDescription: 'Learn more about Midlaj, a web developer based in Kerala, India, specializing in React, Next.js, Vue, and Nuxt.js.',
  ogType: 'profile',
})
</script>