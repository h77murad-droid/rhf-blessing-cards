import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              الأسئلة <span className="text-gradient-maroon">الشائعة</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              إجابات لأكثر الأسئلة تكراراً حول استخدام منصة بطاقات الخير.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl space-y-4">
            <div className="bg-beige rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-dark mb-2">
                هل قيمة البطاقة تُعتبر تبرعاً خيرياً؟
              </h2>
              <p className="text-sm text-gray leading-relaxed">
                نعم، قيمة البطاقة تُحوّل لدعم المشاريع والبرامج التي تنفذها المؤسسة الملكية للأعمال الإنسانية.
              </p>
            </div>
            <div className="bg-beige rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-dark mb-2">
                كيف يتم إرسال البطاقة للمستلم؟
              </h2>
              <p className="text-sm text-gray leading-relaxed">
                يتم إرسال البطاقة إلكترونياً إلى البريد الإلكتروني أو عبر رابط يمكن مشاركته مع المستلم.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
