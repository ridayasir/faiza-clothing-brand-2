import React from 'react';
import { useApp } from '../context/AppContext.tsx';

export const CraftModal: React.FC = () => {
  const { selectedCraftStory, setSelectedCraftStory, setActiveTab, setFilterBazaar } = useApp();

  if (!selectedCraftStory) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div
        className="relative bg-[#ffffff] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#c0c8c3]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-60 w-full bg-[#002118]">
          <img
            src="/src/assets/images/karigar_atelier_craft_1790853118178.jpg"
            alt="Crafting hand embroidery on wooden adda frame"
            className="w-full h-full object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002118] via-transparent to-transparent"></div>

          {/* Close button */}
          <button
            onClick={() => setSelectedCraftStory(null)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1c1c1a] hover:bg-white"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="font-serif text-[24px] font-bold text-[#ffdea5] block mb-0.5">
              {selectedCraftStory.number}
            </span>
            <h2 className="font-serif text-[26px] font-bold leading-tight">
              {selectedCraftStory.title}
            </h2>
            <span className="font-sans text-[11px] text-[#ebe8e4]/80 uppercase tracking-widest font-semibold">
              {selectedCraftStory.originArea}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wider text-[#b8944e] font-bold mb-1.5">
              Imperial Lineage &amp; Technique
            </h3>
            <p className="font-serif text-[15px] sm:text-[16px] text-[#414845] leading-relaxed">
              {selectedCraftStory.fullDesc}
            </p>
          </div>

          <div className="p-4 bg-[#f6f3ef] rounded-xl border border-[#c0c8c3]/30 space-y-2">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#002118] font-bold block">
                Authentic Precious Materials
              </span>
              <span className="font-serif text-sm text-[#414845]">
                {selectedCraftStory.materials}
              </span>
            </div>

            <div className="pt-2 border-t border-[#c0c8c3]/20">
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#002118] font-bold block">
                Historical Heritage
              </span>
              <span className="font-serif text-sm text-[#414845]">
                {selectedCraftStory.history}
              </span>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                setSelectedCraftStory(null);
                setActiveTab('collections-bazaars');
              }}
              className="flex-1 py-3 bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] font-sans text-xs uppercase tracking-widest font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Creations with {selectedCraftStory.title}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
