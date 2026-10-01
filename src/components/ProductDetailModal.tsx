import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { Product } from '../types/index.ts';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    formatPrice,
    toggleWishlist,
    isWishlisted,
    setIsTrialModalOpen,
    setTrialEnsembleTitle
  } = useApp();

  const [selectedSize, setSelectedSize] = useState<string>('Custom Measurement');
  const [selectedColor, setSelectedColor] = useState<string>(selectedProduct?.colors[0] || '');
  const [customBust, setCustomBust] = useState('36');
  const [customWaist, setCustomWaist] = useState('28');
  const [customHips, setCustomHips] = useState('38');
  const [customLength, setCustomLength] = useState('43');
  const [showMeasureInputs, setShowMeasureInputs] = useState(true);

  if (!selectedProduct) return null;

  const wish = isWishlisted(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(
      selectedProduct,
      selectedSize,
      selectedColor || selectedProduct.colors[0],
      selectedSize === 'Custom Measurement'
        ? {
            bust: customBust,
            waist: customWaist,
            hips: customHips,
            lehengaLength: customLength
          }
        : undefined
    );
  };

  const handleBookTrial = () => {
    setTrialEnsembleTitle(`${selectedProduct.name} Bridal Trial`);
    setIsTrialModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div
        className="relative bg-[#ffffff] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#c0c8c3]/40 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          aria-label="Close dialog"
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1c1c1a] hover:bg-[#f0edea] shadow transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Left Column: Image Showcase */}
        <div className="md:w-1/2 relative bg-[#f6f3ef] min-h-[380px] md:min-h-full">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.alt}
            className="w-full h-full object-cover max-h-[520px] md:max-h-none"
          />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
            <span className={`${selectedProduct.badgeColor || 'bg-[#0d382b] text-white'} font-sans text-[10px] uppercase px-2.5 py-1 rounded tracking-widest font-bold shadow-sm`}>
              {selectedProduct.badge}
            </span>
            <span className="bg-[#002118]/85 backdrop-blur-md text-[#ffdea5] font-sans text-[10px] uppercase px-2.5 py-1 rounded font-semibold border border-[#ffdea5]/30">
              {selectedProduct.bazaarOrigin}
            </span>
          </div>

          {/* Bottom Hours Tag */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-black/10 flex items-center justify-between text-xs">
            <span className="font-sans font-bold text-[#002118] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#b8944e]">schedule</span>
              <span>{selectedProduct.karigariHours} Karigari Hours</span>
            </span>
            <span className="font-sans text-[#717974]">{selectedProduct.karigarsCount} Master Artisans</span>
          </div>
        </div>

        {/* Right Column: Specifications & Purchasing */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between text-[#717974] text-xs font-sans uppercase tracking-wider mb-1">
              <span>{selectedProduct.craft}</span>
              <span>{selectedProduct.category}</span>
            </div>

            <h2 className="font-serif text-[26px] sm:text-[30px] text-[#002118] font-bold leading-tight mb-2">
              {selectedProduct.name}
            </h2>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-sans text-[22px] font-bold text-[#1c1c1a]">
                {formatPrice(selectedProduct.pricePKR)}
              </span>
              <span className="font-sans text-xs text-[#0d382b] font-semibold">
                Complimentary Express Delivery
              </span>
            </div>

            <p className="font-serif text-[14px] sm:text-[15px] text-[#414845] leading-relaxed mb-4">
              {selectedProduct.description}
            </p>

            {/* Fabric Details */}
            <div className="p-3 bg-[#f6f3ef] rounded-xl border border-[#c0c8c3]/30 mb-5">
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#b8944e] font-bold block mb-1">
                Textile Provenance
              </span>
              <p className="font-serif text-xs text-[#1c1c1a] font-medium">
                {selectedProduct.fabric}
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <label className="block font-sans text-xs uppercase font-bold text-[#002118] mb-2">
                Color Shade Swatch
              </label>
              <div className="flex gap-2">
                {selectedProduct.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor === c ? 'border-[#002118] scale-110 shadow-sm' : 'border-black/20'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Sizing Selection */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label className="font-sans text-xs uppercase font-bold text-[#002118]">
                  Select Sizing
                </label>
                <button
                  type="button"
                  onClick={() => setShowMeasureInputs(!showMeasureInputs)}
                  className="font-sans text-[11px] text-[#0d382b] underline font-semibold"
                >
                  Custom Measurements
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProduct.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSelectedSize(s);
                      if (s === 'Custom Measurement') setShowMeasureInputs(true);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-sans text-xs uppercase tracking-wider transition-all ${
                      selectedSize === s
                        ? 'bg-[#002118] text-white font-bold shadow-sm'
                        : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Custom Measurements Input Box */}
              {selectedSize === 'Custom Measurement' && showMeasureInputs && (
                <div className="mt-3 p-3.5 bg-[#fcf9f5] border border-[#ffdea5] rounded-xl animate-in fade-in">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#b8944e] font-bold block mb-2">
                    Enter Quick Measurements (Inches)
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div>
                      <span className="font-sans text-[9px] text-[#717974] block mb-0.5">Bust</span>
                      <input
                        type="text"
                        value={customBust}
                        onChange={(e) => setCustomBust(e.target.value)}
                        className="w-full p-1.5 bg-white border border-[#c0c8c3]/40 rounded text-center font-bold"
                      />
                    </div>
                    <div>
                      <span className="font-sans text-[9px] text-[#717974] block mb-0.5">Waist</span>
                      <input
                        type="text"
                        value={customWaist}
                        onChange={(e) => setCustomWaist(e.target.value)}
                        className="w-full p-1.5 bg-white border border-[#c0c8c3]/40 rounded text-center font-bold"
                      />
                    </div>
                    <div>
                      <span className="font-sans text-[9px] text-[#717974] block mb-0.5">Hips</span>
                      <input
                        type="text"
                        value={customHips}
                        onChange={(e) => setCustomHips(e.target.value)}
                        className="w-full p-1.5 bg-white border border-[#c0c8c3]/40 rounded text-center font-bold"
                      />
                    </div>
                    <div>
                      <span className="font-sans text-[9px] text-[#717974] block mb-0.5">Length</span>
                      <input
                        type="text"
                        value={customLength}
                        onChange={(e) => setCustomLength(e.target.value)}
                        className="w-full p-1.5 bg-white border border-[#c0c8c3]/40 rounded text-center font-bold"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Key Handcrafted Points */}
            <div className="mb-6">
              <span className="font-sans text-xs uppercase font-bold text-[#002118] block mb-2">
                Atelier Architectural Specifications
              </span>
              <ul className="space-y-1.5">
                {selectedProduct.details.map((d, i) => (
                  <li key={i} className="font-serif text-xs text-[#414845] flex items-start gap-2">
                    <span className="material-symbols-outlined text-[14px] text-[#b8944e] mt-0.5">
                      stars
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-4 border-t border-[#c0c8c3]/30">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleAddToCart}
                className="py-3.5 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Add to Royal Bag</span>
              </button>

              <button
                onClick={handleBookTrial}
                className="py-3.5 bg-[#ffdea5] text-[#002118] hover:bg-[#e9c176] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Bridal Trial</span>
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                className="flex-1 py-2.5 bg-[#f0edea] hover:bg-[#ebe8e4] text-[#1c1c1a] font-sans text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span className={`material-symbols-outlined text-[16px] text-[#9c4048] ${wish ? 'fill-1' : ''}`}>
                  {wish ? 'favorite' : 'favorite_border'}
                </span>
                <span>{wish ? 'Preserved in Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
