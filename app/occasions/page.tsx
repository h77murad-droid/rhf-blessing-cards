import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OccasionCard from '@/components/OccasionCard';

export default function OccasionsPage() {
  const occasions = [
    {
      title: 'مناسبات الأفراح',
      description:
        'بطاقات تهنئة راقية للزفاف والخطوبة والمواليد والاحتفالات العائلية السعيدة.',
      icon: '🎊',
      count: 24,
      href: '/cards/celebrations',
    },
    {
      title: 'المناسبات الدينية',
      description:
        'بطاقات للأعياد والمناسبات الإسلامية والأدعية والتهاني بروح إيمانية لطيفة.',
      icon: '🌙',
      count: 18,
      href: '/cards/religious',
    },
    {
      title: 'النجاح والإنجاز',
      description:
        'بطاقات للنجاح والتخرج والترقية والإنجازات المهنية والشخصية المميزة.',
      icon: '🎓',
      count: 15,
      href: '/cards/social',
    },
    {
      title: 'التعازي والمواساة',
      description:
        'بطاقات للتعبير عن التعازي والمواساة والدعاء، بصياغات هادئة ومحترمة.',
      icon: '🤲',
      count: 12,
      href: '/cards/condolences',
    },
    {
      title: 'الشكر والتقدير',
      description:
        'بطاقات للشكر والامتنان والتقدير للأفراد والجهات على جهودهم ومواقفهم.',
      icon: '💐',
      count: 20,
      href: '/cards/appreciation',
    },
    {
      title: 'مناسبات عامة',
      description:
        'بطاقات متنوعة لمختلف المناسبات الاجتماعية والخاصة طوال العام.',
      icon: '🎁',
      count: 30,
      href: '/cards/general',
    },
    {
      title: 'أعياد الميلاد',
      description:
        'بطاقات تهنئة خاصة لأعياد الميلاد للكبار والصغار بأسلوب جميل وبسيط.',
      icon: '🎂',
      count: 22,
      href: '/cards/birthday',
    },
    {
      title: 'الشفاء والسلامة',
      description:
        'بطاقات للدعاء بالشفاء العاجل والسلامة، تحمل كلمات دعم ولطف ومواساة.',
      icon: '🌺',
      count: 10,
      href: '/cards/get-well',
    },
    {
      title: 'رمضان والعيدين',
      description:
        'بطاقات خاصة لشهر رمضان المبارك وعيد الفطر وعيد الأضحى بعبارات روحانية.',
      icon: '🕌',
      count: 16,
      href: '/cards/ramadan-eid',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-24 pb-16">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
                <span className="text-2xl">🎉</span>
                <span className="text-sm font-medium text-maroon">
                  جميع المناسبات في مكان واحد
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">
                اختر المناسبة التي{' '}
                <span className="text-gradient-maroon">تعبر عن رسالتك</span>
              </h1>

              <p className="text-lg text-gray leading-relaxed">
                صممنا بطاقات خير رقمية لمختلف اللحظات في حياتك؛ من الأفراح والإنجازات
                إلى المواساة والدعم، لتصل مشاعرك برسالة لطيفة وأثر خيري مستمر.
              </p>
            </div>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <OccasionCard {...occasion} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-spacing bg-beige">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-dark mb-4">
                    كل بطاقة خير تصنع فرقاً حقيقياً
                  </h2>
                  <p className="text-lg text-gray leading-relaxed">
                    عندما ترسل بطاقة خير عبر هذه المنصة، أنت لا تكتفي بإرسال تهنئة أو
                    رسالة لطيفة، بل تجعل قيمتها تبرعاً موجهاً لدعم البرامج الإنسانية
                    التي تقدمها المؤسسة الملكية للأعمال الإنسانية في مملكة البحرين.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-maroon">
                      <span className="text-3xl">💝</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">
                      اختر بطاقتك
                    </h3>
                    <p className="text-gray text-sm">
                      استعرض البطاقات بحسب المناسبة واختيار التصميم الأنسب لرسالتك.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <span className="text-3xl">✍️</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">
                      خصص رسالتك
                    </h3>
                    <p className="text-gray text-sm">
                      أضف كلماتك الخاصة، واملأ بيانات المستلم ليصل المحتوى بصيغة شخصية.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-maroon">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">
                      ساهم في الخير
                    </h3>
                    <p className="text-gray text-sm">
                      تتحول قيمة البطاقة إلى تبرع لصالح الأيتام والأسر المحتاجة ضمن مشاريع
                      المؤسسة.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link href="/cards/all" className="btn-primary">
                    تصفح جميع البطاقات
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
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
