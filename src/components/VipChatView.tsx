import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext.tsx';
import { LOGO_URL, PRODUCTS } from '../data/mockData.ts';

interface Message {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  timestamp: string;
  suggestedEnsembleId?: string;
}

export const VipChatView: React.FC = () => {
  const { setSelectedProduct, showToast } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'concierge',
      text: 'Salam and warm welcome to the Faiza Clothings Home Atelier Concierge. I am Begum Nazneen, Senior Bridal Stylist at our Gulberg and Anarkali ateliers in Lahore. How may we assist your wedding trousseau or festive selection today?',
      timestamp: '10:04 AM'
    },
    {
      id: 'msg-2',
      sender: 'concierge',
      text: 'Whether you need bespoke made-to-measure sizing, custom color dyeing in pure raw silk, or international DHL Express dispatch to London, USA, or the Middle East, our master karigars are at your service.',
      timestamp: '10:05 AM'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'How long does bridal lehenga handcraft take?',
    'Can I customize Shehnai-e-Feroza in royal red?',
    'How do I take made-to-measure sizes?',
    'What are DHL Express delivery times to London & US?',
    'Can I request physical silk & zardozi swatches?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      let ensembleId: string | undefined = undefined;

      const lower = text.toLowerCase();
      if (lower.includes('how long') || lower.includes('time') || lower.includes('weeks')) {
        reply = 'Bridal couture (such as Shehnai-e-Feroza or Noor-e-Jahan Peshwas) requires 10 to 14 weeks of dedicated handcraft by our 6-master karigar guild. For urgent wedding dates within 4 to 6 weeks, our Rush Heritage Atelier service can prioritize your adda framing with 180 consecutive artisan hours.';
        ensembleId = 'fz-01';
      } else if (lower.includes('custom') || lower.includes('color') || lower.includes('red') || lower.includes('crimson')) {
        reply = 'Absolutely! Every bridal ensemble is bespoke. We can hand-dye the pure 80g raw silk into Royal Badshahi Crimson, Ruby, Plum, or Deep Emerald, and tweak the bullion dabka from bright gold to antique Kasab champagne tilla. Would you like us to prepare a digital swatch board?';
        ensembleId = 'fz-04';
      } else if (lower.includes('measure') || lower.includes('size') || lower.includes('fitting')) {
        reply = 'We provide a 100% Guaranteed Fit Promise. You can input your standard measurements (bust, waist, hip, choli length, lehenga flare) or schedule a 1-on-1 WhatsApp video call with our Masterji, who will guide you with a measuring tape in 10 minutes.';
      } else if (lower.includes('dhl') || lower.includes('london') || lower.includes('express') || lower.includes('shipping')) {
        reply = 'We ship via insured DHL Express Priority worldwide. Delivery takes 4-6 business days to the UK (London, Birmingham, Manchester), 5-7 days to the USA/Canada, and 3-4 days to UAE/Saudi Arabia. All bridal orders are packed in heirloom gold-embossed travel trunks.';
      } else if (lower.includes('swatch') || lower.includes('fabric')) {
        reply = 'Yes! We ship a curated Atelier Swatch Box containing pure 80g raw silk cutouts, hand-stitched zardozi wire samples, and organza tissue borders directly to your home address worldwide via DHL.';
      } else {
        reply = 'Thank you for your message. Master Ustaad Tariq and our design team have received your note. Every detail of our pure raw silk and zardozi is customized to your ceremony. Would you like to inspect our Shehnai-e-Feroza bridal masterwork?';
        ensembleId = 'fz-01';
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'concierge',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedEnsembleId: ensembleId
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 h-[calc(100vh-170px)] min-h-[550px]">
      {/* Header Card */}
      <div className="bg-[#002118] text-white rounded-2xl p-4 sm:p-5 mb-3 shadow-md flex items-center justify-between border border-[#ffdea5]/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#0d382b] border-2 border-[#ffdea5] flex items-center justify-center text-[#ffdea5] overflow-hidden">
              <img
                src={LOGO_URL}
                alt="Faiza Atelier Concierge"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#002118]"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-[18px] sm:text-[20px] font-semibold text-white leading-tight">
                Begum Nazneen • Senior Bridal Stylist
              </h2>
            </div>
            <p className="font-sans text-[11px] text-[#ffdea5] uppercase tracking-wider">
              Old Lahore &amp; Gulberg Flagship Concierge • Online
            </p>
          </div>
        </div>

        {/* WhatsApp Direct Action */}
        <button
          onClick={() => {
            showToast('Opening official Atelier WhatsApp line (+92 300 8447799)');
          }}
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-sans text-xs font-semibold tracking-wide transition-colors shadow"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>WhatsApp Line</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 bg-[#ffffff] border border-[#c0c8c3]/30 rounded-2xl p-4 overflow-y-auto no-scrollbar shadow-inner flex flex-col space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-[#002118] text-white rounded-br-none'
                  : 'bg-[#f6f3ef] text-[#1c1c1a] border border-[#c0c8c3]/30 rounded-bl-none'
              }`}
            >
              <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed whitespace-pre-wrap">
                {msg.text}
              </p>

              {/* Linked Product Suggestion if any */}
              {msg.suggestedEnsembleId && (
                <div className="mt-3 pt-2.5 border-t border-black/10">
                  {(() => {
                    const product = PRODUCTS.find((p) => p.id === msg.suggestedEnsembleId);
                    if (!product) return null;
                    return (
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="flex items-center gap-3 p-2 bg-white rounded-xl border border-[#c0c8c3]/40 cursor-pointer hover:bg-[#f0edea] transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-14 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <span className="font-sans text-[9px] uppercase tracking-wider text-[#b8944e] font-bold block">
                            Recommended Masterpiece
                          </span>
                          <h4 className="font-serif text-[14px] font-semibold text-[#002118] leading-tight">
                            {product.name}
                          </h4>
                          <span className="font-sans text-[11px] font-bold text-[#1c1c1a]">
                            PKR {product.pricePKR.toLocaleString()}
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[#002118] text-[18px]">
                          arrow_forward
                        </span>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>

            <span className="font-sans text-[10px] text-[#717974] mt-1 px-1">
              {msg.timestamp}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 bg-[#f6f3ef] border border-[#c0c8c3]/30 rounded-2xl rounded-bl-none max-w-[200px]">
            <span className="w-2 h-2 rounded-full bg-[#002118] animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-[#002118] animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-[#002118] animate-bounce [animation-delay:0.4s]"></span>
            <span className="font-sans text-xs text-[#717974] ml-1">Stylist is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Carousel */}
      <div className="py-2 overflow-x-auto no-scrollbar flex gap-2">
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 bg-[#f0edea] hover:bg-[#ebe8e4] text-[#002118] border border-[#c0c8c3]/40 rounded-full font-sans text-xs whitespace-nowrap transition-colors font-medium flex items-center gap-1 active:scale-95"
          >
            <span>{prompt}</span>
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex gap-2 items-center pt-1">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about bridal custom orders, zardozi embroidery, or sizing..."
          className="flex-1 p-3 bg-[#ffffff] border border-[#c0c8c3]/40 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#002118] shadow-sm"
        />
        <button
          onClick={() => handleSend()}
          aria-label="Send message"
          className="w-12 h-12 rounded-xl bg-[#002118] text-[#ffdea5] hover:bg-[#0d382b] transition-colors flex items-center justify-center shadow-md active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
      </div>
    </div>
  );
};
