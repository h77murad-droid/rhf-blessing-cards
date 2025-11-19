# 🚀 Quick Start Guide - RHF Blessing Cards

## Installation & Running

### 1️⃣ Install Dependencies
```bash
cd rhf-blessing-cards-app
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser

### 3️⃣ Build for Production
```bash
npm run build
```

### 4️⃣ Start Production Server
```bash
npm start
```

---

## Essential Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

---

## Project Structure

```
rhf-blessing-cards-app/
├── app/                  # Pages
│   ├── page.tsx         # Home
│   ├── occasions/       # Occasions list
│   ├── cards/           # Cards gallery
│   ├── personalize/     # Customize card
│   ├── payment/         # Payment
│   ├── delivered/       # Success page
│   └── admin/           # Dashboard
├── components/          # Reusable UI
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── OccasionCard.tsx
│   └── CardItem.tsx
├── public/              # Static files
└── README.md            # Full documentation
```

---

## Key Pages

- **Home**: [http://localhost:3000](http://localhost:3000)
- **Occasions**: [http://localhost:3000/occasions](http://localhost:3000/occasions)
- **Cards**: [http://localhost:3000/cards/all](http://localhost:3000/cards/all)
- **Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Design System

### Colors
- **Maroon**: `#8B0000` (Primary)
- **Gold**: `#D4AF37` (Secondary)
- **Beige**: `#FAF8F3` (Background)

### Font
- **Tajawal** (Arabic, RTL)

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

See **DEPLOYMENT.md** for detailed instructions.

---

## Need Help?

- 📖 **Full Docs**: Read `README.md`
- 🚀 **Deployment**: Read `DEPLOYMENT.md`
- 📊 **Project Info**: Read `PROJECT_SUMMARY.md`

---

**Made with ❤️ for RHF Bahrain**
