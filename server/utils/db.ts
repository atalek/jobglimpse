import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

export * as tables from '~/server/database/schema'

const client = createClient({
  url: process.env.TURSO_DB_URL as string,
  authToken: process.env.TURSO_DB_TOKEN,
})

export const db = drizzle(client)

// export const useDB = () => {
//   if (!_db) {
//     if (process.env.TURSO_DB_URL && process.env.TURSO_DB_TOKEN) {
//       // Turso in production
//       _db = drizzleLibSQL(
//         createLibSQLClient({
//           url: process.env.TURSO_DB_URL,
//           authToken: process.env.TURSO_DB_TOKEN,
//         }),
//       )
//     }
//   } else {
//     throw new Error('No database configured for production')
//   }
//   return _db
// }
