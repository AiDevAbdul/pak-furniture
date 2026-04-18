'use client';

import { Hammer, Leaf, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Solid Sheesham Wood',
    description: 'Premium hardwood sourced responsibly for durability and beauty',
  },
  {
    icon: Hammer,
    title: 'Handmade by Artisans',
    description: 'Crafted by skilled woodworkers preserving traditional techniques',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Timeless pieces designed to withstand generations of use',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Shipped worldwide with care to your doorstep',
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
                  <Icon className="h-8 w-8 text-amber-900" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
