# Exam Chronicle - Supabase + Admin Panel Setup Guide

## 🔗 Connecting Supabase to Your Frontend

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click **New Project** → Choose organization → Set name: `exam-chronicle`
3. Set a database password and select closest region
4. Wait for the project to be provisioned (~2 min)

### Step 2: Get Your API Credentials
1. Go to **Project Settings** → **API**
2. Copy these three values:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Update Your .env File
```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcxyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...
```

### Step 4: Set Up the Database Schema
1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run** to execute

### Step 5: Configure Authentication
1. Go to **Authentication** → **Providers**
2. **Email** is enabled by default
3. For **Google OAuth**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 credentials
   - Add `https://your-project.supabase.co/auth/v1/callback` as redirect URL
   - Copy Client ID and Client Secret to Supabase → Auth → Providers → Google

### Step 6: Create Your Admin Account
1. Go to your app's `/auth/login` page
2. Register with your admin email
3. In Supabase SQL Editor, run:
   ```sql
   UPDATE profiles SET role = 'ADMIN' WHERE email = 'your-admin@email.com';
   ```
4. Now login → navigate to `/admin` → You're in!

### Step 7: Set Up Storage (for file uploads)
1. Go to **Storage** in Supabase dashboard
2. Create buckets:
   - `images` (public) - for featured images, avatars
   - `pdfs` (public) - for study materials, notifications
   - `videos` (private) - for video content

---

## 🛡️ Admin Panel Overview

### Access
- **URL**: `/admin`
- **Login**: `/auth/login`
- Auth-protected: When Supabase is configured, only ADMIN role users can access

### Pages (14 total)
| Page | Path | Description |
|------|------|-------------|
| Dashboard | `/admin` | Stats, activity feed, analytics, quick actions |
| Jobs | `/admin/jobs` | Create/edit/publish job notifications |
| Exams | `/admin/exams` | Manage exam info pages |
| Blog Posts | `/admin/posts` | Rich text articles with SEO |
| Current Affairs | `/admin/current-affairs` | Daily/weekly/monthly CA |
| Study Materials | `/admin/materials` | Upload PDFs, notes, papers |
| Mock Tests | `/admin/mock-tests` | Create tests with questions |
| Results | `/admin/results` | Publish exam results |
| Admit Cards | `/admin/admit-cards` | Release admit cards |
| Answer Keys | `/admin/answer-keys` | Publish answer keys |
| Users | `/admin/users` | View/manage users & roles |
| Comments | `/admin/comments` | Moderate comments |
| Notifications | `/admin/notifications` | Push notifications |
| Settings | `/admin/settings` | Platform configuration |

### Features
- 📊 Dashboard with live stats, analytics, activity feed
- 📋 Reusable data tables with search, pagination, actions
- ✏️ Create/Edit dialogs with full form validation
- 🗑️ Delete with confirmation
- 🔍 Search across all data
- 📱 Fully responsive sidebar (collapsible on desktop, sheet on mobile)
- 🌙 Dark mode support
- 🔔 Notification badge
- ⚡ Quick action shortcuts

---

## 🔄 How Supabase Connects to the App

```
┌─────────────────────────────────────────┐
│          Next.js Frontend               │
│                                         │
│  ┌──────────┐  ┌──────────────────┐    │
│  │ Browser  │  │  Server Components│    │
│  │ Client   │  │  + API Routes    │    │
│  └────┬─────┘  └────────┬─────────┘    │
│       │                  │              │
│  ┌────▼──────────────────▼─────────┐   │
│  │     Supabase Client (SSR)       │   │
│  │  @supabase/ssr                  │   │
│  └────────────┬────────────────────┘   │
└───────────────┼────────────────────────┘
                │
       ┌────────▼────────┐
       │    Supabase      │
       │                  │
       │  ┌────────────┐ │
       │  │ PostgreSQL │ │
       │  │ + RLS      │ │
       │  └────────────┘ │
       │  ┌────────────┐ │
       │  │ Auth       │ │
       │  │ (Email/    │ │
       │  │  Google)   │ │
       │  └────────────┘ │
       │  ┌────────────┐ │
       │  │ Storage    │ │
       │  │ (PDFs/     │ │
       │  │  Images)   │ │
       │  └────────────┘ │
       │  ┌────────────┐ │
       │  │ Realtime   │ │
       │  └────────────┘ │
       └──────────────────┘
```

### Key Files
- `src/lib/supabase/client.ts` - Browser-side Supabase client
- `src/lib/supabase/server.ts` - Server-side Supabase client (with cookies)
- `src/lib/supabase/middleware.ts` - Auth + admin route protection
- `src/middleware.ts` - Next.js middleware (smart: enables auth when Supabase is configured)
- `src/components/auth-provider.tsx` - React context for auth state
- `src/app/auth/login/page.tsx` - Login/Register page
- `src/app/auth/callback/route.ts` - OAuth callback handler
- `supabase-setup.sql` - Complete database schema with RLS policies

### Demo Mode
When Supabase credentials are not configured (still have `your-project-id` placeholder), the app runs in **demo mode** - admin pages are accessible without auth. Once you add real Supabase credentials, auth protection is automatically enabled.
