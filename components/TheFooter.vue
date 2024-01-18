<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-2 py-4">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex md:flex-row flex-col items-center md:justify-between p-2">
        <div class="text-lg text-slate-600">© {{ currentYear }} JobGlimpse</div>
        <div class="text-slate-600 md:mt-0 mt-4">github</div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
