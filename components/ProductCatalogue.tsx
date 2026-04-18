'use client';

import Image from 'next/image';
import { useState } from 'react';

const premiumProducts = Array.from({ length: 31 }, (_, i) => ({
  id: `premium-${i + 1}`,
  image: `/products/Premium/product03-(${153 + i}).jpeg`,
}));

const normalProducts = [
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `normal-${i + 1}`,
    image: `/products/normal/Product02-(${22 + i}).JPG`,
  })),
  ...Array.from({ length: 114 }, (_, i) => ({
    id: `normal-${15 + i}`,
    image: `/products/normal/product03-(${36 + i}).jpeg`,
  })),
];

const gardenProducts = Array.from({ length: 21 }, (_, i) => ({
  id: `garden-${i + 1}`,
  image: `/products/GardensProducts/product01-(${i + 1}).jpeg`,
}));

export default function ProductCatalogue() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const renderCatalogSection = (products: typeof premiumProducts) => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
          onClick={() => setSelectedImage(product.image)}
        >
          <div className="relative aspect-square w-full">
            <Image
              src={product.image}
              alt={product.id}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Premium Products */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {renderCatalogSection(premiumProducts)}
        </div>
      </section>

      {/* Normal Products */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {renderCatalogSection(normalProducts)}
        </div>
      </section>

      {/* Garden Products */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {renderCatalogSection(gardenProducts)}
        </div>
      </section>

      {/* Fullscreen Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage}
              alt="Full view"
              width={1200}
              height={1200}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
