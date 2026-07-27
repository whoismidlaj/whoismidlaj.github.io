<template>
  <div class="container mx-auto pt-32 pb-32 px-5 min-h-screen flex flex-col justify-start items-start">
    <div class="w-full flex justify-start items-center mb-10">
      <h1>Uses</h1>
    </div>
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-12">
      A curated, ever-evolving list of the hardware, software, apps, and everyday tools I rely on to get things done. 
    </p>

    <div class="w-full max-w-4xl">
      <!-- Primary Devices (Grid Layout) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:computer-desktop" class="w-6 h-6 text-[var(--accent-color)]" />
          Primary Devices
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-[var(--border-color)] rounded-2xl p-6 bg-[var(--card-bg)] hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col group">
            <div class="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 relative p-4">
              <img :src="lenovoImg" alt="Lenovo ThinkBook 15" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Lenovo ThinkBook 15</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1 leading-relaxed">Primary workstation laptop. Broken hinge, plus a few vertical lines on the display for extra character. Still works, so it stays.</p>
          </div>
          <div class="border border-[var(--border-color)] rounded-2xl p-6 bg-[var(--card-bg)] hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col group">
            <div class="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 relative p-4">
              <img :src="nothingImg" alt="Nothing Phone (2)" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Nothing Phone (2)</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1 leading-relaxed">Daily driver. Has a broken back glass and ultrawide lens cover, but still works perfectly fine.</p>
          </div>
        </div>
      </section>

      <!-- Audio (Grid Layout) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:speaker-wave" class="w-6 h-6 text-[var(--accent-color)]" />
          Audio
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-[var(--border-color)] rounded-2xl p-6 bg-[var(--card-bg)] hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col group">
            <div class="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 relative p-4">
              <img :src="airpodsImg" alt="Apple AirPods Pro 2" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Apple AirPods Pro 2</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1 leading-relaxed">For on-the-go listening and calls. Unbeatable active noise cancellation and transparency mode.</p>
          </div>
          <div class="border border-[var(--border-color)] rounded-2xl p-6 bg-[var(--card-bg)] hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col group">
            <div class="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 relative p-4">
              <img :src="holaImg" alt="Truthear Hola IEM" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Truthear Hola IEM</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1 leading-relaxed">Wired in-ear monitors for focused desk listening sessions. Fantastic tuning for the price.</p>
          </div>
        </div>
      </section>

      <!-- OS & Development (Vertical List) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:command-line" class="w-6 h-6 text-[var(--accent-color)]" />
          OS & Development
        </h2>
        <div class="border border-[var(--border-color)] rounded-2xl overflow-hidden divide-y divide-[var(--border-color)] bg-[var(--card-bg)]">

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/fedora.svg" alt="Fedora" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Fedora 44 Workstation</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Primary daily driver OS. Stable, bleeding-edge packages, and a pure GNOME desktop experience.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/ubuntu.svg" alt="Ubuntu" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Ubuntu 22 Server</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Powering cloud servers and self-hosted infrastructure. Reliable and heavily supported.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/zed.svg" alt="Zed" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Zed Editor</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">A lightning-fast, collaborative code editor written in Rust. The new go-to for coding.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/antigravity-color.svg" alt="Antigravity" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Antigravity</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">AI pair programming assistant that helps write code and manage projects faster.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Infrastructure & Self-Hosted (Vertical List) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:server-stack" class="w-6 h-6 text-[var(--accent-color)]" />
          Infrastructure & Self-Hosted
        </h2>
        <div class="border border-[var(--border-color)] rounded-2xl overflow-hidden divide-y divide-[var(--border-color)] bg-[var(--card-bg)]">

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/oracle-cloud.svg" alt="Oracle Cloud" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Oracle Cloud</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Used for hosting servers and projects. The Always Free tier is unmatched for personal infrastructure.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/dokploy.svg" alt="Dokploy" class="w-full h-full object-contain dark:invert" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Dokploy</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Preferred PaaS for managing deployments and keeping self-hosted services running smoothly.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/cloudflare.svg" alt="Cloudflare" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Cloudflare</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">DNS, CDN, and security for personal websites. Essential infrastructure layer.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/backblaze.svg" alt="Backblaze" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Backblaze</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">B2 Cloud Storage for backups and Ente Photos data storage.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/umami.svg" alt="Umami" class="w-full h-full object-contain dark:invert [.matrix_&]:invert" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Umami</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Privacy-focused open-source analytics. I use it to track visitors without invading their privacy.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Apps & Security (Vertical List) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:shield-check" class="w-6 h-6 text-[var(--accent-color)]" />
          Apps & Security
        </h2>
        <div class="border border-[var(--border-color)] rounded-2xl overflow-hidden divide-y divide-[var(--border-color)] bg-[var(--card-bg)]">

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/firefox.svg" alt="Firefox" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Firefox</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Browser of choice for privacy, dev tools, and keeping the open web alive.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tuta.svg" alt="Tutanota" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Tutanota (Tuta)</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Privacy-first, encrypted email provider. Primary inbox for personal communications.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/proton-vpn.svg" alt="Proton VPN" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Proton VPN</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Fast, secure, and trustworthy VPN for protecting traffic on public networks.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/bitwarden.svg" alt="Bitwarden" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Bitwarden</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Open-source password manager. Keeps credentials and digital life secure across all devices.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/ente-photos.svg" alt="Ente Photos" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Ente Photos</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">End-to-end encrypted photo backup. A fantastic privacy-friendly alternative to Google Photos.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ente-auth.svg" alt="Ente Auth" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Ente Auth</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">2FA authenticator app. Syncs securely across devices with end-to-end encryption.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <img src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/ublock-origin.svg" alt="uBlock Origin" class="w-full h-full object-contain" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">uBlock Origin</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">The only adblocker I need. A vital extension for navigating the modern web.</p>
            </div>
          </div>

        </div>
      </section>

      <!-- Media & Entertainment (Vertical List)
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:play" class="w-6 h-6 text-[var(--accent-color)]" />
          Media & Entertainment
        </h2>
        <div class="border border-[var(--border-color)] rounded-2xl overflow-hidden divide-y divide-[var(--border-color)] bg-[var(--card-bg)]">

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <Icon name="heroicons:play-circle" class="w-full h-full text-red-500" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">LibreTube</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">An open-source alternative YouTube frontend. Ad-free, privacy-respecting video consumption.</p>
            </div>
          </div>

          <div class="p-4 sm:p-6 hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
            <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex shrink-0 items-center justify-center border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 p-2">
              <Icon name="heroicons:musical-note" class="w-full h-full text-pink-500" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6 flex-1 mt-1 sm:mt-0 sm:items-baseline">
              <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">OpenTune</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Music player of choice. Open-source and gets out of the way.</p>
            </div>
          </div>

        </div>
      </section>
      -->

      <!-- Transportation (Grid Layout) -->
      <section class="mb-16">
        <h2 class="mb-6 flex items-center gap-2">
          <Icon name="heroicons:map" class="w-6 h-6 text-[var(--accent-color)]" />
          Transportation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-[var(--border-color)] rounded-2xl p-6 bg-[var(--card-bg)] hover:bg-[var(--card-details-bg)] transition-colors duration-300 flex flex-col group">
            <div class="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-[var(--accent-color)] transition-colors duration-300 relative p-4">
              <img :src="w175Img" alt="Kawasaki W175" class="w-full h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-color)] transition-colors duration-300">Kawasaki W175</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-1 leading-relaxed">Preferred mode of transportation. A beautiful retro-styled motorcycle that makes every commute enjoyable.</p>
          </div>
        </div>
      </section>

      <hr class="divider">
      <ul class="credits list-none flex flex-col gap-3 text-[var(--text-muted)] text-xs md:text-sm">
        <li class="flex items-center flex-wrap gap-1.5">
          Inspired by similar pages by 
          <a href="https://andersnoren.se/gear/" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors">Anders Norén</a> 
          and 
          <a href="https://daleanthony.com/uses/" target="_blank" class="flex items-center gap-1 hover:text-[var(--text-main)] transition-colors">Dale Anthony</a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import lenovoImg from '~/assets/img/uses/lenovo-thinkbook.png'
import nothingImg from '~/assets/img/uses/nothing2.png'
import airpodsImg from '~/assets/img/uses/aipods2pro.png'
import holaImg from '~/assets/img/uses/truthhearhola.png'
import w175Img from '~/assets/img/uses/w175.png'

useSeoMeta({
  title: 'uses / @whoismidlaj',
  ogTitle: 'uses / @whoismidlaj',
  description: 'A curated list of the hardware, software, and services used daily by Midlaj.',
  ogDescription: 'A curated list of the hardware, software, and services used daily by Midlaj.',
  ogType: 'website',
})
</script>

