"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  const message = encodeURIComponent("Hi, I'm interested in buying from Mobile World. Can you help me?")
  
  return (
    <a 
      href={`https://wa.me/919005144137?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,103,0,0.5)] transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:bg-[#FF6700]" />
      <MessageCircle size={28} className="relative z-10" />
    </a>
  )
}
