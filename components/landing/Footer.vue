<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
<template>
  <footer id="footer">
    <hr class="w-11/12 mx-auto" />
    <section
      class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div class="col-span-full xl:col-span-2">
        <NuxtLink
          href="/#hero"
          class="font-bold text-2xl flex">
          JobGlimpse
        </NuxtLink>
      </div>
      <div class="flex flex-col gap-2">
        <div>
          <a
            href="#features"
            class="opacity-60 hover:opacity-100">
            Features
          </a>
        </div>
        <div>
          <a
            href="#pricing"
            class="opacity-60 hover:opacity-100">
            Pricing
          </a>
        </div>
        <div>
          <a
            href="#contact"
            class="opacity-60 hover:opacity-100">
            Contact
          </a>
        </div>
        <div></div>
      </div>
    </section>
    <section class="container pb-14 text-center">
      <NuxtLink
        to="https://github.com/atalek/jobglimpse"
        target="_blank"
        class="text-slate-800 md:text-lg"
        >© {{ currentYear }} JobGlimpse - Made by atalek<Icon
          name="fa6-brands:github"
          class="ml-1 size-6"
      /></NuxtLink>
    </section>
  </footer>
</template>
