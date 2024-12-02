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
                    <IconHtml :fontControlled="false" />
                    <span>HTML5</span>
                </div>
                <div class="skill">
                    <IconCss :fontControlled="false" />
                    <span>CSS3</span>
                </div>
                <div class="skill">
                    <IconJs :fontControlled="false" />
                    <span>JavaScript</span>
                </div>
                <div class="skill">
                    <IconNuxt :fontControlled="false" />
                    <span>Nuxt.js</span>
                </div>
                <div class="skill">
                    <IconVue :fontControlled="false" />
                    <span>Vue.js</span>
                </div>
                <div class="skill">
                    <IconTailwind class="text-red" :fontControlled="false" />
                    <span>TailwindCSS</span>
                </div>
                <div class="skill">
                    <IconWordpress :fontControlled="false" />
                    <span>WordPress</span>
                </div>
                <div class="skill">
                    <IconPhp :fontControlled="false" />
                    <span>PHP</span>
                </div>
                <div class="skill">
                    <IconFigma :fontControlled="false" />
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
            <li class="flex items-center flex-wrap">Powered by <IconNuxt class="w-5 mx-2" /> Nuxt.js and <IconTailwind class="w-5 mx-2" /> TailwindCSS</li>
        </ul>
    </div>
</template>

<script setup>
import IconHtml from '~/assets/img/skill/html5.svg'
import IconCss from '~/assets/img/skill/css3.svg'
import IconJs from '~/assets/img/skill/javascript.svg'
import IconNuxt from '~/assets/img/skill/nuxtdotjs.svg'
import IconVue from '~/assets/img/skill/vuedotjs.svg'
import IconTailwind from '~/assets/img/skill/tailwindcss.svg'
import IconWordpress from '~/assets/img/skill/wordpress.svg'
import IconPhp from '~/assets/img/skill/php.svg'
import IconFigma from '~/assets/img/skill/figma.svg'
import IconCloudflare from '~/assets/img/icons/cloudflarepages.svg'


</script>