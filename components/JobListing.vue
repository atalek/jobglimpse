<script lang="ts" setup>
import moment from 'moment'

import type { JobListingType } from '~/data/types'

defineProps({
  jobListing: {
    type: Object as PropType<JobListingType>,
    required: true,
  },
})

const emits = defineEmits()

function calculateTimeDifference(createdAt: string) {
  const difference = moment(createdAt).diff(moment())

  const days = Math.floor(Math.abs(moment.duration(difference).asDays()))
  const hours = Math.floor(Math.abs(moment.duration(difference).asHours()) % 24)

  if (days >= 1) {
    return days === 1 ? '1 day ago' : `${days} days ago`
  } else if (hours >= 1) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`
  } else {
    const minutes = Math.floor(
      Math.abs(moment.duration(difference).asMinutes()) % 60,
    )
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto p-2 border-b-2">
    <div class="w-full flex flex-col md:flex-row justify-between">
      <NuxtLink
        :to="jobListing.url"
        target="_blank"
        class="flex flex-row items-start md:items-center max-w-[550px] w-full">
        <div class="relative flex-shrink-0">
          <NuxtImg
            provider="cloudinary"
            :src="jobListing.logoUrl"
            :alt="`${jobListing.companyName} 'logo'`"
            width="64"
            height="64"
            format="webp"
            class="rounded-lg mt-2 border-2" />

          <Icon
            v-if="jobListing.promoted === 1"
            name="fa6-solid:star"
            class="text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 bg-yellow-400 rounded-md h-6 w-6 p-1" />
        </div>
        <div class="ml-4 flex flex-col max-w-md">
          <h3 class="text-slate-600 text-sm">{{ jobListing.companyName }}</h3>
          <h4 class="font-semibold flex flex-wrap text-center">
            {{ jobListing.title }}
            <span
              v-show="jobListing.promoted === 1"
              class="ml-2 p-0.5 bg-yellow-400 text-center rounded-md">
              Featured</span
            >
          </h4>
          <h5>
            {{ jobListing.location }}
            <span
              v-show="
                jobListing.salaryOptions === 'Exact Rate' && jobListing.salary
              "
              class="font-md font-bold ml-1">
              €{{ jobListing.salary }} / month</span
            >

            <span
              v-show="
                (jobListing.salaryOptions === 'Range' &&
                  jobListing.salaryMin) ||
                jobListing.salaryMax
              "
              class="font-md font-bold ml-1">
              €{{ jobListing.salaryMin }} - {{ jobListing.salaryMax }} /
              {{
                jobListing.salaryPeriod === 'Monthly' ? 'month' : 'hour'
              }}</span
            >
          </h5>
        </div>
      </NuxtLink>

      <div
        class="flex flex-wrap gap-2 items-center justify-center mt-2 md:mt-0 max-w-sm w-full">
        <span
          v-for="tag in jobListing.tags.split(',')"
          :key="tag"
          class="p-1 rounded-md bg-slate-200 cursor-pointer hover:bg-slate-400 flex items-center capitalize"
          @click="emits('tagClicked', tag)">
          {{ tag }}</span
        >
      </div>
      <div
        class="flex items-center text-center justify-center mt-3 md:mt-0 md:w-full md:max-w-[90px]">
        {{ calculateTimeDifference(jobListing.createdAt) }}
      </div>
      <div
        class="flex items-center md:justify-end justify-center mt-2 ml-2 md:mt-0">
        <NuxtLink
          :to="jobListing.url"
          target="_blank"
          class="p-2 rounded-md w-24 text-lg bg-black text-white hover:bg-slate-800 text-center">
          Apply
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
