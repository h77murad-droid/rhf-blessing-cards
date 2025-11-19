import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة بطاقات الخير - RHF Blessing Cards',
  description: 'منصة البطاقات الرقمية الخيرية من مؤسسة البحرين الملكية للأعمال الإنسانية',
  keywords: ['بطاقات', 'خير', 'تبرع', 'مناسبات', 'البحرين', 'RHF'],
  authors: [{ name: 'Royal Humanitarian Foundation' }],
  openGraph: {
    title: 'منصة بطاقات الخير - RHF Blessing Cards',
    description: 'منصة البطاقات الرقمية الخيرية من مؤسسة البحرين الملكية للأعمال الإنسانية',
    type: 'website',
    locale: 'ar_BH',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
