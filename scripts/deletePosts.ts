/* script to remove posts older than certain number of days
run it with bun or change to js to run with node */

import { lt } from 'drizzle-orm'
import { jobListing } from '~/server/database/schema'
import { db, tables } from '~/server/utils/db'

const numberOfDays = 60
const cutoffDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * numberOfDays)
const daysAgoStr = cutoffDate.toISOString().slice(0, 19).replace('T', ' ')

await db().delete(tables.jobListing).where(lt(jobListing.createdAt, daysAgoStr))
