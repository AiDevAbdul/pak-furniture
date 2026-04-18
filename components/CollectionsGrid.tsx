'use client';

import Image from 'next/image';

const collections = [
  {
    id: 'dining',
    label: 'Dining Room',
    image: '/normal/product03-(101).jpeg',
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    image: '/normal/product03-(105).jpeg',
  },
  {
    id: 'living',
    label: 'Living Room',
    image: '/normal/product03-(117).jpeg',
  },
  {
    id: 'accents',
    label: 'Accents',
    image: '/normal/product03-(150).jpeg',
  },
  {
    id: 'storage',
    label: 'Storage',
    image: '/normal/product03-(151).jpeg',
  },
];

export default function CollectionsGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
            Furniture that fits your life
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={collection.image}
                  alt={collection.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
