'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardItem from '@/components/CardItem';

export default function CardsGalleryPage({ params }: { params: { occasion: string } }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data - in production this would come from API/database
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

  const filters = [
    { id: 'all', label: 'الكل' },
    { id: 'celebrations', label: 'الأفراح' },
    { id: 'religious', label: 'دينية' },
    { id: 'social', label: 'اجتماعية' },
    { id: 'condolences', label: 'تعازي' },
    { id: 'appreciation', label: 'شكر' },
    { id: 'general', label: 'عامة' },
  ];

  const filteredCards = allCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'celebrations' && card.occasion === 'الأفراح') ||
      (selectedFilter === 'religious' && card.occasion === 'دينية') ||
      (selectedFilter === 'social' && card.occasion === 'اجتماعية') ||
      (selectedFilter === 'condolences' && card.occasion === 'تعازي') ||
      (selectedFilter === 'appreciation' && card.occasion === 'شكر') ||
      (selectedFilter === 'general' && card.occasion === 'عامة');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-24 pb-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              معرض{' '}
              <span className="text-gradient-maroon">البطاقات</span>
            </h1>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              اختر من بين مئات التصاميم المميزة لجميع المناسبات
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
                  placeholder="ابحث عن بطاقة..."
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
                <span className="font-bold text-maroon">{filteredCards.length}</span> بطاقة متاحة
              </p>
            </div>

            {/* Cards Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCards.map((card, index) => (
                  <div key={card.id} className="animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
                    <CardItem {...card} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-beige rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-light" />
                </div>
                <h3 className="text-2xl font-bold text-gray-dark mb-2">لا توجد نتائج</h3>
                <p className="text-gray">جرّب تغيير كلمات البحث أو الفلاتر</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-beige">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                لم تجد البطاقة المناسبة؟
              </h2>
              <p className="text-lg mb-8 text-white/90">
                نضيف تصاميم جديدة بشكل مستمر. تابعنا للحصول على آخر التحديثات
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
