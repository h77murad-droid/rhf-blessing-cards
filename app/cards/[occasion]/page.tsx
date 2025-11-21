'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardItem from '@/components/CardItem';

type OccasionSlug =
  | 'all'
  | 'celebrations'
  | 'religious'
  | 'social'
  | 'condolences'
  | 'appreciation'
  | 'general';

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

  // بيانات تجريبية – مستقبلاً تستبدل ببيانات من قاعدة البيانات / API
  const allCards = [
    { id: '1', title: 'بطاقة زفاف مباركة', occasion: 'الأفراح', price: 10 },
    { id: '2', title: 'تهنئة مولود جديد', occasion: 'الأفراح', price: 8 },
    { id: '3', title: 'عيد مبارك', occasion: 'دينية', price: 5 },
    { id: '4', title: 'رمضان كريم', occasion: 'دينية', price: 5 },
    { id: '5', title: 'مبروك التخرج', occasion: 'اجتماعية', price: 7 },
    { id: '6', title: 'ألف مبروك الترقية', occasion: 'اجتماعية', price: 7 },
    { id: '7', title: 'عزاء ومواساة', occasion: 'تعازي', price: 10 },
    { id: '8', title: 'الله يرحمه', occasion: 'تعازي', price: 10 },
    { id: '9', title: 'شكراً لك', occasion: 'شكر', price: 6 },
    { id: '10', title: 'تقديراً لجهودك', occasion: 'شكر', price: 8 },
    { id: '11', title: 'عيد ميلاد سعيد', occasion: 'عامة', price: 5 },
    { id: '12', title: 'يوم جميل', occasion: 'عامة', price: 5 },
    { id: '13', title: 'تهنئة خطوبة', occasion: 'الأفراح', price: 10 },
    { id: '14', title: 'جمعة مباركة', occasion: 'دينية', price: 3 },
    { id: '15', title: 'مبروك النجاح', occasion: 'اجتماعية', price: 7 },
    { id: '16', title: 'شفاك الله', occasion: 'عامة', price: 5 },
  ];

  const filters: { id: OccasionSlug; label: string }[] = [
    { id: 'all', label: 'الكل' },
    { id: 'celebrations', label: 'مناسبات الأفراح' },
    { id: 'religious', label: 'المناسبات الدينية' },
    { id: 'social', label: 'النجاح والإنجاز' },
    { id: 'condolences', label: 'التعازي والمواساة' },
    { id: 'appreciation', label: 'الشكر والتقدير' },
    { id: 'general', label: 'مناسبات عامة' },
  ];

  const filteredCards = allCards.filter((card) => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'celebrations' && card.occasion === 'الأفراح') ||
      (selectedFilter === 'religious' && card.occasion === 'دينية') ||
      (selectedFilter === 'social' && card.occasion === 'اجتماعية') ||
      (selectedFilter === 'condolences' && card.occasion === 'تعازي') ||
      (selectedFilter === 'appreciation' && card.occasion === 'شكر') ||
      (selectedFilter === 'general' && card.occasion === 'عامة');

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
              تصفح البطاقات الرقمية الخيرية المصممة لمختلف المناسبات، واختر البطاقة
              التي تعبر عن رسالتك وتحقق أثرًا إنسانيًا في الوقت نفسه.
            </p>
            <p className="mt-3 text-sm text-gray-light">
              العرض الحالي: <span className="font-medium text-maroon">{currentFilterLabel}</span>
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
                  placeholder="ابحث باسم البطاقة أو المناسبة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pr-12"
                />
              </div>

              {/* Filters */}
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
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray">
                تم العثور على{' '}
                <span className="font-bold text-maroon">{filteredCards.length}</span>{' '}
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
                <h3 className="text-2xl font-bold text-gray-dark mb-2">لا توجد نتائج مطابقة</h3>
                <p className="text-gray">
                  جرّب تعديل كلمات البحث أو تغيير الفلاتر للاطلاع على بطاقات أخرى.
                </p>
              </div>
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
                نعمل على إضافة تصاميم جديدة لبطاقات الخير بشكل مستمر. اشترك في النشرة
                البريدية ليصلك كل جديد من المنصة التابعة للمؤسسة الملكية للأعمال الإنسانية.
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
