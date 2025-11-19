'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Shield, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // في بيئة الإنتاج يتم الربط مع بوابة دفع حقيقية
    // هنا نحاكي عملية دفع ناجحة
    const orderId = Math.random().toString(36).substring(7);
    router.push(`/delivered/${orderId}`);
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
              <span className="text-sm font-medium text-success">
                عملية دفع آمنة ومشفرة
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              إتمام{' '}
              <span className="text-gradient-maroon">التبرع وإرسال البطاقة</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              الرجاء إكمال بيانات الدفع لإتمام تبرعك وإرسال بطاقة الخير عن طريق
              المنصة التابعة للمؤسسة الملكية للأعمال الإنسانية.
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
                    <label className="block text-gray font-medium mb-4">
                      اختر طريقة الدفع
                    </label>
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
                        <div className="text-sm font-medium text-gray-dark">
                          بطاقة ائتمان / خصم
                        </div>
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
                        <div className="w-8 h-8 mx-auto mb-2 text-maroon font-bold text-lg">
                          B
                        </div>
                        <div className="text-sm font-medium text-gray-dark">
                          BenefitPay
                        </div>
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
                        <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
  <svg
    viewBox="0 0 100 100"
    className="w-10 h-10 fill-current text-maroon"
  >
    <path d="M85.3 32.6c-2.3 1-4.8 1.6-7.4 1.9 2.7-1.6 4.7-4.1 5.7-7.2-2.5 1.5-5.2 2.5-8.1 3.1-2.4-2.5-5.9-4-9.7-4-7.3 0-13.2 5.9-13.2 13.2 0 1 .1 2 .3 3-11-0.5-20.8-5.8-27.3-13.7-1.2 2-1.8 4.2-1.8 6.6 0 4.6 2.3 8.6 5.9 10.9-2.1-0.1-4.1-0.6-5.8-1.6v0.2c0 6.4 4.5 11.8 10.5 13-1.1 0.3-2.4 0.4-3.6 0.4-0.9 0-1.7-0.1-2.6-0.2 1.7 5.3 6.6 9.2 12.4 9.3-4.5 3.5-10.3 5.6-16.6 5.6-1.1 0-2.2-0.1-3.3-0.2 5.9 3.8 12.9 6 20.4 6 24.5 0 37.9-20.3 37.9-37.9 0-0.6 0-1.1 0-1.7 2.6-1.9 4.8-4.3 6.6-7z"/>
    <text x="0" y="95" fontSize="40" fontWeight="bold">Pay</text>
  </svg>
</div>

                        <div className="text-sm font-medium text-gray-dark">
                          Apple Pay
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Payment Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {paymentMethod === 'credit-card' && (
                      <>
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-gray font-medium mb-2"
                          >
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
                          <label
                            htmlFor="cardName"
                            className="block text-gray font-medium mb-2"
                          >
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
                            <label
                              htmlFor="expiryDate"
                              className="block text-gray font-medium mb-2"
                            >
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
                            <label
                              htmlFor="cvv"
                              className="block text-gray font-medium mb-2"
                            >
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
                      <h3 className="text-lg font-bold text-gray-dark mb-4">
                        معلومات التواصل لإرسال البطاقة
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-gray font-medium mb-2"
                          >
                            البريد الإلكتروني *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@domain.com"
                            className="input-field"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-gray font-medium mb-2"
                          >
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
                        تتم معالجة المدفوعات عبر بوابات دفع معتمدة وباستخدام تشفير SSL.
                        لا يتم تخزين بيانات البطاقة الائتمانية في أنظمة المنصة.
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
                        إتمام الدفع بمبلغ 10 د.ب
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
                    <h3 className="text-xl font-bold text-gray-dark mb-6">
                      ملخص الطلب
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray">نوع البطاقة:</span>
                        <span className="font-medium text-gray-dark">
                          بطاقة خير رقمية
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray">المناسبة:</span>
                        <span className="font-medium text-gray-dark">
                          مناسبة أفراح
                        </span>
                      </div>

                      <div className="border-t border-gray-lighter pt-4">
                        <div className="flex items-center justify-between text-lg">
                          <span className="font-bold text-gray-dark">
                            إجمالي التبرع:
                          </span>
                          <span className="font-bold text-maroon text-2xl">
                            10 د.ب
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gold/20">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-dark text-sm mb-1">
                            تبرع خيري عبر المؤسسة الملكية للأعمال الإنسانية
                          </p>
                          <p className="text-xs text-gray leading-relaxed">
                            يتم توجيه قيمة البطاقة لدعم البرامج والمشاريع الإنسانية التي
                            تشرف عليها المؤسسة لصالح الأيتام والأسر المحتاجة.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <Shield className="w-6 h-6 mx-auto mb-1 text-success" />
                      <p className="text-xs text-gray">دفع آمن</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <Lock className="w-6 h-6 mx-auto mb-1 text-maroon" />
                      <p className="text-xs text-gray">بيانات مشفرة</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-lighter">
                      <CheckCircle className="w-6 h-6 mx-auto mb-1 text-success" />
                      <p className="text-xs text-gray">جهة موثوقة</p>
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
