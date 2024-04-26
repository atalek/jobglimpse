<script setup lang="ts">
const isOpen = ref(false)
const menuitems = [
  {
    title: 'Features',
    path: '/#features',
  },
  {
    title: 'Pricing',
    path: '/#pricing',
  },
  {
    title: 'Contact',
    path: '/#contact',
  },
]
</script>
<template>
  <header class="flex flex-col lg:flex-row justify-between items-center my-5">
    <div class="flex w-full lg:w-auto items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center text-5xl md:text-4xl font-bold">
        <span class="font-bold text-slate-800">Job</span>

        <span class="text-slate-500">Glimpse</span></NuxtLink
      >
      <div
        class="block lg:hidden"
        @click="isOpen = !isOpen">
        <Icon
          name="fa6-solid:bars"
          class="size-6 text-gray-800 hover:text-gray-400 cursor-pointer"
          v-if="!isOpen" />

        <Icon
          name="fa6-solid:xmark"
          class="size-6 text-gray-800 hover:text-gray-400 cursor-pointer"
          v-else />
      </div>
    </div>

    <div
      @click="isOpen = !isOpen"
      :class="[
        isOpen ? 'block' : 'hidden',
        'w-full lg:w-auto mt-2 lg:flex lg:mt-0 cursor-pointer',
      ]">
      <ul class="flex flex-col lg:flex-row lg:gap-3">
        <li
          v-for="item in menuitems"
          :key="item.title">
          <NuxtLink
            :to="item.path"
            class="flex lg:px-3 py-2 items-center text-gray-600 hover:text-black text-center">
            <span> {{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden flex items-center mt-3 gap-4">
        <NuxtLink
          class="rounded text-center transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-gray-300 hover:bg-gray-200 border-2 border-transparent"
          href="/jobs"
          >View jobs</NuxtLink
        >
        <NuxtLink
          class="rounded text-center transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
          to="/create"
          >Post a job</NuxtLink
        >
      </div>
    </div>
    <div>
      <div class="hidden lg:flex items-center gap-4 hover:text-gray-600">
        <NuxtLink href="/jobs">View Jobs</NuxtLink>
        <NuxtLink
          class="font-inter rounded-lg hidden md:block bg-black px-8 py-2 text-center text-white hover:bg-gray-800"
          href="/create"
          >Post a job</NuxtLink
        >
      </div>
    </div>
    <GoTopButton />
  </header>
</template>
