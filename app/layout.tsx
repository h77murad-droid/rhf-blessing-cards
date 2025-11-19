import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة بطاقات الخير - RHF Blessing Cards',
  description:
    'منصة البطاقات الرقمية الخيرية التابعة للمؤسسة الملكية للأعمال الإنسانية في مملكة البحرين.',
  keywords: [
    'منصة بطاقات الخير',
    'بطاقات خيرية',
    'منصة خيرية',
    'تبرع',
    'تبرعات',
    'المؤسسة الملكية للأعمال الإنسانية',
    'RHF',
    'البحرين',
  ],
  authors: [{ name: 'Royal Humanitarian Foundation (RHF)' }],
  openGraph: {
    title: 'منصة بطاقات الخير - RHF Blessing Cards',
    description:
      'منصة رقمية مبتكرة لإرسال بطاقات خيرية ودعم مشاريع المؤسسة الملكية للأعمال الإنسانية.',
    type: 'website',
    locale: 'ar_BH',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// تعريف الـ viewport بشكل منفصل (الطريقة الصحيحة في Next.js 14)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
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
