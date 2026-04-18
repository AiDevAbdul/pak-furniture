"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeaturesBar from "@/components/FeaturesBar";
import CollectionsGrid from "@/components/CollectionsGrid";
import HeritageBanner from "@/components/HeritageBanner";
import PremiumGallery from "@/components/PremiumGallery";
import NormalGallery from "@/components/NormalGallery";
import GardensGallery from "@/components/GardensGallery";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Timeless Craftsmanship";

  const heroImages = [
    "/hero/IMG_7473.JPG",
    "/hero/IMG_7504.JPG",
    "/hero/product_051.jpeg",
    "/hero/product_057.jpeg",
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [displayedText]);

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 h-full min-h-[calc(100vh-64px)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-2">
                <div className="inline-block">
                  <span className="text-amber-700 uppercase tracking-widest text-xs font-semibold px-4 py-2 bg-amber-50 rounded-full">
                    Handcrafted Excellence
                  </span>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-tight min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Discover handmade wooden furniture that blends heritage, quality, and artistry. Each piece tells a story of skilled craftsmanship passed down through generations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  Shop Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white font-semibold transition-all duration-300">
                  Discover More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Handmade</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                  <p className="text-sm text-gray-600">Years Heritage</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Global</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="relative h-full hidden lg:flex items-center justify-center pr-8">
            <div className="relative w-full h-4/5 rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Hero slide ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? heroImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="text-gray-900" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % heroImages.length)
                }
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight size={24} className="text-gray-900" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? "bg-white w-8 h-2"
                        : "bg-white/50 w-2 h-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <FeaturesBar />

      {/* Collections Grid */}
      <CollectionsGrid />

      {/* Heritage Banner */}
      <HeritageBanner />

      {/* Premium Gallery */}
      <PremiumGallery />

      {/* Normal Gallery */}
      <NormalGallery />

      {/* Gardens Gallery */}
      <GardensGallery />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-[#1B2B21] text-[#F9F8F3]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-serif">
            Ready to Own a Masterpiece?
          </h2>
          <p className="text-lg text-[#E3DED1] max-w-2xl mx-auto">
            Each piece is unique and crafted with love by artisans who care about quality and heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-8 py-3 bg-[#C9A961] text-[#1B2B21] rounded hover:bg-[#B8985A] font-semibold">
              Start Shopping
            </button>
            <button className="px-8 py-3 border-2 border-[#C9A961] text-[#C9A961] rounded hover:bg-[#C9A961]/10 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1A14] text-[#E3DED1] py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-[#F9F8F3] mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C9A961]">Our Story</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#F9F8F3] mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C9A961]">All Products</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Collections</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#F9F8F3] mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C9A961]">Contact</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Shipping</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#F9F8F3] mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#C9A961]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Facebook</a></li>
              <li><a href="#" className="hover:text-[#C9A961]">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1B2B21] pt-8 text-center text-sm">
          <p>&copy; 2026 Tali Heritage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
