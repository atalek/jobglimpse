<script setup lang="ts">
const colorMode = useColorMode()

const changeColor = () =>
  (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')
</script>

<template>
  <button
    aria-label="Color Mode"
    class="mr-6 md:mr-2"
    @click="changeColor">
    <Icon
      v-show="colorMode.value === 'light'"
      name="heroicons-outline:moon"
      class="text-slate-800 size-7" />
    <Icon
      v-show="colorMode.value === 'dark'"
      name="heroicons-outline:sun"
      class="text-yellow-400 size-7" />
  </button>
</template>
