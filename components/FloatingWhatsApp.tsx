"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "94771303301";
  const whatsappMessage = "Hello, I would like to inquire about Ceylon Visitors tours.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed right-6 bottom-6 z-[99] flex flex-col items-center gap-1.5 animate-bounce">
      <div className="text-black text-[14px] font-bold px-3 py-1 whitespace-nowrap drop-shadow-md">
        Chat with us
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[50px] h-[50px] rounded-full bg-[#20d969] hover:bg-[#18c75e] text-white flex items-center justify-center shadow-xl transition-all"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </div>
  );
}