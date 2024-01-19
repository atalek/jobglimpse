import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const jobListing = sqliteTable('jobListing', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  location: text('location').notNull(),
  tags: text('tags').notNull(),
  url: text('url').notNull(),
  companyName: text('company-name').notNull(),
  logoUrl: text('logo-url').notNull(),
  salaryOptions: text('salary-options'),
  salaryMin: integer('salary-min'),
  salaryMax: integer('salary-max'),
  salary: integer('salary'),
  salaryPeriod: text('salary-period'),
  promoted: integer('promoted').notNull().default(0),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
})
