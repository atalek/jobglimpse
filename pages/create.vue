<script lang="ts" setup>
import { ZodError } from 'zod'
import VueMultiselect from 'vue-multiselect'
import { jobListingSchema } from '~/data/jobListingSchema'
import bgImage from '~/assets/images/bg-photo.webp'
import { tagOptions } from '~/data/tagOptions'
import type { JobListingType } from '~/data/types'
import { useToast } from 'vue-toastification'

useSeoMeta({
  title: 'Create a job post - JobGlimpse',
})
const toast = useToast()
const route = useRoute()

const promoted = ref(false)
const total = ref(5)

watch([promoted], () => {
  total.value = 5 + (promoted.value ? 15 : 0)
  jobListingInfo.promoted = promoted.value
})

const isOpen = ref(true)
const isLoading = ref(false)

const salaryOptions = ['Exact Rate', 'Range']
const periodOptions = ['Monthly', 'Hourly']
const cookie = useCookie<JobListingType | null>('jobListingCookie')

const jobListingInfo = reactive({
  title: cookie?.value?.title || '',
  location: cookie?.value?.location || '',
  tags: cookie?.value?.tags || ([] as string[]),
  url: cookie?.value?.url || '',
  companyName: cookie?.value?.companyName || '',
  logoUrl: cookie?.value?.logoUrl || '',
  salaryOption: cookie?.value?.salaryOptions || salaryOptions[0],
  salaryMin: cookie?.value?.salaryMin || '',
  salaryMax: cookie?.value?.salaryMax || '',
  salary: cookie?.value?.salary || '',
  salaryPeriod: cookie?.value?.salaryPeriod || periodOptions[0],
  promoted: cookie?.value?.promoted || false,
})

const validationErrors = ref<{ [key: string]: string }>({
  title: '',
  location: '',
  tags: '',
  url: '',
  companyName: '',
  logoUrl: '',
  salaryMin: '',
  salaryMax: '',
  salary: '',
})

async function createJobListing() {
  try {
    isLoading.value = true
    jobListingSchema.parse(jobListingInfo)

    const res = await $fetch('/api/stripe/checkout', {
      method: 'post',
      body: jobListingInfo,
    })
    if (res) navigateTo(res, { external: true })
    validationErrors.value = {}
  } catch (error) {
    if (error instanceof ZodError) {
      error.errors.forEach(err => {
        const field = err.path[0]
        const message = err.message
        validationErrors.value[field] = message
      })
    }
  } finally {
    isLoading.value = false
  }
}

function clearForm() {
  jobListingInfo.title = ''
  jobListingInfo.location = ''
  jobListingInfo.tags = []
  jobListingInfo.url = ''
  jobListingInfo.companyName = ''
  jobListingInfo.logoUrl = ''
  jobListingInfo.salaryOption = salaryOptions[0]
  jobListingInfo.salaryMin = ''
  jobListingInfo.salaryMax = ''
  jobListingInfo.salary = ''
  jobListingInfo.salaryPeriod = periodOptions[0]
  jobListingInfo.promoted = false
  cookie.value = null
}

const isButtonDisabled = computed(() => {
  return (
    !jobListingInfo.title ||
    !jobListingInfo.location ||
    !jobListingInfo.url ||
    !jobListingInfo.tags.length ||
    !jobListingInfo.companyName ||
    !jobListingInfo.logoUrl
  )
})

const config = useRuntimeConfig().public

declare global {
  interface Window {
    cloudinary: any
  }
}

let widget: any

if (process.client) {
  widget = window.cloudinary.createUploadWidget(
    {
      cloud_name: config.cloudinaryName,
      upload_preset: config.cloudinaryFolder,
      multiple: false,
      maxFiles: 1,
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
    },
    (error: any, result: { event: string; info: { path: string } }) => {
      if (!error && result && result.event === 'success') {
        const path = result.info.path
        const filename = path.split('/').pop()
        if (filename) {
          jobListingInfo.logoUrl = filename
        }
      }
    },
  )
}

function openUploadWidget() {
  widget.open()
}

if (route.fullPath.includes('?canceled=1')) {
  toast.error('Payment failed 😕')
}
</script>

