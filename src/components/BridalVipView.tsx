import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { ATELIERS, PRODUCTS } from '../data/mockData.ts';

export const BridalVipView: React.FC = () => {
  const { bookAppointment, setIsTrialModalOpen, setTrialEnsembleTitle, showToast } = useApp();

  const [selectedAtelier, setSelectedAtelier] = useState<string>('gulberg');
  const [selectedEvent, setSelectedEvent] = useState<string>('Barat');
  const [selectedCraft, setSelectedCraft] = useState<string>('Zardozi & Antique Dabka');
  const [selectedSilhouette, setSelectedSilhouette] = useState<string>('16-Kali Sweeping Lehenga');
  const [colorPalette, setColorPalette] = useState<string>('Imperial Emerald & Gold');
  const [weddingDate, setWeddingDate] = useState<string>('2026-12-25');
  const [customBust, setCustomBust] = useState<string>('36');
  const [customWaist, setCustomWaist] = useState<string>('28');
  const [customHips, setCustomHips] = useState<string>('38');
  const [customHeight, setCustomHeight] = useState<string>("5'6\"");
  const [brideName, setBrideName] = useState<string>('');
  const [bridePhone, setBridePhone] = useState<string>('');
  const [brideEmail, setBrideEmail] = useState<string>('');
  const [submittedBooking, setSubmittedBooking] = useState<string | null>(null);

  const events = [
    { name: 'Barat', desc: 'Regal crimson or emerald bridal lehenga with heavy zardozi' },
    { name: 'Walima', desc: 'Opulent pastels, champagne metallics and tissue shararas' },
    { name: 'Mehndi / Mayun', desc: 'Vibrant marigold, gota patti work and tissue dupattas' },
    { name: 'Nikkah Ceremony', desc: 'Pure ivory chanderi, silver kasab tilla, and sheer veil' },
    { name: 'Qawwali Night', desc: 'Sumptuous Korean micro-velvet kalidaars with antique tilla' }
  ];

  const craftOptions = [
    'Zardozi & Antique Dabka (24K Gold Plated Bullion Wire)',
    'Gota Patti Hand-Pleated Ribbon Petals',
    'Antique Kasab Tilla & Marori Wire Couching',
    'Basra Seed Pearl Fringe & Semi-Precious Stone Setting'
  ];

  const silhouettes = [
    '16-Kali Sweeping Royal Lehenga',
    'Mughal Floor-Length Peshwas Gown',
    'Double-Layer Tissue Sharara with Scallop Hem',
    'Architectural Angrakha with Banarasi Jamawar',
    'Classic Long Kalidaar with Chanderi Dupatta'
  ];

  const palettes = [
    'Imperial Emerald & Gold',
    'Royal Badshahi Crimson & Antique Kasab',
    'Feroza Turquoise & Basra Pearl',
    'Vintage Champagne & Silver Tilla',
    'Blush Rose Quartz & Gota Gold'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brideName || !bridePhone) {
      showToast('Please provide your name and phone number');
      return;
    }

    const atelierObj = ATELIERS.find(a => a.id === selectedAtelier);
    const bookingId = `FZ-VIP-${Math.floor(10000 + Math.random() * 90000)}`;

    bookAppointment({
      customerName: brideName,
      phone: bridePhone,
      email: brideEmail || 'vip.bride@faizaclothings.com',
      type: atelierObj?.name.includes('London')
        ? 'Kensington London Salon'
        : atelierObj?.name.includes('Gulberg')
        ? 'Gulberg Flagship Trial'
        : 'Virtual 4K Video Fitting',
      weddingDate,
      appointmentDate: '2026-10-20',
      appointmentTime: '03:00 PM',
      interestedEnsembles: [`${selectedEvent}: ${selectedSilhouette} in ${colorPalette}`],
      notes: `Craft preference: ${selectedCraft}. Measurements: Bust ${customBust}", Waist ${customWaist}", Hips ${customHips}", Height ${customHeight}.`
    });

    setSubmittedBooking(bookingId);
    showToast('Royal Bridal VIP consultation request confirmed!');
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 py-4">
      {/* Royal Crown Header Banner */}
      <div className="bg-[#002118] text-white rounded-2xl p-6 sm:p-10 mb-6 shadow-xl border border-[#ffdea5]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#ffdea5]/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#ffdea5]/15 border border-[#ffdea5]/40 rounded-full px-3.5 py-1 mb-3">
            <span className="material-symbols-outlined text-[16px] text-[#ffdea5]">crown</span>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ffdea5] font-bold">
              The Royal Bridal Suite • Lahore &amp; London
            </span>
          </div>

          <h1 className="font-serif text-[30px] sm:text-[42px] text-white leading-tight mb-3">
            Bespoke Haute Couture Bridal Trousseau
          </h1>

          <p className="font-serif text-[16px] sm:text-[18px] text-[#ebe8e4]/95 leading-relaxed italic mb-6">
            “Every bride deserves a masterpiece crafted specifically for her legacy. Our master karigars spend 180 to 240 hours hand-stitching pure gold wires, antique dabka, and authentic Kasab tilla onto pure raw silk.”
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-center">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <span className="font-serif text-lg font-bold text-[#ffdea5] block">38 Years</span>
              <span className="font-sans text-[10px] text-[#ebe8e4]/80 uppercase">Atelier Heritage</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <span className="font-serif text-lg font-bold text-[#ffdea5] block">400+</span>
              <span className="font-sans text-[10px] text-[#ebe8e4]/80 uppercase">Master Karigars</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <span className="font-serif text-lg font-bold text-[#ffdea5] block">100% Fit</span>
              <span className="font-sans text-[10px] text-[#ebe8e4]/80 uppercase">Guaranteed Trial</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
              <span className="font-serif text-lg font-bold text-[#ffdea5] block">Worldwide</span>
              <span className="font-sans text-[10px] text-[#ebe8e4]/80 uppercase">DHL Express 4-6d</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atelier Locations Carousel */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#b8944e] font-bold block">
              Flagship Trial Salons
            </span>
            <h2 className="font-serif text-[22px] sm:text-[26px] text-[#002118] font-semibold">
              Select Your Fitting Sanctuary
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {ATELIERS.map((atelier) => (
            <div
              key={atelier.id}
              onClick={() => setSelectedAtelier(atelier.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedAtelier === atelier.id
                  ? 'bg-[#0d382b] text-white border-[#ffdea5] shadow-md ring-1 ring-[#ffdea5]'
                  : 'bg-[#ffffff] text-[#1c1c1a] border-[#c0c8c3]/40 hover:bg-[#f6f3ef]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold ${
                    selectedAtelier === atelier.id ? 'bg-[#ffdea5] text-[#002118]' : 'bg-[#f0edea] text-[#414845]'
                  }`}>
                    {atelier.city}
                  </span>
                  <span className={`material-symbols-outlined text-[18px] ${
                    selectedAtelier === atelier.id ? 'text-[#ffdea5]' : 'text-[#717974]'
                  }`}>
                    {selectedAtelier === atelier.id ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </div>

                <h3 className="font-serif text-[17px] font-semibold mb-1">
                  {atelier.name}
                </h3>
                <p className={`font-serif text-[12px] mb-2 ${
                  selectedAtelier === atelier.id ? 'text-[#ebe8e4]/90' : 'text-[#414845]'
                }`}>
                  {atelier.address}
                </p>
              </div>

              <div className="pt-2 border-t border-current/10">
                <span className={`font-sans text-[10px] block ${
                  selectedAtelier === atelier.id ? 'text-[#ffdea5]' : 'text-[#b8944e]'
                }`}>
                  {atelier.hours}
                </span>
                <span className="font-sans text-[11px] font-semibold">
                  {atelier.phone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bespoke Trousseau Commission Form */}
      <section className="bg-[#ffffff] border border-[#c0c8c3]/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="mb-6 pb-4 border-b border-[#c0c8c3]/20">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-[#b8944e]">design_services</span>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#b8944e] font-bold">
              Custom Crafting Module
            </span>
          </div>
          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#002118] font-semibold">
            Commission Your Royal Wedding Silhouette
          </h2>
          <p className="font-serif text-sm text-[#414845]">
            Configure your wedding celebration aesthetic and schedule a private fitting with our Senior Designer and Master Ustaad.
          </p>
        </div>

        {submittedBooking ? (
          <div className="bg-[#f0edea] border border-[#ffdea5] rounded-xl p-6 text-center my-4 animate-in fade-in">
            <div className="w-14 h-14 bg-[#0d382b] text-[#ffdea5] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#b8944e] font-bold block mb-1">
              Royal VIP Consultation Confirmed
            </span>
            <h3 className="font-serif text-[22px] text-[#002118] font-semibold mb-2">
              Booking ID: {submittedBooking}
            </h3>
            <p className="font-serif text-sm text-[#414845] max-w-lg mx-auto mb-4">
              Thank you, <strong>{brideName}</strong>. Our Senior Bridal Stylist from the{' '}
              {ATELIERS.find(a => a.id === selectedAtelier)?.name} will contact you via WhatsApp at{' '}
              <strong>{bridePhone}</strong> within 4 business hours with fabric swatches and appointment confirmation.
            </p>
            <button
              onClick={() => setSubmittedBooking(null)}
              className="px-6 py-2.5 bg-[#002118] text-white font-sans text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-[#0d382b] transition-colors"
            >
              Configure Another Commission
            </button>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Step 1: Select Event */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#002118] font-bold mb-2">
                1. Select Wedding Occasion
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {events.map((e) => (
                  <button
                    key={e.name}
                    type="button"
                    onClick={() => setSelectedEvent(e.name)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedEvent === e.name
                        ? 'bg-[#002118] text-white border-[#002118] shadow-sm font-semibold'
                        : 'bg-[#f6f3ef] text-[#1c1c1a] border-[#c0c8c3]/30 hover:bg-[#f0edea]'
                    }`}
                  >
                    <span className="font-serif text-[15px] font-bold block mb-0.5">{e.name}</span>
                    <span className="font-serif text-[11px] opacity-80 line-clamp-2 leading-tight">
                      {e.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Silhouette & Craft */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#002118] font-bold mb-2">
                  2. Preferred Silhouette
                </label>
                <select
                  value={selectedSilhouette}
                  onChange={(e) => setSelectedSilhouette(e.target.value)}
                  className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-serif text-sm text-[#002118] focus:ring-2 focus:ring-[#002118] focus:outline-none"
                >
                  {silhouettes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#002118] font-bold mb-2">
                  3. Color Palette
                </label>
                <select
                  value={colorPalette}
                  onChange={(e) => setColorPalette(e.target.value)}
                  className="w-full p-3 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-serif text-sm text-[#002118] focus:ring-2 focus:ring-[#002118] focus:outline-none"
                >
                  {palettes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Craft Specialization */}
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#002118] font-bold mb-2">
                4. Primary Karigari Craftsmanship
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {craftOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedCraft(c)}
                    className={`p-3 rounded-xl border text-left text-xs font-sans transition-all flex items-center justify-between ${
                      selectedCraft === c
                        ? 'bg-[#0d382b] text-white border-[#ffdea5] font-semibold'
                        : 'bg-[#f6f3ef] text-[#1c1c1a] border-[#c0c8c3]/30 hover:bg-[#f0edea]'
                    }`}
                  >
                    <span>{c}</span>
                    {selectedCraft === c && (
                      <span className="material-symbols-outlined text-[18px] text-[#ffdea5]">check</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Made to Measure Dimensions */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-sans text-xs uppercase tracking-wider text-[#002118] font-bold">
                  5. Estimated Made-to-Measure Dimensions (Inches)
                </label>
                <span className="font-sans text-[10px] text-[#717974]">Optional - final measured in trial</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="font-sans text-[10px] uppercase text-[#717974] block mb-1">Bust (in)</label>
                  <input
                    type="text"
                    value={customBust}
                    onChange={(e) => setCustomBust(e.target.value)}
                    className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm text-center font-bold"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase text-[#717974] block mb-1">Waist (in)</label>
                  <input
                    type="text"
                    value={customWaist}
                    onChange={(e) => setCustomWaist(e.target.value)}
                    className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm text-center font-bold"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase text-[#717974] block mb-1">Hips (in)</label>
                  <input
                    type="text"
                    value={customHips}
                    onChange={(e) => setCustomHips(e.target.value)}
                    className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm text-center font-bold"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase text-[#717974] block mb-1">Height</label>
                  <input
                    type="text"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(e.target.value)}
                    className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm text-center font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Step 5: Bride Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#c0c8c3]/20">
              <div>
                <label className="font-sans text-[10px] uppercase text-[#002118] font-bold block mb-1">
                  Bride / Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder="e.g. Mahira Khan"
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002118]"
                />
              </div>

              <div>
                <label className="font-sans text-[10px] uppercase text-[#002118] font-bold block mb-1">
                  WhatsApp Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={bridePhone}
                  onChange={(e) => setBridePhone(e.target.value)}
                  placeholder="+92 300 1234567 / +44 7..."
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002118]"
                />
              </div>

              <div>
                <label className="font-sans text-[10px] uppercase text-[#002118] font-bold block mb-1">
                  Anticipated Wedding Date
                </label>
                <input
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002118]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#0d382b] text-[#ffdea5] hover:bg-[#002118] transition-colors rounded-xl font-sans text-xs uppercase tracking-widest font-bold shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <span className="material-symbols-outlined text-[20px]">crown</span>
                <span>Submit Bridal Trousseau Commission &amp; Schedule Fitting</span>
              </button>
              <p className="font-sans text-[11px] text-center text-[#717974] mt-2">
                Complimentary consultation • No obligation • Private fitting suite reserved for 90 minutes
              </p>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
