import CardsGalleryPage from '../page';

export default function AllCardsPage() {
  // نمرر occasion = all فقط كقيمة شكلية
  return <CardsGalleryPage params={{ occasion: 'all' }} />;
}
