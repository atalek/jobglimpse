<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-4 mt-auto border-t-2">
    <div class="mx-auto text-center max-w-7xl">
      <div>
        <NuxtLink
          to="https://github.com/atalek/jobglimpse"
          target="_blank"
          class="mt-8 md:mt-0 md:text-lg"
          >© {{ currentYear }} JobGlimpse - Made by atalek
          <Icon
            name="fa6-brands:github"
            class="ml-1 size-5"
        /></NuxtLink>
      </div>
    </div>
  </footer>
</template>
