<template>
  <div class="container mx-auto pt-32 pb-32 px-5 flex flex-col items-center gap-6">

    <!-- Header -->
    <div class="w-full flex justify-start items-center">
      <div>
        <h1>Homelab</h1>
      </div>
    </div>

    <!-- ── The Stack ──────────────────────────────────────────────────── -->
    <div class="w-full">
      <h2 class="mb-3">The Stack</h2>
      <p class="leading-relaxed mb-6">
        onlyfrens is my personal server — a little oracle cloud machine quietly running this portfolio and a handful of self-hosted apps. i'm into the self-hosted way of things, owning my data and not depending on someone else's computer more than i have to.
      </p>

      <!-- Hosting -->
      <div class="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">hosting</div>
      <div class="border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--card-bg)] mb-6">

        <!-- Server name header -->
        <div class="px-5 py-3 border-b border-[var(--border-color)] flex items-center justify-between">
          <span class="font-mono font-semibold text-base">onlyfrens</span>
          <span class="font-mono text-[9px] tracking-widest uppercase text-gray-400 dark:text-gray-500">onlyfrens.in</span>
        </div>

        <!-- Instance specs row — explicit border-r to avoid divide doubling -->
        <div class="flex border-b border-[var(--border-color)]">
          <div class="flex flex-col gap-1 px-5 py-4 flex-1 border-r border-[var(--border-color)]">
            <span class="font-mono text-[8px] tracking-widest uppercase text-gray-400 dark:text-gray-500">CPU</span>
            <span class="font-mono text-lg font-semibold">4 <span class="text-sm font-normal text-gray-500">OCPU</span></span>
          </div>
          <div class="flex flex-col gap-1 px-5 py-4 flex-1 border-r border-[var(--border-color)]">
            <span class="font-mono text-[8px] tracking-widest uppercase text-gray-400 dark:text-gray-500">RAM</span>
            <span class="font-mono text-lg font-semibold">24 <span class="text-sm font-normal text-gray-500">GB</span></span>
          </div>
          <div class="flex flex-col gap-1 px-5 py-4 flex-1">
            <span class="font-mono text-[8px] tracking-widest uppercase text-gray-400 dark:text-gray-500">tier</span>
            <span class="font-mono text-lg font-semibold text-green-500">free</span>
          </div>
        </div>

        <!-- Tech logos row -->
        <div>
          <a href="https://cloud.oracle.com" target="_blank" class="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] hover:bg-[var(--card-details-bg)] transition-colors duration-200 group">
            <div class="flex items-center gap-3">
              <Icon name="simple-icons:oracle" class="w-5 h-5 text-red-500" />
              <span class="text-sm font-medium">Oracle Cloud</span>
            </div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-[var(--accent-color)] transition-colors">Always Free Tier</span>
          </a>
          <a href="https://ubuntu.com" target="_blank" class="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border-color)] hover:bg-[var(--card-details-bg)] transition-colors duration-200 group">
            <div class="flex items-center gap-3">
              <Icon name="logos:ubuntu" class="w-5 h-5" />
              <span class="text-sm font-medium">Ubuntu</span>
            </div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-[var(--accent-color)] transition-colors">24.04 LTS</span>
          </a>
          <a href="https://dokploy.com" target="_blank" class="flex items-center justify-between px-5 py-3.5 hover:bg-[var(--card-details-bg)] transition-colors duration-200 group">
            <div class="flex items-center gap-3">
              <Icon name="heroicons:squares-2x2" class="w-5 h-5 text-blue-500" />
              <span class="text-sm font-medium">Dokploy</span>
            </div>
            <span class="text-xs font-mono text-gray-400 dark:text-gray-500 group-hover:text-[var(--accent-color)] transition-colors">self-hosted PaaS</span>
          </a>
        </div>
      </div>

      <!-- Apps -->
      <div class="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">running apps</div>
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="border border-[var(--border-color)] rounded-lg p-4 bg-[var(--card-bg)] flex flex-col items-center gap-2 text-center">
          <Icon name="logos:nuxt-icon" class="w-7 h-7" />
          <span class="text-xs font-medium">this portfolio</span>
          <span class="text-[10px] font-mono text-gray-400 dark:text-gray-500">nuxt.js</span>
        </div>
        <a href="https://ente.io" target="_blank" class="border border-[var(--border-color)] rounded-lg p-4 bg-[var(--card-bg)] flex flex-col items-center gap-2 text-center hover:border-[var(--accent-color)] hover:bg-[var(--card-details-bg)] transition-all duration-200">
          <Icon name="simple-icons:ente" class="w-7 h-7 text-[#4CAF50]" />
          <span class="text-xs font-medium">ente photos</span>
          <span class="text-[10px] font-mono text-gray-400 dark:text-gray-500">self-hosted</span>
        </a>
        <div class="border border-[var(--border-color)] rounded-lg p-4 bg-[var(--card-bg)] flex flex-col items-center gap-2 text-center">
          <Icon name="heroicons:wrench-screwdriver" class="w-7 h-7 text-gray-400" />
          <span class="text-xs font-medium">personal tools</span>
          <span class="text-[10px] font-mono text-gray-400 dark:text-gray-500">& experiments</span>
        </div>
      </div>

      <!-- Backups -->
      <div class="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">backups</div>
      <div class="border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] p-5 flex items-start gap-4">
        <Icon name="heroicons:cloud-arrow-up" class="w-6 h-6 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
        <p class="leading-relaxed">
          because oracle is famous for randomly deleting free-tier accounts, everything is
          <span class="font-medium">automatically backed up daily</span>
          to an offsite location — so the whole setup can migrate in minutes if it gets nuked.
        </p>      </div>
    </div>

    <hr class="divider w-full">

    <!-- Footer -->
    <NuxtLink
      to="/about"
      class="text-sm font-mono text-[var(--accent-color)] underline underline-offset-4 hover:opacity-70 transition-opacity"
    >
      ← back to about
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'homelab / @whoismidlaj',
  ogTitle: 'homelab / @whoismidlaj',
  description:
    'Homelab overview and stack details for onlyfrens.in.',
})
</script>

<style scoped>
</style>