<template>
  <main
    class="xl:grid xl:grid-cols-2"
    style="grid-template-columns: 0.6fr 0.4fr">
    <section class="w-full h-screen overflow-y-scroll lg:px-10 px-3">
      <div class="text-3xl ml-5 mt-8">
        <NuxtLink to="/">JobGlimpse</NuxtLink>
      </div>
      <div class="flex mx-auto w-full mt-16 px-4">
        <form
          class="w-full mx-auto max-w-2xl"
          @submit.prevent="createJobListing">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl mb-5">Let's get started</h2>
            <button
              :disabled="isLoading"
              @click="clearForm"
              type="button"
              class="p-2 rounded-md w-24 text-lg bg-black text-white hover:bg-slate-800 text-center disabled:bg-slate-500 disabled:cursor-not-allowed">
              Reset
            </button>
          </div>

          <div class="flex flex-col gap-2">
            <label for="job-title"
              >Job title
              <span v-show="!jobListingInfo.title" class="text-red-600">*</span>
            </label>
            <input
              :disabled="isLoading"
              id="job-title"
              name="job-title"
              type="text"
              placeholder="Junior Software Engineer"
              v-model="jobListingInfo.title" />
            <p v-if="validationErrors.title" class="text-red-500">
              {{ validationErrors.title }}
            </p>
          </div>
          <div>
            <label for="job-location"
              >Job location
              <span v-show="!jobListingInfo.location" class="text-red-600"
                >*</span
              ></label
            >
            <input
              :disabled="isLoading"
              id="job-location"
              name="job-location"
              type="text"
              class="w-full"
              placeholder="City and/or Remote, Office or Hybrid"
              v-model="jobListingInfo.location" />
            <p v-if="validationErrors.location" class="text-red-500">
              {{ validationErrors.location }}
            </p>
          </div>
          <div>
            <label for="application-url"
              >URL to Job Description/Application Page
              <span v-show="!jobListingInfo.url" class="text-red-600"
                >*</span
              ></label
            >
            <input
              :disabled="isLoading"
              id="application-url"
              name="application-url"
              type="text"
              placeholder="http://yourcompany.com/careers"
              v-model="jobListingInfo.url" />
            <p v-if="validationErrors.url" class="text-red-500">
              {{ validationErrors.url }}
            </p>
          </div>
          <div>
            <label
              >Add tags
              <span
                v-show="jobListingInfo.tags.length === 0"
                class="text-red-600"
                >*</span
              ></label
            >
            <VueMultiselect
              :disabled="isLoading"
              aria-label="Job listing tags"
              v-model="jobListingInfo.tags"
              :options="tagOptions"
              :multiple="true"
              :taggable="true"
              :allow-empty="true"
              tag-placeholder="Add this as new tag"
              placeholder="Type to search or add tag" />

            <p v-if="validationErrors.tags" class="text-red-500">
              {{ validationErrors.tags }}
            </p>
          </div>

          <div>
            <label for="company-name"
              >Company Name
              <span v-show="!jobListingInfo.companyName" class="text-red-600"
                >*</span
              ></label
            >
            <input
              :disabled="isLoading"
              id="company-name"
              name="company-name"
              type="text"
              placeholder="My company"
              v-model="jobListingInfo.companyName" />
            <p v-if="validationErrors.companyName" class="text-red-500">
              {{ validationErrors.companyName }}
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-4 items-start mb-4">
            <div>
              <label for="company-logo" class="block mb-2">
                Company Logo (130x130 recommended)
                <span v-show="!jobListingInfo.logoUrl" class="text-red-600"
                  >*</span
                >
              </label>
              <input
                :disabled="isLoading"
                id="company-logo"
                name="company-logo"
                type="file"
                class="file:mr-5 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-gray-500 hover:file:text-white"
                @click.prevent="openUploadWidget"
                style="color: transparent" />

              <p v-if="validationErrors.logoUrl" class="text-red-500">
                {{ validationErrors.logoUrl }}
              </p>
            </div>
            <div>
              <NuxtImg
                v-if="jobListingInfo.logoUrl"
                :src="jobListingInfo.logoUrl"
                provider="cloudinary"
                height="130"
                width="130"
                class="rounded-lg" />
            </div>
          </div>

          <input class="hidden" v-model="jobListingInfo.logoUrl" />

          <hr />

          <div class="flex justify-between my-4 pr-4">
            <h3 class="text-xl font-semibold mt-2">Salary</h3>
            <button
              :disabled="isLoading"
              type="button"
              class="p-2 bg-gray-200 rounded-lg disabled:cursor-not-allowed"
              aria-label="Toggle salary options"
              @click="() => (isOpen = !isOpen)">
              <Icon
                name="fa-solid:chevron-down"
                :class="`transition-transform ${isOpen ? 'rotate-180' : ''}`" />
            </button>
          </div>
          <div :class="`${isOpen ? 'block ' : 'hidden'} flex flex-col gap-2 `">
            <label for="salary-options">Rate</label>
            <select
              :disabled="isLoading"
              name="salary-options"
              id="salary-options"
              class="max-w-32 p-2.5"
              v-model="jobListingInfo.salaryOption">
              <option
                v-for="option in salaryOptions"
                :key="option"
                :value="option">
                {{ option }}
              </option>
            </select>
            {{ jobListingInfo.salaryOption }}
            <div class="flex items-center gap-2 mb-4 items-">
              <div
                class="flex w-full"
                v-show="jobListingInfo.salaryOption === 'Range'">
                <input
                  :disabled="isLoading"
                  type="text"
                  placeholder="2000"
                  v-model="jobListingInfo.salaryMin" />
                <span class="flex items-center mx-1">to</span>
                <input
                  :disabled="isLoading"
                  type="text"
                  placeholder="5000"
                  v-model="jobListingInfo.salaryMax" />
              </div>

              <div
                class="flex w-full"
                v-show="jobListingInfo.salaryOption === 'Exact Rate'">
                <input
                  :disabled="isLoading"
                  type="text"
                  placeholder="2000"
                  v-model="jobListingInfo.salary" />
              </div>
              <div class="flex items-center flex-col mb-5">
                <label for="salary-period" class="text-sm">Salary period</label>
                <select
                  :disabled="isLoading"
                  name="salary-period"
                  id="salary-period"
                  class="w-28 p-2.5 text-center"
                  v-model="jobListingInfo.salaryPeriod">
                  <option
                    v-for="option in periodOptions"
                    :key="option"
                    :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <p v-if="validationErrors.salary" class="text-red-500">
            {{ validationErrors.salary }}
          </p>

          <div class="flex items-center gap-4">
            <p v-if="validationErrors.salaryMin" class="text-red-500">
              {{ validationErrors.salaryMin }}
            </p>
            <p v-if="validationErrors.salaryMax" class="text-red-500">
              {{ validationErrors.salaryMax }}
            </p>
          </div>
          <hr />
          <div class="mt-8">
            <h2 class="text-xl font-semibold my-4">
              Enhance Your Listing. Get More Leads
            </h2>

            <div
              class="flex items-center justify-between p-4 border rounded-md"
              :class="{ 'bg-slate-100 border-gray-800': promoted }">
              <div class="flex items-center gap-2 mb-1">
                <input type="checkbox" id="promoted" v-model="promoted" />
                <label for="promoted"
                  >Promote your listing to the top of the page for one month to
                  maximize exposure</label
                >
              </div>
              <span class="whitespace-nowrap">+ €15 </span>
            </div>
          </div>
          <div class="flex justify-end my-4">
            <button
              type="submit"
              class="p-4 bg-black text-white font-bold text-lg rounded-md my-4 hover:bg-slate-700 disabled:bg-slate-500 disabled:cursor-not-allowed"
              :disabled="isButtonDisabled || isLoading">
              Post Your Job - €{{ total }}
            </button>
          </div>
        </form>
      </div>
    </section>
    <section
      class="w-full h-screen lg:flex justify-center hidden bg-img"
      :style="{
        background: `url(${bgImage})`,
      }">
      <div class="flex flex-col pb-10 mt-20">
        <h2 class="text-4xl font-bold text-center">
          Connect Directly With Talent.
        </h2>
        <hr class="w-40 my-10 border-2 border-black" />

        <div class="flex items-center mb-2">
          <span class="inline-block w-6 h-6 mr-4 text-blue-500"
            ><IconsRocket
          /></span>
          <h3 class="text-xl font-bold text-gray-800">
            Simple and Straightforward:
          </h3>
        </div>
        <p class="text-xl text-gray-700 mb-14">
          Post your job in minutes, no registration required.
        </p>

        <div class="flex items-center mb-2">
          <span class="inline-block w-6 h-6 mr-4"><IconsHandshake /></span>
          <h4 class="text-xl font-bold text-gray-800">Cost-Effective:</h4>
        </div>
        <p class="text-xl text-gray-700 mb-14">
          Reach local talent without breaking the bank.
        </p>

        <div class="flex items-center mb-2">
          <span class="inline-block w-6 h-6 mr-4"><IconsStar /></span>
          <h5 class="text-xl font-bold text-gray-800">Amplify Your Reach:</h5>
        </div>
        <p class="text-xl text-gray-700 mb-14">
          Pay a little extra to skyrocket your post to the top for 30 days.
        </p>

        <h6 class="mt-16 text-2xl underline text-green-600">
          <span class="inline-block w-6 h-6 mr-4 text-green-600"
            ><IconsCheckmark
          /></span>

          Find Your Next Hiring Success.
        </h6>
      </div>
    </section>
  </main>
  <TheFooter />
</template>

<style src="vue-multiselect/dist/vue-multiselect.css" />
