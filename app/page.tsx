"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2, Edit2, Lock, X, ZoomIn } from "lucide-react";

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [deletedProducts, setDeletedProducts] = useState<Set<number>>(new Set());
  const [editingId, setEditingId] = useState<number | null>(null);
  const [fullViewImage, setFullViewImage] = useState<string | null>(null);
  const ADMIN_PASSWORD = "admin123";

  // Comprehensive product catalog organized by type and size
  const productCollections = {
    dining: {
      name: "Dining Collection",
      description: "Elegant dining tables and seating for memorable gatherings",
      icon: "🍽️",
      products: [
        { id: 1, name: "Heritage Dining Table - Large", size: "Large", image: "/products/IMG_7440.JPG", price: "$0", featured: true },
        { id: 2, name: "Carved Console Table", size: "Medium", image: "/products/IMG_7455.JPG", price: "$0", featured: false },
        { id: 3, name: "Traditional Dining Set", size: "Large", image: "/products/IMG_7470.JPG", price: "$0", featured: false },
        { id: 4, name: "Artisan Dining Table", size: "Medium", image: "/products/IMG_7473.JPG", price: "$0", featured: false },
        { id: 5, name: "Carved Dining Table", size: "Large", image: "/products/IMG_7475.JPG", price: "$0", featured: false },
        { id: 6, name: "Heritage Table - Medium", size: "Medium", image: "/products/IMG_7478.JPG", price: "$0", featured: false },
        { id: 7, name: "Premium Dining Set", size: "Large", image: "/products/product_045.jpeg", price: "$0", featured: false },
        { id: 8, name: "Elegant Dining Table", size: "Large", image: "/products/product_046.jpeg", price: "$0", featured: false },
        { id: 9, name: "Classic Dining Collection", size: "Large", image: "/products/product_047.jpeg", price: "$0", featured: false },
        { id: 10, name: "Rustic Dining Table", size: "Large", image: "/products/product_048.jpeg", price: "$0", featured: false },
      ]
    },
    seating: {
      name: "Seating Collection",
      description: "Comfortable and stylish chairs, benches, and stools",
      icon: "🪑",
      products: [
        { id: 11, name: "Carved Wooden Chair", size: "Small", image: "/products/IMG_7442.JPG", price: "$0", featured: true },
        { id: 12, name: "Traditional Bench", size: "Medium", image: "/products/IMG_7452.JPG", price: "$0", featured: false },
        { id: 13, name: "Artisan Armchair", size: "Medium", image: "/products/IMG_7483.JPG", price: "$0", featured: false },
        { id: 14, name: "Carved Wooden Stool", size: "Small", image: "/products/IMG_7484.JPG", price: "$0", featured: false },
        { id: 15, name: "Heritage Chair Set", size: "Medium", image: "/products/IMG_7485.JPG", price: "$0", featured: false },
        { id: 16, name: "Traditional Bench - Large", size: "Large", image: "/products/IMG_7486.JPG", price: "$0", featured: false },
        { id: 17, name: "Ornate Chair", size: "Medium", image: "/products/product_049.jpeg", price: "$0", featured: false },
        { id: 18, name: "Comfort Bench", size: "Large", image: "/products/product_050.jpeg", price: "$0", featured: false },
        { id: 19, name: "Designer Stool", size: "Small", image: "/products/product_051.jpeg", price: "$0", featured: false },
        { id: 20, name: "Executive Chair", size: "Medium", image: "/products/product_052.jpeg", price: "$0", featured: false },
      ]
    },
    storage: {
      name: "Storage Collection",
      description: "Functional and beautiful storage solutions for every room",
      icon: "📦",
      products: [
        { id: 21, name: "Artisan Cabinet", size: "Large", image: "/products/IMG_7446.JPG", price: "$0", featured: true },
        { id: 22, name: "Wooden Storage Box", size: "Small", image: "/products/IMG_7457.JPG", price: "$0", featured: false },
        { id: 23, name: "Heritage Cabinet - Medium", size: "Medium", image: "/products/IMG_7487.JPG", price: "$0", featured: false },
        { id: 24, name: "Carved Storage Chest", size: "Large", image: "/products/IMG_7491.JPG", price: "$0", featured: false },
        { id: 25, name: "Artisan Wardrobe", size: "Large", image: "/products/IMG_7494.JPG", price: "$0", featured: false },
        { id: 26, name: "Traditional Storage Box", size: "Medium", image: "/products/IMG_7495.JPG", price: "$0", featured: false },
        { id: 27, name: "Vintage Cabinet", size: "Large", image: "/products/product_053.jpeg", price: "$0", featured: false },
        { id: 28, name: "Decorative Chest", size: "Medium", image: "/products/product_054.jpeg", price: "$0", featured: false },
        { id: 29, name: "Storage Wardrobe", size: "Large", image: "/products/product_055.jpeg", price: "$0", featured: false },
        { id: 30, name: "Wooden Cupboard", size: "Large", image: "/products/product_056.jpeg", price: "$0", featured: false },
      ]
    },
    decor: {
      name: "Decor & Accessories",
      description: "Decorative pieces and accessories to enhance your space",
      icon: "✨",
      products: [
        { id: 31, name: "Decorative Shelf", size: "Small", image: "/products/IMG_7447.JPG", price: "$0", featured: true },
        { id: 32, name: "Ornate Mirror Frame", size: "Medium", image: "/products/IMG_7458.JPG", price: "$0", featured: false },
        { id: 33, name: "Carved Wall Panel", size: "Medium", image: "/products/IMG_7501.JPG", price: "$0", featured: false },
        { id: 34, name: "Heritage Shelf Unit", size: "Large", image: "/products/IMG_7504.JPG", price: "$0", featured: false },
        { id: 35, name: "Artisan Wall Decor", size: "Small", image: "/products/IMG_7505.JPG", price: "$0", featured: false },
        { id: 36, name: "Decorative Stand", size: "Medium", image: "/products/IMG_7507.JPG", price: "$0", featured: false },
        { id: 37, name: "Wall Art Piece", size: "Medium", image: "/products/product_057.jpeg", price: "$0", featured: false },
        { id: 38, name: "Carved Shelf", size: "Large", image: "/products/product_058.jpeg", price: "$0", featured: false },
        { id: 39, name: "Decorative Panel", size: "Medium", image: "/products/product_059.jpeg", price: "$0", featured: false },
        { id: 40, name: "Ornamental Stand", size: "Small", image: "/products/product_060.jpeg", price: "$0", featured: false },
      ]
    },
    bedroom: {
      name: "Bedroom Collection",
      description: "Handcrafted bedroom furniture for restful spaces",
      icon: "🛏️",
      products: [
        { id: 41, name: "Heritage Bed Frame - King", size: "Large", image: "/products/IMG_7508.JPG", price: "$0", featured: true },
        { id: 42, name: "Carved Nightstand", size: "Small", image: "/products/IMG_7510.JPG", price: "$0", featured: false },
        { id: 43, name: "Artisan Bed Frame - Queen", size: "Large", image: "/products/IMG_7518.JPG", price: "$0", featured: false },
        { id: 44, name: "Traditional Headboard", size: "Large", image: "/products/IMG_7520.JPG", price: "$0", featured: false },
        { id: 45, name: "Heritage Dresser", size: "Large", image: "/products/IMG_7522.JPG", price: "$0", featured: false },
        { id: 46, name: "Carved Bed Frame - Twin", size: "Medium", image: "/products/IMG_7533.JPG", price: "$0", featured: false },
        { id: 47, name: "Luxury Bed Frame", size: "Large", image: "/products/product_061.jpeg", price: "$0", featured: false },
        { id: 48, name: "Elegant Nightstand", size: "Small", image: "/products/product_062.jpeg", price: "$0", featured: false },
        { id: 49, name: "Premium Headboard", size: "Large", image: "/products/product_063.jpeg", price: "$0", featured: false },
        { id: 50, name: "Carved Dresser", size: "Large", image: "/products/product_064.jpeg", price: "$0", featured: false },
      ]
    },
    tables: {
      name: "Tables & Surfaces",
      description: "Coffee tables, side tables, and accent surfaces",
      icon: "🪵",
      products: [
        { id: 51, name: "Heritage Coffee Table", size: "Medium", image: "/products/IMG_7535.JPG", price: "$0", featured: true },
        { id: 52, name: "Carved Side Table", size: "Small", image: "/products/IMG_7538.JPG", price: "$0", featured: false },
        { id: 53, name: "Artisan Accent Table", size: "Small", image: "/products/IMG_7542.JPG", price: "$0", featured: false },
        { id: 54, name: "Traditional Coffee Table", size: "Medium", image: "/products/IMG_7550.JPG", price: "$0", featured: false },
        { id: 55, name: "Heritage Side Table", size: "Small", image: "/products/IMG_7551.JPG", price: "$0", featured: false },
        { id: 56, name: "Carved Console", size: "Medium", image: "/products/IMG_7552.JPG", price: "$0", featured: false },
        { id: 57, name: "Modern Coffee Table", size: "Medium", image: "/products/product_065.jpeg", price: "$0", featured: false },
        { id: 58, name: "Accent Side Table", size: "Small", image: "/products/product_066.jpeg", price: "$0", featured: false },
        { id: 59, name: "Designer Console", size: "Medium", image: "/products/product_067.jpeg", price: "$0", featured: false },
        { id: 60, name: "Premium Coffee Table", size: "Large", image: "/products/product_068.jpeg", price: "$0", featured: false },
      ]
    },
    artisan: {
      name: "Artisan Specials",
      description: "Limited edition and custom handcrafted pieces",
      icon: "👨‍🎨",
      products: [
        { id: 61, name: "Master Craftsman Chair", size: "Medium", image: "/products/IMG_7557.JPG", price: "$0", featured: true },
        { id: 62, name: "Heritage Masterpiece", size: "Large", image: "/products/IMG_7558.JPG", price: "$0", featured: false },
        { id: 63, name: "Carved Art Piece", size: "Small", image: "/products/IMG_7559.JPG", price: "$0", featured: false },
        { id: 64, name: "Artisan Collection Piece", size: "Medium", image: "/products/IMG_7560.JPG", price: "$0", featured: false },
        { id: 65, name: "Custom Carved Table", size: "Large", image: "/products/product_069.jpeg", price: "$0", featured: false },
        { id: 66, name: "Heritage Artisan Set", size: "Large", image: "/products/product_070.jpeg", price: "$0", featured: false },
        { id: 67, name: "Limited Edition Chair", size: "Medium", image: "/products/product_071.jpeg", price: "$0", featured: false },
        { id: 68, name: "Exclusive Cabinet", size: "Large", image: "/products/product_072.jpeg", price: "$0", featured: false },
        { id: 69, name: "Bespoke Furniture", size: "Large", image: "/products/product_073.jpeg", price: "$0", featured: false },
        { id: 70, name: "Master Collection", size: "Large", image: "/products/product_074.jpeg", price: "$0", featured: false },
      ]
    },
    premium: {
      name: "Premium Collection",
      description: "Exclusive high-end handcrafted furniture pieces",
      icon: "👑",
      products: [
        { id: 71, name: "Royal Dining Set", size: "Large", image: "/products/product_075.jpeg", price: "$0", featured: true },
        { id: 72, name: "Luxury Bedroom Suite", size: "Large", image: "/products/product_076.jpeg", price: "$0", featured: false },
        { id: 73, name: "Executive Office Set", size: "Large", image: "/products/product_077.jpeg", price: "$0", featured: false },
        { id: 74, name: "Grand Masterpiece", size: "Large", image: "/products/product_078.jpeg", price: "$0", featured: false },
        { id: 75, name: "Signature Collection", size: "Large", image: "/products/product_079.jpeg", price: "$0", featured: false },
        { id: 76, name: "Heritage Legacy", size: "Large", image: "/products/product_080.jpeg", price: "$0", featured: false },
        { id: 77, name: "Artisan's Pride", size: "Large", image: "/products/product_081.jpeg", price: "$0", featured: false },
      ]
    }
  };

  const allProducts = Object.values(productCollections).flatMap(col => col.products);
  const categories = Object.keys(productCollections);

  const getFilteredProducts = () => {
    const products = activeCategory === "all" ? allProducts : productCollections[activeCategory as keyof typeof productCollections]?.products || [];
    return products.filter(p => !deletedProducts.has(p.id));
  };

  const filteredProducts = getFilteredProducts();

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword("");
    } else {
      alert("Invalid password");
      setAdminPassword("");
    }
  };

  const handleDeleteProduct = (productId: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setDeletedProducts(prev => new Set(prev).add(productId));
      alert("Product deleted successfully");
    }
  };

  const handleUpdateProduct = (productId: number) => {
    setEditingId(productId);
    alert("Update functionality - redirect to edit page or modal");
  };

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#fefdfb] via-[#faf8f3] to-[#f5f0e8]">
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admin Access</h3>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
              placeholder="Enter admin password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-amber-700"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleAdminLogin}
                className="flex-1 px-4 py-2.5 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowAdminLogin(false);
                  setAdminPassword("");
                }}
                className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Image View Modal */}
      {fullViewImage && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setFullViewImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title="Close"
            >
              <X size={32} />
            </button>
            <div className="relative w-full h-[70vh]">
              <Image
                src={fullViewImage}
                alt="Full view"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: "Playfair Display" }}>
              Artisan
            </div>
          </div>
          <div className="hidden md:flex gap-12 text-sm font-medium">
            <a href="#story" className="text-gray-700 hover:text-amber-700 transition-colors duration-300">Story</a>
            <a href="#collections" className="text-gray-700 hover:text-amber-700 transition-colors duration-300">Collections</a>
            <a href="#testimonials" className="text-gray-700 hover:text-amber-700 transition-colors duration-300">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors duration-300">Contact</a>
          </div>
          <div className="flex gap-3 items-center">
            {isAdmin && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                <Lock size={14} />
                Admin
              </div>
            )}
            <button
              onClick={() => {
                if (isAdmin) {
                  setIsAdmin(false);
                } else {
                  setShowAdminLogin(true);
                }
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 transform hover:scale-105"
            >
              {isAdmin ? "Logout" : "Admin"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
                  ✨ Handcrafted Heritage
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900" style={{ fontFamily: "Playfair Display" }}>
                Timeless Pieces, Crafted by Hand
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover our complete collection of handmade wooden furniture. Each piece tells a story of generations of Pakistani craftsmanship.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-lg hover:shadow-xl hover:shadow-amber-200 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
                Explore Collection
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-300 font-semibold">
                Learn Our Story
              </button>
            </div>
          </div>
          <div className="animate-slide-in-right relative h-96 md:h-full md:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-amber-50/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/products/product_057.jpeg"
                alt="Handcrafted wooden furniture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left relative h-96 md:h-full md:min-h-[500px]">
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/products/IMG_7462.JPG"
                  alt="Artisans at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="animate-slide-in-right space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "Playfair Display" }}>
                  Generations of Excellence
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-700 to-amber-500"></div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For over three decades, our artisans have been perfecting their craft. Each piece begins with carefully selected wood, chosen for its grain, color, and character.
                </p>
                <p>
                  We believe in sustainable practices, using responsibly sourced wood and traditional techniques refined over generations. Every detail matters—from the joinery to the finish.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">30+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Craft</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Handmade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up space-y-4">
            <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "Playfair Display" }}>
              Our Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections organized by room and style
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {productCollections[cat as keyof typeof productCollections].icon} {productCollections[cat as keyof typeof productCollections].name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Collection Description */}
          {activeCategory !== "all" && (
            <div className="mb-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <p className="text-gray-700 text-center">
                {productCollections[activeCategory as keyof typeof productCollections].description}
              </p>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-80 mb-4 overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-500 ${
                      hoveredProduct === product.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}

                  {/* Admin Controls */}
                  {isAdmin && (
                    <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => handleUpdateProduct(product.id)}
                        className="p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                        title="Update product"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                        title="Delete product"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <button
                      onClick={() => setFullViewImage(product.image)}
                      className="flex-1 py-2.5 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <ZoomIn size={18} />
                      View Full
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-amber-700">
                        {product.size}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <button onClick={() => setActiveCategory("all")} className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-lg hover:shadow-xl hover:shadow-amber-200 transition-all duration-300 font-semibold">
              View Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-white/50 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up space-y-4">
            <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "Playfair Display" }}>
              Loved by Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from people who love our furniture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Interior Designer",
                text: "The craftsmanship is extraordinary. Each piece is a work of art that transforms any space.",
                image: "/products/IMG_7464.JPG",
                rating: 5,
              },
              {
                name: "Ahmed Hassan",
                role: "Collector",
                text: "I've been collecting these pieces for years. The quality and attention to detail are unmatched.",
                image: "/products/IMG_7466.JPG",
                rating: 5,
              },
              {
                name: "Emma Rodriguez",
                role: "Homeowner",
                text: "Worth every penny. The furniture brings warmth and character to our home.",
                image: "/products/IMG_7468.JPG",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "Playfair Display" }}>
            Ready to Own a Masterpiece?
          </h2>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto leading-relaxed">
            Explore our complete collection of handmade wooden furniture. Each piece is unique and crafted with love by artisans who care about quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-4 bg-white text-amber-800 rounded-lg hover:bg-amber-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Shop Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-lg font-bold text-white" style={{ fontFamily: "Playfair Display" }}>Artisan</span>
              </div>
              <p className="text-sm leading-relaxed">
                Handmade wooden furniture crafted by skilled Pakistani artisans with generations of heritage.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Collections</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Dining</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Seating</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Bedroom</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Storage</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Artisan Wooden Furniture. All rights reserved. Handmade in Pakistan with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
