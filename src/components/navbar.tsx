import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: "О событии" },
    { href: "#heroes", label: "Герои" },
    { href: "#gallery", label: "Фотографии" },
    { href: "#contact", label: "Написать" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-amber-500/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-orbitron text-white font-bold text-lg">
          ЧЕРНОБЫЛЬ<span className="text-amber-400">26</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-space-mono text-sm tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-amber-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-amber-500/20 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-amber-400 transition-colors font-space-mono text-sm tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
