import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              تواصل <span className="text-gradient-maroon">معنا</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              يسعد فريق المؤسسة الملكية للأعمال الإنسانية باستقبال استفساراتكم وملاحظاتكم حول المنصة.
            </p>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-10 max-w-5xl">
            {/* معلومات الاتصال */}
            <div className="space-y-4 bg-beige rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">معلومات التواصل</h2>
              <p className="text-sm text-gray leading-relaxed mb-4">
                للبلاغات الفنية أو الاستفسارات المتعلقة باستخدام المنصة، يمكنكم التواصل عبر القنوات التالية:
              </p>
              <ul className="space-y-3 text-sm text-gray">
                <li>📧 البريد الإلكتروني: info@rhf.gov.bh</li>
                <li>☎️ الهاتف: ‎+973 17313666</li>
                <li>📍 الموقع: مملكة البحرين – المنامة</li>
              </ul>
            </div>

            {/* نموذج مبسط (غير فعّال حالياً) */}
            <div className="bg-beige rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-dark mb-4">نموذج تواصل</h2>
              <p className="text-sm text-gray mb-4">
                يمكنكم استخدام هذا النموذج لإرسال ملاحظاتكم، وسيتم توجيهها للفريق المختص.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray text-sm font-medium mb-1">الاسم الكامل</label>
                  <input className="input-field" placeholder="اكتب اسمك هنا" />
                </div>
                <div>
                  <label className="block text-gray text-sm font-medium mb-1">البريد الإلكتروني</label>
                  <input className="input-field" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-gray text-sm font-medium mb-1">الرسالة</label>
                  <textarea className="input-field h-28" placeholder="اكتب رسالتك هنا..." />
                </div>
                <button type="button" className="btn-primary w-full">
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
