<template>
    <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-center items-start">
        <div class="w-full flex justify-start items-center mb-10">
            <h1 class="text-center">About</h1>
        </div>
        <p>
            I'm Midlaj, a web developer and front-end developer from India. With a keen eye for design and a passion for coding, I specialize in creating responsive, user-friendly websites with technologies such as HTML, CSS, Bootstrap, Tailwind CSS, Vue.js, and WordPress. 
        </p>
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="skill">
                    <Icon name="logos:html-5" class="w-8 h-8" />
                    <span>HTML5</span>
                </div>
                <div class="skill">
                    <Icon name="logos:css-3" class="w-8 h-8" />
                    <span>CSS3</span>
                </div>
                <div class="skill">
                    <Icon name="logos:javascript" class="w-8 h-8" />
                    <span>JavaScript</span>
                </div>
                <div class="skill">
                    <Icon name="logos:nuxt-icon" class="w-8 h-8" />
                    <span>Nuxt.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:vue" class="w-8 h-8" />
                    <span>Vue.js</span>
                </div>
                <div class="skill">
                    <Icon name="logos:tailwindcss-icon" class="w-8 h-8" />
                    <span>TailwindCSS</span>
                </div>
                <div class="skill">
                    <Icon name="logos:wordpress-icon" class="w-8 h-8" />
                    <span>WordPress</span>
                </div>
                <div class="skill">
                    <Icon name="logos:php" class="w-8 h-8" />
                    <span>PHP</span>
                </div>
                <div class="skill">
                    <Icon name="logos:figma" class="w-8 h-8" />
                    <span>Figma</span>
                </div>
                <div class="skill justify-end">
                    <span>More to learn</span>
                </div>
            </div>
        </div>
        <hr class="divider">
        <h2 class="mt-4 mb-4">About this site</h2>
        <ul class="credits list-none flex flex-col gap-2">
            <li class="">Hosted on <a href="https://onlyfrens.in">onlyfrens</a></li>
            <li class="flex items-center flex-wrap">Powered by <Icon name="logos:nuxt-icon" class="w-5 h-5 mx-2" /> Nuxt.js and <Icon name="logos:tailwindcss-icon" class="w-5 h-5 mx-2" /> TailwindCSS</li>
        </ul>
    </div>
</template>

<script setup>



</script>