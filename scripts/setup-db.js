const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

// Database setup script for GeoSME
async function setupDatabase() {
  const isProduction = process.env.NODE_ENV === "production";

  // Database configuration
  const config = isProduction
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "5432"),
        database: process.env.DB_NAME || "geosme_dev",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "password",
        ssl: false,
      };

  const pool = new Pool(config);

  try {
    console.log("🔌 Connecting to PostgreSQL database...");

    // Test connection
    const client = await pool.connect();
    console.log("✅ Connected successfully");

    // Read and execute schema
    const schemaPath = path.join(__dirname, "../lib/db/schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");

    console.log("📋 Running database schema...");
    await client.query(schema);
    console.log("✅ Database schema created successfully");

    // Insert sample data for development
    if (!isProduction) {
      console.log("🌱 Adding sample data for development...");

      const sampleDataQuery = `
        -- Insert sample admin user (password: admin123)
        INSERT INTO users (username, email, password_hash, email_verified)
        VALUES (
          'admin',
          'admin@geosme.com',
          '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj16k3WU.2ui',
          true
        ) ON CONFLICT (email) DO NOTHING;
        
        -- Insert sample regular user (password: user123)
        INSERT INTO users (username, email, password_hash, email_verified)
        VALUES (
          'testuser',
          'user@geosme.com',
          '$2a$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
          true
        ) ON CONFLICT (email) DO NOTHING;
      `;

      await client.query(sampleDataQuery);
      console.log("✅ Sample data inserted");
    }

    client.release();

    console.log("🎉 Database setup completed successfully!");
    console.log("\n📊 Database Information:");
    console.log(
      `   Environment: ${isProduction ? "Production" : "Development"}`
    );
    console.log(`   Host: ${config.host || "Remote"}`);
    console.log(`   Database: ${config.database || "Remote"}\n`);
  } catch (error) {
    console.error("❌ Database setup failed:", error.message);

    if (error.code === "ENOTFOUND") {
      console.log("\n💡 Troubleshooting tips:");
      console.log("   - Make sure PostgreSQL is running");
      console.log("   - Check your database connection settings");
      console.log("   - Verify your environment variables");
    }

    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run the setup
setupDatabase().catch(console.error);
