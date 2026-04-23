"use client"

import { motion } from "framer-motion"
import { Smartphone, Headphones, Home, Laptop, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BentoEcosystem() {
  return (
    <section id="ecosystem" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[10px] font-bold text-[#FF6700] tracking-widest uppercase mb-4 block">The Ecosystem</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Everything <span className="text-[#FF6700]">Mi</span>.<br/>All in one place.
            </h2>
            <Link href="#ecosystem" className="inline-flex items-center gap-2 font-bold hover:text-[#FF6700] transition-colors">
              View all <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="neu tilt md:col-span-2 md:row-span-2 relative overflow-hidden group rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <img src="/assets/category_smartphones_1776947277258.png" alt="Smartphones" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-between h-full text-white">
              <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-[#FF6700]">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Smartphones</h3>
                <p className="text-white/70 text-sm font-medium">All Genuine Brand Phones & Latest Mi Releases</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="neu tilt md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <img src="/assets/category_audio_1776947297296.png" alt="Audio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-between h-full text-white">
              <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-[#FF6700]">
                <Headphones size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Audio & Covers</h3>
                <p className="text-white/70 text-xs font-medium">Buds · Speakers · Branded Mobile Covers</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="neu tilt md:col-span-1 md:row-span-1 relative overflow-hidden group rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <img src="/assets/category_smart_home_1776947389419.png" alt="Smart Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-between h-full text-white">
              <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-[#FF6700]">
                <Home size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Smart Home</h3>
                <p className="text-white/70 text-xs font-medium">Control your entire home</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="neu tilt md:col-span-2 md:row-span-1 relative overflow-hidden group rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
            <img src="/assets/category_laptops_1776947432724.png" alt="Laptops" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-between h-full text-white">
              <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-[#FF6700]">
                <Laptop size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Laptops & Tablets</h3>
                <p className="text-white/70 text-xs font-medium">Xiaomi Notebook Pro · RedmiPad · Tablet Accessories</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
