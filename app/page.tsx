import Link from 'next/link';
import { Heart, Gift, Users, TrendingUp, ArrowLeft, Sparkles, Shield, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OccasionCard from '@/components/OccasionCard';

export default function HomePage() {
  const occasions = [
    {
      title: 'مناسبات الأفراح',
      description: 'بطاقات تهنئة للزفاف والخطوبة والمواليد',
      icon: '🎊',
      count: 24,
      href: '/cards/celebrations',
    },
    {
      title: 'مناسبات دينية',
      description: 'بطاقات للأعياد والمناسبات الإسلامية',
      icon: '🌙',
      count: 18,
      href: '/cards/religious',
    },
    {
      title: 'مناسبات اجتماعية',
      description: 'بطاقات للنجاح والتخرج والترقية',
      icon: '🎓',
      count: 15,
      href: '/cards/social',
    },
    {
      title: 'التعازي والمواساة',
      description: 'بطاقات للتعبير عن المواساة والدعم',
      icon: '🤲',
      count: 12,
      href: '/cards/condolences',
    },
    {
      title: 'الشكر والتقدير',
      description: 'بطاقات للشكر والامتنان',
      icon: '💐',
      count: 20,
      href: '/cards/appreciation',
    },
    {
      title: 'مناسبات عامة',
      description: 'بطاقات متنوعة لجميع المناسبات',
      icon: '🎁',
      count: 30,
      href: '/cards/general',
    },
  ];

  const stats = [
    { icon: Heart, value: '50,000+', label: 'بطاقة مرسلة' },
    { icon: Users, value: '25,000+', label: 'مستخدم نشط' },
    { icon: Gift, value: '2,000,000+', label: 'دينار بحريني تبرعات' },
    { icon: TrendingUp, value: '98%', label: 'نسبة الرضا' },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'تصاميم مميزة',
      description: 'مجموعة واسعة من التصاميم الاحترافية لكل مناسبة',
    },
    {
      icon: Heart,
      title: 'تبرع خيري',
      description: 'قيمة البطاقة تتحول إلى تبرع لمشاريع المؤسسة الإنسانية',
    },
    {
      icon: Clock,
      title: 'إرسال فوري',
      description: 'استلام البطاقة فوراً عبر البريد الإلكتروني أو الرسائل',
    },
    {
      icon: Shield,
      title: 'آمن وموثوق',
      description: 'عمليات دفع آمنة ومعتمدة من المؤسسة الملكية',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section section-spacing">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 text-center lg:text-right animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="w-2 h-2 bg-maroon rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-maroon">منصة البطاقات الخيرية الرقمية</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight">
                  أرسل{' '}
                  <span className="text-gradient-maroon">بطاقة خير</span>
                  <br />
                  واصنع الفرق
                </h1>
                
                <p className="text-lg md:text-xl text-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  عبّر عن مشاعرك في المناسبات السعيدة والحزينة، وساهم في دعم المشاريع الإنسانية من خلال بطاقاتنا الرقمية الخيرية
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link href="/cards/all" className="btn-primary w-full sm:w-auto">
                    ابدأ الآن
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Link>
                  <Link href="/occasions" className="btn-outline w-full sm:w-auto">
                    تصفح المناسبات
                  </Link>
                </div>
              </div>

              {/* Hero Image/Illustration */}
              <div className="relative animate-fade-in">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-gold/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-lighter">
                    <div className="aspect-card bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center">
                      <Heart className="w-24 h-24 text-white" fill="currentColor" />
                    </div>
                    <div className="mt-6 text-center">
                      <div className="text-2xl font-bold text-gray-dark mb-2">بطاقة خير</div>
                      <div className="text-gray">لكل مناسبة معنى</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl mb-4 shadow-maroon">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-maroon mb-2">{stat.value}</div>
                  <div className="text-gray text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Occasions Section */}
        <section className="section-spacing bg-beige">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
                اختر المناسبة المناسبة
              </h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">
                نوفر لك مجموعة واسعة من البطاقات المصممة خصيصاً لكل مناسبة
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <OccasionCard {...occasion} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/occasions" className="btn-secondary">
                عرض جميع المناسبات
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
                لماذا تختار منصة بطاقات الخير؟
              </h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">
                نجمع بين الإبداع والإنسانية في تجربة فريدة
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-beige transition-all duration-base animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-4 shadow-gold">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2">{feature.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section-spacing bg-gradient-to-b from-beige to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
                كيف يعمل؟
              </h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">
                أربع خطوات بسيطة لإرسال بطاقة خير
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'اختر المناسبة', description: 'تصفح المناسبات واختر البطاقة المناسبة' },
                { step: '2', title: 'خصص البطاقة', description: 'أضف رسالتك الشخصية واختر التصميم' },
                { step: '3', title: 'أتمم الدفع', description: 'ادفع بأمان وساهم في مشاريع خيرية' },
                { step: '4', title: 'أرسل البطاقة', description: 'سيتم إرسال البطاقة فوراً للمستلم' },
              ].map((item, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-maroon">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">{item.title}</h3>
                    <p className="text-gray text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-[-2rem] w-8 h-0.5 bg-gradient-to-l from-maroon/20 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-br from-maroon to-maroon-dark text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                ابدأ رحلتك الخيرية اليوم
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                انضم لآلاف المستخدمين الذين يصنعون الفرق من خلال بطاقات الخير
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/cards/all" className="btn-secondary w-full sm:w-auto text-lg px-12 py-4">
                  أرسل بطاقتك الأولى
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
