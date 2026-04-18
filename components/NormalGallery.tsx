'use client';

import ProductGallery from './ProductGallery';

export default function NormalGallery() {
  // Array of 141 Normal product images (actual files that exist)
  const normalImages = [
    // Product02 series (22-35)
    ...Array.from({ length: 14 }, (_, i) => {
      const num = 22 + i;
      return `/normal/Product02-(${num}).JPG`;
    }),
    // product03 series (36-189, excluding 152-154, 156-158, 160, 162-164, 166-168, 170, 172-174, 176-178, 180, 182-184, 186-188 which are in Premium)
    ...Array.from({ length: 116 }, (_, i) => {
      const num = 36 + i;
      return `/normal/product03-(${num}).jpeg`;
    }),
    // product03 series (155, 159, 161, 165, 169, 171, 175, 179, 181, 185, 189)
    ...[155, 159, 161, 165, 169, 171, 175, 179, 181, 185, 189].map(num => `/normal/product03-(${num}).jpeg`),
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductGallery images={normalImages} />
      </div>
    </section>
  );
}
