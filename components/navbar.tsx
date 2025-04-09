"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Building className={`h-8 w-8 ${isScrolled ? "text-bright-orange" : "text-white"}`} />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>Buildverse</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "Testimonials", href: "/testimony" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-bright-orange ${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-bright-orange text-white hover:bg-bright-orange/90">
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 pt-10">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "Testimonials", href: "/testimony" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-bright-orange"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-bright-orange text-white hover:bg-bright-orange/90">
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

