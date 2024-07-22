<script lang="ts" setup>
import bgImageLight from '~/assets/images/bg-light.jpg'
import bgImageDark from '~/assets/images/bg-dark.webp'

const colorMode = useColorMode()

const backgroundImage = computed(() =>
  colorMode.preference === 'light' ? bgImageLight : bgImageDark,
)
</script>

<template>
  <section
    class="mx-auto px-5 pb-16 md:px-10 bg-img"
    :style="{
      background: `url(${backgroundImage})`,
    }">
    <div class="p-4">
      <TheHeader />
    </div>

    <div class="mx-auto my-8 w-full max-w-3xl text-center md:my-12 lg:my-16">
      <h1 class="mb-4 text-4xl font-bold md:text-7xl">
        Explore Opportunities Simplify Hiring
      </h1>
      <h2 class="mx-auto max-w-lg text-slate-800 dark:text-slate-200 sm:text-xl mb-4">
        JobGlimpse - Where Jobs Meet Simplicity.
      </h2>
      <h2
        class="mx-auto mb-5 max-w-lg text-slate-800 dark:text-slate-200 sm:text-xl md:mb-6 lg:mb-8">
        Post and Find Jobs with Ease.
      </h2>
      <div class="flex items-stretch justify-center">
        <NuxtLink to="/create">
          <ButtonPrimary>Post a job</ButtonPrimary>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
