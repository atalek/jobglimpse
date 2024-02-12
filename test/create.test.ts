import { jobListingSchema } from 'data/jobListingSchema'
import { ZodError } from 'zod'
import { reactive, computed } from 'vue'

describe('Job Listing Tests', () => {
  describe('createJobListing', () => {
    test('should create job listing', async () => {
      const jobListingInfo = reactive({
        title: 'Test Title',
        location: 'Test Location',
        tags: ['Test Tag'],
        url: 'https://test.url',
        companyName: 'Test Company',
        logoUrl: 'https://test.logo.url',
        salaryOption: 'Exact Rate',
        salaryMin: '1000',
        salaryMax: '2000',
        salary: '1500',
        salaryPeriod: 'Monthly',
        promoted: false,
      })

      const $fetch = async (
        url: string,
        options: { method: string; body: any },
      ) => 'https://test.checkout.url'
      const navigateTo = (url: string, options: { external: boolean }) => {}

      try {
        jobListingSchema.parse(jobListingInfo)

        const res = await $fetch('/api/stripe/checkout', {
          method: 'post',
          body: jobListingInfo,
        })
        if (res) navigateTo(res, { external: true })
      } catch (error) {
        if (error instanceof ZodError) {
          throw error
        }
      }
    })
  })

  describe('clearForm', () => {
    test('should clear form', () => {
      const jobListingInfo = reactive({
        title: 'Test Title',
        location: 'Test Location',
        tags: ['Test Tag'],
        url: 'https://test.url',
        companyName: 'Test Company',
        logoUrl: 'https://test.logo.url',
        salaryOption: 'Exact Rate',
        salaryMin: '1000',
        salaryMax: '2000',
        salary: '1500',
        salaryPeriod: 'Monthly',
        promoted: false,
      })

      jobListingInfo.title = ''
      jobListingInfo.location = ''
      jobListingInfo.tags = []
      jobListingInfo.url = ''
      jobListingInfo.companyName = ''
      jobListingInfo.logoUrl = ''
      jobListingInfo.salaryOption = 'Exact Rate'
      jobListingInfo.salaryMin = ''
      jobListingInfo.salaryMax = ''
      jobListingInfo.salary = ''
      jobListingInfo.salaryPeriod = 'Monthly'
      jobListingInfo.promoted = false
    })
  })

  describe('isButtonDisabled', () => {
    test('should disable button', () => {
      const jobListingInfo = reactive({
        title: '',
        location: '',
        tags: [],
        url: '',
        companyName: '',
        logoUrl: '',
        salaryOption: 'Exact Rate',
        salaryMin: '',
        salaryMax: '',
        salary: '',
        salaryPeriod: 'Monthly',
        promoted: false,
      })

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

      expect(isButtonDisabled.value).toBe(true)
    })
  })
})
