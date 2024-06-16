import { desc } from 'drizzle-orm'
import { db } from '~/server/utils/db'

export default defineEventHandler(async event => {
  try {
    const query = getQuery<{ page: number }>(event)

    const page = Number(query.page) || 1
    const pageSize = 6

    const jobPosts = await db()
      .select()
      .from(tables.jobListing)
      .orderBy(desc(tables.jobListing.promoted), desc(tables.jobListing.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize)

    return jobPosts
  } catch (error) {
    throw error
  }
})
