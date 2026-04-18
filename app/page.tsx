"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Trash2, Edit2, Lock, X, Heart } from "lucide-react";

export default function Home() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [deletedProducts, setDeletedProducts] = useState<Set<number>>(new Set());
  const [fullViewImage, setFullViewImage] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [showWishlist, setShowWishlist] = useState(false);
  const ADMIN_PASSWORD = "admin123";

  const products = [
    { id: 1, image: "/products/product01 (1).jpeg", featured: true },
    { id: 2, image: "/products/product01 (10).jpeg", featured: false },
    { id: 3, image: "/products/product01 (11).jpeg", featured: false },
    { id: 4, image: "/products/product01 (12).jpeg", featured: false },
    { id: 5, image: "/products/product01 (13).jpeg", featured: false },
    { id: 6, image: "/products/product01 (14).jpeg", featured: false },
    { id: 7, image: "/products/product01 (15).jpeg", featured: false },
    { id: 8, image: "/products/product01 (16).jpeg", featured: false },
    { id: 9, image: "/products/product01 (17).jpeg", featured: false },
    { id: 10, image: "/products/product01 (18).jpeg", featured: false },
    { id: 11, image: "/products/product01 (19).jpeg", featured: true },
    { id: 12, image: "/products/product01 (2).jpeg", featured: false },
    { id: 13, image: "/products/product01 (20).jpeg", featured: false },
    { id: 14, image: "/products/product01 (21).jpeg", featured: false },
    { id: 15, image: "/products/product01 (3).jpeg", featured: false },
    { id: 16, image: "/products/product01 (4).jpeg", featured: false },
    { id: 17, image: "/products/product01 (5).jpeg", featured: false },
    { id: 18, image: "/products/product01 (6).jpeg", featured: false },
    { id: 19, image: "/products/product01 (7).jpeg", featured: false },
    { id: 20, image: "/products/product01 (8).jpeg", featured: false },
    { id: 21, image: "/products/product01 (9).jpeg", featured: true },
    { id: 22, image: "/products/product03 (100).jpeg", featured: false },
    { id: 23, image: "/products/product03 (101).jpeg", featured: false },
    { id: 24, image: "/products/product03 (102).jpeg", featured: false },
    { id: 25, image: "/products/product03 (103).jpeg", featured: false },
    { id: 26, image: "/products/product03 (104).jpeg", featured: false },
    { id: 27, image: "/products/product03 (105).jpeg", featured: false },
    { id: 28, image: "/products/product03 (106).jpeg", featured: false },
    { id: 29, image: "/products/product03 (107).jpeg", featured: false },
    { id: 30, image: "/products/product03 (108).jpeg", featured: false },
    { id: 31, image: "/products/product03 (109).jpeg", featured: true },
    { id: 32, image: "/products/product03 (110).jpeg", featured: false },
    { id: 33, image: "/products/product03 (111).jpeg", featured: false },
    { id: 34, image: "/products/product03 (112).jpeg", featured: false },
    { id: 35, image: "/products/product03 (113).jpeg", featured: false },
    { id: 36, image: "/products/product03 (114).jpeg", featured: false },
    { id: 37, image: "/products/product03 (115).jpeg", featured: false },
    { id: 38, image: "/products/product03 (116).jpeg", featured: false },
    { id: 39, image: "/products/product03 (117).jpeg", featured: false },
    { id: 40, image: "/products/product03 (118).jpeg", featured: false },
    { id: 41, image: "/products/product03 (119).jpeg", featured: true },
    { id: 42, image: "/products/product03 (120).jpeg", featured: false },
    { id: 43, image: "/products/product03 (121).jpeg", featured: false },
    { id: 44, image: "/products/product03 (122).jpeg", featured: false },
    { id: 45, image: "/products/product03 (123).jpeg", featured: false },
    { id: 46, image: "/products/product03 (124).jpeg", featured: false },
    { id: 47, image: "/products/product03 (125).jpeg", featured: false },
    { id: 48, image: "/products/product03 (126).jpeg", featured: false },
    { id: 49, image: "/products/product03 (127).jpeg", featured: false },
    { id: 50, image: "/products/product03 (128).jpeg", featured: false },
    { id: 51, image: "/products/product03 (129).jpeg", featured: true },
    { id: 52, image: "/products/product03 (130).jpeg", featured: false },
    { id: 53, image: "/products/product03 (131).jpeg", featured: false },
    { id: 54, image: "/products/product03 (132).jpeg", featured: false },
    { id: 55, image: "/products/product03 (133).jpeg", featured: false },
    { id: 56, image: "/products/product03 (134).jpeg", featured: false },
    { id: 57, image: "/products/product03 (135).jpeg", featured: false },
    { id: 58, image: "/products/product03 (136).jpeg", featured: false },
    { id: 59, image: "/products/product03 (137).jpeg", featured: false },
    { id: 60, image: "/products/product03 (138).jpeg", featured: false },
    { id: 61, image: "/products/product03 (139).jpeg", featured: true },
    { id: 62, image: "/products/product03 (140).jpeg", featured: false },
    { id: 63, image: "/products/product03 (141).jpeg", featured: false },
    { id: 64, image: "/products/product03 (142).jpeg", featured: false },
    { id: 65, image: "/products/product03 (143).jpeg", featured: false },
    { id: 66, image: "/products/product03 (144).jpeg", featured: false },
    { id: 67, image: "/products/product03 (145).jpeg", featured: false },
    { id: 68, image: "/products/product03 (146).jpeg", featured: false },
    { id: 69, image: "/products/product03 (147).jpeg", featured: false },
    { id: 70, image: "/products/product03 (148).jpeg", featured: false },
    { id: 71, image: "/products/product03 (149).jpeg", featured: true },
    { id: 72, image: "/products/product03 (150).jpeg", featured: false },
    { id: 73, image: "/products/product03 (151).jpeg", featured: false },
    { id: 74, image: "/products/product03 (152).jpeg", featured: false },
    { id: 75, image: "/products/product03 (153).jpeg", featured: false },
    { id: 76, image: "/products/product03 (154).jpeg", featured: false },
    { id: 77, image: "/products/product03 (155).jpeg", featured: false },
    { id: 78, image: "/products/product03 (156).jpeg", featured: false },
    { id: 79, image: "/products/product03 (157).jpeg", featured: false },
    { id: 80, image: "/products/product03 (158).jpeg", featured: false },
    { id: 81, image: "/products/product03 (159).jpeg", featured: true },
    { id: 82, image: "/products/product03 (160).jpeg", featured: false },
    { id: 83, image: "/products/product03 (161).jpeg", featured: false },
    { id: 84, image: "/products/product03 (162).jpeg", featured: false },
    { id: 85, image: "/products/product03 (163).jpeg", featured: false },
    { id: 86, image: "/products/product03 (164).jpeg", featured: false },
    { id: 87, image: "/products/product03 (165).jpeg", featured: false },
    { id: 88, image: "/products/product03 (166).jpeg", featured: false },
    { id: 89, image: "/products/product03 (167).jpeg", featured: false },
    { id: 90, image: "/products/product03 (168).jpeg", featured: false },
    { id: 91, image: "/products/product03 (169).jpeg", featured: true },
    { id: 92, image: "/products/product03 (170).jpeg", featured: false },
    { id: 93, image: "/products/product03 (171).jpeg", featured: false },
    { id: 94, image: "/products/product03 (172).jpeg", featured: false },
    { id: 95, image: "/products/product03 (173).jpeg", featured: false },
    { id: 96, image: "/products/product03 (174).jpeg", featured: false },
    { id: 97, image: "/products/product03 (175).jpeg", featured: false },
    { id: 98, image: "/products/product03 (176).jpeg", featured: false },
    { id: 99, image: "/products/product03 (177).jpeg", featured: false },
    { id: 100, image: "/products/product03 (178).jpeg", featured: false },
    { id: 101, image: "/products/product03 (179).jpeg", featured: true },
    { id: 102, image: "/products/product03 (180).jpeg", featured: false },
    { id: 103, image: "/products/product03 (181).jpeg", featured: false },
    { id: 104, image: "/products/product03 (182).jpeg", featured: false },
    { id: 105, image: "/products/product03 (183).jpeg", featured: false },
    { id: 106, image: "/products/product03 (184).jpeg", featured: false },
    { id: 107, image: "/products/product03 (185).jpeg", featured: false },
    { id: 108, image: "/products/product03 (186).jpeg", featured: false },
    { id: 109, image: "/products/product03 (187).jpeg", featured: false },
    { id: 110, image: "/products/product03 (188).jpeg", featured: false },
    { id: 111, image: "/products/product03 (189).jpeg", featured: true },
    { id: 112, image: "/products/product03 (36).jpeg", featured: false },
    { id: 113, image: "/products/product03 (37).jpeg", featured: false },
    { id: 114, image: "/products/product03 (38).jpeg", featured: false },
    { id: 115, image: "/products/product03 (39).jpeg", featured: false },
    { id: 116, image: "/products/product03 (40).jpeg", featured: false },
    { id: 117, image: "/products/product03 (41).jpeg", featured: false },
    { id: 118, image: "/products/product03 (42).jpeg", featured: false },
    { id: 119, image: "/products/product03 (43).jpeg", featured: false },
    { id: 120, image: "/products/product03 (44).jpeg", featured: false },
    { id: 121, image: "/products/product03 (45).jpeg", featured: true },
    { id: 122, image: "/products/product03 (46).jpeg", featured: false },
    { id: 123, image: "/products/product03 (47).jpeg", featured: false },
    { id: 124, image: "/products/product03 (48).jpeg", featured: false },
    { id: 125, image: "/products/product03 (49).jpeg", featured: false },
    { id: 126, image: "/products/product03 (50).jpeg", featured: false },
    { id: 127, image: "/products/product03 (51).jpeg", featured: false },
    { id: 128, image: "/products/product03 (52).jpeg", featured: false },
    { id: 129, image: "/products/product03 (53).jpeg", featured: false },
    { id: 130, image: "/products/product03 (54).jpeg", featured: false },
    { id: 131, image: "/products/product03 (55).jpeg", featured: true },
    { id: 132, image: "/products/product03 (56).jpeg", featured: false },
    { id: 133, image: "/products/product03 (57).jpeg", featured: false },
    { id: 134, image: "/products/product03 (58).jpeg", featured: false },
    { id: 135, image: "/products/product03 (59).jpeg", featured: false },
    { id: 136, image: "/products/product03 (60).jpeg", featured: false },
    { id: 137, image: "/products/product03 (61).jpeg", featured: false },
    { id: 138, image: "/products/product03 (62).jpeg", featured: false },
    { id: 139, image: "/products/product03 (63).jpeg", featured: false },
    { id: 140, image: "/products/product03 (64).jpeg", featured: false },
    { id: 141, image: "/products/product03 (65).jpeg", featured: true },
    { id: 142, image: "/products/product03 (66).jpeg", featured: false },
    { id: 143, image: "/products/product03 (67).jpeg", featured: false },
    { id: 144, image: "/products/product03 (68).jpeg", featured: false },
    { id: 145, image: "/products/product03 (69).jpeg", featured: false },
    { id: 146, image: "/products/product03 (70).jpeg", featured: false },
    { id: 147, image: "/products/product03 (71).jpeg", featured: false },
    { id: 148, image: "/products/product03 (72).jpeg", featured: false },
    { id: 149, image: "/products/product03 (73).jpeg", featured: false },
    { id: 150, image: "/products/product03 (74).jpeg", featured: false },
    { id: 151, image: "/products/product03 (75).jpeg", featured: true },
    { id: 152, image: "/products/product03 (76).jpeg", featured: false },
    { id: 153, image: "/products/product03 (77).jpeg", featured: false },
    { id: 154, image: "/products/product03 (78).jpeg", featured: false },
    { id: 155, image: "/products/product03 (79).jpeg", featured: false },
    { id: 156, image: "/products/product03 (80).jpeg", featured: false },
    { id: 157, image: "/products/product03 (81).jpeg", featured: false },
    { id: 158, image: "/products/product03 (82).jpeg", featured: false },
    { id: 159, image: "/products/product03 (83).jpeg", featured: false },
    { id: 160, image: "/products/product03 (84).jpeg", featured: false },
    { id: 161, image: "/products/product03 (85).jpeg", featured: true },
    { id: 162, image: "/products/product03 (86).jpeg", featured: false },
    { id: 163, image: "/products/product03 (87).jpeg", featured: false },
    { id: 164, image: "/products/product03 (88).jpeg", featured: false },
    { id: 165, image: "/products/product03 (89).jpeg", featured: false },
    { id: 166, image: "/products/product03 (90).jpeg", featured: false },
    { id: 167, image: "/products/product03 (91).jpeg", featured: false },
    { id: 168, image: "/products/product03 (92).jpeg", featured: false },
    { id: 169, image: "/products/product03 (93).jpeg", featured: false },
    { id: 170, image: "/products/product03 (94).jpeg", featured: false },
    { id: 171, image: "/products/product03 (95).jpeg", featured: true },
    { id: 172, image: "/products/product03 (96).jpeg", featured: false },
    { id: 173, image: "/products/product03 (97).jpeg", featured: false },
    { id: 174, image: "/products/product03 (98).jpeg", featured: false },
    { id: 175, image: "/products/product03 (99).jpeg", featured: false },
    { id: 176, image: "/products/product03 (36).jpeg", featured: false },
    { id: 177, image: "/products/product03 (37).jpeg", featured: false },
    { id: 178, image: "/products/product03 (38).jpeg", featured: false },
    { id: 179, image: "/products/product03 (39).jpeg", featured: false },
    { id: 180, image: "/products/product03 (40).jpeg", featured: false },
    { id: 181, image: "/products/product03 (41).jpeg", featured: true },
    { id: 182, image: "/products/product03 (42).jpeg", featured: false },
    { id: 183, image: "/products/product03 (43).jpeg", featured: false },
    { id: 184, image: "/products/product03 (44).jpeg", featured: false },
    { id: 185, image: "/products/product03 (45).jpeg", featured: false },
    { id: 186, image: "/products/product03 (46).jpeg", featured: false },
    { id: 187, image: "/products/product03 (47).jpeg", featured: false },
    { id: 188, image: "/products/product03 (48).jpeg", featured: false },
    { id: 189, image: "/products/product03 (49).jpeg", featured: false },
  ];

  useEffect(() => {
    const loadDeletedProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setDeletedProducts(new Set(data.deletedProducts));
      } catch (error) {
        console.error('Error loading deleted products:', error);
      }
    };
    loadDeletedProducts();
  }, []);

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
    if (confirm("Delete this product?")) {
      const deleteProduct = async () => {
        try {
          const response = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, action: 'delete' })
          });
          if (response.ok) {
            setDeletedProducts(prev => new Set(prev).add(productId));
          }
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      };
      deleteProduct();
    }
  };

  const filteredProducts = products.filter(p => !deletedProducts.has(p.id));
  const product01Section = filteredProducts.filter(p => p.id >= 1 && p.id <= 21);
  const remainingProducts = filteredProducts.filter(p => p.id > 21);

  return (
    <div className="w-full bg-white">
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Admin Access</h3>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-amber-700"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={handleAdminLogin}
                className="flex-1 px-4 py-2 bg-amber-700 text-white rounded font-semibold hover:bg-amber-800"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowAdminLogin(false);
                  setAdminPassword("");
                }}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {showWishlist && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">My Wishlist</h3>
              <button
                onClick={() => setShowWishlist(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded"
              >
                <X size={24} />
              </button>
            </div>
            {wishlist.size === 0 ? (
              <p className="text-gray-600 text-center py-8">Your wishlist is empty</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products
                  .filter(p => wishlist.has(p.id) && !deletedProducts.has(p.id))
                  .map(product => (
                    <div key={product.id} className="relative aspect-square overflow-hidden rounded bg-gray-100">
                      <Image
                        src={product.image}
                        alt={`Product ${product.id}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <button
                        onClick={() => {
                          setWishlist(prev => {
                            const newWishlist = new Set(prev);
                            newWishlist.delete(product.id);
                            return newWishlist;
                          });
                        }}
                        className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                      >
                        <Heart size={16} className="fill-red-500 text-red-500" />
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full Image View Modal */}
      {fullViewImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <button
            onClick={() => setFullViewImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={fullViewImage}
              alt="Full view"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Floating Wishlist Button */}
      <button
        onClick={() => setShowWishlist(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
        title="View wishlist"
      >
        <Heart size={24} className="fill-white" />
        {wishlist.size > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {wishlist.size}
          </span>
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="text-lg font-bold text-amber-900">RoseWood Furniture</div>
          </div>
          <div className="flex gap-3 items-center">
            {isAdmin && (
              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                <Lock size={12} />
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
              className="px-4 py-2 bg-amber-700 text-white rounded text-sm font-semibold hover:bg-amber-800"
            >
              {isAdmin ? "Logout" : "Admin"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Handcrafted Wooden Furniture
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of authentic Pakistani wooden furniture, crafted by artisans with generations of heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 font-semibold">
              Explore Collection
            </button>
            <button className="px-6 py-3 border-2 border-amber-700 text-amber-700 rounded hover:bg-amber-50 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid - Section 1: Remaining Products */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Premium Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {remainingProducts.map((product) => (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded bg-gray-100 cursor-pointer"
                  onClick={() => setFullViewImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={`Product ${product.id}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className={`object-cover transition-transform duration-500 ease-out ${
                      hoveredProduct === product.id ? "scale-150" : "scale-100"
                    }`}
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setWishlist(prev => {
                        const newWishlist = new Set(prev);
                        if (newWishlist.has(product.id)) {
                          newWishlist.delete(product.id);
                        } else {
                          newWishlist.add(product.id);
                        }
                        return newWishlist;
                      });
                    }}
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                    title="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors ${
                        wishlist.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  {isAdmin && (
                    <div className="absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
                        title="Update"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProduct(product.id);
                        }}
                        className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Section 2: Product01 Collection */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Classic Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {product01Section.map((product) => (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded bg-gray-100 cursor-pointer"
                  onClick={() => setFullViewImage(product.image)}
                >
                  <Image
                    src={product.image}
                    alt={`Product ${product.id}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className={`object-cover transition-transform duration-500 ease-out ${
                      hoveredProduct === product.id ? "scale-150" : "scale-100"
                    }`}
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setWishlist(prev => {
                        const newWishlist = new Set(prev);
                        if (newWishlist.has(product.id)) {
                          newWishlist.delete(product.id);
                        } else {
                          newWishlist.add(product.id);
                        }
                        return newWishlist;
                      });
                    }}
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                    title="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors ${
                        wishlist.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  {isAdmin && (
                    <div className="absolute top-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
                        title="Update"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProduct(product.id);
                        }}
                        className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Own a Masterpiece?
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            Each piece is unique and crafted with love by artisans who care about quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button className="px-8 py-3 bg-white text-amber-900 rounded hover:bg-amber-50 font-semibold">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded hover:bg-white/10 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
