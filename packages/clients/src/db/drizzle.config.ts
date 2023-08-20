import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: 'pg',
  out: '../../supabase/migrations',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  }
} satisfies Config;