'use client';

import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  gridCols?: string;
}

export default function ProductGallery({
  images,
  gridCols = 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}: ProductGalleryProps) {
  return (
    <div className={`grid ${gridCols} gap-4`}>
      {images.map((image, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={image}
              alt={`Product ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>
      ))}
    </div>
  );
}
