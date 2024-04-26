<script lang="ts" setup>
import { useToast } from 'vue-toastification'
const toast = useToast()

const jobInfoCookie = useCookie('jobListingCookie')
const route = useRoute()

if (process.client) {
  if (route.fullPath.includes('?success=1')) {
    jobInfoCookie.value = null
    toast.success('Job post created 🥳')
  }
}
</script>

<template>
  <div>
    <HeroSection />
    <PostsSection />
    <TheFooter />
  </div>
</template>
