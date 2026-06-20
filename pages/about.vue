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
        <ul class="credits list-none flex flex-col gap-2">
            <li class="">Hosted on <a href="https://onlyfrens.in" target="_blank" class="underline underline-offset-2 text-[var(--accent-color)] hover:opacity-80 transition-opacity">onlyfrens</a> using <a href="https://dokploy.com" target="_blank" class="underline underline-offset-2 text-[var(--accent-color)] hover:opacity-80 transition-opacity">Dokploy</a></li>
            <li class="flex items-center flex-wrap">Powered by <Icon name="logos:nuxt-icon" class="w-5 h-5 mx-2" /> Nuxt.js and <Icon name="logos:tailwindcss-icon" class="w-5 h-5 mx-2" /> TailwindCSS</li>
            <li class="">Design inspired by <a href="https://claude.ai" target="_blank" class="underline underline-offset-2 text-[var(--accent-color)] hover:opacity-80 transition-opacity">Claude</a></li>
        </ul>
    </div>
</template>

<script setup>



</script>