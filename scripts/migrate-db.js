const { testConnection } = require("../lib/db/drizzle");

// Database migration script for GeoSME with Drizzle ORM
async function runMigrations() {
  const isProduction = process.env.NODE_ENV === "production";

  try {
    console.log("🔌 Testing database connection...");

    const isConnected = await testConnection();
    if (!isConnected) {
      throw new Error("Failed to connect to database");
    }

    console.log("🎉 Database connection successful!");
    console.log("\n📊 Migration Information:");
    console.log(
      `   Environment: ${isProduction ? "Production" : "Development"}`
    );
    console.log("   ORM: Drizzle ORM");
    console.log("   Status: Ready to use\n");

    console.log("💡 Next steps:");
    console.log(
      "   1. Install Drizzle dependencies: pnpm add drizzle-orm drizzle-kit"
    );
    console.log("   2. Run migrations: pnpm drizzle-kit push:pg");
    console.log("   3. Generate types: pnpm drizzle-kit generate:pg");
  } catch (error) {
    console.error("❌ Migration failed:", error.message);

    if (error.code === "ENOTFOUND") {
      console.log("\n💡 Troubleshooting tips:");
      console.log("   - Make sure PostgreSQL is running");
      console.log("   - Check your database connection settings");
      console.log("   - Verify your environment variables");
    }

    process.exit(1);
  }
}

// Run the migration
runMigrations().catch(console.error);
