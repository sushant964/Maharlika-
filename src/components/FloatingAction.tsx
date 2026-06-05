import { Phone, MessageCircle } from 'lucide-react';

export function FloatingAction() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/15876437948"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-brand-charcoal text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10">
          WhatsApp Us
        </span>
      </a>
      
      <a
        href="tel:+15876437948"
        className="w-14 h-14 bg-brand-gold text-brand-charcoal rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-brand-charcoal text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10">
          Call +1 (587) 643-7948
        </span>
      </a>
    </div>
  );
}
