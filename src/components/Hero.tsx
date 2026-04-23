"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const checkStockText = encodeURIComponent("Hi, I want to check the stock of Redmi Note 13 Pro+ at your Alambagh store.")

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="inline-block py-1 px-3 mb-6 bg-orange-500/10 border border-orange-500/20 text-[#FF6700] text-xs font-bold rounded-full">
              ✨ NEW • FLAGSHIP SERIES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Mobile World:<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6700] to-orange-400">
                The Future of Tech
              </span><br/>
              in Lucknow.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Step into Lucknow&apos;s premier Mi Experience Center. From the Xiaomi 14 Ultra to the complete Mi Smart Home ecosystem — it all lives at Alambagh, right next to Piccadilly Hotel.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#location" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6700] hover:bg-[#e65c00] text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1">
                Visit Store <ArrowRight size={18} />
              </Link>
              <Link href="#location" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 border border-border hover:bg-secondary text-foreground font-semibold rounded-xl transition-all hover:-translate-y-1">
                <MapPin size={18} /> Get Directions
              </Link>
            </div>

            <div className="flex gap-8 w-full">
              <div>
                <h3 className="text-3xl font-black mb-1">15+</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Years</p>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-1">12k+</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Happy Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-1">4.9★</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Google Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] aurora -z-10 rounded-full" />
            
            <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden border border-border/50 shadow-2xl">
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg border border-border text-[10px] font-bold text-center z-10">
                OFFICIAL<br/><span className="text-[#FF6700]">Warranty</span>
              </div>
              
              <img 
                src="/assets/hero_redmi_13_pro_plus_1776947263441.png" 
                alt="Redmi Note 13 Pro+" 
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105 relative z-0" 
              />
              
              <div className="mt-6 relative z-10">
                <span className="inline-block bg-[#FF6700] text-white text-[10px] font-black px-2 py-1 rounded mb-2">FLAGSHIP</span>
                <p className="text-[11px] font-bold text-muted-foreground mb-2">200MP OIS CAMERA. CURVED AMOLED. ALL NEW.</p>
                <h3 className="text-2xl font-bold mb-4">Redmi Note 13 Pro+</h3>
                
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground">STARTING AT</span>
                    <h4 className="text-2xl font-black text-[#FF6700]">₹31,999 <span className="text-sm font-medium text-muted-foreground line-through ml-2">₹34,999</span></h4>
                  </div>
                  <a 
                    href={`https://wa.me/919005144137?text=${checkStockText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Check Stock
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
