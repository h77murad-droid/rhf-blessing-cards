'use client';

import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardItem from '@/components/CardItem';
import { supabase } from '@/lib/supabaseClient';

type OccasionSlug =
  | 'all'
  | 'celebrations'
  | 'religious'
  | 'social'
  | 'condolences'
  | 'appreciation'
  | 'general';

interface DbCard {
  id: string;
  title_ar: string;
  description_ar: string | null;
  price: number | null;
  image_url: string | null;
  // لو لاحقاً حبيت تضيف حقل للمناسبة (نص) في الجدول تحطه هنا
  // occasion_label_ar?: string | null;
}

interface UiCard {
  id: string;
  title: string;
  occasion: string;
  price: number;
  image?: string;
}

export default function CardsGalleryPage({
  params,
}: {
  params: { occasion: string };
}) {
  // نحدد الفلتر المبدئي من عنوان الرابط
  const getInitialFilter = (slug: string): OccasionSlug => {
    switch (slug) {
      case 'celebrations':
      case 'religious':
      case 'social':
      case 'condolences':
      case 'appreciation':
      case 'general':
        return slug;
      case 'all':
      default:
        return 'all';
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<OccasionSlug>(
    getInitialFilter(params.occasion),
  );

  const [cards, setCards] = useState<UiCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const filters: { id: OccasionSlug; label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'celebrations', label: 'مناسبات الأفراح' },
    { id: 'religious', label: 'المناسبات الدينية' },
    { id: 'social', label: 'النجاح والإنجاز' },
    { id: 'condolences', label: 'التعازي والمواساة' },
    { id: 'appreciation', label: 'الشكر والتقدير' },
    { id: 'general', label: 'مناسبات عامة' },
  ];

  // ❶ جلب البيانات من Supabase أول ما تفتح الصفحة
  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setErrorMsg(null);

        const { data, error } = await supabase
          .from('cards')
          .select('id, title_ar, description_ar, price, image_url')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Supabase error:', error);
          setErrorMsg('حدث خطأ أثناء جلب البطاقات. يرجى المحاولة لاحقاً.');
          return;
        }

        const dbCards = (data || []) as DbCard[];

        // تحويل بيانات Supabase إلى الشكل اللي يفهمه CardItem
        const uiCards: UiCard[] = dbCards.map((card) => ({
          id: card.id,
          title: card.title_ar || 'بطاقة خير',
          occasion: 'مناسبة خيرية', // مؤقتاً إلى أن نربطها بحقل من الجدول أو جدول المناسبات
          price: card.price !== null ? Number(card.price) : 10,
          image: card.image_url || undefined, // لو فاضي بيستخدم الصورة الافتراضية من CardItem
        }));

        setCards(uiCards);
      } catch (err) {
        console.error(err);
        setErrorMsg('تعذر الاتصال بقاعدة البيانات.');
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  // ❷ الفلترة (حالياً بالبحث فقط، والفلتر حسب النوع بنربطه لاحقاً مع حقول Supabase)
  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // حالياً ما عندنا حقل نوع/تصنيف من Supabase، فبنخلي الفلتر "شَكلي" لحد ما نربط المناسبات
    const matchesFilter = selectedFilter === 'all';

    return matchesSearch && matchesFilter;
  });

  // عنوان تفاعلي حسب الفلتر الحالي
  const currentFilterLabel =
    filters.find((f) => f.id === selectedFilter)?.label || 'جميع البطاقات';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              معرض{' '}
              <span className="text-gradient-maroon">بطاقات الخير</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              تصفح البطاقات الرقمية الخيرية المصممة لمختلف المناسبات، واختر
              البطاقة التي تعبر عن رسالتك وتحقق أثرًا إنسانيًا في الوقت نفسه.
            </p>
            <p className="mt-3 text-sm text-gray-light">
              العرض الحالي:{' '}
              <span className="font-medium text-maroon">
                {currentFilterLabel}
              </span>
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="pb-8 bg-gradient-to-b from-beige to-white">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث باسم البطاقة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pr-12"
                />
              </div>

              {/* Filters (حالياً شكلية، نربطها فعلياً بعد ما نحدد هيكلة الـ DB) */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <Filter className="w-5 h-5 text-gray flex-shrink-0" />
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-base ${
                      selectedFilter === filter.id
                        ? 'bg-maroon text-white shadow-maroon'
                        : 'bg-beige text-gray hover:bg-beige-light'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            {/* حالة التحميل / الخطأ */}
            {loading && (
              <div className="text-center py-16">
                <p className="text-gray">جاري تحميل البطاقات...</p>
              </div>
            )}

            {errorMsg && !loading && (
              <div className="text-center py-16">
                <p className="text-error">{errorMsg}</p>
              </div>
            )}

            {!loading && !errorMsg && (
              <>
                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-gray">
                    تم العثور على{' '}
                    <span className="font-bold text-maroon">
                      {filteredCards.length}
                    </span>{' '}
                    بطاقة تطابق معايير البحث.
                  </p>
                </div>

                {/* Cards Grid */}
                {filteredCards.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCards.map((card, index) => (
                      <div
                        key={card.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <CardItem {...card} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-gray-light" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-dark mb-2">
                      لا توجد نتائج مطابقة
                    </h3>
                    <p className="text-gray">
                      جرّب تعديل كلمات البحث للاطلاع على بطاقات أخرى.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-beige">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                لم تجد البطاقة التي في بالك؟
              </h2>
              <p className="text-lg mb-8 text-white/90">
                نعمل على إضافة تصاميم جديدة لبطاقات الخير بشكل مستمر. اشترك في
                النشرة البريدية ليصلك كل جديد من المنصة التابعة للمؤسسة الملكية
                للأعمال الإنسانية.
              </p>
              <button className="btn-secondary">
                اشترك في النشرة البريدية
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
