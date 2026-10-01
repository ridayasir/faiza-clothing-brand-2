import React, { useState } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { ATELIERS } from '../data/mockData.ts';

export const TrialModal: React.FC = () => {
  const {
    isTrialModalOpen,
    setIsTrialModalOpen,
    trialEnsembleTitle,
    setTrialEnsembleTitle,
    bookAppointment,
    showToast
  } = useApp();

  const [customerName, setCustomerName] = useState('Dr. Ayla Raza');
  const [phone, setPhone] = useState('+92 300 8447799');
  const [email, setEmail] = useState('ayla.raza@example.com');
  const [trialType, setTrialType] = useState<
    'Gulberg Flagship Trial' | 'M.M. Alam Private Salon' | 'Kensington London Salon' | 'Virtual 4K Video Fitting'
  >('Gulberg Flagship Trial');
  const [appointmentDate, setAppointmentDate] = useState('2026-10-18');
  const [appointmentTime, setAppointmentTime] = useState('03:30 PM');
  const [weddingDate, setWeddingDate] = useState('2026-12-24');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isTrialModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookAppointment({
      customerName,
      phone,
      email,
      type: trialType,
      weddingDate,
      appointmentDate,
      appointmentTime,
      interestedEnsembles: trialEnsembleTitle ? [trialEnsembleTitle] : ['Shehnai-e-Feroza', 'Noor-e-Jahan Peshwas'],
      notes
    });

    setConfirmed(true);
    showToast(`Bridal trial appointment reserved for ${customerName}`);
  };

  const handleClose = () => {
    setIsTrialModalOpen(false);
    setConfirmed(false);
    setTrialEnsembleTitle(undefined);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div
        className="relative bg-[#ffffff] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c0c8c3]/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f0edea] hover:bg-[#ebe8e4] flex items-center justify-center text-[#1c1c1a] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {confirmed ? (
          <div className="text-center py-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#0d382b] text-[#ffdea5] flex items-center justify-center mx-auto mb-3 shadow-lg">
              <span className="material-symbols-outlined text-[32px]">event_available</span>
            </div>
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#b8944e] font-bold block mb-1">
              Private Fitting Reserved
            </span>
            <h3 className="font-serif text-[24px] text-[#002118] font-bold mb-2">
              Appointment Confirmed
            </h3>
            <p className="font-serif text-sm text-[#414845] leading-relaxed mb-6">
              A private 90-minute bridal suite has been reserved for <strong>{customerName}</strong> at our <strong>{trialType}</strong> on <strong>{appointmentDate}</strong> at <strong>{appointmentTime}</strong>.
            </p>

            <div className="p-4 bg-[#f6f3ef] rounded-xl text-left text-xs space-y-1.5 font-sans mb-6">
              <div className="flex justify-between">
                <span className="text-[#717974]">Interested Silhouette:</span>
                <span className="font-bold text-[#002118]">{trialEnsembleTitle || 'Imperial Bridal Suite'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717974]">Confirmation SMS / WhatsApp:</span>
                <span className="font-bold text-[#1c1c1a]">{phone}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 bg-[#002118] text-[#ffdea5] rounded-xl font-sans text-xs uppercase tracking-widest font-bold"
            >
              Done &amp; Return to Atelier
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#b8944e]">calendar_month</span>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#b8944e] font-bold">
                  Bespoke Consultation
                </span>
              </div>
              <h2 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#002118]">
                Book Private Bridal Trial
              </h2>
              {trialEnsembleTitle && (
                <p className="font-serif text-xs text-[#0d382b] font-medium mt-0.5">
                  Reserved for: {trialEnsembleTitle}
                </p>
              )}
            </div>

            <div>
              <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                Trial Sanctuary Location *
              </label>
              <select
                value={trialType}
                onChange={(e) => setTrialType(e.target.value as any)}
                className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-xl font-sans text-xs font-semibold text-[#002118]"
              >
                <option value="Gulberg Flagship Trial">Gulberg Flagship Trial Suite (Lahore)</option>
                <option value="Kensington London Salon">Kensington Private Salon (London, UK)</option>
                <option value="M.M. Alam Private Salon">M.M. Alam Private Suite (Lahore)</option>
                <option value="Virtual 4K Video Fitting">Virtual 4K Video Fitting (Worldwide)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  WhatsApp Contact *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="w-full p-2 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                  Time Slot *
                </label>
                <select
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  className="w-full p-2 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-xs"
                >
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                Wedding Celebration Date
              </label>
              <input
                type="date"
                value={weddingDate}
                onChange={(e) => setWeddingDate(e.target.value)}
                className="w-full p-2 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="font-sans text-[11px] uppercase font-bold text-[#002118] block mb-1">
                Specific Notes or Custom Embellishment Inquiries
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Looking to match jewelry, try double dupattas..."
                className="w-full p-2 bg-[#f6f3ef] border border-[#c0c8c3]/40 rounded-lg text-xs"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Confirm Bridal Suite Reservation</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
