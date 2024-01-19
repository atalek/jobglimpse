<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-2 py-4">
    <div class="max-w-7xl mx-auto text-center">
      <div>
        <NuxtLink
          to="https://github.com/Amphei/job-board"
          target="_blank"
          class="text-slate-800 md:mt-0 mt-8 text-lg"
          >© {{ currentYear }} JobGlimpse - Made by Amphei<Icon
            name="fa6-brands:github"
            class="ml-1 h-7 w-7"
        /></NuxtLink>
      </div>
    </div>
  </footer>
</template>
