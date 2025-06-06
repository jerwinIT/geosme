# Authentication Setup Instructions

This guide will help you set up the complete authentication system with Google OAuth and 2FA.

## 1. Install Dependencies

Run the following command to install all required packages:

```bash
pnpm install next-auth qrcode speakeasy zod
# or
npm install next-auth qrcode speakeasy zod

# For TypeScript support
pnpm install -D @types/qrcode @types/speakeasy
# or
npm install -D @types/qrcode @types/speakeasy
```

## 2. Set up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create OAuth 2.0 Client IDs
5. Add your domain to authorized origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
6. Add your callback URLs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)

## 3. Environment Variables

### For Local Development (.env.local):

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Local PostgreSQL Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=geosme_dev
DB_USER=postgres
DB_PASSWORD=your_postgres_password

# Development Environment
NODE_ENV=development
```

### For Production (.env.production):

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your_nextauth_secret_here

# Production PostgreSQL Database (use connection string)
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# Production Environment
NODE_ENV=production
```

### Common Database Providers:

**Vercel Postgres:**

```env
DATABASE_URL=postgres://default:password@host-pooler.region.aws.neon.tech:5432/verceldb?sslmode=require
```

**Railway:**

```env
DATABASE_URL=postgresql://postgres:password@containers-us-west-1.railway.app:5432/railway
```

**Supabase:**

```env
DATABASE_URL=postgresql://postgres:password@db.project.supabase.co:5432/postgres
```

**Heroku Postgres:**

```env
DATABASE_URL=postgres://user:password@host:5432/database
```

## 4. Features

### ✅ Implemented Features:

- **Dual Sign-up Options**: Google OAuth and manual registration
- **Form Validation**: Real-time validation with error messages
- **Password Strength Indicator**: Visual feedback for password security
- **2FA Setup**: TOTP-based two-factor authentication
- **QR Code Generation**: For authenticator app setup
- **Backup Codes**: Emergency access codes
- **Responsive Design**: Mobile-first approach
- **Loading States**: User feedback during API calls
- **Security**: Best practices for authentication flow

### 🔧 API Endpoints:

- `POST /api/auth/2fa/generate` - Generate 2FA secret and QR code
- `POST /api/auth/2fa/verify` - Verify 2FA setup code
- `GET/POST /api/auth/[...nextauth]` - NextAuth handlers

## 5. Usage

1. **Google Sign-up**: Users can sign up instantly with their Google account
2. **Manual Sign-up**: Users can create accounts with username/email and password
3. **2FA Setup**: After manual registration, users set up 2FA for enhanced security
4. **Form Validation**: Real-time validation prevents invalid submissions
5. **Mobile-Friendly**: Responsive design works on all devices

## 6. Security Considerations

- Passwords must contain uppercase, lowercase, and numbers
- 2FA is mandatory for manual registrations
- Backup codes are provided for emergency access
- All API endpoints include proper error handling
- Form validation prevents common security issues

## 7. Customization

The signup form can be easily customized by modifying:

- `components/auth/signup-form.tsx` - Main form component
- `components/ui/input.tsx` - Input field styling
- `lib/validations/auth.ts` - Validation rules
- Color scheme matches your existing design system

## 8. Database Setup

### Local Development:

1. **Install PostgreSQL locally:**

   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql

   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql

   # Windows
   # Download and install from https://www.postgresql.org/download/windows/
   ```

2. **Create local database:**

   ```bash
   # Connect to PostgreSQL
   psql -U postgres

   # Create database
   CREATE DATABASE geosme_dev;

   # Create user (optional)
   CREATE USER geosme_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE geosme_dev TO geosme_user;
   ```

3. **Run database setup:**

   ```bash
   # Install dependencies first
   pnpm install

   # Set up database schema and sample data
   pnpm run db:setup
   ```

### Production Deployment:

1. **Choose a database provider** (Vercel, Railway, Supabase, etc.)
2. **Set your DATABASE_URL environment variable**
3. **Run production setup:**
   ```bash
   pnpm run db:setup:prod
   ```

## 9. Quick Start Guide

1. **Clone and install:**

   ```bash
   cd geosme
   pnpm install
   ```

2. **Set up environment:**

   - Copy environment variables from above
   - Configure Google OAuth credentials
   - Set up local PostgreSQL

3. **Initialize database:**

   ```bash
   pnpm run db:setup
   ```

4. **Start development:**

   ```bash
   pnpm run dev
   ```

5. **Test the signup:**
   - Visit `http://localhost:3000/auth/signup`
   - Try both Google and manual registration
   - Test 2FA setup with authenticator app

## 10. Next Steps

1. ✅ Database configured for both local and production
2. ✅ User registration with validation
3. ✅ 2FA setup with QR codes and backup codes
4. ✅ Audit logging for security events
5. Implement email verification for manual registrations
6. Set up rate limiting for API endpoints
7. Add password reset functionality
8. Implement proper session management with NextAuth
