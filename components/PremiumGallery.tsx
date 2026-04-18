'use client';

import ProductGallery from './ProductGallery';

export default function PremiumGallery() {
  // Array of 27 Premium product images (actual files that exist)
  const premiumImages = [
    152, 153, 154, 156, 157, 158, 160, 162, 163, 164, 166, 167, 168, 170,
    172, 173, 174, 176, 177, 178, 180, 182, 183, 184, 186, 187, 188
  ].map(num => `/Premium/product03-(${num}).jpeg`);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductGallery images={premiumImages} />
      </div>
    </section>
  );
}
