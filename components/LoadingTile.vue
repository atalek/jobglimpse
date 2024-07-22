<script lang="ts" setup>
defineProps<{ promoted?: boolean; numberOfPills: number }>()
</script>

<template>
  <div class="max-w-7xl mx-auto px-2 py-4 group hover:bg-slate-100 animate-pulse">
    <div class="w-full flex flex-col md:flex-row justify-between">
      <div class="flex flex-row items-start md:items-center max-w-[400px] w-full">
        <div class="relative flex-shrink-0 rounded-lg mt-2 border-2 size-16 bg-slate-300">
          <Icon
            v-if="promoted"
            name="fa6-solid:star"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 bg-slate-300 rounded-md h-6 w-6 p-1" />
        </div>
        <div class="ml-4 flex flex-col max-w-md gap-1">
          <h3 class="h-4 w-16 bg-slate-300 rounded-md"></h3>
          <div class="flex gap-1 flex-row">
            <h4 class="flex flex-wrap bg-slate-400 rounded-md h-5 w-32"></h4>
            <h5
              v-if="promoted"
              class="flex flex-wrap bg-slate-500 rounded-md h-5 w-24"></h5>
          </div>
          <h5 class="bg-slate-200 rounded-md h-4 w-14"></h5>
        </div>
      </div>

      <div
        class="flex flex-wrap gap-2 items-center justify-center mt-2 md:mt-0 max-w-sm w-full">
        <div
          v-for="(pill, index) in numberOfPills"
          :key="index"
          class="p-1 rounded-md bg-slate-300 flex items-center h-7 w-20"></div>
      </div>
      <div
        class="flex items-center justify-center mt-3 md:mt-0 md:w-full md:max-w-[90px]">
        <span class="h-8 w-24 bg-slate-400 rounded-md"></span>
      </div>
      <div
        class="flex items-center md:justify-end justify-center mt-2 ml-2 md:mt-0 md:invisible md:group-hover:visible">
        <span
          target="_blank"
          class="p-2 rounded-md w-24 h-11 bg-slate-500">
        </span>
      </div>
    </div>
  </div>
</template>
