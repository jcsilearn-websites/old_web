import React from 'react'

const Header = () => {
  return (
    <header className="absolute container mx-auto top-0 left-0 right-0 min-h-[10vh] z-50  flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent ">
            <div className="flex items-center gap-2">
              <img src="/next.svg" alt="Logo" className="h-8 w-auto" />
            </div>
            <nav className="flex items-center gap-8">
              <a href="#about" className="text-white font-medium hover:underline">About Us</a>
              <a href="#programs" className="text-white font-medium hover:underline">Our Programs</a>
              <a href="#services" className="text-white font-medium hover:underline">Our Services</a>
              <a href="#cta" className="ml-4 px-6 py-2 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition">Get Started</a>
            </nav>
          </header>
  )
}

export default Header