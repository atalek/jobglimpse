<script lang="ts" setup>
import type { JobListingType } from '~/data/types'

const {
  data: jobListings,
  isLoading,
  error,
  fetchNextSet,
} = usePagination<JobListingType>('/api/v1/getallposts')

const filteredJobListings = computed(() => {
  if (!searchTerm.value) {
    return jobListings.value
  }

  const searchTermLower = searchTerm.value.toLowerCase()
  return jobListings?.value?.filter(listing => {
    return (
      listing?.title.toLowerCase().includes(searchTermLower) ||
      listing?.companyName.toLowerCase().includes(searchTermLower) ||
      listing?.tags.toLowerCase().includes(searchTermLower) ||
      listing?.location.toLocaleLowerCase().includes(searchTermLower)
    )
  })
})

const searchTerm = ref('')

function tagClicked(value: string) {
  searchTerm.value = value
}
</script>

<template>
  <section class="max-w-2xl px-2 mx-auto my-10">
    <p
      v-if="error"
      class="my-4 text-xl text-center text-red-600">
      {{ error }}
    </p>
    <div class="flex items-center justify-center p-1">
      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 !rounded-l-lg !rounded-r-none !mb-0 focus:outline-none focus:border-slate-400 focus:border-2 focus:ring-slate-400 text-sm block h-[56px]"
        placeholder="Search"
        v-model.lazy="searchTerm"
        required />
      <button
        type="submit"
        class="w-24 p-4 text-sm font-medium bg-black text-white dark:bg-slate-600 dark:hover:bg-slate-800 rounded-r-lg hover:bg-slate-800"
        aria-label="Search">
        <Icon
          name="fa6-solid:magnifying-glass"
          class="w-6 h-6 text-white" />
      </button>
    </div>
  </section>
  <div class="mb-12 md:mb-24" />
  <div
    class="divide-y-2"
    v-if="jobListings && jobListings.length > 0">
    <JobListing
      v-for="jobListing in filteredJobListings"
      :jobListing="jobListing"
      :key="jobListing.id"
      @tagClicked="tagClicked" />
  </div>
  <LoadingSkeleton v-if="isLoading" />
  <Observer @intersect="fetchNextSet" />
</template>
