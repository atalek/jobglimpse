<script lang="ts" setup></script>

<template>
  <button
    class="rounded text-center transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black dark:bg-slate-600 dark:hover:bg-slate-800 text-white hover:bg-gray-800 border-2 border-transparent flex gap-1 items-center justify-center disabled:bg-slate-500 disabled:cursor-not-allowed w-full">
    <slot />
  </button>
</template>
