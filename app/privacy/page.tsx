import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              سياسة <span className="text-gradient-maroon">الخصوصية</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              نلتزم بحماية بياناتكم الشخصية وفقاً لسياسات المؤسسة الملكية للأعمال الإنسانية.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom max-w-4xl space-y-4 text-sm text-gray leading-relaxed">
            <p>
              يتم استخدام البيانات التي يقدمها المستخدم فقط لأغراض تشغيل المنصة، وإرسال البطاقات،
              وإتمام عمليات التبرع، وتحسين الخدمات.
            </p>
            <p>
              لا يتم بيع أو مشاركة البيانات مع أي طرف تجاري، ويُقتصر الاطلاع على البيانات على الفرق المختصة داخل المؤسسة.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
