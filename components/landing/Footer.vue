<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer class="p-4 md:p-8 lg:p-10">
    <div class="mx-auto max-w-screen-xl text-center">
      <a
        href="/#hero"
        class="flex justify-center items-center text-3xl font-semibold">
        JobGlimpse
      </a>

      <ul class="flex flex-wrap justify-center items-center mb-6 my-8">
        <li>
          <a
            href="/#features"
            class="mr-4 hover:underline md:mr-6"
            >Features</a
          >
        </li>
        <li>
          <a
            href="/#pricing"
            class="mr-4 hover:underline md:mr-6"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="/#contact"
            class="mr-4 hover:underline md:mr-6"
            >Contact</a
          >
        </li>
        <li>
          <NuxtLink
            href="/jobs"
            class="mr-4 hover:underline md:mr-6"
            >View Jobs</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/create"
            class="mr-4 hover:underline md:mr-6">
            Post a job</NuxtLink
          >
        </li>
      </ul>
      <section>
        <NuxtLink
          to="https://github.com/atalek/jobglimpse"
          target="_blank"
          class="md:text-lg flex items-center justify-center dark:hover:text-slate-400 hover:text-slate-600"
          >© {{ currentYear }} JobGlimpse - Made by atalek<Icon
            name="fa6-brands:github"
            class="ml-1 size-5"
        /></NuxtLink>
      </section>
    </div>
  </footer>
</template>
