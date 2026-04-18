'use client';

import ProductGallery from './ProductGallery';

export default function GardensGallery() {
  // Generate array of 21 Gardens product images (product01-(1) to product01-(21))
  const gardensImages = Array.from({ length: 21 }, (_, i) => {
    const num = i + 1;
    return `/GardensProducts/product01-(${num}).jpeg`;
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductGallery images={gardensImages} />
      </div>
    </section>
  );
}
