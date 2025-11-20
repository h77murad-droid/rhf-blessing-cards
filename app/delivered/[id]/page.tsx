'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle,
  Download,
  Mail,
  MessageCircle,
  Copy,
  Facebook,
  Twitter,
  Heart,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DeliveredPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { recipientWhatsapp?: string; senderWhatsapp?: string };
}) {
  const [copied, setCopied] = useState(false);

  const cardUrl = `https://rhf-cards.bh/view/${params.id}`;
  const recipientWhatsapp = searchParams.recipientWhatsapp || '';
  const senderWhatsapp = searchParams.senderWhatsapp || '';
  const supportWhatsapp = '+97317000000'; // تقدر تغيره لاحقاً لرقم الدعم الرسمي

  const normalizePhoneForWa = (phone: string) => phone.replace(/\D/g, '');

  const buildWhatsappLink = (phone: string | null, text: string) => {
    const base = phone && phone.trim() !== '' ? `https://wa.me/${normalizePhoneForWa(phone)}` : 'https://wa.me/';
    return `${base}?text=${encodeURIComponent(text)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareGeneric = (platform: string) => {
    const text = 'تم إرسال بطاقة خير لك من منصة بطاقات الخير - RHF';
    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + cardUrl)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent('بطاقة خير')}&body=${encodeURIComponent(
          text + ' ' + cardUrl
        )}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(cardUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(cardUrl)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleSendToRecipient = () => {
    const text = `تم تصميم بطاقة خير خاصة لك عبر منصة بطاقات الخير من المؤسسة الملكية للأعمال الإنسانية.\n\nرابط البطاقة:\n${cardUrl}`;
    const url = buildWhatsappLink(recipientWhatsapp || null, text);
    window.open(url, '_blank');
  };

  const handleSendConfirmationToSender = () => {
    const text = `شكراً لمساهمتك.\n\nتم تأكيد إرسال بطاقة الخير عبر منصة بطاقات الخير.\nرقم الطلب: ${params.id.toUpperCase()}\nرابط البطاقة:\n${cardUrl}`;
    const url = buildWhatsappLink(senderWhatsapp || null, text);
    window.open(url, '_blank');
  };

  const handleContactSupport = () => {
    const text = `مرحباً، أحتاج مساعدة بخصوص بطاقة الخير.\nرقم الطلب: ${params.id.toUpperCase()}`;
    const url = buildWhatsappLink(supportWhatsapp, text);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Success Section */}
        <section className="section-spacing bg-gradient-to-b from-beige to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Success Message */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-success to-success/80 rounded-full mb-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                  تم الإرسال{' '}
                  <span className="text-gradient-maroon">بنجاح!</span>
                </h1>

                <p className="text-lg text-gray leading-relaxed max-w-2xl mx-auto">
                  شكراً لك. تم إرسال بطاقة الخير بنجاح وتبرعك سيساهم في دعم المشاريع الإنسانية.
                </p>
              </div>

              {/* Order Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-lighter animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Side - Card Preview */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-dark mb-4">بطاقتك</h2>
                    <div className="aspect-card bg-gradient-to-br from-maroon to-maroon-dark rounded-xl shadow-xl overflow-hidden">
                      <div className="h-full flex flex-col items-center justify-center p-6 text-white text-center">
                        <Heart className="w-16 h-16 mb-4" fill="currentColor" />
                        <h3 className="text-2xl font-bold mb-3">بطاقة خير</h3>
                        <p className="text-sm leading-relaxed">رسالتك الشخصية المميزة</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-dark mb-4">تفاصيل الطلب</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-beige rounded-lg">
                        <span className="text-gray">رقم الطلب:</span>
                        <span className="font-bold text-gray-dark">#{params.id.toUpperCase()}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-beige rounded-lg">
                        <span className="text-gray">التاريخ:</span>
                        <span className="font-medium text-gray-dark">
                          {new Date().toLocaleDateString('ar-BH')}
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-beige rounded-lg">
                        <span className="text-gray">قيمة التبرع:</span>
                        <span className="font-bold text-maroon text-xl">10 د.ب</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-beige rounded-lg">
                        <span className="text-gray">الحالة:</span>
                        <span className="badge badge-success">تم الإرسال ✓</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                      <p className="text-sm text-gray-dark flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span>تم إرسال البطاقة إلى البريد الإلكتروني للمستلم. يمكنك كذلك إرسالها عبر واتساب.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-lighter animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-dark mb-6 text-center">شارك البطاقة</h2>

                {/* زر مخصص لإرسال البطاقة للمستلم عبر واتساب */}
                <div className="mb-6 text-center">
                  <button
                    onClick={handleSendToRecipient}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 mb-4"
                  >
                    <MessageCircle className="w-5 h-5" />
                    إرسال البطاقة إلى المستلم عبر واتساب
                  </button>
                  {recipientWhatsapp && (
                    <p className="text-xs text-gray">
                      سيتم استخدام الرقم: <span className="font-mono">{recipientWhatsapp}</span>
                    </p>
                  )}
                </div>

                {/* Share URL */}
                <div className="mb-6">
                  <label className="block text-gray font-medium mb-2">رابط البطاقة</label>
                  <div className="flex gap-2">
                    <input type="text" value={cardUrl} readOnly className="input-field flex-1" />
                    <button
                      onClick={handleCopy}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-base ${
                        copied
                          ? 'bg-success text-white'
                          : 'bg-beige text-gray-dark hover:bg-beige-light'
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-5 h-5 inline mr-2" />
                          تم النسخ
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5 inline mr-2" />
                          نسخ
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => handleShareGeneric('whatsapp')}
                    className="flex flex-col items-center gap-2 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-all duration-base"
                  >
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                    <span className="text-sm font-medium text-gray-dark">واتساب</span>
                  </button>

                  <button
                    onClick={() => handleShareGeneric('email')}
                    className="flex flex-col items-center gap-2 p-4 bg-maroon/10 hover:bg-maroon/20 rounded-lg transition-all duration-base"
                  >
                    <Mail className="w-8 h-8 text-maroon" />
                    <span className="text-sm font-medium text-gray-dark">بريد</span>
                  </button>

                  <button
                    onClick={() => handleShareGeneric('facebook')}
                    className="flex flex-col items-center gap-2 p-4 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-lg transition-all duration-base"
                  >
                    <Facebook className="w-8 h-8 text-[#1877F2]" />
                    <span className="text-sm font-medium text-gray-dark">فيسبوك</span>
                  </button>

                  <button
                    onClick={() => handleShareGeneric('twitter')}
                    className="flex flex-col items-center gap-2 p-4 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 rounded-lg transition-all duration-base"
                  >
                    <Twitter className="w-8 h-8 text-[#1DA1F2]" />
                    <span className="text-sm font-medium text-gray-dark">تويتر</span>
                  </button>
                </div>
              </div>

              {/* Actions for sender */}
              <div className="grid md:grid-cols-3 gap-4 mb-8 animate-fade-in">
                <button onClick={handleSendConfirmationToSender} className="btn-outline">
                  إرسال تأكيد للمرسل عبر واتساب
                </button>
                <Link href="/cards/all" className="btn-secondary text-center">
                  إرسال بطاقة أخرى
                </Link>
                <button onClick={handleContactSupport} className="btn-outline">
                  التواصل مع خدمة العملاء في واتساب
                </button>
              </div>

              {/* Thank You Message */}
              <div className="mt-12 text-center bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl p-12 text-white animate-fade-in">
                <Heart className="w-16 h-16 mx-auto mb-4" fill="currentColor" />
                <h2 className="text-3xl font-bold mb-4">شكراً لمساهمتك</h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                  تبرعك البالغ 10 دنانير بحرينية سيساهم في دعم المشاريع الإنسانية والخيرية التي تقوم بها
                  مؤسسة البحرين الملكية للأعمال الإنسانية.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
