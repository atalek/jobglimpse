<script lang="ts" setup></script>

<template>
  <header class="max-w-7xl mx-auto">
    <nav
      class="flex flex-col md:flex-row items-center justify-between mx-auto px-2">
      <NuxtLink to="/" class="flex text-5xl md:text-4xl font-bold mb-8 md:mb-0"
        >JobGlimpse</NuxtLink
      >
      <NuxtLink
        to="/create"
        class="font-inter rounded-lg hidden md:block bg-black px-8 py-2 text-center text-white hover:bg-gray-800"
        >Post a job</NuxtLink
      >
    </nav>
  </header>
</template>

<style scoped></style>
