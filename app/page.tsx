import Link from 'next/link';
import {
  Heart,
  Gift,
  Users,
  TrendingUp,
  ArrowLeft,
  Sparkles,
  Shield,
  Clock,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OccasionCard from '@/components/OccasionCard';

export default function HomePage() {
  const occasions = [
    {
      title: 'مناسبات الأفراح',
      description: 'بطاقات تهنئة للزفاف والخطوبة واستقبال المواليد',
      icon: '🎊',
      count: 24,
      href: '/cards/celebrations',
    },
    {
      title: 'المناسبات الدينية',
      description: 'بطاقات للعيدين والمناسبات الإسلامية الخاصة',
      icon: '🌙',
      count: 18,
      href: '/cards/religious',
    },
    {
      title: 'النجاح والإنجاز',
      description: 'بطاقات للنجاح والتخرج والترقية والإنجازات المهنية',
      icon: '🎓',
      count: 15,
      href: '/cards/social',
    },
    {
      title: 'التعزية والمواساة',
      description: 'بطاقات للتعبير عن التعازي والمواساة والدعاء',
      icon: '🤲',
      count: 12,
      href: '/cards/condolences',
    },
    {
      title: 'الشكر والتقدير',
      description: 'بطاقات للشكر والامتنان والتقدير للأفراد والجهات',
      icon: '💐',
      count: 20,
      href: '/cards/appreciation',
    },
    {
      title: 'مناسبات عامة',
      description: 'بطاقات متنوعة لمختلف المناسبات الاجتماعية والخاصة',
      icon: '🎁',
      count: 30,
      href: '/cards/general',
    },
  ];

  const stats = [
    { icon: Heart, value: 'آلاف+', label: 'البطاقات الخيرية المرسلة' },
    { icon: Users, value: 'آلاف+', label: 'المستفيدين والمتبرعين' },
    { icon: Gift, value: 'مبالغ كبيرة', label: 'تم توجيهها لمشاريع خيرية' },
    { icon: TrendingUp, value: 'رضا عالٍ', label: 'عن تجربة الإهداء والتبرع' },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'تصاميم بعناية',
      description: 'بطاقات أنيقة ومصممة باحتراف لتناسب هوية المؤسسة وروح المناسبة.',
    },
    {
      icon: Heart,
      title: 'أثر خيري مضاعف',
      description: 'كل بطاقة تهنئة أو تعزية تتحول إلى تبرع يدعم برامج المؤسسة الإنسانية.',
    },
    {
      icon: Clock,
      title: 'إرسال فوري وسهل',
      description: 'إنشاء البطاقة وإرسالها يتم في دقائق قليلة إلى المستلم عبر القنوات المتاحة.',
    },
    {
      icon: Shield,
      title: 'موثوقية وأمان',
      description: 'عمليات الدفع والتبرع تتم عبر قنوات معتمدة وتحت إشراف المؤسسة الملكية للأعمال الإنسانية.',
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
                  <span className="w-2 h-2 bg-maroon rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-maroon">
                    منصة البطاقات الخيرية الرقمية من المؤسسة الملكية للأعمال الإنسانية
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight">
                  أرسل{' '}
                  <span className="text-gradient-maroon">بطاقة خير</span>
                  <br />
                  واصنع الأثر الجميل
                </h1>

                <p className="text-lg md:text-xl text-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  شارك مشاعرك في الأفراح والأحزان برسالة راقية، واجعل كل بطاقة تهنئة
                  أو تعزية سببًا في دعم الأيتام والأسر المحتاجة عبر برامج المؤسسة
                  الملكية للأعمال الإنسانية.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-gold/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-lighter">
                    <div className="aspect-card bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl flex items-center justify-center">
                      <Heart className="w-24 h-24 text-white" fill="currentColor" />
                    </div>
                    <div className="mt-6 text-center">
                      <div className="text-2xl font-bold text-gray-dark mb-2">بطاقة خير</div>
                      <div className="text-gray">كلمة طيبة وأجر مستمر</div>
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
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl mb-4 shadow-maroon">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-maroon mb-2">
                    {stat.value}
                  </div>
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
                اختر المناسبة التي تعبر عن رسالتك
              </h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">
                صممنا بطاقات خاصة لمختلف المناسبات لتصل رسالتك بلغة راقية وبأثر خيري دائم.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {occasions.map((occasion, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
                تجربة متكاملة تجمع بين جمال التصميم وصدق الرسالة وأثر التبرع.
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
                كيف تعمل المنصة؟
              </h2>
              <p className="text-lg text-gray max-w-2xl mx-auto">
                أربع خطوات بسيطة تجعل من رسالتك تحية جميلة وتبرعًا يصل لمستحقيه.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'اختر المناسبة',
                  description: 'تصفح المناسبات المتاحة واختر البطاقة الأقرب لرسالتك.',
                },
                {
                  step: '2',
                  title: 'خصص البطاقة',
                  description: 'اكتب رسالتك، واختر التصميم المناسب وطريقة الإرسال.',
                },
                {
                  step: '3',
                  title: 'أتمم التبرع',
                  description: 'قم بالدفع بأمان، وتُوجَّه قيمة البطاقة لمشاريع المؤسسة.',
                },
                {
                  step: '4',
                  title: 'أرسل البطاقة',
                  description: 'تصل البطاقة بشكل فوري للمستلم عبر القنوات المتاحة.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-dark rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-maroon">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-dark mb-2">{item.title}</h3>
                    <p className="text-gray text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-[-2rem] w-8 h-0.5 bg-gradient-to-l from-maroon/20 to-transparent" />
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
                كن جزءًا من قصة خير، واجعل رسائلك الودية وسيلة لدعم من هم في حاجة إلى العون
                والرعاية.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/cards/all"
                  className="btn-secondary w-full sm:w-auto text-lg px-12 py-4"
                >
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
