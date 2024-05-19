<script setup lang="ts"></script>
<template>
  <section
    id="hero"
    class="grid lg:grid-cols-2 place-items-center pt-24 pb-8 md:pt-24 md:pb-24">
    <div>
      <h1
        class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        The Simplest Way to Find Top Talent
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-bold">JobGlimpse:</span> Effortless hiring meets top
        talent. Post jobs in minutes, reach a vast pool of qualified candidates,
        and fill vacancies faster.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <NuxtLink
          to="/create"
          class="rounded text-center transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent flex gap-1 items-center justify-center"
          rel="noopener">
          <Icon
            name="fa6-solid:calendar-plus"
            class="text-white size-5 mr-1" />
          Create a job listing
        </NuxtLink>
        <NuxtLink
          size="lg"
          to="/jobs"
          class="rounded text-center transition focus:outline-none focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black flex gap-1 items-center justify-center">
          <Icon
            name="fa6-solid:newspaper"
            class="text-black w-4 h-4 mr-1" />
          View all jobs
        </NuxtLink>
      </div>
    </div>
    <div class="mt-24 lg:mt-0 md:order-1">
      <NuxtImg
        provider="cloudinary"
        src="/ykhz1qagqab070gjxluz.webp"
        alt="job board hero image"
        size="100vw sm:50vw"
        height="440"
        width="620"
        loading="eager" />
    </div>
  </section>
</template>
