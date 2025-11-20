import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              كيفية استخدام <span className="text-gradient-maroon">المنصة</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              خطوات بسيطة لإرسال بطاقة خير ودعم المشاريع الإنسانية.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl grid md:grid-cols-4 gap-6">
            {[
              'اختر المناسبة',
              'اختر البطاقة',
              'اكتب رسالتك',
              'أكمل التبرع والإرسال'
            ].map((step, idx) => (
              <div key={idx} className="bg-beige rounded-2xl p-5 text-center">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-maroon text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-dark font-bold mb-1">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
