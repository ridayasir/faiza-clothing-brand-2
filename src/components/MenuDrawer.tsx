import React from 'react';
import { useApp } from '../context/AppContext.tsx';
import { LOGO_URL, ATELIERS } from '../data/mockData.ts';
import { Currency } from '../types/index.ts';

export const MenuDrawer: React.FC = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setActiveTab,
    currency,
    setCurrency,
    setIsTrialModalOpen
  } = useApp();

  if (!isMenuOpen) return null;

  const currencies: Currency[] = ['PKR', 'GBP', 'USD', 'AED'];

  const handleNav = (tab: any) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex animate-in fade-in">
      <div
        className="w-full max-w-xs sm:max-w-sm bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-[#c0c8c3]/30 bg-[#fcf9f5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Faiza Clothings"
              className="h-9 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-[20px] font-bold text-[#002118] leading-none">
                Faiza
              </span>
              <span className="font-sans text-[10px] text-[#b8944e] tracking-[0.2em] uppercase font-bold">
                Home Atelier
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-[#f0edea] hover:bg-[#ebe8e4] flex items-center justify-center text-[#1c1c1a]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Main Nav Links */}
        <div className="p-5 flex-1 space-y-6 overflow-y-auto">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#717974] font-bold block mb-3">
              Navigation
            </span>
            <div className="space-y-1 font-serif text-[17px] text-[#002118]">
              <button
                onClick={() => handleNav('home-atelier')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f6f3ef] transition-colors flex items-center justify-between"
              >
                <span>Atelier Showcase</span>
                <span className="material-symbols-outlined text-[18px] text-[#b8944e]">diamond</span>
              </button>

              <button
                onClick={() => handleNav('collections-bazaars')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f6f3ef] transition-colors flex items-center justify-between"
              >
                <span>Bazaars &amp; Haute Prêt</span>
                <span className="material-symbols-outlined text-[18px] text-[#b8944e]">styler</span>
              </button>

              <button
                onClick={() => handleNav('bridal-vip')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f6f3ef] transition-colors flex items-center justify-between text-[#0d382b] font-bold"
              >
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#ffdea5]">crown</span>
                  Bridal VIP Suite
                </span>
                <span className="font-sans text-[10px] bg-[#ffdea5] text-[#002118] px-2 py-0.5 rounded font-bold">
                  Bespoke
                </span>
              </button>

              <button
                onClick={() => handleNav('whatsapp-concierge')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f6f3ef] transition-colors flex items-center justify-between"
              >
                <span>Bespoke Concierge &amp; Chat</span>
                <span className="material-symbols-outlined text-[18px] text-[#b8944e]">support_agent</span>
              </button>

              <button
                onClick={() => handleNav('profile-orders')}
                className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f6f3ef] transition-colors flex items-center justify-between"
              >
                <span>Live Atelier Tracking &amp; Profile</span>
                <span className="material-symbols-outlined text-[18px] text-[#b8944e]">hourglass_top</span>
              </button>
            </div>
          </div>

          {/* Currency Switcher */}
          <div className="pt-2 border-t border-[#c0c8c3]/20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#717974] font-bold block mb-2">
              Currency
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`py-2 rounded-lg font-sans text-xs font-bold transition-all ${
                    currency === c
                      ? 'bg-[#002118] text-[#ffdea5] shadow-sm'
                      : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Salons list */}
          <div className="pt-2 border-t border-[#c0c8c3]/20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#717974] font-bold block mb-2">
              Our Flagship Salons
            </span>
            <div className="space-y-2 text-xs font-sans text-[#414845]">
              {ATELIERS.slice(0, 3).map((a) => (
                <div key={a.id} className="p-2.5 bg-[#f6f3ef] rounded-lg">
                  <span className="font-serif font-bold text-[#002118] block text-[13px]">{a.name}</span>
                  <span className="text-[11px] block text-[#717974]">{a.address}</span>
                  <span className="text-[10px] text-[#0d382b] font-semibold">{a.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="p-5 border-t border-[#c0c8c3]/30 bg-[#fcf9f5]">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsTrialModalOpen(true);
            }}
            className="w-full py-3 bg-[#002118] text-[#ffdea5] rounded-xl font-sans text-xs uppercase tracking-widest font-bold shadow mb-2"
          >
            Book Atelier Trial
          </button>
          <p className="font-sans text-[10px] text-center text-[#717974]">
            Lahore • Karachi • London • Express DHL Worldwide
          </p>
        </div>
      </div>
    </div>
  );
};
