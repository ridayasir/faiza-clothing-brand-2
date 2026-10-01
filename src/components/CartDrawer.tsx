import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    formatPrice,
    showToast,
    setActiveTab
  } = useApp();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState<string | null>(null);

  // Checkout inputs
  const [fullName, setFullName] = useState('Dr. Ayla Raza');
  const [whatsapp, setWhatsapp] = useState('+44 7911 123456');
  const [shippingAddress, setShippingAddress] = useState('Flat 4, Kensington High St, London W8 5SA, UK');
  const [deliveryMethod, setDeliveryMethod] = useState<'cod' | 'dhl'>('dhl');

  if (!isCartOpen) return null;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'LAHORELAHOREHA') {
      setDiscountPercent(10);
      setPromoError('');
      showToast('10% Lahore Heritage Privilege discount applied!');
    } else {
      setPromoError('Invalid privilege code. Try "LAHORELAHOREHA"');
    }
  };

  const discountAmount = Math.round(cartTotal * (discountPercent / 100));
  const finalTotal = cartTotal - discountAmount;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp || !shippingAddress) {
      showToast('Please fill all delivery details');
      return;
    }

    const orderId = `FZ-${Math.floor(10000 + Math.random() * 90000)}`;
    setCheckoutComplete(orderId);
    clearCart();
    showToast(`Royal Order ${orderId} confirmed!`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in">
      <div
        className="w-full max-w-md bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#c0c8c3]/30 flex items-center justify-between bg-[#fcf9f5]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002118] text-[22px]">shopping_bag</span>
            <div>
              <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#002118]">
                Your Royal Bag
              </h2>
              <span className="font-sans text-[11px] text-[#717974] uppercase tracking-wider font-semibold">
                {cart.length} {cart.length === 1 ? 'Creation' : 'Creations'}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCartOpen(false);
              setIsCheckingOut(false);
              setCheckoutComplete(null);
            }}
            className="w-9 h-9 rounded-full bg-[#f0edea] hover:bg-[#ebe8e4] flex items-center justify-center text-[#1c1c1a] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto">
          {checkoutComplete ? (
            <div className="text-center py-8 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#0d382b] text-[#ffdea5] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#b8944e] font-bold block mb-1">
                Royal Order Placed
              </span>
              <h3 className="font-serif text-[24px] text-[#002118] font-bold mb-2">
                Order #{checkoutComplete}
              </h3>
              <p className="font-serif text-sm text-[#414845] leading-relaxed mb-6">
                Thank you, <strong>{fullName}</strong>. Your custom ensemble has entered the cutting ledger at our Old Lahore atelier. We will send measurement updates via WhatsApp to <strong>{whatsapp}</strong>.
              </p>

              <div className="p-4 bg-[#f6f3ef] rounded-xl border border-[#c0c8c3]/30 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between font-sans">
                  <span className="text-[#717974]">Delivery Mode:</span>
                  <span className="font-bold text-[#002118]">
                    {deliveryMethod === 'cod' ? 'Cash on Delivery (Pakistan)' : 'Insured DHL Express (Worldwide)'}
                  </span>
                </div>
                <div className="flex justify-between font-sans">
                  <span className="text-[#717974]">Shipping Address:</span>
                  <span className="font-medium text-[#1c1c1a] text-right max-w-[200px] truncate">{shippingAddress}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckingOut(false);
                  setCheckoutComplete(null);
                  setActiveTab('profile-orders');
                }}
                className="w-full py-3.5 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow-md transition-colors"
              >
                Track Handcrafting in Live Tracker
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form */
            <form onSubmit={handlePlaceOrder} className="space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-[#c0c8c3]/20">
                <span className="font-sans text-xs uppercase font-bold text-[#002118]">
                  Shipping &amp; Delivery Details
                </span>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="font-sans text-xs text-[#9c4048] underline font-semibold"
                >
                  Back to Bag
                </button>
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  Destination Shipping Address *
                </label>
                <textarea
                  rows={3}
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm"
                ></textarea>
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1.5">
                  Payment Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('cod')}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all ${
                      deliveryMethod === 'cod'
                        ? 'bg-[#002118] text-white border-[#002118] font-bold'
                        : 'bg-[#f6f3ef] text-[#1c1c1a] border-[#c0c8c3]/30'
                    }`}
                  >
                    <span className="block font-bold mb-0.5">Cash on Delivery</span>
                    <span className="text-[10px] opacity-80">All Pakistan Cities</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('dhl')}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all ${
                      deliveryMethod === 'dhl'
                        ? 'bg-[#002118] text-white border-[#002118] font-bold'
                        : 'bg-[#f6f3ef] text-[#1c1c1a] border-[#c0c8c3]/30'
                    }`}
                  >
                    <span className="block font-bold mb-0.5">DHL Express Worldwide</span>
                    <span className="text-[10px] opacity-80">Bank / Card / Wire</span>
                  </button>
                </div>
              </div>

              <div className="p-3.5 bg-[#fcf9f5] border border-[#ffdea5] rounded-xl text-xs space-y-1 font-sans">
                <div className="flex justify-between">
                  <span className="text-[#717974]">Subtotal:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#9c4048]">
                    <span>Heritage Privilege (10%):</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-sm text-[#002118] pt-1 border-t border-[#c0c8c3]/20">
                  <span>Grand Total:</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0d382b] text-[#ffdea5] hover:bg-[#002118] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Confirm &amp; Place Commission</span>
              </button>
            </form>
          ) : cart.length === 0 ? (
            /* Empty Bag */
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-[48px] text-[#c0c8c3] mb-3">shopping_bag</span>
              <h3 className="font-serif text-[18px] text-[#002118] font-semibold mb-1">
                Your Royal Bag is Empty
              </h3>
              <p className="font-serif text-sm text-[#717974] mb-6">
                Explore our imperial bridal and festive collections to add heirloom ensembles.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActiveTab('collections-bazaars');
                }}
                className="px-6 py-2.5 bg-[#002118] text-[#ffdea5] rounded-lg font-sans text-xs uppercase tracking-widest font-bold"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${index}`}
                  className="p-3 bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-xl flex gap-3 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-[16px] font-bold text-[#002118] leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-[#717974] hover:text-[#9c4048] p-1"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-sans text-[#717974] mt-1">
                        <span>Size: <strong className="text-[#002118]">{item.size}</strong></span>
                        <span>•</span>
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>

                      {item.customMeasurements && (
                        <span className="text-[10px] font-sans text-[#0d382b] bg-white px-1.5 py-0.5 rounded border border-[#c0c8c3]/30 mt-1 inline-block">
                          Custom Cut: Bust {item.customMeasurements.bust}" / Waist {item.customMeasurements.waist}"
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5">
                      <div className="flex items-center border border-[#c0c8c3]/40 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-[#f0edea]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-sans text-xs font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-[#f0edea]"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-sans text-sm font-bold text-[#1c1c1a]">
                        {formatPrice(item.product.pricePKR * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code Input */}
              <div className="pt-2">
                <span className="font-sans text-[10px] uppercase font-bold text-[#717974] block mb-1">
                  Heritage Privilege Code
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter LAHORELAHOREHA"
                    className="flex-1 p-2 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-xs uppercase font-sans font-bold"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-3 py-2 bg-[#002118] text-[#ffdea5] rounded-lg font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#0d382b]"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <span className="text-[11px] text-[#9c4048] font-sans mt-1 block">{promoError}</span>}
              </div>

              {/* Complimentary delivery trust card */}
              <div className="p-3 bg-[#0d382b]/10 border border-[#0d382b]/20 rounded-xl flex items-center gap-2.5 text-xs text-[#0d382b]">
                <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                <span>
                  <strong>Complimentary Worldwide DHL Express:</strong> Free insured delivery on all royal trousseau orders.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Subtotal & Action (When not finished) */}
        {!checkoutComplete && !isCheckingOut && cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#c0c8c3]/30 bg-[#fcf9f5] space-y-3">
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex justify-between text-[#717974]">
                <span>Bag Subtotal:</span>
                <span className="font-bold text-[#1c1c1a]">{formatPrice(cartTotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#9c4048] font-bold">
                  <span>Privilege (10%):</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-[16px] text-[#002118] pt-1 border-t border-black/5">
                <span>Estimated Total:</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-4 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Proceed to Atelier Checkout</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
