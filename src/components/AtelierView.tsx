import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { HERO_IMAGE, PRODUCTS, CRAFT_STORIES, ATELIERS } from '../data/mockData.ts';
import { Product, CraftStory } from '../types/index.ts';

export const AtelierView: React.FC = () => {
  const {
    formatPrice,
    setSelectedProduct,
    setSelectedCraftStory,
    setIsTrialModalOpen,
    setTrialEnsembleTitle,
    toggleWishlist,
    isWishlisted,
    addToCart,
    setActiveTab,
    setFilterBazaar
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Bridal Couture', 'Festive Formals', 'Luxury Prêt'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter(p => p.category === activeCategory || (activeCategory === 'Luxury Prêt' && p.category === 'Festive Lawn')).slice(0, 4);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOpenCraft = (craft: CraftStory) => {
    setSelectedCraftStory(craft);
  };

  const handleBazaarClick = (bazaarName: string) => {
    setFilterBazaar(bazaarName);
    setActiveTab('collections-bazaars');
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto">
      {/* SECTION 1: HERO SHOWCASE */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 pt-2 pb-6">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d382b] shadow-xl">
          {/* Main Hero Image */}
          <div className="relative h-[480px] sm:h-[560px] w-full">
            <img
              src={HERO_IMAGE}
              alt="Royal Pakistani Haute Couture Bridal lehenga showcase in emerald green with intricate gold dabka embroidery set inside an imperial Lahore palace"
              className="w-full h-full object-cover object-top filter brightness-[0.95]"
              loading="eager"
            />
            
            {/* Atmospheric Vignette & Scrims */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002118] via-[#002118]/45 to-transparent"></div>
            <div className="absolute inset-0 bg-radial from-transparent to-[#002118]/50 mix-blend-multiply pointer-events-none"></div>

            {/* Lahore Insignia Seal Top Row */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="bg-[#fcf9f5]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-[#ffdea5]/40">
                <span className="material-symbols-outlined text-[14px] text-[#b8944e]">stars</span>
                <span className="font-sans text-[10px] sm:text-[11px] text-[#422e00] uppercase tracking-widest font-bold">
                  Lahore Lahore ha!
                </span>
                <span className="text-[#422e00] opacity-40">•</span>
                <span className="font-sans text-[10px] sm:text-[11px] text-[#414845] uppercase font-medium">
                  Haute 2025
                </span>
              </div>
              <span className="bg-[#002118]/80 backdrop-blur-md text-[#ffdea5] font-sans text-[10px] sm:text-[11px] uppercase px-3 py-1 rounded-full tracking-wider border border-[#ffdea5]/30 font-medium">
                Heritage Edition
              </span>
            </div>

            {/* Hero Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-col z-10 text-white">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="w-6 h-px bg-[#ffdea5]"></span>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#ffdea5] font-semibold">
                  Bespoke Bridal Couture
                </span>
              </div>
              
              <h1 className="font-serif text-[28px] sm:text-[40px] text-white leading-tight mb-2 tracking-tight">
                Jahan-e-Lahore: The Royal Festive
              </h1>
              
              <p className="font-serif text-[15px] sm:text-[18px] text-[#ebe8e4]/95 line-clamp-2 mb-5 leading-relaxed italic max-w-2xl">
                A timeless ode to the imperial courtyards of the Badshahi and the fragrant blossom pavilions of the Shalamar Bagh.
              </p>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-3 mb-4 max-w-md">
                <button
                  onClick={() => {
                    const gallery = document.getElementById('masterpiece-gallery');
                    if (gallery) {
                      gallery.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      setActiveTab('collections-bazaars');
                    }
                  }}
                  className="w-full h-12 bg-[#ffdea5] text-[#002118] font-sans text-[11px] sm:text-[12px] uppercase tracking-widest font-bold rounded-lg shadow-md hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                >
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </button>

                <button
                  onClick={() => {
                    setTrialEnsembleTitle('Jahan-e-Lahore Bridal Suite');
                    setIsTrialModalOpen(true);
                  }}
                  className="w-full h-12 bg-white/15 backdrop-blur-md text-white border border-white/20 font-sans text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold rounded-lg hover:bg-white/25 transition-colors flex items-center justify-center gap-1.5 active:scale-98"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#ffdea5]">calendar_month</span>
                  <span>Bridal Trial</span>
                </button>
              </div>

              {/* Micro Trust Pills Row */}
              <div className="flex items-center justify-between text-[#ebe8e4]/90 font-sans text-[10px] tracking-wider uppercase pt-2 border-t border-white/10 max-w-md">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]"></span> Zardozi Work
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]"></span> Pure Raw Silk
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]"></span> Atelier Handcrafted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE HISTORIC FABRIC OF LAHORE */}
      <section className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b8944e] font-semibold block">
              Imperial Provenance
            </span>
            <h2 className="font-serif text-[22px] sm:text-[26px] text-[#002118] font-semibold">
              The Fabric of Lahore
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('bridal-vip')}
            className="flex items-center gap-1 text-[#b8944e] hover:text-[#002118] transition-colors"
          >
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider">3 Ateliers</span>
            <span className="material-symbols-outlined text-[18px]">location_on</span>
          </button>
        </div>

        {/* Horizontal Swipeable Atelier Cards */}
        <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory">
          {/* Card 1: Anarkali Bazaar */}
          <div
            onClick={() => handleBazaarClick('Anarkali Bazaar')}
            className="min-w-[270px] sm:min-w-[300px] snap-center bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-xl p-4 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[10px] uppercase tracking-widest bg-[#0d382b] text-white px-2 py-0.5 rounded font-semibold">
                  Heirloom Origin
                </span>
                <span className="material-symbols-outlined text-[#9c4048] text-[20px]">auto_awesome</span>
              </div>
              <h3 className="font-serif text-[20px] text-[#002118] font-semibold mb-1 group-hover:text-[#0d382b] transition-colors">
                Anarkali Bazaar
              </h3>
              <p className="font-serif text-[14px] text-[#414845] leading-relaxed">
                Cradle of heirloom bridal zardozi, antique tilla, and precious marori wire embroidery.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#c0c8c3]/20 mt-3">
              <span className="font-sans text-[11px] text-[#b8944e] font-bold uppercase tracking-wider">
                Heritage Karigars
              </span>
              <span className="material-symbols-outlined text-[#002118] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 2: Liberty & Gulberg */}
          <div
            onClick={() => handleBazaarClick('Liberty & Gulberg')}
            className="min-w-[270px] sm:min-w-[300px] snap-center bg-[#f0edea] border border-[#c0c8c3]/30 rounded-xl p-4 flex flex-col justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[10px] uppercase tracking-widest bg-[#9c4048] text-white px-2 py-0.5 rounded font-semibold">
                  Luxury Prêt
                </span>
                <span className="material-symbols-outlined text-[#422e00] text-[20px]">styler</span>
              </div>
              <h3 className="font-serif text-[20px] text-[#002118] font-semibold mb-1 group-hover:text-[#0d382b] transition-colors">
                Liberty &amp; Gulberg
              </h3>
              <p className="font-serif text-[14px] text-[#414845] leading-relaxed">
                Contemporary prêt-à-porter, architectural silk angrakhas, and jewel-toned festive ensembles.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#c0c8c3]/20 mt-3">
              <span className="font-sans text-[11px] text-[#b8944e] font-bold uppercase tracking-wider">
                Flagship Salon
              </span>
              <span className="material-symbols-outlined text-[#002118] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 3: M.M. Alam Suite */}
          <div
            onClick={() => handleBazaarClick('M.M. Alam Suite')}
            className="min-w-[270px] sm:min-w-[300px] snap-center bg-[#002118] text-white rounded-xl p-4 flex flex-col justify-between shadow-md cursor-pointer hover:shadow-lg transition-shadow group border border-[#ffdea5]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[10px] uppercase tracking-widest bg-[#ffdea5] text-[#002118] px-2 py-0.5 rounded font-bold">
                  Exclusive
                </span>
                <span className="material-symbols-outlined text-[#ffdea5] text-[20px]">crown</span>
              </div>
              <h3 className="font-serif text-[20px] text-white font-semibold mb-1 group-hover:text-[#ffdea5] transition-colors">
                M.M. Alam Suite
              </h3>
              <p className="font-serif text-[14px] text-[#ebe8e4]/90 leading-relaxed">
                Private bridal salon and bespoke royal trousseau consultations with master stylists.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-3">
              <span className="font-sans text-[11px] text-[#ffdea5] font-bold uppercase tracking-wider">
                By Appointment
              </span>
              <span className="material-symbols-outlined text-[#ffdea5] text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MUGHAL CRAFT LEGACIES (2x2 GRID) */}
      <section className="w-full px-4 sm:px-6 py-4">
        <div className="mb-3">
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b8944e] font-semibold block">
            Imperial Karigari
          </span>
          <h2 className="font-serif text-[22px] sm:text-[26px] text-[#002118] font-semibold">
            Mughal Craft Legacies
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {CRAFT_STORIES.map((craft) => (
            <button
              key={craft.id}
              onClick={() => handleOpenCraft(craft)}
              className="bg-[#f6f3ef] border border-[#c0c8c3]/30 p-4 rounded-xl shadow-sm flex flex-col justify-between text-left hover:bg-[#f0edea] hover:shadow transition-all group focus:outline-none"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-[20px] text-[#b8944e] font-semibold">
                  {craft.number}
                </span>
                <span className="material-symbols-outlined text-[#002118] text-[20px] group-hover:scale-110 transition-transform">
                  {craft.icon}
                </span>
              </div>
              <div>
                <h4 className="font-serif text-[16px] sm:text-[18px] leading-tight text-[#002118] font-semibold mb-1 group-hover:text-[#0d382b] transition-colors">
                  {craft.title}
                </h4>
                <p className="font-serif text-[13px] sm:text-[14px] leading-snug text-[#414845]">
                  {craft.shortDesc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 4: MASTERPIECE GALLERY (E-COMMERCE SHOWCASE) */}
      <section id="masterpiece-gallery" className="w-full px-4 sm:px-6 py-4 scroll-mt-24">
        <div className="flex items-end justify-between mb-3">
          <div>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#b8944e] font-semibold block">
              Haute Selections
            </span>
            <h2 className="font-serif text-[22px] sm:text-[26px] text-[#002118] font-semibold">
              Masterpiece Gallery
            </h2>
          </div>
          <span className="font-sans text-[11px] text-[#9c4048] font-bold uppercase tracking-wider">
            84 Designs
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-sans text-[11px] uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#002118] text-white shadow-sm font-semibold'
                  : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4] font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3">
          {filteredProducts.map((product) => {
            const wish = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
              >
                {/* Image Container */}
                <div
                  onClick={() => handleOpenProduct(product)}
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

                  {/* Badge */}
                  <span className={`absolute bottom-2 left-2 ${product.badgeColor || 'bg-[#0d382b] text-white'} font-sans text-[9px] uppercase px-2 py-0.5 rounded tracking-widest font-semibold shadow-sm`}>
                    {product.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-3 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <span className="font-sans text-[9px] uppercase text-[#414845] tracking-wider block">
                      {product.craft.split('&')[0]} • {product.fabric.split('•')[0]}
                    </span>
                    <h3
                      onClick={() => handleOpenProduct(product)}
                      className="font-serif text-[15px] sm:text-[17px] leading-tight text-[#002118] font-semibold mt-1 line-clamp-1 cursor-pointer hover:text-[#0d382b]"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#f0edea] flex items-center justify-between">
                    <span className="font-sans text-[12px] sm:text-[13px] text-[#1c1c1a] font-bold">
                      {formatPrice(product.pricePKR)}
                    </span>
                    <div className="flex gap-1 items-center">
                      {product.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-2.5 h-2.5 rounded-full border border-black/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-4">
          <button
            onClick={() => setActiveTab('collections-bazaars')}
            className="w-full py-3.5 bg-[#f0edea] text-[#002118] font-sans text-[11px] sm:text-[12px] uppercase tracking-widest font-bold rounded-lg hover:bg-[#ebe8e4] transition-colors flex items-center justify-center gap-2 border border-[#c0c8c3]/30 active:scale-98"
          >
            <span>View All 84 Ensembles</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </div>
      </section>

      {/* SECTION 5: MASTER KARIGAR SPOTLIGHT BANNER */}
      <section className="w-full px-4 sm:px-6 py-4">
        <div className="bg-[#0d382b] text-white rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden border border-[#ffdea5]/20">
          {/* Decorative backdrop shapes */}
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#3e6657]/30 pointer-events-none blur-xl"></div>
          <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-[#ffdea5]/10 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">military_tech</span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#ffdea5] font-bold">
                Ustaad Spotlight
              </span>
            </div>

            <h3 className="font-serif text-[22px] sm:text-[26px] text-white font-semibold mb-1">
              Master Ustaad Tariq
            </h3>

            <p className="font-serif text-[14px] sm:text-[16px] text-[#ebe8e4]/90 mb-4 leading-relaxed">
              38 years safeguarding the royal Marori and Zardozi craft at our Old Lahore Anarkali atelier.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 bg-[#002118]/70 backdrop-blur-sm rounded-lg text-center mb-4 border border-white/10">
              <div>
                <span className="font-serif text-[20px] font-bold text-[#ffdea5] block">
                  400+
                </span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-[#ebe8e4]/80 font-medium">
                  Karigars
                </span>
              </div>
              <div className="border-x border-white/10">
                <span className="font-serif text-[20px] font-bold text-[#ffdea5] block">
                  180h
                </span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-[#ebe8e4]/80 font-medium">
                  Per Ensemble
                </span>
              </div>
              <div>
                <span className="font-serif text-[20px] font-bold text-[#ffdea5] block">
                  100%
                </span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-[#ebe8e4]/80 font-medium">
                  Pure Silk
                </span>
              </div>
            </div>

            {/* Appointment Triggers */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setTrialEnsembleTitle('Gulberg Flagship Trial with Master Ustaad Tariq');
                  setIsTrialModalOpen(true);
                }}
                className="w-full py-3 bg-[#ffdea5] text-[#002118] font-sans text-[11px] uppercase tracking-widest font-bold rounded-lg shadow hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2 active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">store</span>
                <span>Gulberg Flagship Trial</span>
              </button>

              <button
                onClick={() => {
                  setTrialEnsembleTitle('Worldwide 4K Virtual Fitting with Senior Stylist');
                  setIsTrialModalOpen(true);
                }}
                className="w-full py-3 bg-white/15 backdrop-blur-md text-white border border-white/20 font-sans text-[11px] uppercase tracking-widest font-semibold rounded-lg hover:bg-white/25 transition-colors flex items-center justify-center gap-2 active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px] text-[#ffdea5]">video_call</span>
                <span>Virtual Fitting (Worldwide)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VOICES OF THE CONNOISSEURS (REVIEWS & PRESS) */}
      <section className="w-full px-4 sm:px-6 py-3">
        <div className="bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-[#b8944e]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-[16px] fill-1 text-[#b8944e]">
                  star
                </span>
              ))}
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#414845] font-bold">
              Verified Global Bride
            </span>
          </div>

          <blockquote className="font-serif text-[16px] sm:text-[17px] text-[#1c1c1a] italic leading-snug mb-3">
            “Receiving my custom bridal lehenga in Mayfair London within 3 weeks felt like magic. The weight of the pure gold zari and the flawless fit made me feel like Mughal royalty.”
          </blockquote>

          <div className="flex items-center justify-between pt-2 border-t border-[#c0c8c3]/20">
            <div>
              <span className="font-sans text-[12px] sm:text-[13px] text-[#002118] font-bold block">
                Dr. Ayla Raza &amp; Farhan
              </span>
              <span className="font-serif text-[12px] sm:text-[13px] text-[#414845]">
                Kensington, London • Shehnai-e-Feroza Bride
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#f0edea] flex items-center justify-center text-[#002118]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
          </div>

          {/* Press Banner Strip */}
          <div className="mt-4 pt-3 border-t border-[#c0c8c3]/20 flex items-center justify-between text-[#414845] opacity-80 font-sans text-[10px] uppercase tracking-widest">
            <span>Dawn Images</span>
            <span>•</span>
            <span>Grazia PK</span>
            <span>•</span>
            <span>Hello! Magazine</span>
            <span>•</span>
            <span>Sunday</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST & GUARANTEES */}
      <section className="w-full px-4 sm:px-6 pt-2 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2.5 p-3 bg-[#f0edea] border border-[#c0c8c3]/30 rounded-lg">
            <span className="material-symbols-outlined text-[#002118] text-[22px]">payments</span>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold text-[#002118] uppercase">
                Cash on Delivery
              </span>
              <span className="font-sans text-[9px] text-[#414845]">
                All Pakistan Cities
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-[#f0edea] border border-[#c0c8c3]/30 rounded-lg">
            <span className="material-symbols-outlined text-[#002118] text-[22px]">flight_takeoff</span>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold text-[#002118] uppercase">
                DHL Express
              </span>
              <span className="font-sans text-[9px] text-[#414845]">
                Worldwide 4-6 Days
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-[#f0edea] border border-[#c0c8c3]/30 rounded-lg">
            <span className="material-symbols-outlined text-[#002118] text-[22px]">straighten</span>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold text-[#002118] uppercase">
                Made-to-Measure
              </span>
              <span className="font-sans text-[9px] text-[#414845]">
                Guaranteed Fit
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 bg-[#f0edea] border border-[#c0c8c3]/30 rounded-lg">
            <span className="material-symbols-outlined text-[#002118] text-[22px]">verified_user</span>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold text-[#002118] uppercase">
                100% Pure Silk
              </span>
              <span className="font-sans text-[9px] text-[#414845]">
                Certified Heritage
              </span>
            </div>
          </div>
        </div>

        {/* Final Lahore Pride Micro Seal */}
        <div className="mt-6 text-center py-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0edea] border border-[#c0c8c3]/30">
            <span className="material-symbols-outlined text-[12px] text-[#b8944e]">stars</span>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#002118] font-bold">
              Lahore Lahore ha! • Faiza Clothings 2025
            </span>
            <span className="material-symbols-outlined text-[12px] text-[#b8944e]">stars</span>
          </div>
        </div>
      </section>
    </div>
  );
};
