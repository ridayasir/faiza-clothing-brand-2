import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { PRODUCTS, ATELIERS } from '../data/mockData.ts';
import { Product } from '../types/index.ts';

export const BazaarsView: React.FC = () => {
  const {
    formatPrice,
    setSelectedProduct,
    toggleWishlist,
    isWishlisted,
    addToCart,
    filterBazaar,
    setFilterBazaar,
    setIsTrialModalOpen,
    setTrialEnsembleTitle
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCraft, setSelectedCraft] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'hours'>('featured');

  const categories = ['All', 'Bridal Couture', 'Festive Formals', 'Luxury Prêt', 'Winter Formal', 'Festive Lawn'];
  const crafts = ['All', 'Zardozi & Dabka', 'Gota Patti Work', 'Tilla Weaving', 'Pure Silk Lawn'];
  const bazaars = ['All', 'Anarkali Bazaar', 'Liberty & Gulberg', 'M.M. Alam Suite'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Bazaar filter
      if (filterBazaar !== 'All' && p.bazaarOrigin !== filterBazaar) return false;
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      // Craft filter
      if (selectedCraft !== 'All' && p.craft !== selectedCraft) return false;
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesFabric = p.fabric.toLowerCase().includes(query);
        const matchesCraft = p.craft.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesFabric && !matchesCraft && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.pricePKR - b.pricePKR;
      if (sortBy === 'price-desc') return b.pricePKR - a.pricePKR;
      if (sortBy === 'hours') return b.karigariHours - a.karigariHours;
      return 0;
    });
  }, [filterBazaar, selectedCategory, selectedCraft, searchQuery, sortBy]);

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* Header Banner */}
      <div className="bg-[#002118] text-white rounded-2xl p-6 sm:p-8 mb-6 shadow-lg border border-[#ffdea5]/20 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">styler</span>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#ffdea5] font-bold">
              The Historic Bazaars of Lahore
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-[36px] text-white leading-tight mb-2">
            Imperial Collections &amp; Haute Prêt
          </h1>
          <p className="font-serif text-[15px] sm:text-[17px] text-[#ebe8e4]/90 leading-relaxed italic">
            Each silhouette weaves the heritage of Lahore’s ancient craft guilds—from the heirloom bridal zardozi of Anarkali to the contemporary royal formals of Gulberg.
          </p>
        </div>
      </div>

      {/* Search and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#717974] text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ensemble name, silk, zardozi..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#ffffff] border border-[#c0c8c3]/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#002118] font-sans placeholder-[#717974]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2">
          <span className="font-sans text-[11px] text-[#414845] uppercase font-bold tracking-wider whitespace-nowrap">
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#ffffff] border border-[#c0c8c3]/40 rounded-xl px-3 py-2 text-xs font-sans text-[#002118] font-semibold focus:outline-none focus:ring-2 focus:ring-[#002118]"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="hours">Karigari Craft Hours</option>
          </select>
        </div>
      </div>

      {/* Bazaar Filter Tabs */}
      <div className="mb-3">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#b8944e] font-bold block mb-1.5">
          Filter by Lahore Provenance
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {bazaars.map((b) => (
            <button
              key={b}
              onClick={() => setFilterBazaar(b)}
              className={`px-3 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                filterBazaar === b
                  ? 'bg-[#0d382b] text-white shadow-sm font-semibold'
                  : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4] font-medium'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="mb-4">
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#b8944e] font-bold block mb-1.5">
          Occasion &amp; Silhouette
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#002118] text-white shadow-sm font-semibold'
                  : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4] font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between mb-4 py-2 border-b border-[#c0c8c3]/20">
        <span className="font-sans text-xs text-[#414845]">
          Showing <strong className="text-[#002118] font-bold">{filteredProducts.length}</strong> masterworks
          {filterBazaar !== 'All' && <span> from {filterBazaar}</span>}
        </span>
        {(filterBazaar !== 'All' || selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setFilterBazaar('All');
              setSelectedCategory('All');
              setSelectedCraft('All');
              setSearchQuery('');
            }}
            className="font-sans text-xs text-[#9c4048] hover:underline font-bold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-[#ffffff] rounded-2xl border border-dashed border-[#c0c8c3] my-4 p-8">
          <span className="material-symbols-outlined text-[48px] text-[#b8944e] mb-3">diamond</span>
          <h3 className="font-serif text-[20px] text-[#002118] font-semibold mb-2">
            No Ensembles Matched Your Criteria
          </h3>
          <p className="font-serif text-sm text-[#414845] max-w-md mx-auto mb-4">
            Our atelier artisans handcraft bespoke pieces on request. Inquire with our senior stylist to commission your custom ensemble.
          </p>
          <button
            onClick={() => {
              setFilterBazaar('All');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#002118] text-white rounded-lg font-sans text-xs uppercase tracking-widest font-bold"
          >
            View All Ensembles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const wish = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full aspect-[3/4] bg-[#f0edea] cursor-pointer overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    aria-label={wish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-[#9c4048] hover:scale-110 active:scale-95 transition-all shadow-sm"
                  >
                    <span className={`material-symbols-outlined text-[18px] ${wish ? 'fill-1' : ''}`}>
                      {wish ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>

                  {/* Badges */}
                  <div className="absolute bottom-2 left-2 flex flex-col gap-1 items-start">
                    <span className={`${product.badgeColor || 'bg-[#0d382b] text-white'} font-sans text-[9px] uppercase px-2 py-0.5 rounded tracking-widest font-semibold shadow-sm`}>
                      {product.badge}
                    </span>
                    <span className="bg-black/65 backdrop-blur-sm text-white font-sans text-[8px] uppercase px-1.5 py-0.5 rounded font-medium">
                      {product.karigariHours}h Handcraft
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-[#717974] text-[9px] uppercase tracking-wider font-sans mb-1">
                      <span>{product.craft}</span>
                      <span>{product.bazaarOrigin.split(' ')[0]}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-serif text-[16px] sm:text-[18px] text-[#002118] font-semibold leading-tight line-clamp-1 cursor-pointer hover:text-[#0d382b]"
                    >
                      {product.name}
                    </h3>

                    <p className="font-serif text-[12px] sm:text-[13px] text-[#414845] line-clamp-2 mt-1">
                      {product.fabric}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#f0edea]">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-sans text-[14px] text-[#1c1c1a] font-bold">
                        {formatPrice(product.pricePKR)}
                      </span>
                      <div className="flex gap-1">
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-2.5 h-2.5 rounded-full border border-black/10"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="py-1.5 px-2 bg-[#f0edea] text-[#002118] font-sans text-[10px] uppercase font-bold tracking-wider rounded hover:bg-[#ebe8e4] transition-colors"
                      >
                        Inspect
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="py-1.5 px-2 bg-[#0d382b] text-white font-sans text-[10px] uppercase font-bold tracking-wider rounded hover:bg-[#002118] transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[13px]">add_shopping_bag</span>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Atelier Guarantee Footer Callout */}
      <div className="mt-10 bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-2xl p-6 text-center">
        <h3 className="font-serif text-[20px] text-[#002118] font-semibold mb-2">
          Looking for a Custom Haute Couture Bridal Silhouette?
        </h3>
        <p className="font-serif text-sm text-[#414845] max-w-xl mx-auto mb-4">
          Book a private consultation at our Gulberg Flagship Trial Suite or Kensington London Salon with our Senior Masterji and Head Designer.
        </p>
        <button
          onClick={() => {
            setTrialEnsembleTitle('Custom Bridal Trousseau Commission');
            setIsTrialModalOpen(true);
          }}
          className="px-6 py-3 bg-[#ffdea5] text-[#002118] font-sans text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-[#e9c176] transition-colors shadow-sm"
        >
          Book Atelier Bridal Consultation
        </button>
      </div>
    </div>
  );
};
