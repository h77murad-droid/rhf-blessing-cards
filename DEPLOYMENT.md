# 🚀 Deployment Guide - RHF Blessing Cards

This guide provides detailed instructions for deploying the RHF Blessing Cards platform to production with Supabase backend.

## Table of Contents

1. [Quick Start - Deploy to Vercel](#quick-start---deploy-to-vercel) ⚡
2. [Supabase Setup](#supabase-setup)
3. [Git Repository Setup](#git-repository-setup)
4. [Pre-Deployment Checklist](#pre-deployment-checklist)
5. [Environment Configuration](#environment-configuration)
6. [Deployment Options](#deployment-options)
7. [Post-Deployment Steps](#post-deployment-steps)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Quick Start - Deploy to Vercel

**Fastest way to get your app live (5 minutes):**

### 1. Prerequisites
- Supabase project created (database tables already set up ✅)
- GitHub account
- Vercel account (free tier available)

### 2. Push to GitHub

```bash
# Create a new repository on GitHub first, then run:
cd /workspace/rhf-blessing-cards-app
git remote add origin https://github.com/YOUR_USERNAME/rhf-blessing-cards.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

**Option A: Using Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key
5. Click "Deploy"
6. Done! Your site will be live at `https://your-project.vercel.app`

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /workspace/rhf-blessing-cards-app
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set environment variables when prompted
# - Deploy to production: vercel --prod
```

### 4. Set Environment Variables in Vercel

In your Vercel project dashboard:
- Go to Settings → Environment Variables
- Add:
  ```
  NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY = your_anon_key_here
  ```
- Redeploy if needed

**🎉 Your site is now live!**

---

## Supabase Setup

The database is already configured with 3 tables:
- ✅ `occasions` - Occasion categories (Eid, Wedding, Birthday, etc.)
- ✅ `cards` - Blessing cards with details
- ✅ `orders` - Customer orders and donations

**Sample data has been inserted** for testing.

### Supabase Dashboard Access
- URL: https://app.supabase.com
- Access your project: Table Editor → View your data
- API Keys: Settings → API → Copy your keys

### Optional: Enable Row Level Security (RLS)

For production, enable RLS policies:

```sql
-- Enable RLS on tables
ALTER TABLE occasions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public read access to occasions and cards
CREATE POLICY "Allow public read occasions" ON occasions FOR SELECT USING (true);
CREATE POLICY "Allow public read cards" ON cards FOR SELECT USING (true);

-- Allow insert on orders (for creating new orders)
CREATE POLICY "Allow public insert orders" ON orders FOR INSERT WITH CHECK (true);
```

---

## Git Repository Setup

### Initialize and Push to GitHub

```bash
# Already initialized ✅
# Now push to your remote repository:

# 1. Create a new repository on GitHub (don't initialize with README)
# 2. Copy the repository URL
# 3. Run these commands:

cd /workspace/rhf-blessing-cards-app
git remote add origin https://github.com/YOUR_USERNAME/rhf-blessing-cards.git
git branch -M main
git push -u origin main
```

### Verify Git Status
```bash
git status
git log --oneline
```

---

## Pre-Deployment Checklist

Before deploying to production, ensure you have completed the following:

### Code Preparation

- [ ] All features are tested locally
- [ ] No console errors or warnings
- [ ] TypeScript compilation successful (`npm run type-check`)
- [ ] Linting passed (`npm run lint`)
- [ ] Production build successful (`npm run build`)
- [ ] All sensitive data moved to environment variables
- [ ] `.gitignore` properly configured

### Content & Assets

- [ ] All card images uploaded/optimized
- [ ] Occasion data populated
- [ ] Legal pages created (Privacy Policy, Terms & Conditions)
- [ ] Contact information updated
- [ ] Social media links configured

### Security

- [ ] Environment variables secured
- [ ] Payment gateway configured with production keys
- [ ] HTTPS certificate ready
- [ ] CORS policies configured (if using external APIs)
- [ ] Rate limiting implemented (if needed)

### Performance

- [ ] Images optimized (WebP format, compressed)
- [ ] Lighthouse score > 90
- [ ] Mobile performance tested
- [ ] SEO meta tags configured

---

## Environment Configuration

### Required Environment Variables

Create a `.env.production` file with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cards.rhf.bh
NEXT_PUBLIC_SITE_NAME=RHF Blessing Cards

# API Configuration (if using backend)
NEXT_PUBLIC_API_URL=https://api.cards.rhf.bh

# Payment Gateway
PAYMENT_GATEWAY_KEY=live_your_payment_key
PAYMENT_GATEWAY_SECRET=your_payment_secret
PAYMENT_GATEWAY_WEBHOOK_SECRET=your_webhook_secret

# Email Service (for card delivery)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=cards@rhf.bh
SMTP_PASSWORD=your_secure_password
SMTP_FROM=RHF Blessing Cards <cards@rhf.bh>

# Database (if needed)
DATABASE_URL=postgresql://user:password@host:5432/rhf_cards

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Security
NEXTAUTH_SECRET=your_secure_random_secret_key
NEXTAUTH_URL=https://cards.rhf.bh
```

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Advantages**: Zero-config, automatic HTTPS, global CDN, serverless functions support

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/rhf/blessing-cards.git
   git push -u origin main
   ```

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Add environment variables in Settings
   - Click "Deploy"

4. **Or Deploy via CLI**:
   ```bash
   vercel
   # Follow the prompts
   vercel --prod  # For production deployment
   ```

5. **Configure Domain**:
   - Go to Vercel Dashboard > Your Project > Settings > Domains
   - Add your custom domain (e.g., cards.rhf.bh)
   - Update DNS records as instructed

#### Vercel Configuration (`vercel.json` - optional)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

### Option 2: Netlify

#### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Create `netlify.toml`**:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

---

### Option 3: AWS Amplify

#### Steps:

1. **Install Amplify CLI**:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**:
   ```bash
   amplify init
   ```

3. **Add Hosting**:
   ```bash
   amplify add hosting
   ```

4. **Deploy**:
   ```bash
   amplify publish
   ```

---

### Option 4: Docker + VPS/Cloud

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose (`docker-compose.yml`)

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    env_file:
      - .env.production
    restart: unless-stopped
```

#### Deploy to VPS:

```bash
# Build and run
docker-compose up -d

# Or without Docker Compose
docker build -t rhf-cards .
docker run -p 3000:3000 --env-file .env.production rhf-cards
```

---

### Option 5: Traditional Node.js Server

#### Using PM2

1. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

2. **Create `ecosystem.config.js`**:
   ```javascript
   module.exports = {
     apps: [{
       name: 'rhf-cards',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

3. **Deploy**:
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup  # Enable auto-start on server reboot
   ```

---

## Post-Deployment Steps

### 1. Domain & DNS Configuration

Point your domain to the deployment:

```
# For Vercel
CNAME records:
cards.rhf.bh → cname.vercel-dns.com

# For VPS/Cloud
A record:
cards.rhf.bh → Your_Server_IP
```

### 2. SSL Certificate

- **Vercel/Netlify/Amplify**: Automatic HTTPS
- **VPS/Docker**: Use Let's Encrypt with Certbot:
  ```bash
  sudo certbot --nginx -d cards.rhf.bh
  ```

### 3. Configure CDN (Optional)

Use Cloudflare for additional performance and security:
1. Point domain to Cloudflare nameservers
2. Enable "Full (strict)" SSL mode
3. Enable "Auto Minify" for HTML, CSS, JS
4. Set up page rules for caching

### 4. Set Up Monitoring

- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics, Plausible
- **Performance**: Vercel Analytics, Web Vitals

### 5. Backup Strategy

- **Database**: Daily automated backups
- **Code**: GitHub repository
- **User Data**: Regular exports

---

## Monitoring & Maintenance

### Performance Monitoring

```bash
# Check Lighthouse scores
npx lighthouse https://cards.rhf.bh --view

# Check bundle size
npm run build
# Look for "First Load JS" sizes
```

### Regular Updates

```bash
# Update dependencies monthly
npm update
npm audit fix

# Test thoroughly after updates
npm run build
npm start
```

### Log Monitoring

```bash
# For PM2
pm2 logs

# For Docker
docker logs rhf-cards

# For Vercel
# Check logs in Vercel Dashboard
```

### Security Updates

- Monitor npm audit regularly
- Update Next.js and React to latest stable versions
- Review and rotate API keys quarterly
- Monitor failed login attempts (if auth is added)

---

## Scaling Considerations

### If Traffic Increases:

1. **Enable CDN caching** for static assets
2. **Implement Redis caching** for dynamic data
3. **Use database connection pooling**
4. **Add load balancing** (multiple server instances)
5. **Consider serverless functions** for heavy operations

---

## Rollback Procedure

### Vercel:
1. Go to Deployments tab
2. Click "..." on previous successful deployment
3. Click "Promote to Production"

### Docker:
```bash
docker tag rhf-cards:latest rhf-cards:backup
docker pull rhf-cards:previous-version
docker-compose up -d
```

### Git-based:
```bash
git revert HEAD
git push origin main
# Trigger new deployment
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Restart server after changing environment variables
- Check Vercel dashboard for proper variable configuration

### Performance Issues

- Enable Next.js Image Optimization
- Implement lazy loading for heavy components
- Use React.memo for expensive renders
- Check database query performance

---

## Support & Contacts

- **DevOps**: devops@rhf.bh
- **Emergency**: +973 XXXX XXXX
- **Documentation**: https://docs.rhf.bh

---

**Last Updated**: 2025-11-19
