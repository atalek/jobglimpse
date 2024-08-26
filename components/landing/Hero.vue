<script setup lang="ts"></script>
<template>
  <section
    id="hero"
    class="grid lg:grid-cols-2 place-items-center pt-24 pb-8 md:pt-24 md:pb-24 gap-8">
    <div>
      <h1
        class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        The Simplest Way to Find Top Talent
      </h1>
      <p class="text-lg mt-4 dark:text-slate-300 max-w-xl">
        <span class="font-bold">JobGlimpse:</span> Effortless hiring meets top talent.
        Post jobs in minutes, reach a vast pool of qualified candidates, and fill
        vacancies faster.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <NuxtLink
          to="/create"
          class="w-full">
          <ButtonPrimary>
            <Icon
              name="fa6-solid:calendar-plus"
              class="text-white size-5 mr-1" />
            Create a job listing
          </ButtonPrimary>
        </NuxtLink>

        <NuxtLink
          to="/jobs"
          class="w-full">
          <ButtonSecondary>
            <Icon
              name="fa6-solid:newspaper"
              class="text-black w-4 h-4 mr-1" />
            View all jobs
          </ButtonSecondary>
        </NuxtLink>
      </div>
    </div>
    <div class="mt-24 lg:mt-0 md:order-1">
      <NuxtImg
        provider="cloudinary"
        src="ykhz1qagqab070gjxluz.webp"
        alt="job board hero image"
        sizes="sm:355px md:480px lg:640px"
        width="640"
        height="480"
        densities="1x 2x"
        fetchpriority="high" />
    </div>
  </section>
</template>
