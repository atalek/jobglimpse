<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-2 py-4">
    <div class="max-w-7xl mx-auto text-center">
      <div>
        <NuxtLink
          to="https://github.com/atalek/jobglimpse"
          target="_blank"
          class="text-slate-800 md:mt-0 mt-8 md:text-lg"
          >© {{ currentYear }} JobGlimpse - Made by atalek<Icon
            name="fa6-brands:github"
            class="ml-1 size-5"
        /></NuxtLink>
      </div>
    </div>
  </footer>
</template>
