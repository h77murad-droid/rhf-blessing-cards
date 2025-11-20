'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, ArrowLeft, Type, Palette, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PersonalizePage({ params }: { params: { cardId: string } }) {
  const router = useRouter();

  // نموذج البيانات الاساسي للبطاقة
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    recipientPhone: '',   // رقم واتساب المستلم
    senderName: '',
    senderPhone: '',      // رقم واتساب المرسل
    message: '',
    fontStyle: 'Tajawal',
    cardColor: 'maroon',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: في النسخة الفعلية
    // 1) حفظ بيانات البطاقة والمرسل والمستلم في قاعدة البيانات (Supabase)
    // 2) تمرير البيانات لصفحة الدفع مع رقم الطلب
    // 3) بعد نجاح الدفع، استدعاء API لإرسال رسالة واتساب للمستلم والمرسل

    router.push('/payment');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              خصص{' '}
              <span className="text-gradient-maroon">بطاقتك</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              أضف لمستك الشخصية واجعل البطاقة مميزة تصل للمستلم عبر الواتساب في النسخة النهائية من النظام
            </p>
          </div>
        </section>

        {/* Personalization Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Preview Section */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6 flex items-center gap-3">
                    <Palette className="w-6 h-6 text-maroon" />
                    معاينة البطاقة
                  </h2>
                  
                  <div className="bg-gradient-to-br from-beige to-white rounded-2xl p-8 shadow-lg border-2 border-gray-lighter">
                    <div 
                      className={`aspect-card rounded-xl shadow-xl overflow-hidden ${
                        formData.cardColor === 'maroon' ? 'bg-gradient-to-br from-maroon to-maroon-dark' :
                        formData.cardColor === 'gold' ? 'bg-gradient-to-br from-gold to-gold-dark' :
                        'bg-gradient-to-br from-gray to-gray-dark'
                      }`}
                    >
                      <div className="h-full flex flex-col items-center justify-center p-8 text-white text-center">
                        <Heart className="w-16 h-16 mb-6" fill="currentColor" />
                        <h3 className="text-2xl font-bold mb-4">
                          {formData.recipientName || 'اسم المستلم'}
                        </h3>
                        <p
                          className={`text-lg leading-relaxed mb-6 ${
                            formData.fontStyle === 'Tajawal' ? 'font-sans' : ''
                          }`}
                        >
                          {formData.message || 'رسالتك الشخصية ستظهر هنا...'}
                        </p>
                        <div className="mt-auto pt-6 border-t border-white/20 w-full">
                          <p className="text-sm">
                            من: {formData.senderName || 'اسم المرسل'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg border border-gray-lighter">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray">قيمة التبرع:</span>
                        <span className="text-2xl font-bold text-maroon">10 د.ب</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-beige rounded-lg border border-gray-lighter text-xs text-gray">
                      في النسخة الفعلية من النظام سيتم:
                      <br />
                      1. توليد صورة للبطاقة تحمل هذه البيانات
                      <br />
                      2. إرسالها تلقائيا عبر الواتساب للمستلم
                      <br />
                      3. إرسال إشعار تأكيد للمرسل عبر الواتساب أيضا
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-bold text-gray-dark mb-6 flex items-center gap-3">
                  <Type className="w-6 h-6 text-maroon" />
                  معلومات البطاقة
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Recipient Info */}
                  <div className="bg-beige rounded-xl p-6">
                    <h3 className="font-bold text-gray-dark mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-maroon" />
                      معلومات المستلم
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="recipientName" className="block text-gray font-medium mb-2">
                          اسم المستلم *
                        </label>
                        <input
                          type="text"
                          id="recipientName"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="أدخل اسم المستلم"
                        />
                      </div>

                      <div>
                        <label htmlFor="recipientEmail" className="block text-gray font-medium mb-2">
                          البريد الإلكتروني للمستلم *
                        </label>
                        <input
                          type="email"
                          id="recipientEmail"
                          name="recipientEmail"
                          value={formData.recipientEmail}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="recipientPhone" className="block text-gray font-medium mb-2">
                          رقم الواتساب للمستلم *
                        </label>
                        <input
                          type="tel"
                          id="recipientPhone"
                          name="recipientPhone"
                          value={formData.recipientPhone}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="+9735XXXXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sender Info */}
                  <div className="bg-beige rounded-xl p-6">
                    <h3 className="font-bold text-gray-dark mb-4">معلومات المرسل</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="senderName" className="block text-gray font-medium mb-2">
                          اسمك *
                        </label>
                        <input
                          type="text"
                          id="senderName"
                          name="senderName"
                          value={formData.senderName}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="أدخل اسمك"
                        />
                      </div>

                      <div>
                        <label htmlFor="senderPhone" className="block text-gray font-medium mb-2">
                          رقم الواتساب للمرسل *
                        </label>
                        <input
                          type="tel"
                          id="senderPhone"
                          name="senderPhone"
                          value={formData.senderPhone}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="+9733XXXXXXX"
                        />
                        <p className="text-xs text-gray-light mt-1">
                          في النسخة النهائية سيتم إرسال تأكيد العملية ورابط البطاقة إلى هذا الرقم عبر الواتساب.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="bg-beige rounded-xl p-6">
                    <h3 className="font-bold text-gray-dark mb-4">رسالتك الشخصية</h3>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray font-medium mb-2">
                        الرسالة *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        maxLength={500}
                        className="input-field resize-none"
                        placeholder="اكتب رسالتك الشخصية هنا..."
                      />
                      <div className="text-left mt-2">
                        <span className="text-sm text-gray-light">
                          {formData.message.length}/500 حرف
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Customization */}
                  <div className="bg-beige rounded-xl p-6">
                    <h3 className="font-bold text-gray-dark mb-4">التخصيص</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fontStyle" className="block text-gray font-medium mb-2">
                          نمط الخط
                        </label>
                        <select
                          id="fontStyle"
                          name="fontStyle"
                          value={formData.fontStyle}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="Tajawal">تجوال (عادي)</option>
                          <option value="TajawalBold">تجوال (عريض)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="cardColor" className="block text-gray font-medium mb-2">
                          لون البطاقة
                        </label>
                        <select
                          id="cardColor"
                          name="cardColor"
                          value={formData.cardColor}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="maroon">عنابي</option>
                          <option value="gold">ذهبي</option>
                          <option value="gray">رمادي</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="btn-outline flex-1"
                    >
                      العودة
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      متابعة للدفع
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
