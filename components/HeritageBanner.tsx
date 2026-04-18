'use client';

import Image from 'next/image';

export default function HeritageBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/IMG_7473.JPG"
          alt="Heritage woodworking"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Our Promise
          </p>

          {/* Heading */}
          <h2 className="mb-6 font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Heritage. Craftsmanship. Quality.
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-100 leading-relaxed">
            For generations, the artisans of Tehkhal, Peshawar have preserved the ancient tradition of Pakistani woodworking. Each piece we create honors this legacy—combining time-honored techniques with sustainable materials to craft furniture that transcends trends and becomes part of your family's story.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-amber-900">
            Learn More About Us →
          </button>
        </div>
      </div>
    </section>
  );
}
