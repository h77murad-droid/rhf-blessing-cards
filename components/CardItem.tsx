import Link from 'next/link';
import { Heart } from 'lucide-react';

interface CardItemProps {
  id: string;
  title: string;
  occasion: string;
  price: number;
  image?: string;
}

export default function CardItem({ id, title, occasion, price, image }: CardItemProps) {
  // لو ما فيه صورة من البيانات نستخدم صورة افتراضية من /public/cards/general/dua.png
  const imageSrc = image || '/cards/general/dua.png';

  return (
    <Link href={`/personalize/${id}`} className="card group hover-scale cursor-pointer">
      {/* Card Image */}
      <div className="relative aspect-card bg-gradient-to-br from-beige to-white overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-opacity duration-base flex items-center justify-center">
          <span className="text-white font-bold text-lg">تخصيص البطاقة</span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="badge badge-secondary text-xs">
            {occasion}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-dark mb-2 group-hover:text-maroon transition-colors duration-base">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-maroon font-bold text-xl">
            {price} د.ب
          </span>
          <span className="text-gray-light text-sm">
            كتبرع خيري
          </span>
        </div>
      </div>
    </Link>
  );
}
