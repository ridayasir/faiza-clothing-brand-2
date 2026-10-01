import React from 'react';
import { useApp, NavTab } from '../context/AppContext.tsx';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const navItems: { tab: NavTab; label: string; icon: string; isSpecial?: boolean }[] = [
    { tab: 'home-atelier', label: 'Atelier', icon: 'diamond' },
    { tab: 'collections-bazaars', label: 'Bazaars', icon: 'styler' },
    { tab: 'bridal-vip', label: 'Bridal VIP', icon: 'crown', isSpecial: true },
    { tab: 'whatsapp-concierge', label: 'VIP Chat', icon: 'support_agent' },
    { tab: 'profile-orders', label: 'Orders', icon: 'account_circle' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 pb-safe bg-[#fcf9f5]/95 backdrop-blur-xl border-t border-[#c0c8c3]/30 shadow-[0_-2px_12px_rgba(28,28,26,0.06)]">
      <div className="max-w-md mx-auto flex justify-between items-center h-20 px-3 sm:px-6">
        {navItems.map((item) => {
          const isActive = activeTab === item.tab;

          if (item.isSpecial) {
            return (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className="flex flex-col items-center justify-center w-16 h-14 transition-transform active:scale-95 relative group focus:outline-none"
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#ffdea5] shadow-md ring-2 ring-[#0d382b]'
                    : 'bg-[#ffdea5]/40 group-hover:bg-[#ffdea5]/70'
                }`}>
                  <span className={`material-symbols-outlined text-[20px] ${
                    isActive ? 'text-[#002118]' : 'text-[#422e00]'
                  }`}>
                    {item.icon}
                  </span>
                </div>
                <span className={`font-sans text-[10px] tracking-wider uppercase mt-1 transition-colors ${
                  isActive ? 'text-[#002118] font-bold' : 'text-[#b8944e] font-medium'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors active:scale-95 focus:outline-none ${
                isActive
                  ? 'text-[#0d382b] font-bold'
                  : 'text-[#414845] hover:text-[#002118]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className={`font-sans text-[10px] tracking-wider uppercase mt-1 ${isActive ? 'font-bold' : 'font-normal'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
