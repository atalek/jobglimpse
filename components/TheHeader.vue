<script lang="ts" setup></script>

<template>
  <header class="max-w-7xl mx-auto px-3 py-1">
    <nav class="flex flex-row items-center justify-between mx-auto">
      <NuxtLink
        to="/"
        class="flex text-5xl md:text-4xl font-bold"
        >JobGlimpse</NuxtLink
      >
      <div class="flex flex-row items-center gap-4">
        <ThemeToggler />
        <NuxtLink
          href="/create"
          class="font-inter rounded-lg hidden md:block bg-black dark:bg-white text-white dark:text-black dark:hover:bg-slate-200 px-8 py-2 text-center hover:bg-gray-800"
          >Post a job</NuxtLink
        >
      </div>
    </nav>
    <GoTopButton />
  </header>
</template>
