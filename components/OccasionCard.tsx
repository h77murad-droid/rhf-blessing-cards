import Link from 'next/link';

interface OccasionCardProps {
  title: string;
  description: string;
  icon: string;
  count: number;
  href: string;
}

export default function OccasionCard({ title, description, icon, count, href }: OccasionCardProps) {
  return (
    <Link href={href} className="card group hover-scale cursor-pointer">
      <div className="p-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-dark rounded-lg flex items-center justify-center mb-4 shadow-maroon group-hover:shadow-lg transition-all duration-base">
          <span className="text-3xl">{icon}</span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-maroon transition-colors duration-base">
          {title}
        </h3>
        <p className="text-gray text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Badge */}
        <div className="flex items-center justify-between">
          <span className="badge badge-primary">
            {count} بطاقة متاحة
          </span>
          <span className="text-maroon text-sm font-medium group-hover:translate-x-[-4px] transition-transform duration-base">
            تصفح ←
          </span>
        </div>
      </div>
    </Link>
  );
}
