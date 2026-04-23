"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, PhoneCall, Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#ecosystem" },
    { name: "Services", href: "#experience" },
    { name: "Store", href: "#location" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#footer" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-background/90 backdrop-blur-md border-b" : "py-4 bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF6700] text-white font-black text-xl flex items-center justify-center rounded-lg">
            M
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Mobile World</h1>
            <span className="text-[10px] text-[#FF6700] font-bold tracking-widest uppercase">
              Authorized Mi Store
            </span>
          </div>
        </div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
            aria-label="Toggle Dark/Light Mode"
          >
            {mounted ? (
              theme === "light" ? <Sun size={18} /> : <Moon size={18} />
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>
          
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <PhoneCall size={16} />
            <span>+91 9005144137</span>
          </div>

          <Link href="#location" className="hidden md:inline-flex px-4 py-2 bg-[#FF6700] hover:bg-[#e65c00] text-white text-sm font-semibold rounded-lg shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5">
            Visit Store
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b p-4 flex flex-col gap-4 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-base font-medium text-muted-foreground hover:text-foreground block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm font-semibold mt-2 pt-4 border-t">
            <PhoneCall size={16} />
            <span>+91 9005144137</span>
          </div>
          <Link 
            href="#location" 
            className="w-full text-center py-3 bg-[#FF6700] text-white font-semibold rounded-lg mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Visit Store
          </Link>
        </div>
      )}
    </nav>
  )
}
