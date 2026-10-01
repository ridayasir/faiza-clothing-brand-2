import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { PRODUCTS } from '../data/mockData.ts';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    setSelectedProduct,
    formatPrice
  } = useApp();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div
        className="w-full max-w-md bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#c0c8c3]/30 flex items-center justify-between bg-[#fcf9f5]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#9c4048] text-[22px] fill-1">favorite</span>
            <div>
              <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#002118]">
                Heritage Wishlist
              </h2>
              <span className="font-sans text-[11px] text-[#717974] uppercase tracking-wider font-semibold">
                {wishlist.length} Preserved Ensembles
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
            className="w-9 h-9 rounded-full bg-[#f0edea] hover:bg-[#ebe8e4] flex items-center justify-center text-[#1c1c1a]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-[48px] text-[#c0c8c3] mb-2">favorite_border</span>
              <h3 className="font-serif text-[18px] text-[#002118] font-semibold mb-1">
                Your Wishlist is Empty
              </h3>
              <p className="font-serif text-sm text-[#717974]">
                Explore our collections and tap the heart icon to save pieces for your trousseau.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-xl flex gap-3 relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedProduct(product);
                    }}
                    className="w-20 h-24 object-cover rounded-lg cursor-pointer"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setSelectedProduct(product);
                          }}
                          className="font-serif text-[16px] font-bold text-[#002118] leading-tight cursor-pointer hover:text-[#0d382b]"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#9c4048] p-1"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>

                      <span className="font-sans text-[10px] text-[#717974] uppercase block mt-0.5">
                        {product.craft}
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-between">
                      <span className="font-sans text-sm font-bold text-[#1c1c1a]">
                        {formatPrice(product.pricePKR)}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="py-1 px-3 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase font-bold rounded flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">add_shopping_bag</span>
                        <span>Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
