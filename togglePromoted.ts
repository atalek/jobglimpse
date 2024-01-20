/* script to remove promoted from posts
run it with bun or change to js to run with node */

import { lt } from 'drizzle-orm'
import { jobListing } from '~/server/database/schema'
import { db, tables } from '~/server/utils/db'

const daysAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 1) // 1 day ago
const daysAgoStr = daysAgo.toISOString().slice(0, 19).replace('T', ' ')

await db()
  .update(tables.jobListing)
  .set({ promoted: 0 })
  .where(lt(jobListing.createdAt, daysAgoStr))
