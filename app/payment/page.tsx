'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Shield, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { recipientWhatsapp?: string; senderWhatsapp?: string };
}) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    phone: '',
  });

  const recipientWhatsapp = searchParams.recipientWhatsapp || '';
  const senderWhatsapp = searchParams.senderWhatsapp || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // في الإنتاج تتم عملية الدفع الفعلية
    const orderId = Math.random().toString(36).substring(7);

    const query = new URLSearchParams({
      recipientWhatsapp: recipientWhatsapp,
      senderWhatsapp: senderWhatsapp,
    });

    router.push(`/delivered/${orderId}?${query.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm font-medium text-success">عملية دفع آمنة ومشفرة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              إتمام{' '}
              <span className="text-gradient-maroon">التبرع</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              أكمل عملية الدفع لإرسال بطاقة الخير
            </p>
          </div>
        </section>

        {/* Payment Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-lighter p-8">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-maroon" />
                    معلومات الدفع
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="mb-8">
                    <label className="block text-gray font-medium mb-4">اختر طريقة الدفع</label>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('credit-card')}
                        className={`p-4 rounded-lg border-2 transition-all duration-base ${
                          paymentMethod === 'credit-card'
                            ? 'border-maroon bg-maroon/5'
                            : 'border-gray-lighter hover:border-gray-light'
                        }`}
                      >
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-maroon" />
                        <div className="text-sm font-medium text-gray-dark">بطاقة ائتمان</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('benefit')}
                        className={`p-4 rounded-lg border-2 transition-all duration-base ${
                          paymentMethod === 'benefit'
                            ? 'border-maroon bg-maroon/5'
                            : 'border-gray-lighter hover:border-gray-light'
                        }`}
                      >
                        <div className="w-8 h-8 mx-auto mb-2 text-maroon font-bold text-lg">B</div>
                        <div className="text-sm font-medium text-gray-dark">Benefit</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('apple-pay')}
                        className={`p-4 rounded-lg border-2 transition-all duration-base ${
                          paymentMethod === 'apple-pay'
                            ? 'border-maroon bg-maroon/5'
                            : 'border-gray-lighter hover:border-gray-light'
                        }`}
                      >
                        {/* تقدر تغيرها لاحقاً إلى SVG شعار Apple Pay */}
                        <div className="w-8 h-8 mx-auto mb-2 text-maroon font-bold"> Pay</div>
                        <div className="text-sm font-medium text-gray-dark">Apple Pay</div>
                      </button>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {paymentMethod === 'credit-card' && (
                      <>
                        <div>
                          <label htmlFor="cardNumber" className="block text-gray font-medium mb-2">
                            رقم البطاقة *
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            maxLength={19}
                            placeholder="1234 5678 9012 3456"
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label htmlFor="cardName" className="block text-gray font-medium mb-2">
                            اسم حامل البطاقة *
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                            placeholder="الاسم كما يظهر على البطاقة"
                            className="input-field"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiryDate" className="block text-gray font-medium mb-2">
                              تاريخ الانتهاء *
                            </label>
                            <input
                              type="text"
                              id="expiryDate"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              required
                              maxLength={5}
                              placeholder="MM/YY"
                              className="input-field"
                            />
                          </div>

                          <div>
                            <label htmlFor="cvv" className="block text-gray font-medium mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleChange}
                              required
                              maxLength={4}
                              placeholder="123"
                              className="input-field"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Contact Information */}
                    <div className="pt-6 border-t border-gray-lighter">
                      <h3 className="text-lg font-bold text-gray-dark mb-4">معلومات الاتصال</h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-gray font-medium mb-2">
                            البريد الإلكتروني *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-gray font-medium mb-2">
                            رقم الهاتف *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+973 XXXX XXXX"
                            className="input-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-start gap-3 p-4 bg-beige rounded-lg">
                      <Lock className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray">
                        جميع المعاملات مؤمنة بتشفير SSL. نحن لا نقوم بتخزين معلومات البطاقة الائتمانية.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => router.back()}
                        className="btn-outline flex-1"
                      >
                        العودة
                      </button>
                      <button type="submit" className="btn-primary flex-1">
                        إتمام الدفع (10 د.ب)
                        <ArrowLeft className="w-5 h-5 mr-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-beige rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-dark mb-6">ملخص الطلب</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray">البطاقة:</span>
                        <span className="font-medium text-gray-dark">بطاقة خير</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray">المناسبة:</span>
                        <span className="font-medium text-gray-dark">الأفراح</span>
                      </div>

                      <div className="border-t border-gray-lighter pt-4">
                        <div className="flex items-center justify-between text-lg">
                          <span className="font-bold text-gray-dark">المجموع:</span>
                          <span className="font-bold text-maroon text-2xl">10 د.ب</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gold/20">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-dark text-sm mb-1">تبرع خيري</p>
                          <p className="text-xs text-gray leading-relaxed">
                            كامل المبلغ سيذهب لدعم المشاريع الإنسانية لمؤسسة البحرين الملكية.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <Shield className="w-6 h-6 mx-auto mb-1 text-success" />
                      <p className="text-xs text-gray">آمن</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <Lock className="w-6 h-6 mx-auto mb-1 text-maroon" />
                      <p className="text-xs text-gray">مشفر</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <CheckCircle className="w-6 h-6 mx-auto mb-1 text-success" />
                      <p className="text-xs text-gray">موثوق</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
