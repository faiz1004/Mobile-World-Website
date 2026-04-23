"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Wrench, RefreshCw, CreditCard, Truck, PlaySquare } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Mi Authorized Store",
      description: "100% genuine Xiaomi products with full manufacturer warranty & Mi India support."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Repair Center",
      description: "Certified technicians. Screen, battery & motherboard repairs with genuine parts."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Best Exchange Value",
      description: "Upgrade your old phone for the latest Xiaomi. Instant valuation, instant savings."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "0% EMI Schemes",
      description: "No-cost EMI on all major credit cards & Bajaj Finserv. Take it home today."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Same Day Delivery",
      description: "Order on WhatsApp before 4 PM, get it delivered across Lucknow the same day."
    },
    {
      icon: <PlaySquare className="w-6 h-6" />,
      title: "Live Experience Zone",
      description: "Try every product hands-on. Expert demos of HyperOS, Smart Home & more."
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-full h-1/2 aurora -z-10 opacity-30" />
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold text-[#FF6700] tracking-widest uppercase mb-4 block">The Mobile World Experience</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            More than a store.<br/>It&apos;s an <span className="text-[#FF6700]">experience</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Walk in, play with every product, get expert demos, and take home a tomorrow-ready gadget — all under one roof in Alambagh.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass p-8 rounded-2xl hover:border-orange-500/30 transition-colors group cursor-default"
            >
              <div className="w-14 h-14 bg-orange-500/10 text-[#FF6700] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6700] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
