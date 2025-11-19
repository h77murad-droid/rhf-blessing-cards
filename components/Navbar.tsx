'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/occasions', label: 'المناسبات' },
    { href: '/cards/all', label: 'البطاقات' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
  ];

  return (
    <nav className="sticky top-0 z-fixed bg-white/95 backdrop-blur-sm border-b border-gray-lighter shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg flex items-center justify-center shadow-maroon">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-maroon">منصة بطاقات الخير</div>
              <div className="text-xs text-gray-light">RHF Blessing Cards</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray hover:text-maroon font-medium transition-colors duration-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/admin" className="text-gray hover:text-maroon font-medium transition-colors duration-base">
              لوحة التحكم
            </Link>
            <Link href="/cards/all" className="btn-primary">
              أرسل بطاقة خير
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray hover:text-maroon transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-lighter animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray hover:text-maroon font-medium py-2 transition-colors duration-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="text-gray hover:text-maroon font-medium py-2 transition-colors duration-base border-t border-gray-lighter mt-2 pt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                لوحة التحكم
              </Link>
              <Link
                href="/cards/all"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                أرسل بطاقة خير
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
