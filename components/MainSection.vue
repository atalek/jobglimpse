<script lang="ts" setup></script>

<template>
  <div class="max-w-2xl mx-auto my-10 px-2">
    <form class="flex items-center justify-between">
      <label for="simple-search" class="sr-only">Search</label>

      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 !rounded-l-lg !rounded-r-none !mb-0 focus:outline-none focus:border-slate-400 focus:border-2 focus:ring-slate-400 text-sm block w-full pl-10 p-2.5 h-[56px]"
        placeholder="Search"
        required
        style="flex-grow: 1" />
      <button
        type="submit"
        class="p-4 text-sm font-medium text-white rounded-r-lg bg-black hover:bg-slate-800"
        style="flex-shrink: 0">
        <svg
          class="w-12 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </form>
  </div>

  <div class="max-w-7xl mx-auto my-10 p-4">
    <h2 class="text-3xl font-semibold">Latest jobs</h2>
  </div>

  <JobListing />
  <JobListing />
  <JobListing />
  <JobListing />
  <JobListing />
  <JobListing />

  <div class="mb-8 md:mb-16" />
</template>

<style scoped></style>
