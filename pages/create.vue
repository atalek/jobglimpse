<script lang="ts" setup>
definePageMeta({
  layout: false,
})
import bgImage from '~/assets/images/bg-photo.webp'

const promoted = ref(false)
const total = ref(5)

watch([promoted], () => {
  total.value = 5 + (promoted.value ? 15 : 0)
})

const isOpen = ref(true)

const salaryOptions = ['Exact Rate', 'Range']
const periodOptions = ['Monthly', 'Hourly']

const jobListingInfo = reactive({
  title: '',
  location: '',
  tags: '',
  url: '',
  companyName: '',
  logoUrl: '',
  salaryOption: salaryOptions[0],
  salaryMin: '',
  salaryMax: '',
  salary: '',
  salaryPeriod: periodOptions[0],
  promoted: promoted.value,
})

async function createJobListing() {
  try {
    const res = await $fetch('/api/v1/create', {
      method: 'POST',
      body: jobListingInfo,
    })
    if (res) {
      console.log('fat')
    }
  } catch (error) {
    console.log(error)
  }
}

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
</script>

<template>
  <main class="xl:grid xl:grid-cols-2">
    <div class="w-full h-screen overflow-y-scroll lg:px-10 px-5">
      <div class="text-3xl ml-5 mt-8">
        <NuxtLink to="/">JobGlimpse</NuxtLink>
      </div>

      <div class="flex mx-auto w-full mt-16 px-8">
        <form
          class="w-full mx-auto max-w-2xl"
          @submit.prevent="createJobListing">
          <h2 class="text-2xl mb-8">Let's get started</h2>
          <div class="flex flex-col gap-2">
            <label for="job-title">Job title</label>
            <input
              id="job-title"
              name="job-title"
              type="text"
              placeholder="Junior Software Engineer"
              v-model="jobListingInfo.title" />
          </div>
          <div>
            <label for="job-location">Job location</label>
            <input
              id="job-location"
              name="job-location"
              type="text"
              class="w-full"
              placeholder="Remote, Office or Hybrid"
              v-model="jobListingInfo.location" />
          </div>
          <div>
            <label for="application-url"
              >URL to Job Description/Application Page</label
            >
            <input
              id="application-url"
              name="application-url"
              type="text"
              placeholder="http://yourcompany.com/careers"
              v-model="jobListingInfo.url" />
          </div>
          <div>
            <label for="tags">Tags (max of five tags)</label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="Javascript,React.js,Vue"
              v-model="jobListingInfo.tags" />
          </div>

          <div>
            <label for="company-name">Company Name</label>
            <input
              id="company-name"
              name="company-name"
              type="text"
              placeholder="My company"
              v-model="jobListingInfo.companyName" />
          </div>

          <div class="flex flex-col md:flex-row gap-4 items-start mb-4">
            <div>
              <label for="company-logo" class="block mb-2">
                Company Logo (130x130 recommended)
              </label>
              <input
                id="company-logo"
                name="company-logo"
                type="file"
                class="file:mr-5 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-gray-500 hover:file:text-white"
                @click.prevent="openUploadWidget"
                style="color: transparent" />
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

          <div class="flex justify-between my-4 px-4">
            <h3 class="text-xl font-semibold mt-2">Salary</h3>
            <button
              type="button"
              class="p-1 bg-gray-200 rounded-lg"
              @click="() => (isOpen = !isOpen)">
              <Icon v-if="isOpen" name="fa-solid:chevron-up" />
              <Icon v-if="!isOpen" name="fa-solid:chevron-down" />
            </button>
          </div>
          <div
            class="flex flex-col gap-2"
            :class="{ block: isOpen, hidden: !isOpen }">
            <label for="salary-options">Rate</label>
            <select
              name="salary-options"
              id="salary-options"
              class="max-w-32 p-2.5"
              v-model="jobListingInfo.salaryOption">
              <option
                id="salary-options"
                v-for="option in salaryOptions"
                :key="option"
                :value="option">
                {{ option }}
              </option>
            </select>

            <div class="flex items-center gap-2 mb-4">
              <div
                class="flex w-full"
                v-show="jobListingInfo.salaryOption === 'Range'">
                <input
                  type="text"
                  placeholder="2000"
                  v-model="jobListingInfo.salaryMin" />
                <span class="flex items-center mx-1">to</span>
                <input
                  type="text"
                  placeholder="5000"
                  v-model="jobListingInfo.salaryMax" />
              </div>

              <div
                class="flex w-full"
                v-show="jobListingInfo.salaryOption === 'Exact Rate'">
                <input
                  type="text"
                  placeholder="2000"
                  v-model="jobListingInfo.salary" />
              </div>
              <div>
                <select
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
          <hr />
          <div class="mt-8">
            <h2 class="text-xl font-semibold my-4">
              Enhance Your Listing. Get More Leads
            </h2>

            <div
              class="flex items-center justify-between p-4 border rounded-md">
              <div class="flex items-center gap-2 mb-1">
                <input type="checkbox" id="promoted" v-model="promoted" />
                <label for="promoted" class=""
                  >Promote your listing to the top of the page for one month to
                  maximize exposure</label
                >
              </div>
              <span>+ €15 </span>
            </div>
          </div>
          <div class="flex justify-end my-4">
            <button
              type="submit"
              class="p-4 bg-black text-white font-bold text-lg rounded-md my-4 hover:bg-slate-700">
              Post Your Job - €{{ total }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="w-full h-screen lg:flex justify-center hidden bg-img"
      :style="{
        background: `url(${bgImage})`,
      }">
      <div class="flex flex-col pb-10 mt-40">
        <h2 class="text-4xl font-bold text-center">
          Connect Directly With Talent.
        </h2>
        <hr class="w-40 my-10 border-2 border-black" />

        <div class="flex items-center mb-2">
          <span class="inline-block w-6 h-6 mr-4 text-blue-500"
            ><IconsRocket
          /></span>
          <p class="text-xl font-bold text-gray-800">
            Simple and Straightforward:
          </p>
        </div>
        <p class="text-xl text-gray-700 mb-16">
          Post your job in minutes, no registration required.
        </p>

        <div class="flex items-center mb-2">
          <span class="inline-block w-6 h-6 mr-4 text-green-500"
            ><IconsHandshake
          /></span>
          <p class="text-xl font-bold text-gray-800">Cost-Effective:</p>
        </div>
        <p class="text-xl text-gray-700 mb-16">
          Reach local talent without breaking the bank.
        </p>

        <h4 class="mt-16 text-2xl underline text-green-600">
          <span class="inline-block w-6 h-6 mr-4 text-green-600"
            ><IconsCheckmark
          /></span>
          Find Your Next Hiring Success.
        </h4>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
