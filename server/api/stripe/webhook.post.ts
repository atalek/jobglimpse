import Stripe from 'stripe'
import { db } from '~/server/utils/db'

export default defineEventHandler(async event => {
  const body = await readRawBody(event)

  const stripeSignature = getHeader(event, 'stripe-signature')

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
  })

  if (!body || !stripeSignature) {
    throw createError({
      statusCode: 400,
      message: 'Invalid request body',
    })
  }

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    )

    if (stripeEvent.type === 'checkout.session.completed') {
      const isPaid = stripeEvent?.data?.object?.payment_status === 'paid'

      const jobList = stripeEvent?.data?.object?.metadata?.jobListingInfo

      let jobListingInfo

      if (jobList) {
        jobListingInfo = JSON.parse(jobList)
      }

      if (isPaid && jobListingInfo) {
        await db.insert(tables.jobListing).values({
          title: jobListingInfo.title,
          location: jobListingInfo.location,
          tags: jobListingInfo.tags.join(', '),
          url: jobListingInfo.url,
          companyName: jobListingInfo.companyName,
          logoUrl: jobListingInfo.logoUrl,
          salaryOptions: jobListingInfo.salaryOption
            ? jobListingInfo.salaryOption
            : null,
          salaryMin: jobListingInfo.salaryMin
            ? parseInt(jobListingInfo.salaryMin)
            : null,
          salaryMax: jobListingInfo.salaryMax
            ? parseInt(jobListingInfo.salaryMax)
            : null,
          salary: jobListingInfo.salary
            ? parseInt(jobListingInfo.salary)
            : null,
          salaryPeriod: jobListingInfo.salaryPeriod || null,
          promoted: jobListingInfo.promoted ? 1 : 0,
        })
      }
      return 'ok'
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: 'Invalid request body',
    })
  }
})
