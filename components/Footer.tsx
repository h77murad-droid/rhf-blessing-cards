import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-beige to-white border-t border-gray-lighter mt-auto">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg flex items-center justify-center shadow-maroon">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-lg font-bold text-maroon">منصة بطاقات الخير</div>
                <div className="text-xs text-gray-light">RHF Blessing Cards</div>
              </div>
            </Link>
            <p className="text-gray text-sm leading-relaxed mb-4">
              منصة إلكترونية لإرسال البطاقات الخيرية الرقمية في المناسبات المختلفة، حيث يتم تحويل قيمة البطاقة إلى تبرع لمشاريع المؤسسة الإنسانية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-dark mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray hover:text-maroon transition-colors duration-base">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/occasions" className="text-gray hover:text-maroon transition-colors duration-base">
                  المناسبات
                </Link>
              </li>
              <li>
                <Link href="/cards/all" className="text-gray hover:text-maroon transition-colors duration-base">
                  البطاقات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray hover:text-maroon transition-colors duration-base">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray hover:text-maroon transition-colors duration-base">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-dark mb-6">الدعم</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray hover:text-maroon transition-colors duration-base">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray hover:text-maroon transition-colors duration-base">
                  كيف يعمل
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray hover:text-maroon transition-colors duration-base">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray hover:text-maroon transition-colors duration-base">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray hover:text-maroon transition-colors duration-base">
                  لوحة التحكم
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-dark mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                <span className="text-gray text-sm">مملكة البحرين، المنامة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-maroon flex-shrink-0" />
                <a href="tel:+97317000000" className="text-gray hover:text-maroon transition-colors text-sm">
                  +973 1700 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-maroon flex-shrink-0" />
                <a href="mailto:info@rhf.bh" className="text-gray hover:text-maroon transition-colors text-sm">
                  info@rhf.bh
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-dark mb-3">تابعنا</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray hover:text-maroon hover:shadow-md transition-all duration-base border border-gray-lighter"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray hover:text-maroon hover:shadow-md transition-all duration-base border border-gray-lighter"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray hover:text-maroon hover:shadow-md transition-all duration-base border border-gray-lighter"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray hover:text-maroon hover:shadow-md transition-all duration-base border border-gray-lighter"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-lighter">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-light text-sm text-center md:text-right">
              © {currentYear} مؤسسة البحرين الملكية للأعمال الإنسانية. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-light text-sm text-center md:text-left">
              صُنع بـ <Heart className="w-4 h-4 inline text-maroon" fill="currentColor" /> في البحرين
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
