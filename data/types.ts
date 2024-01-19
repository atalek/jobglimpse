export type JobListingType = {
  title: string
  location: string
  url: string
  companyName: string
  logoUrl: string
  tags: string
  salaryOptions: string | null
  salaryMin: number | null
  salaryMax: number | null
  salary: number | null
  salaryPeriod: string | null
  promoted: number
  createdAt: string
}
