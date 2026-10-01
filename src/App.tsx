/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext.tsx';
import { Header } from './components/Header.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { AtelierView } from './components/AtelierView.tsx';
import { BazaarsView } from './components/BazaarsView.tsx';
import { BridalVipView } from './components/BridalVipView.tsx';
import { VipChatView } from './components/VipChatView.tsx';
import { OrdersProfileView } from './components/OrdersProfileView.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { WishlistDrawer } from './components/WishlistDrawer.tsx';
import { MenuDrawer } from './components/MenuDrawer.tsx';
import { CraftModal } from './components/CraftModal.tsx';
import { TrialModal } from './components/TrialModal.tsx';

const AppContent: React.FC = () => {
  const { activeTab, toastMessage } = useApp();

  return (
    <div className="min-h-screen bg-[#fcf9f5] flex flex-col relative text-[#1c1c1a]">
      {/* Fixed Top Header */}
      <Header />

      {/* Main Screen Content */}
      <main className="flex-1 w-full pt-28 pb-28">
        {activeTab === 'home-atelier' && <AtelierView />}
        {activeTab === 'collections-bazaars' && <BazaarsView />}
        {activeTab === 'bridal-vip' && <BridalVipView />}
        {activeTab === 'whatsapp-concierge' && <VipChatView />}
        {activeTab === 'profile-orders' && <OrdersProfileView />}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav />

      {/* Modals & Slide-over Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <MenuDrawer />
      <CraftModal />
      <TrialModal />

      {/* Heritage Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#002118] text-[#ffdea5] px-5 py-3 rounded-full shadow-2xl border border-[#ffdea5]/40 flex items-center gap-2 text-xs font-sans font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200">
          <span className="material-symbols-outlined text-[16px] text-[#ffdea5]">stars</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
