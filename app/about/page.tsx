import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              عن <span className="text-gradient-maroon">منصة بطاقات الخير</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              منصة رقمية تابعة للمؤسسة الملكية للأعمال الإنسانية، تهدف لربط التهاني والمشاعر
              الجميلة بأثر خيري يخدم الأيتام والأسر المحتاجة والمشاريع الإنسانية.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl space-y-8">
            <div className="bg-beige rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">فكرة المنصة</h2>
              <p className="text-gray leading-relaxed text-sm md:text-base">
                بدلاً من الاكتفاء ببطاقة تهنئة تقليدية، تم تصميم منصة بطاقات الخير لتكون
                وسيلة تجمع بين المجاملة الراقية والتبرع الخيري، بحيث تتحول قيمة البطاقة إلى
                مساهمة مباشرة في برامج ومشاريع المؤسسة الملكية للأعمال الإنسانية.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-beige rounded-2xl p-5">
                <h3 className="text-lg font-bold text-gray-dark mb-2">الرسالة</h3>
                <p className="text-sm text-gray">
                  تعزيز ثقافة العطاء من خلال أدوات رقمية بسيطة قريبة من حياة الناس اليومية.
                </p>
              </div>
              <div className="bg-beige rounded-2xl p-5">
                <h3 className="text-lg font-bold text-gray-dark mb-2">الرؤية</h3>
                <p className="text-sm text-gray">
                  أن تكون بطاقات الخير الخيار الأول للتهنئة والمواساة ذات الأثر الإنساني.
                </p>
              </div>
              <div className="bg-beige rounded-2xl p-5">
                <h3 className="text-lg font-bold text-gray-dark mb-2">القيم</h3>
                <p className="text-sm text-gray">
                  الموثوقية، الشفافية، الرحمة، والابتكار في خدمة العمل الخيري.
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
