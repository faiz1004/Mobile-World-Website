import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { BentoEcosystem } from "@/components/BentoEcosystem"
import { Services } from "@/components/Services"
import { Location } from "@/components/Location"
import { SocialProof } from "@/components/SocialProof"
import { WhatsAppFAB } from "@/components/WhatsAppFAB"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Marquee Ticker */}
      <div className="w-full bg-secondary/80 backdrop-blur-sm border-b border-border py-2 overflow-hidden relative mt-[72px]">
        <div className="marq">
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">NO-COST EMI</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">EXCHANGE OFFERS</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">SAME-DAY DELIVERY</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">AUTHORIZED MI STORE</span><span className="text-[#FF6700]">•</span>
          {/* Duplicate for seamless scrolling */}
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">NO-COST EMI</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">EXCHANGE OFFERS</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">SAME-DAY DELIVERY</span><span className="text-[#FF6700]">•</span>
          <span className="text-sm font-bold tracking-widest text-muted-foreground mx-4">AUTHORIZED MI STORE</span><span className="text-[#FF6700]">•</span>
        </div>
      </div>

      <Hero />
      <BentoEcosystem />
      <Services />
      <Location />
      <SocialProof />
      
      <WhatsAppFAB />

      <footer id="footer" className="border-t border-border mt-16 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-xl font-bold">Mobile World</h3>
              <p className="text-[#FF6700] text-sm font-semibold tracking-wider mb-4">AUTHORIZED MI STORE</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/mwkpr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors font-medium">Facebook</a>
                <a href="https://www.instagram.com/mobileworld_ls" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors font-medium">Instagram</a>
                <a href="https://www.justdial.com/Lucknow/Mobile-World-Near-Piccadilly-Hotel-Alambagh/0522PX522-X522-180526142238-D1S2_BZDET" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#FF6700] transition-colors font-medium">JustDial</a>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right w-full md:w-auto">
              <div className="mb-2 text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">Accepted Payments</div>
              <div className="flex gap-2 justify-center md:justify-end mb-6 flex-wrap">
                <span className="px-2 py-1 bg-secondary rounded-md text-[10px] font-bold uppercase tracking-wider">Cash on Delivery</span>
                <span className="px-2 py-1 bg-secondary rounded-md text-[10px] font-bold uppercase tracking-wider">UPI</span>
                <span className="px-2 py-1 bg-secondary rounded-md text-[10px] font-bold uppercase tracking-wider">Debit Card</span>
                <span className="px-2 py-1 bg-secondary rounded-md text-[10px] font-bold uppercase tracking-wider">Credit Card</span>
              </div>
              <p>&copy; {new Date().getFullYear()} Mobile World Lucknow. All rights reserved.</p>
              <p className="text-xs mt-1">Xiaomi, Mi, Redmi are registered trademarks of Xiaomi Corporation.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
