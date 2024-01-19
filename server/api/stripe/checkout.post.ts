import Stripe from 'stripe'
import { jobListingSchema } from '~/data/jobListingSchema'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const stripe = new Stripe(process.env.STRIPE_SK as string, {
    apiVersion: '2023-10-16',
  })
  const result = await readValidatedBody(event, body =>
    jobListingSchema.safeParse(body),
  )

  if (result.success) {
    const body = result.data

    setCookie(event, 'jobListingCookie', JSON.stringify(body))
  }

  const stripeLineItems = []

  const basePrice = 500

  const finalPrice = body.promoted ? basePrice + 1500 : basePrice

  stripeLineItems.push({
    quantity: 1,
    price_data: {
      currency: 'EUR',
      product_data: {
        name: `Job Listing: ${body.title}`,
      },
      unit_amount: finalPrice,
    },
  })

  const currentDomain = useRuntimeConfig().baseUrl
  const successUrl = `${currentDomain}/?success=1`
  const cancelUrl = `${currentDomain}/create?canceled=1`

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: stripeLineItems,
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      jobListingInfo: JSON.stringify(body),
    },
  })

  return stripeSession.url
})
