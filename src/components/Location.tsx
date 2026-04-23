"use client"

import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-[#FF6700] tracking-widest uppercase mb-4 block">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Visit the <span className="text-[#FF6700]">Mobile World</span> showroom
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          <div className="lg:col-span-3 h-[500px] w-full rounded-3xl overflow-hidden glass p-1">
            {/* The Google Maps iframe styled darkly in global css, but we can also rely on tailwind classes if needed. Using the requested dark-styled approach. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4284897288674!2d80.8922609748642!3d26.7995715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe9f539cee87%3A0xf7a2b2fc93aed487!2sMobile%20World%20Mi%20Store%20-%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: "20px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="dark:invert-[90%] dark:hue-rotate-180 dark:brightness-[85%] dark:contrast-[85%] transition-all duration-300"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            
            <div className="glass p-6 rounded-2xl flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#FF6700] text-white rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-muted-foreground tracking-wider mb-2">ADDRESS</h4>
                <p className="font-semibold text-foreground">
                  569/165, Kanpur Main Road,<br/>
                  Sector B, Bargawan, LDA Colony,<br/>
                  Alambagh, Lucknow — 226012
                </p>
              </div>
            </div>

            <div className="neu p-6 rounded-2xl flex gap-4 items-start relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 bg-orange-500/10 text-[#FF6700] rounded-full flex items-center justify-center shrink-0 relative z-10">
                <Navigation size={24} />
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-[#FF6700] text-white text-[10px] font-black px-2 py-1 rounded mb-3">LANDMARK</span>
                <h4 className="text-xl font-bold mb-2">Visit us at Alambagh</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  📍 Right next to Piccadilly Hotel — easily spot us on Kanpur Main Road, Alambagh.
                </p>
                <a 
                  href="https://www.google.com/maps/place/Mobile+World+Mi+Store+-+Lucknow/@26.7995715,80.8948359,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfe9f539cee87:0xf7a2b2fc93aed487!8m2!3d26.7995715!4d80.8948359!16s%2Fg%2F12m92v80j" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
                >
                  <MapPin size={14} /> Open in Maps
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-2xl flex flex-col gap-3">
                <div className="w-8 h-8 bg-secondary text-[#FF6700] rounded-full flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1">HOURS</h4>
                  <p className="font-bold text-sm">10:30 AM — 10:00 PM</p>
                  <span className="text-xs text-muted-foreground mt-1 block">All 7 days</span>
                </div>
              </div>
              
              <div className="glass p-5 rounded-2xl flex flex-col gap-3">
                <div className="w-8 h-8 bg-secondary text-[#FF6700] rounded-full flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1">CALL US</h4>
                  <p className="font-bold text-sm">+91 9005144137</p>
                  <span className="text-xs text-muted-foreground mt-1 block">Dial now</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
