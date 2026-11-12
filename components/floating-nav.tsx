"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 100)
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    window.addEventListener("resize", updateVisibility)
    return () => {
      window.removeEventListener("scroll", updateVisibility)
      window.removeEventListener("resize", updateVisibility)
    }
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Learning", href: "#learning" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => setIsOpen(false)

  return (
    <>
      <motion.div
        className={`fixed inset-x-0 top-3 z-50 flex w-full justify-center px-3 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative rounded-2xl border border-zinc-700/50 bg-zinc-800/90 px-3 py-2 shadow-lg backdrop-blur-md md:rounded-full md:px-4 md:py-3">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-50"></div>

          <div className="relative hidden items-center gap-1 lg:flex">
            <Link href="/" className="mr-4 text-lg font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Owens</span>
              <span className="text-white">.tech</span>
            </Link>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded px-2 py-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="relative flex items-center justify-between lg:hidden">
            <Link href="/" className="text-lg font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Owens</span>
              <span className="text-white">.tech</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <motion.div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 bg-black/95 pt-20 backdrop-blur-md lg:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-full flex-col items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-8 py-4 text-2xl font-medium text-white transition-colors hover:text-purple-400"
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  )
}
