import { z } from 'zod'

export const jobListingSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  location: z.string().min(3, 'Location must be at least 3 characters long'),
  tags: z.array(z.string()).refine(arr => arr.length > 0, {
    message: 'Please select at least one tag',
  }),
  url: z.string().url().min(8, 'Invalid URL format or too short'),
  companyName: z
    .string()
    .min(3, 'Company name must be at least 3 characters long'),
  logoUrl: z.string().min(6, {
    message: 'Please provide a valid image for your company logo',
  }),
  salaryOption: z.enum(['Exact Rate', 'Range']).optional(),
  salaryMin: z
    .string()
    .optional()
    .refine(value => !isNaN(Number(value)), {
      message: 'Minimum salary must be a valid number',
    }),
  salaryMax: z
    .string()
    .optional()
    .refine(value => !isNaN(Number(value)), {
      message: 'Maximum salary must be a valid number',
    }),
  salary: z
    .string()
    .optional()
    .refine(value => !isNaN(Number(value)), {
      message: 'Salary must be a valid number',
    }),
  salaryPeriod: z.optional(z.enum(['Monthly', 'Hourly'])),
  promoted: z.boolean().transform(value => (value ? 1 : 0)),
})
