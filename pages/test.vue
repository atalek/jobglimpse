<script></script>

<template>
  <template>
    <div class="max-w-7xl mx-auto p-2 border-b-2">
      <div class="w-full flex flex-col md:flex-row justify-between">
        <div class="flex flex-row items-start md:items-center w-full">
          <div class="relative">
            <img
              src="/bg-photo.webp"
              class="w-16 object-cover"
              style="max-width: 100%; height: 100%" />
            <Icon
              name="fa6-solid:star"
              class="text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 bg-yellow-400 rounded-md h-6 w-6 p-1" />
          </div>
          <div class="ml-4 flex flex-col max-w-md">
            <h3 class="text-slate-600 text-sm">Company name</h3>
            <h4 class="font-semibold flex flex-wrap">
              yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
              yap yap yap yap yap yap yap yap yap yap yap yap
            </h4>
            <h5>Location</h5>
          </div>
        </div>

        <div
          class="flex flex-wrap gap-2 items-center justify-center mt-2 md:mt-0 max-w-sm w-full">
          <span
            class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize">
            tags
          </span>
          <span
            class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize">
            JavaScript
          </span>
          <span
            class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize">
            React
          </span>
          <span
            class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize">
            Java
          </span>
          <span
            class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize">
            Java
          </span>
        </div>

        <div
          class="flex items-center justify-center mt-2 md:mt-0 md:w-full md:max-w-[90px]">
          1 day ago
        </div>

        <div
          class="flex items-center md:justify-end justify-center mt-2 md:mt-0">
          <button
            class="p-2 rounded-md w-24 text-lg bg-black text-white hover:bg-slate-800">
            Apply
          </button>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped></style>
