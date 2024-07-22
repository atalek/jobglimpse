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
        <span class="font-bold text-slate-800 dark:text-slate-400">Job</span>

        <span class="text-slate-500 dark:text-slate-200">Glimpse</span></NuxtLink
      >
      <div class="flex lg:hidden flex-row">
        <ThemeToggler />
        <div @click="isOpen = !isOpen">
          <Icon
            name="fa6-solid:bars"
            class="size-6 cursor-pointer"
            v-if="!isOpen" />

          <Icon
            name="fa6-solid:xmark"
            class="size-6 cursor-pointer"
            v-else />
        </div>
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
            class="flex lg:px-3 py-2 items-center hover:text-slate-400 text-center transition">
            <span> {{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden flex items-center mt-3 gap-4">
        <NuxtLink
          to="/jobs"
          class="w-full"
          ><ButtonSecondary>View jobs</ButtonSecondary></NuxtLink
        >

        <NuxtLink
          to="/create"
          class="w-full"
          ><ButtonPrimary>Post a job</ButtonPrimary></NuxtLink
        >
      </div>
    </div>
    <div>
      <div class="hidden lg:flex items-center gap-4">
        <ThemeToggler />
        <NuxtLink
          href="/jobs"
          class="hover:text-slate-400"
          >View Jobs</NuxtLink
        >
        <NuxtLink
          class="font-inter rounded-lg hidden md:block bg-black dark:bg-white text-white dark:text-black dark:hover:bg-slate-200 px-8 py-2 text-center hover:bg-gray-800"
          href="/create"
          >Post a job</NuxtLink
        >
      </div>
    </div>
    <GoTopButton />
  </header>
</template>
