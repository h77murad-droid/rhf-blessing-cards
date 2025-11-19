# RHF Blessing Cards - Digital Greeting Card Platform

## 🌟 About

**RHF Blessing Cards** (منصة بطاقات الخير) is a digital greeting card platform for the Royal Humanitarian Foundation (RHF) in Bahrain. The platform allows users to send personalized digital greeting cards for various occasions, with the card value being donated to humanitarian projects.

### Key Features

- ✨ **Wide Selection of Occasions**: Weddings, births, religious events, social occasions, condolences, appreciation, and more
- 🎨 **Customizable Cards**: Personalize cards with custom messages, colors, and fonts
- 💝 **Charitable Donations**: Card value goes directly to RHF humanitarian projects
- 🌐 **RTL Support**: Full Arabic language support with right-to-left layout
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎯 **Modern UI/UX**: Clean, professional design inspired by leading platforms
- 🔒 **Secure Payments**: Multiple payment methods (Credit Card, Benefit, Apple Pay)
- 📊 **Admin Dashboard**: Comprehensive management and analytics tools

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Tajawal (Google Fonts)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 📁 Project Structure

```
rhf-blessing-cards-app/
├── app/                          # Next.js App Router pages
│   ├── admin/                    # Admin dashboard
│   │   └── page.tsx
│   ├── cards/                    # Cards gallery
│   │   └── [occasion]/
│   │       └── page.tsx
│   ├── delivered/                # Success page after payment
│   │   └── [id]/
│   │       └── page.tsx
│   ├── occasions/                # Occasions listing
│   │   └── page.tsx
│   ├── payment/                  # Payment page
│   │   └── page.tsx
│   ├── personalize/              # Card customization
│   │   └── [cardId]/
│   │       └── page.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── CardItem.tsx             # Card display component
│   ├── Footer.tsx               # Site footer
│   ├── Navbar.tsx               # Site navigation
│   └── OccasionCard.tsx         # Occasion card component
├── lib/                         # Utility functions
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher

### Installation

1. **Clone or download the project**:
   ```bash
   cd rhf-blessing-cards-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

### Linting

Run ESLint:

```bash
npm run lint
```

## 🎨 Design System

### Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Maroon** | `#8B0000` | Primary buttons, headers, emphasis |
| **Maroon Light** | `#A52A2A` | Hover states, borders |
| **Maroon Dark** | `#6B0000` | Pressed states, shadows |
| **Gold** | `#D4AF37` | Secondary buttons, highlights |
| **Gold Light** | `#E8C547` | Hover states on gold elements |
| **Gold Dark** | `#B8941F` | Pressed states, borders |
| **Gray** | `#4A4A4A` | Body text, labels |
| **Beige** | `#FAF8F3` | Section backgrounds |

### Typography

- **Font Family**: Tajawal (Arabic font)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Direction**: RTL (Right-to-Left)

### Spacing

Based on an 8px grid system:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `5xl`: 128px

## 📄 Pages

### Public Pages

1. **Home Page** (`/`): Landing page with hero, statistics, occasions showcase, features, and how it works
2. **Occasions Page** (`/occasions`): Browse all available occasions
3. **Cards Gallery** (`/cards/[occasion]`): Browse and search cards by occasion
4. **Personalization** (`/personalize/[cardId]`): Customize card with personal message
5. **Payment** (`/payment`): Secure payment processing
6. **Delivered** (`/delivered/[id]`): Success page with sharing options

### Admin Pages

7. **Admin Dashboard** (`/admin`): Statistics, analytics, order management

## 🔒 Security Best Practices

- All user inputs are validated
- Environment variables for sensitive data
- HTTPS recommended for production
- No sensitive data in client-side code
- Secure payment processing integration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Environment Variables**:
   - Add your environment variables in Vercel dashboard
   - Settings > Environment Variables

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js plugin
- **AWS Amplify**: Supports Next.js SSR
- **Docker**: Create a `Dockerfile` for containerization
- **VPS/Cloud**: Run `npm run build && npm start` on your server

### Production Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Configure payment gateway credentials
- [ ] Set up email service for notifications
- [ ] Enable analytics (Google Analytics, etc.)
- [ ] Test all payment flows
- [ ] Test responsive design on multiple devices
- [ ] Enable HTTPS
- [ ] Set up monitoring and error tracking
- [ ] Configure backup strategy
- [ ] Test performance (Lighthouse, WebPageTest)

## 🌐 RTL (Right-to-Left) Support

The entire application is built with RTL support for Arabic language:

- HTML `dir="rtl"` attribute
- Tailwind CSS RTL utilities
- Proper text alignment
- Mirror-friendly layout components
- Arabic font (Tajawal) integration

## 📊 Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Font optimization
- Static generation where possible
- Minimal JavaScript bundle size

## 🔧 Customization

### Adding New Occasions

Edit the occasions data in the respective page files:
- `app/page.tsx` (Home page)
- `app/occasions/page.tsx`

### Modifying Design Tokens

All design tokens are centralized in `tailwind.config.js`. Update colors, spacing, or typography there to apply changes globally.

### Adding Payment Methods

Payment logic is in `app/payment/page.tsx`. Integrate your payment gateway's SDK and update the form handling.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Build Errors

Clear Next.js cache and rebuild:
```bash
rm -rf .next
npm run build
```

### TypeScript Errors

Run type checking to identify issues:
```bash
npm run type-check
```

## 📝 License

Copyright © 2025 Royal Humanitarian Foundation (RHF), Bahrain. All rights reserved.

## 🤝 Support

For questions or support, contact:
- **Email**: info@rhf.bh
- **Phone**: +973 1700 0000
- **Address**: Kingdom of Bahrain, Manama

## 🙏 Acknowledgments

- Royal Humanitarian Foundation (RHF) for the project vision
- Tajawal font by Google Fonts
- Next.js and Vercel teams for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons

---

**Made with ❤️ in Bahrain for humanity**
