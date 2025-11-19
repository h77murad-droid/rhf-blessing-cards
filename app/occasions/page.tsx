import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OccasionCard from '@/components/OccasionCard';

export default function OccasionsPage() {
  const occasions = [
    {
      title: 'مناسبات الأفراح',
      description: 'بطاقات تهنئة للزفاف والخطوبة والمواليد والاحتفالات السعيدة',
      icon: '🎊',
      count: 24,
      href: '/cards/celebrations',
    },
    {
      title: 'مناسبات دينية',
      description: 'بطاقات للأعياد والمناسبات الإسلامية والأدعية والتهاني',
      icon: '🌙',
      count: 18,
      href: '/cards/religious',
    },
    {
      title: 'مناسبات اجتماعية',
      description: 'بطاقات للنجاح والتخرج والترقية والإنجازات المختلفة',
      icon: '🎓',
      count: 15,
      href: '/cards/social',
    },
    {
      title: 'التعازي والمواساة',
      description: 'بطاقات للتعبير عن المواساة والدعم في الأوقات الصعبة',
      icon: '🤲',
      count: 12,
      href: '/cards/condolences',
    },
    {
      title: 'الشكر والتقدير',
      description: 'بطاقات للشكر والامتنان والتقدير لمن يستحق',
      icon: '💐',
      count: 20,
      href: '/cards/appreciation',
    },
    {
      title: 'مناسبات عامة',
      description: 'بطاقات متنوعة لجميع المناسبات والأحداث الخاصة',
      icon: '🎁',
      count: 30,
      href: '/cards/general',
    },
    {
      title: 'أعياد ميلاد',
      description: 'بطاقات خاصة للاحتفال بأعياد الميلاد',
      icon: '🎂',
      count: 22,
      href: '/cards/birthday',
    },
    {
      title: 'شفاء عاجل',
      description: 'بطاقات للدعاء بالشفاء العاجل والسلامة',
      icon: '🌺',
      count: 10,
      href: '/cards/get-well',
    },
    {
      title: 'تهنئة رمضان والعيد',
      description: 'بطاقات خاصة لشهر رمضان المبارك والعيدين',
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
                <span className="text-sm font-medium text-maroon">جميع المناسبات</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark">
                اختر المناسبة{' '}
                <span className="text-gradient-maroon">المناسبة</span>
              </h1>
              
              <p className="text-lg text-gray leading-relaxed">
                نوفر لك مجموعة واسعة ومتنوعة من البطاقات المصممة خصيصاً لكل مناسبة في حياتك
              </p>
            </div>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
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
                    كل بطاقة تصنع الفرق
                  </h2>
                  <p className="text-lg text-gray leading-relaxed">
                    عندما ترسل بطاقة خير، أنت لا تعبّر عن مشاعرك فقط، بل تساهم أيضاً في دعم المشاريع الإنسانية للمؤسسة الملكية
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-maroon">
                      <span className="text-3xl">💝</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">اختر بطاقتك</h3>
                    <p className="text-gray text-sm">من بين مئات التصاميم المميزة</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-gold">
                      <span className="text-3xl">✍️</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">خصص رسالتك</h3>
                    <p className="text-gray text-sm">أضف لمستك الشخصية الخاصة</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-maroon">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">ساهم بالخير</h3>
                    <p className="text-gray text-sm">قيمة البطاقة تذهب للأعمال الخيرية</p>
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
