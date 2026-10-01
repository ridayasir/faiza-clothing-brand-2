import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { INITIAL_ORDER_TRACK, PRODUCTS } from '../data/mockData.ts';

export const OrdersProfileView: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    setSelectedProduct,
    appointments,
    formatPrice,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState<'tracker' | 'measurements' | 'wishlist' | 'appointments'>('tracker');

  // Client measurement profile
  const [measurements, setMeasurements] = useState({
    bust: '36.5',
    waist: '28.0',
    highHips: '38.5',
    choliLength: '14.5',
    lehengaLength: '43.0',
    shoulderWidth: '15.0',
    armhole: '16.5',
    sleeveLength: '22.0',
    notes: 'Prefer extra 1.5 inch seam allowance for future adjustments.'
  });

  const [isSavedMeasurements, setIsSavedMeasurements] = useState(true);

  const order = INITIAL_ORDER_TRACK;
  const progressPercent = Math.round((order.currentHours / order.totalHours) * 100);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleSaveMeasurements = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavedMeasurements(true);
    showToast('Made-to-measure profile updated and synchronized with Masterji');
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* Client Identity Header */}
      <div className="bg-[#002118] text-white rounded-2xl p-6 sm:p-8 mb-6 shadow-xl border border-[#ffdea5]/25 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#0d382b] border-2 border-[#ffdea5] flex items-center justify-center text-[#ffdea5]">
              <span className="material-symbols-outlined text-[32px]">account_circle</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-[24px] sm:text-[28px] font-semibold text-white">
                  Dr. Ayla Raza
                </h1>
                <span className="bg-[#ffdea5] text-[#002118] font-sans text-[10px] uppercase px-2 py-0.5 rounded font-bold">
                  Bridal VIP
                </span>
              </div>
              <p className="font-serif text-sm text-[#ebe8e4]/80">
                Kensington, London &amp; Gulberg Lahore • Client since 2024
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg font-sans text-xs text-[#ffdea5] border border-white/15">
              1 Active Commission
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg font-sans text-xs text-white border border-white/15">
              {wishlist.length} Wishlisted
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex gap-2 border-b border-[#c0c8c3]/30 pb-3 mb-6 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('tracker')}
          className={`px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'tracker'
              ? 'bg-[#002118] text-white shadow-sm'
              : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">hourglass_top</span>
          <span>Live Atelier Tracking</span>
        </button>

        <button
          onClick={() => setActiveTab('measurements')}
          className={`px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'measurements'
              ? 'bg-[#002118] text-white shadow-sm'
              : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">straighten</span>
          <span>Made-to-Measure Profile</span>
        </button>

        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'wishlist'
              ? 'bg-[#002118] text-white shadow-sm'
              : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">favorite</span>
          <span>Heritage Wishlist ({wishlist.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('appointments')}
          className={`px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'appointments'
              ? 'bg-[#002118] text-white shadow-sm'
              : 'bg-[#f0edea] text-[#414845] hover:bg-[#ebe8e4]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">calendar_month</span>
          <span>Fittings &amp; Appointments</span>
        </button>
      </div>

      {/* TAB 1: LIVE ATELIER TRACKER */}
      {activeTab === 'tracker' && (
        <div className="space-y-6">
          <div className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#c0c8c3]/20 mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={order.productImage}
                  alt={order.productName}
                  className="w-16 h-20 object-cover rounded-xl border border-[#c0c8c3]/40 shadow-sm"
                />
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#b8944e] font-bold block">
                    Bespoke Order {order.orderId}
                  </span>
                  <h3 className="font-serif text-[20px] text-[#002118] font-bold">
                    {order.productName}
                  </h3>
                  <span className="font-sans text-xs text-[#717974]">
                    Commissioned on {order.orderDate}
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="font-sans text-[10px] uppercase text-[#717974] block">Estimated Delivery</span>
                <span className="font-sans text-sm font-bold text-[#002118] block">
                  {order.deliveryEstimate}
                </span>
                <span className="font-sans text-[11px] text-[#0d382b] font-semibold flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                  <span>{order.destination}</span>
                </span>
              </div>
            </div>

            {/* Karigari Progress Meter */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-sans mb-1.5">
                <span className="text-[#002118] font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#b8944e]">auto_fix_high</span>
                  <span>Karigari Craftsmanship Progress: {order.currentHours} / {order.totalHours} Hours</span>
                </span>
                <span className="font-bold text-[#b8944e]">{progressPercent}% Completed</span>
              </div>
              <div className="w-full h-3 bg-[#f0edea] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0d382b] to-[#b8944e] rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Step-by-Step Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { title: '1. Silk Dyeing', desc: 'Custom emerald 80g raw silk vat bath', done: true, current: false },
                { title: '2. Adda Framing', desc: 'Wooden stenciling & Kasab tracing', done: true, current: false },
                { title: '3. Hand Zardozi', desc: 'Bullion dabka & pearl couching', done: false, current: true },
                { title: '4. Masterji Tailoring', desc: '16-kali cut & Banarasi lining', done: false, current: false },
                { title: '5. DHL Dispatch', desc: 'Heirloom bridal trunk packing', done: false, current: false }
              ].map((stage, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                    stage.current
                      ? 'bg-[#002118] text-white border-[#ffdea5] shadow-md ring-1 ring-[#ffdea5]'
                      : stage.done
                      ? 'bg-[#f6f3ef] text-[#002118] border-emerald-300'
                      : 'bg-[#fcf9f5] text-[#717974] border-[#c0c8c3]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider">
                      {stage.title}
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      {stage.done ? 'check_circle' : stage.current ? 'pending' : 'schedule'}
                    </span>
                  </div>
                  <p className="font-serif text-[12px] opacity-80 leading-snug">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Note from Master Ustaad Tariq */}
            <div className="mt-6 p-4 bg-[#f6f3ef] rounded-xl border border-[#c0c8c3]/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#b8944e] text-[24px] mt-0.5">verified</span>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#002118]">
                  Guild Log from Master Ustaad Tariq (Old Lahore Atelier):
                </h4>
                <p className="font-serif text-xs text-[#414845] mt-1 leading-relaxed">
                  “The zardozi trellis on Kali #9 through #14 is progressing with pure 24k gold-washed bullion coils. We have placed the Basra pearls along the lower scallop borders. Ready for Masterji cutting next Tuesday.”
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MEASUREMENTS */}
      {activeTab === 'measurements' && (
        <form onSubmit={handleSaveMeasurements} className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="font-serif text-[22px] text-[#002118] font-bold mb-1">
              Your Bespoke Made-to-Measure Sizing Blueprint
            </h2>
            <p className="font-serif text-sm text-[#414845]">
              These dimensions are saved directly into our Lahore cutting masterji’s ledger for all current and future trousseau orders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Bust / Chest (in)
              </label>
              <input
                type="text"
                value={measurements.bust}
                onChange={(e) => setMeasurements({ ...measurements, bust: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Waist (in)
              </label>
              <input
                type="text"
                value={measurements.waist}
                onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                High Hip (in)
              </label>
              <input
                type="text"
                value={measurements.highHips}
                onChange={(e) => setMeasurements({ ...measurements, highHips: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Choli Length (in)
              </label>
              <input
                type="text"
                value={measurements.choliLength}
                onChange={(e) => setMeasurements({ ...measurements, choliLength: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Lehenga Length (in)
              </label>
              <input
                type="text"
                value={measurements.lehengaLength}
                onChange={(e) => setMeasurements({ ...measurements, lehengaLength: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Shoulder Cross (in)
              </label>
              <input
                type="text"
                value={measurements.shoulderWidth}
                onChange={(e) => setMeasurements({ ...measurements, shoulderWidth: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Armhole (in)
              </label>
              <input
                type="text"
                value={measurements.armhole}
                onChange={(e) => setMeasurements({ ...measurements, armhole: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>

            <div>
              <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
                Sleeve Length (in)
              </label>
              <input
                type="text"
                value={measurements.sleeveLength}
                onChange={(e) => setMeasurements({ ...measurements, sleeveLength: e.target.value })}
                className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm font-bold text-center"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="font-sans text-xs uppercase text-[#002118] font-bold block mb-1">
              Special Tailoring &amp; Draping Instructions
            </label>
            <textarea
              rows={3}
              value={measurements.notes}
              onChange={(e) => setMeasurements({ ...measurements, notes: e.target.value })}
              className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-serif text-sm text-[#002118]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            <span>Save Made-to-Measure Profile</span>
          </button>
        </form>
      )}

      {/* TAB 3: WISHLIST */}
      {activeTab === 'wishlist' && (
        <div>
          {wishlistedProducts.length === 0 ? (
            <div className="bg-[#ffffff] border border-dashed border-[#c0c8c3] rounded-2xl p-12 text-center">
              <span className="material-symbols-outlined text-[48px] text-[#9c4048] mb-2">favorite_border</span>
              <h3 className="font-serif text-[20px] text-[#002118] font-semibold mb-2">
                Your Heritage Wishlist is Empty
              </h3>
              <p className="font-serif text-sm text-[#414845]">
                Tap the heart insignia on any creation in the Masterpiece Gallery to preserve it here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div
                    onClick={() => setSelectedProduct(p)}
                    className="relative aspect-[4/3] bg-[#f0edea] cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(p.id);
                      }}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 text-[#9c4048] flex items-center justify-center shadow"
                    >
                      <span className="material-symbols-outlined text-[18px] fill-1">favorite</span>
                    </button>
                  </div>

                  <div className="p-4">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-[#b8944e] font-bold block mb-1">
                      {p.craft}
                    </span>
                    <h4
                      onClick={() => setSelectedProduct(p)}
                      className="font-serif text-[17px] font-semibold text-[#002118] cursor-pointer hover:text-[#0d382b]"
                    >
                      {p.name}
                    </h4>
                    <span className="font-sans text-sm font-bold text-[#1c1c1a] block mt-1 mb-3">
                      {formatPrice(p.pricePKR)}
                    </span>

                    <button
                      onClick={() => addToCart(p)}
                      className="w-full py-2 bg-[#002118] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-[#0d382b] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[16px]">add_shopping_bag</span>
                      <span>Move to Royal Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: APPOINTMENTS */}
      {activeTab === 'appointments' && (
        <div className="space-y-4">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#002118] font-bold bg-[#ffdea5] px-2 py-0.5 rounded">
                    {apt.status}
                  </span>
                  <span className="font-sans text-xs text-[#717974]">
                    Ref: {apt.id}
                  </span>
                </div>

                <h3 className="font-serif text-[19px] font-bold text-[#002118]">
                  {apt.type}
                </h3>

                <p className="font-serif text-sm text-[#414845] mt-1">
                  Reserved for <strong>{apt.customerName}</strong> on <strong>{apt.appointmentDate}</strong> at <strong>{apt.appointmentTime}</strong>
                </p>

                {apt.interestedEnsembles && apt.interestedEnsembles.length > 0 && (
                  <div className="mt-2 text-xs font-sans text-[#0d382b] font-medium">
                    Ensembles for trial: {apt.interestedEnsembles.join(', ')}
                  </div>
                )}
              </div>

              <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                <button
                  onClick={() => showToast(`Rescheduling coordinator will contact via WhatsApp: ${apt.phone}`)}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#f0edea] text-[#002118] rounded-lg font-sans text-xs uppercase font-bold hover:bg-[#ebe8e4] transition-colors"
                >
                  Reschedule
                </button>
                <button
                  onClick={() => showToast('Directions sent to your phone via SMS/WhatsApp')}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#002118] text-white rounded-lg font-sans text-xs uppercase font-bold hover:bg-[#0d382b] transition-colors"
                >
                  Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
