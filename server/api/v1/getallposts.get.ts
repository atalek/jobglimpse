import { desc } from 'drizzle-orm'
import { db } from '~/server/utils/db'

export default defineEventHandler(async event => {
  try {
    const jobPosts = await db()
      .select()
      .from(tables.jobListing)
      .orderBy(
        desc(tables.jobListing.promoted),
        desc(tables.jobListing.createdAt),
      )

    return jobPosts
  } catch (error) {
    throw error
  }
})
