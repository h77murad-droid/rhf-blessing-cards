import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              الشروط <span className="text-gradient-maroon">والأحكام</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              استخدامك للمنصة يعني موافقتك على هذه الشروط والأحكام.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl space-y-4 text-sm text-gray leading-relaxed">
            <p>
              تُستخدم المنصة لإرسال بطاقات رقمية مرتبطة بتبرعات خيرية لصالح برامج المؤسسة الملكية للأعمال الإنسانية،
              ولا يمكن استرجاع مبالغ التبرع بعد إتمام العملية.
            </p>
            <p>
              تحتفظ المؤسسة بحق تحديث أو تعديل محتوى المنصة أو شروط الاستخدام عند الحاجة.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
