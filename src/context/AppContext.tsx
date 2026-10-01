import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Currency, CraftStory, Appointment } from '../types/index.ts';
import { PRODUCTS, CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/mockData.ts';

export type NavTab = 'home-atelier' | 'collections-bazaars' | 'bridal-vip' | 'whatsapp-concierge' | 'profile-orders';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (pricePKR: number) => string;
  cart: CartItem[];
  addToCart: (product: Product, size?: string, color?: string, customMeasurements?: CartItem['customMeasurements']) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product | null) => void;
  selectedCraftStory: CraftStory | null;
  setSelectedCraftStory: (c: CraftStory | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isTrialModalOpen: boolean;
  setIsTrialModalOpen: (open: boolean) => void;
  trialEnsembleTitle?: string;
  setTrialEnsembleTitle: (title?: string) => void;
  appointments: Appointment[];
  bookAppointment: (apt: Omit<Appointment, 'id' | 'status'>) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterBazaar: string;
  setFilterBazaar: (b: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('home-atelier');
  const [currency, setCurrency] = useState<Currency>('PKR');
  
  // Default cart with 1 item matching the reference mockup badge "1"
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('faiza_cart');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        product: PRODUCTS[0], // Shehnai-e-Feroza
        size: 'Custom Measurement',
        color: '#0d382b',
        quantity: 1
      }
    ];
  });

  // Default wishlist with 2 items matching the reference mockup badge "2"
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('faiza_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {}
    return ['fz-01', 'fz-04'];
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCraftStory, setSelectedCraftStory] = useState<CraftStory | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [trialEnsembleTitle, setTrialEnsembleTitle] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBazaar, setFilterBazaar] = useState('All');

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('faiza_apts');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 'APT-1044',
        customerName: 'Ayla Raza',
        phone: '+44 7911 123456',
        email: 'ayla.raza@example.com',
        type: 'Kensington London Salon',
        weddingDate: '2026-12-14',
        appointmentDate: '2026-10-15',
        appointmentTime: '02:00 PM',
        interestedEnsembles: ['Shehnai-e-Feroza', 'Noor-e-Jahan Peshwas'],
        notes: 'Interested in bespoke emerald zardozi dupatta border matching heirloom emerald necklace.',
        status: 'Confirmed'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('faiza_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('faiza_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('faiza_apts', JSON.stringify(appointments));
    } catch {}
  }, [appointments]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const formatPrice = (pricePKR: number): string => {
    const rate = CURRENCY_RATES[currency] || 1;
    const symbol = CURRENCY_SYMBOLS[currency] || '';
    const converted = Math.round(pricePKR * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const addToCart = (product: Product, size: string = 'Custom Measurement', color?: string, customMeasurements?: CartItem['customMeasurements']) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, {
        product,
        size,
        color: color || product.colors[0],
        quantity: 1,
        customMeasurements
      }];
    });
    showToast(`Added ${product.name} to Royal Bag`);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast('Item removed from bag');
  };

  const updateQuantity = (index: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(index);
      return;
    }
    setCart(prev => prev.map((item, i) => i === index ? { ...item, quantity: qty } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.pricePKR * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from heritage wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Preserved in bridal wishlist');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const bookAppointment = (apt: Omit<Appointment, 'id' | 'status'>) => {
    const newApt: Appointment = {
      ...apt,
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Confirmed'
    };
    setAppointments(prev => [newApt, ...prev]);
    showToast(`Appointment confirmed at ${newApt.type}`);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        wishlist,
        toggleWishlist,
        isWishlisted,
        selectedProduct,
        setSelectedProduct,
        selectedCraftStory,
        setSelectedCraftStory,
        isCartOpen,
        setIsCartOpen,
        isMenuOpen,
        setIsMenuOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isTrialModalOpen,
        setIsTrialModalOpen,
        trialEnsembleTitle,
        setTrialEnsembleTitle,
        appointments,
        bookAppointment,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        filterBazaar,
        setFilterBazaar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
