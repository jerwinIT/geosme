import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      `postgresql://${process.env.DB_USER || "postgres"}:${
        process.env.DB_PASSWORD || "password"
      }@${process.env.DB_HOST || "localhost"}:${
        process.env.DB_PORT || "5432"
      }/${process.env.DB_NAME || "geosme_dev"}`,
  },
  verbose: true,
  strict: true,
} satisfies Config;
