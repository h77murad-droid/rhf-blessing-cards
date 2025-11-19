# 📋 Complete Setup & Deployment Instructions

## 🎯 Current Status
✅ **Project built**: Next.js 14 + TypeScript + Tailwind CSS  
✅ **Supabase integrated**: Database tables created with sample data  
✅ **Git initialized**: Ready to push to GitHub  
✅ **Production ready**: Configured for Vercel deployment  

---

## 🚀 STEP-BY-STEP DEPLOYMENT GUIDE

### STEP 1: Install Dependencies

```bash
cd /workspace/rhf-blessing-cards-app
npm install
```

Expected output: Dependencies installed successfully

---

### STEP 2: Verify Local Development

```bash
npm run dev
```

Open: http://localhost:3000

**Test the following:**
- ✅ Home page loads
- ✅ Occasions page shows data from Supabase
- ✅ Cards gallery displays items
- ✅ All pages are responsive (mobile & desktop)

Press `Ctrl+C` to stop the dev server.

---

### STEP 3: Build for Production

```bash
npm run build
```

Expected output: "Compiled successfully"

If errors occur:
- Check TypeScript errors: `npm run type-check`
- Check linting: `npm run lint`

---

### STEP 4: Push to GitHub

**A. Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `rhf-blessing-cards`
3. Description: `RHF Blessing Cards - Digital greeting card platform for Royal Humanitarian Foundation`
4. Visibility: Public or Private
5. **DO NOT** initialize with README (already exists)
6. Click "Create repository"

**B. Push Your Code**

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd /workspace/rhf-blessing-cards-app
git remote add origin https://github.com/YOUR_USERNAME/rhf-blessing-cards.git
git branch -M main
git push -u origin main
```

Expected output: Code pushed successfully to GitHub

---

### STEP 5: Deploy to Vercel

**Method 1: Vercel Dashboard (Recommended - Easiest)**

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" or "Login"
   - Connect with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `rhf-blessing-cards`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Set Environment Variables**
   
   Click "Environment Variables" and add:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://cqxzgibforqpzpbzudpa.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (your full key) |

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - 🎉 **LIVE URL will be shown**: `https://your-project.vercel.app`

---

**Method 2: Vercel CLI (Alternative)**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /workspace/rhf-blessing-cards-app
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? rhf-blessing-cards
# - In which directory is your code located? ./
# - Want to override settings? No

# After deployment, set environment variables:
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Enter: https://cqxzgibforqpzpbzudpa.supabase.co

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Enter: your_anon_key

# Deploy to production
vercel --prod
```

---

### STEP 6: Verify Deployment

1. **Open your live URL**: `https://your-project.vercel.app`

2. **Test functionality:**
   - ✅ Home page loads correctly
   - ✅ Occasions page shows 9 categories
   - ✅ Cards gallery displays items
   - ✅ All navigation works
   - ✅ Mobile responsive design
   - ✅ Arabic RTL layout correct

3. **Check Supabase connection:**
   - Go to Occasions page
   - You should see data from your Supabase database
   - If empty, check environment variables in Vercel dashboard

---

## 📊 Database Information

### Supabase Tables Created ✅

1. **occasions** (9 sample records)
   - Stores occasion categories (Eid, Wedding, Birthday, etc.)
   - Fields: id, name_ar, name_en, icon, card_count

2. **cards** (5 sample cards)
   - Stores blessing cards with details
   - Fields: id, occasion_id, title_ar, title_en, description, price, image_url

3. **orders** (empty, ready for use)
   - Stores customer orders and donations
   - Fields: id, card_id, recipient_name, sender_name, custom_message, payment_amount

### Sample Data Inserted

- ✅ 9 occasions (Eid Al-Fitr, Eid Al-Adha, Wedding, Birthday, Graduation, New Baby, Get Well, Thank You, Congratulations)
- ✅ 5 sample cards across different occasions
- ✅ Ready for production use

---

## 🔧 Environment Variables Reference

### Required for Deployment

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key (safe for browser) | Supabase Dashboard → Settings → API |

### Optional (for future features)

| Variable | Description |
|----------|-------------|
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side admin key (keep secret!) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |

---

## 🎨 Project Structure

```
rhf-blessing-cards-app/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Home page
│   ├── occasions/           # Occasions listing
│   ├── cards/[occasion]/    # Cards gallery
│   ├── personalize/         # Card customization
│   ├── payment/             # Payment checkout
│   ├── delivered/           # Success page
│   └── admin/               # Admin dashboard
├── components/              # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── OccasionCard.tsx
│   └── CardItem.tsx
├── lib/                     # Utility functions
│   ├── supabaseClient.ts   # Supabase configuration ✅
│   └── database.ts          # Database helpers ✅
├── public/                  # Static assets
├── .env.local              # Local environment variables ✅
├── .env.example            # Example env file
└── package.json            # Dependencies
```

---

## 📝 Git Commands Summary

```bash
# Check status
git status

# View commit history
git log --oneline

# Add new files
git add .
git commit -m "Your commit message"
git push

# Create new branch
git checkout -b feature/new-feature
```

---

## 🔄 Updating Your Deployed Site

After making changes:

```bash
# 1. Commit changes
git add .
git commit -m "Update: description of changes"
git push

# 2. Vercel will automatically deploy the changes
# (if you connected GitHub to Vercel)

# Or manually deploy:
vercel --prod
```

---

## 🌐 Your Live URLs

After deployment, you'll have:

- **Production URL**: `https://rhf-blessing-cards.vercel.app` (or custom domain)
- **Preview URLs**: Auto-generated for each git push
- **Supabase Dashboard**: https://app.supabase.com

---

## 🆘 Troubleshooting

### Issue: "Module not found" error

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Supabase data not loading

**Solution:**
1. Check environment variables in Vercel dashboard
2. Verify Supabase URL and keys are correct
3. Check Supabase dashboard for database connection
4. View logs: Vercel Dashboard → Your Project → Deployments → View Function Logs

### Issue: Build fails on Vercel

**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Test locally: `npm run build`
4. Fix TypeScript errors: `npm run type-check`

### Issue: 404 on deployed pages

**Solution:**
- Next.js App Router requires proper file structure
- Check that all pages are in the `app/` directory
- Redeploy: `vercel --prod`

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🎉 Congratulations!

Your RHF Blessing Cards platform is now:
- ✅ Built with modern tech stack
- ✅ Connected to Supabase database
- ✅ Version controlled with Git
- ✅ Deployed to production
- ✅ Ready for users!

**Next steps:**
1. Add custom domain (optional)
2. Set up payment gateway integration
3. Add more cards and content
4. Configure email notifications
5. Set up analytics (Google Analytics, etc.)

---

**Built with ❤️ for Royal Humanitarian Foundation (RHF), Bahrain**
