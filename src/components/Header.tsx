import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { LOGO_URL } from '../data/mockData.ts';
import { Currency } from '../types/index.ts';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlist,
    currency,
    setCurrency,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMenuOpen,
    setActiveTab
  } = useApp();

  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const currencies: Currency[] = ['PKR', 'GBP', 'USD', 'AED'];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 pt-safe bg-[#fcf9f5]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(28,28,26,0.04)] transition-all">
      {/* Top Heritage Marquee Bar */}
      <div className="bg-[#0d382b] text-[#b8944e] py-1.5 px-4 overflow-hidden flex items-center justify-center border-b border-[#0d382b]/30">
        <div className="whitespace-nowrap flex items-center gap-3 font-sans text-[10px] tracking-[0.18em] uppercase font-semibold">
          <span className="material-symbols-outlined text-[12px] text-[#ffdea5]">stars</span>
          <span>Lahore Lahore ha!</span>
          <span className="opacity-40">•</span>
          <span>Complimentary Express Delivery Worldwide</span>
          <span className="opacity-40">•</span>
          <span>Lahore Flagship Atelier</span>
          <span className="material-symbols-outlined text-[12px] text-[#ffdea5]">stars</span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Menu & Brand */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Navigation Menu"
            className="w-11 h-11 flex items-center justify-center text-[#1c1c1a] hover:text-[#002118] transition-colors rounded-full hover:bg-[#f0edea]"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <button
            onClick={() => setActiveTab('home-atelier')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group"
          >
            <img
              src={LOGO_URL}
              alt="Faiza Clothings Lahore Insignia"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-[22px] sm:text-[24px] text-[#002118] tracking-tight leading-none font-semibold">
                Faiza
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#b8944e] tracking-[0.18em] uppercase font-medium">
                Home Atelier
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-[12px] tracking-[0.14em] uppercase font-medium text-[#414845]">
          <button
            onClick={() => setActiveTab('home-atelier')}
            className="hover:text-[#002118] transition-colors"
          >
            Atelier
          </button>
          <button
            onClick={() => setActiveTab('collections-bazaars')}
            className="hover:text-[#002118] transition-colors"
          >
            Bazaars &amp; Collections
          </button>
          <button
            onClick={() => setActiveTab('bridal-vip')}
            className="hover:text-[#002118] transition-colors flex items-center gap-1 text-[#b8944e]"
          >
            <span className="material-symbols-outlined text-[14px]">crown</span>
            Bridal VIP
          </button>
          <button
            onClick={() => setActiveTab('whatsapp-concierge')}
            className="hover:text-[#002118] transition-colors"
          >
            Concierge
          </button>
        </nav>

        {/* Right: Currency Switcher, Wishlist, Bag, Profile */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="h-8 px-2 rounded-full border border-[#c0c8c3]/40 bg-[#f6f3ef] text-[#002118] font-sans text-[10px] sm:text-[11px] font-semibold tracking-wider flex items-center gap-1 hover:bg-[#ebe8e4] transition-colors"
              aria-label="Select currency"
            >
              <span>{currency}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
            </button>

            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-28 bg-[#fcf9f5] border border-[#c0c8c3]/40 rounded-lg shadow-lg py-1 z-50 animate-in fade-in zoom-in-95">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setShowCurrencyDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 font-sans text-xs flex items-center justify-between hover:bg-[#f0edea] transition-colors ${
                      currency === c ? 'text-[#002118] font-bold bg-[#f0edea]/60' : 'text-[#414845]'
                    }`}
                  >
                    <span>{c}</span>
                    {currency === c && <span className="material-symbols-outlined text-[14px] text-[#0d382b]">check</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            aria-label="Wishlist"
            className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#1c1c1a] hover:text-[#002118] transition-colors rounded-full hover:bg-[#f0edea]"
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#9c4048] text-white font-sans text-[9px] flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#1c1c1a] hover:text-[#002118] transition-colors rounded-full hover:bg-[#f0edea]"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#0d382b] text-white font-sans text-[9px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile / Orders Button */}
          <button
            onClick={() => setActiveTab('profile-orders')}
            aria-label="User Profile and Orders"
            className="w-8 h-8 rounded-full bg-[#002118] text-[#ffffff] flex items-center justify-center ml-1 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
