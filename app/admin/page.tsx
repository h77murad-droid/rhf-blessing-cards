'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  CreditCard,
  Users,
  Heart,
  TrendingUp,
  DollarSign,
  Calendar,
  Mail,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'إجمالي البطاقات المرسلة',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: CreditCard,
      color: 'maroon',
    },
    {
      title: 'إجمالي التبرعات',
      value: '12,470 د.ب',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'gold',
    },
    {
      title: 'المستخدمون النشطون',
      value: '856',
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'maroon',
    },
    {
      title: 'معدل الرضا',
      value: '98.5%',
      change: '+2%',
      trend: 'up',
      icon: Heart,
      color: 'gold',
    },
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      sender: 'أحمد محمد',
      recipient: 'فاطمة علي',
      occasion: 'زفاف',
      amount: 10,
      status: 'completed',
      date: '2025-11-19',
    },
    {
      id: 'ORD-002',
      sender: 'سارة خالد',
      recipient: 'مريم حسن',
      occasion: 'مولود',
      amount: 8,
      status: 'completed',
      date: '2025-11-19',
    },
    {
      id: 'ORD-003',
      sender: 'محمد عبدالله',
      recipient: 'علي أحمد',
      occasion: 'تخرج',
      amount: 7,
      status: 'pending',
      date: '2025-11-18',
    },
    {
      id: 'ORD-004',
      sender: 'نورة سعيد',
      recipient: 'خديجة محمد',
      occasion: 'عيد',
      amount: 5,
      status: 'completed',
      date: '2025-11-18',
    },
    {
      id: 'ORD-005',
      sender: 'عبدالرحمن يوسف',
      recipient: 'إبراهيم خالد',
      occasion: 'شكر',
      amount: 6,
      status: 'failed',
      date: '2025-11-17',
    },
  ];

  const navItems = [
    { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
    { id: 'orders', label: 'الطلبات', icon: CreditCard },
    { id: 'users', label: 'المستخدمون', icon: Users },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="badge badge-success">
            <CheckCircle className="w-3 h-3 inline ml-1" />
            مكتمل
          </span>
        );
      case 'pending':
        return (
          <span className="badge bg-warning/10 text-warning">
            <Clock className="w-3 h-3 inline ml-1" />
            قيد المعالجة
          </span>
        );
      case 'failed':
        return (
          <span className="badge bg-error/10 text-error">
            <XCircle className="w-3 h-3 inline ml-1" />
            فشل
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-beige">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-fixed bg-white border-b border-gray-lighter shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray hover:text-maroon transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg flex items-center justify-center shadow-maroon">
                  <Heart className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div className="hidden md:block">
                  <div className="font-bold text-maroon">لوحة التحكم</div>
                  <div className="text-xs text-gray-light">RHF Admin</div>
                </div>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray hover:text-maroon font-medium transition-colors text-sm">
                العودة للموقع
              </Link>
              <button className="p-2 text-gray hover:text-maroon transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-white border-l border-gray-lighter shadow-lg lg:shadow-none transition-transform duration-base z-sticky ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}
        >
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-base ${
                      activeTab === item.id
                        ? 'bg-maroon text-white shadow-maroon'
                        : 'text-gray hover:bg-beige hover:text-maroon'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'overview' && (
            <>
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-dark mb-2">مرحباً بك</h1>
                <p className="text-gray">إليك نظرة عامة على أداء المنصة</p>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-base border border-gray-lighter"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          stat.color === 'maroon'
                            ? 'bg-gradient-to-br from-maroon to-maroon-dark shadow-maroon'
                            : 'bg-gradient-to-br from-gold to-gold-dark shadow-gold'
                        }`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-success' : 'text-error'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-sm text-gray mb-1">{stat.title}</h3>
                    <p className="text-2xl font-bold text-gray-dark">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-lighter">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-dark">التبرعات الشهرية</h2>
                    <button className="text-maroon hover:text-maroon-dark text-sm font-medium">
                      عرض التقرير
                    </button>
                  </div>
                  <div className="h-64 flex items-center justify-center bg-beige rounded-lg">
                    <div className="text-center text-gray">
                      <BarChart3 className="w-16 h-16 mx-auto mb-2 text-gray-light" />
                      <p className="text-sm">الرسم البياني للتبرعات</p>
                    </div>
                  </div>
                </div>

                {/* Popular Occasions */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-lighter">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-dark">المناسبات الأكثر طلباً</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'مناسبات الأفراح', count: 342, percentage: 65 },
                      { name: 'مناسبات دينية', count: 218, percentage: 45 },
                      { name: 'مناسبات اجتماعية', count: 156, percentage: 35 },
                      { name: 'الشكر والتقدير', count: 124, percentage: 28 },
                    ].map((occasion, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-dark">{occasion.name}</span>
                          <span className="text-sm text-gray">{occasion.count}</span>
                        </div>
                        <div className="h-2 bg-beige rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-l from-maroon to-maroon-light rounded-full"
                            style={{ width: `${occasion.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-xl shadow-md border border-gray-lighter">
                <div className="p-6 border-b border-gray-lighter">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-gray-dark">الطلبات الأخيرة</h2>
                    <div className="flex items-center gap-3">
                      <button className="btn-outline text-sm py-2">
                        <Filter className="w-4 h-4 ml-2" />
                        فلترة
                      </button>
                      <button className="btn-primary text-sm py-2">
                        <Download className="w-4 h-4 ml-2" />
                        تصدير
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-beige">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">رقم الطلب</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">المرسل</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">المستلم</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">المناسبة</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">المبلغ</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">الحالة</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">التاريخ</th>
                        <th className="px-6 py-3 text-right text-xs font-bold text-gray-dark">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-lighter">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-beige transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-dark">{order.id}</td>
                          <td className="px-6 py-4 text-sm text-gray">{order.sender}</td>
                          <td className="px-6 py-4 text-sm text-gray">{order.recipient}</td>
                          <td className="px-6 py-4 text-sm text-gray">{order.occasion}</td>
                          <td className="px-6 py-4 text-sm font-medium text-maroon">{order.amount} د.ب</td>
                          <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                          <td className="px-6 py-4 text-sm text-gray">{order.date}</td>
                          <td className="px-6 py-4">
                            <button className="p-2 text-gray hover:text-maroon transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'orders' && (
            <div className="text-center py-16">
              <CreditCard className="w-24 h-24 mx-auto mb-6 text-gray-light" />
              <h2 className="text-2xl font-bold text-gray-dark mb-2">إدارة الطلبات</h2>
              <p className="text-gray">سيتم عرض جميع الطلبات هنا</p>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="text-center py-16">
              <Users className="w-24 h-24 mx-auto mb-6 text-gray-light" />
              <h2 className="text-2xl font-bold text-gray-dark mb-2">إدارة المستخدمين</h2>
              <p className="text-gray">سيتم عرض جميع المستخدمين هنا</p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="text-center py-16">
              <BarChart3 className="w-24 h-24 mx-auto mb-6 text-gray-light" />
              <h2 className="text-2xl font-bold text-gray-dark mb-2">التحليلات المتقدمة</h2>
              <p className="text-gray">سيتم عرض التحليلات والتقارير هنا</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="text-center py-16">
              <Settings className="w-24 h-24 mx-auto mb-6 text-gray-light" />
              <h2 className="text-2xl font-bold text-gray-dark mb-2">الإعدادات</h2>
              <p className="text-gray">سيتم عرض إعدادات المنصة هنا</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
