"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SocialProof() {
  const reviews = [
    {
      id: 1,
      name: "Ankit Singh",
      time: "3 weeks ago",
      initial: "A",
      color: "bg-orange-600",
      text:
        "Picked up a Redmi Note 13 Pro+. Great prices, genuine products, and fast service. Located perfectly near Piccadilly Hotel.",
    },
    {
      id: 2,
      name: "Neha Gupta",
      time: "1 week ago",
      initial: "N",
      color: "bg-amber-500",
      text:
        "Loved the showroom! So futuristic and clean. Got a Mi Smart TV and soundbar — excellent demo before buying.",
    },
    {
      id: 3,
      name: "Vikram Yadav",
      time: "2 months ago",
      initial: "V",
      color: "bg-orange-500",
      text:
        "Repair service was quick and affordable. They fixed my phone screen within hours. Trustworthy Mi Store.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [reviews.length])

  const instaPhotos = [
    "/assets/hero_redmi_13_pro_plus_1776947263441.png",
    "/assets/category_smartphones_1776947277258.png",
    "/assets/category_audio_1776947297296.png",
    "/assets/category_smart_home_1776947389419.png",
    "/assets/category_laptops_1776947432724.png",
    "/assets/hero_redmi_13_pro_plus_1776947263441.png",
    "/assets/category_smartphones_1776947277258.png",
    "/assets/category_audio_1776947297296.png",
  ]

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[10px] font-bold text-[#FF6700] tracking-widest uppercase mb-4 block">
              Social Proof
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Loved by <span className="text-[#FF6700]">Lucknow.</span>
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 hide-scrollbar w-full md:w-auto">
            <a href="https://www.google.com/maps/place/Mobile+World+Mi+Store+-+Lucknow/@26.7995715,80.8948359,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfe9f539cee87:0xf7a2b2fc93aed487!8m2!3d26.7995715!4d80.8948359!16s%2Fg%2F12m92v80j" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center text-center min-w-[180px] hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl font-black mb-2">4.9</div>
              <div className="text-[#FF6700] text-xl mb-1">★★★★★</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Google Reviews
              </div>
            </a>
            
            <a href="https://www.facebook.com/mwkpr/" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center text-center min-w-[180px] hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl font-black mb-2">1.6k+</div>
              <div className="text-[#1877F2] text-xl mb-1">👍👍👍👍👍</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Facebook Likes
              </div>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Reviews Slider */}
          <div className="relative h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass p-8 rounded-3xl h-full flex flex-col">

                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${reviews[currentIndex].color}`}
                    >
                      {reviews[currentIndex].initial}
                    </div>

                    <div>
                      <h4 className="font-bold">{reviews[currentIndex].name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {reviews[currentIndex].time}
                      </span>
                    </div>

                    <div className="ml-auto text-[#FF6700] font-bold">★ 5.0</div>
                  </div>

                  <p className="italic flex-grow text-foreground/90">
                    {reviews[currentIndex].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Instagram Grid */}
          <div>
            <a href="https://www.instagram.com/mobileworld_ls" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E4405F]"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <h3 className="text-xl font-bold">@mobileworld_ls</h3>
            </a>

            <div className="grid grid-cols-4 gap-2">
              {instaPhotos.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden bg-muted"
                >
                  <img
                    src={src}
                    alt="Instagram post"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}