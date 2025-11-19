# 🚀 QUICK DEPLOY COMMANDS

## ⚡ Copy & Paste These Commands

### 1️⃣ Install Dependencies
```bash
cd /workspace/rhf-blessing-cards-app
npm install
```

### 2️⃣ Test Locally (Optional)
```bash
npm run dev
```
Visit: http://localhost:3000  
Press `Ctrl+C` to stop

### 3️⃣ Build for Production
```bash
npm run build
```

### 4️⃣ Push to GitHub
**First, create a new repository on GitHub: https://github.com/new**

Then run (replace YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/rhf-blessing-cards.git
git branch -M main
git push -u origin main
```

### 5️⃣ Deploy to Vercel

**Option A: Vercel Dashboard** (Recommended)
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://cqxzgibforqpzpbzudpa.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeHpnaWJmb3JxcHpwYnp1ZHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MzM3OTksImV4cCI6MjA3OTEwOTc5OX0.JSIb4QwNWfbN06MMOMVI_fk86caRUTwfwtzbWqM45S0`
5. Click "Deploy"
6. 🎉 Your site is live!

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel login
cd /workspace/rhf-blessing-cards-app
vercel
# Follow prompts, then:
vercel --prod
```

---

## 📊 What's Already Done ✅

- ✅ Next.js 14 app with TypeScript & Tailwind CSS
- ✅ 7 pages (Home, Occasions, Cards, Personalize, Payment, Success, Admin)
- ✅ Supabase database with 3 tables created
- ✅ Sample data inserted (9 occasions, 5 cards)
- ✅ Git initialized and committed
- ✅ Environment variables configured
- ✅ Production build tested
- ✅ Full RTL Arabic support
- ✅ Responsive design (mobile + desktop)

---

## 🌐 Your Live URL

After deploying to Vercel, your site will be available at:
```
https://rhf-blessing-cards.vercel.app
```
(or your custom URL)

---

## 📁 Files Created/Updated

**New Supabase Integration Files:**
- ✅ `/lib/supabaseClient.ts` - Supabase configuration
- ✅ `/lib/database.ts` - Database helper functions
- ✅ `.env.local` - Local environment variables (with your keys)
- ✅ `.env.example` - Example env file template

**Updated Files:**
- ✅ `package.json` - Added @supabase/supabase-js dependency
- ✅ `DEPLOYMENT.md` - Added Supabase & Vercel sections

**Database Tables Created:**
- ✅ `occasions` - 9 sample records
- ✅ `cards` - 5 sample cards
- ✅ `orders` - Ready for use

---

## 🔐 Environment Variables

Your `.env.local` file is configured with:
```env
NEXT_PUBLIC_SUPABASE_URL=https://cqxzgibforqpzpbzudpa.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ Remember:** Add these same variables in Vercel dashboard when deploying!

---

## 📖 Documentation

- 📘 **DEPLOYMENT_STEPS.md** - Complete step-by-step guide
- 📗 **DEPLOYMENT.md** - Comprehensive deployment documentation
- 📙 **README.md** - Project overview and features
- 📕 **HOW_TO_RUN.md** - Quick start guide

---

## 🎯 Next Steps After Deployment

1. ✅ Visit your live URL
2. ✅ Test all pages (Home, Occasions, Cards, etc.)
3. ✅ Verify Supabase data loads correctly
4. ✅ Test on mobile devices
5. ⭐ Add more cards and content via Supabase dashboard
6. ⭐ Set up custom domain (optional)
7. ⭐ Integrate payment gateway (future feature)

---

**🎉 You're ready to deploy! Follow the commands above.**
