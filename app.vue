<script setup lang="ts">
useHead({
  title: 'JobGlimpse - Find Your Dream Job, Effortlessly',

  meta: [
    {
      name: 'description',
      content:
        'Unlock your career potential with JobGlimpse. Explore thousands of job opportunities, connect with top employers, and land your dream job with ease.',
    },
    {
      name: 'keywords',
      content:
        'job board, job search, career, employment, hiring, jobs, recruitment, opportunities, work, resume, apply online',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'Your Job Board URL' },
    {
      property: 'og:title',
      content: 'JobGlimpse - Simplifying Your Job Search',
    },
    {
      property: 'og:description',
      content:
        'Find your perfect career match with JobGlimpse. Search, apply, and connect effortlessly.',
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dkofkuquf/image/upload/v1705674628/nuxtshop/essgi1jbnktaro3cifjr.webp',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    { property: 'twitter:url', content: 'Your Job Board URL' },
    {
      property: 'twitter:title',
      content: 'JobGlimpse - Find Your Dream Job, Effortlessly',
    },
    {
      property: 'twitter:description',
      content:
        'Searching for a job? JobGlimpse makes it easy. Explore thousands of listings and connect with employers today.',
    },
    {
      property: 'twitter:image',
      content:
        'https://res.cloudinary.com/dkofkuquf/image/upload/v1705674628/nuxtshop/essgi1jbnktaro3cifjr.webp',
    },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
