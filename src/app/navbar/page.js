'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ imageUrl, setImageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] py-4 shadow-md">
    <nav className="bg-black py-4 shadow-md">

      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
                    <Link href="/" className="text-white text-lg font-bold ml-3">
          {imageUrl && (
            <img src={imageUrl} alt="Zafari CC Design Logo" className="h-12" />
          )}
                    </Link>

          <Link href="/" className="text-white text-lg font-bold ml-3">
          <span className="text-2xl font-bold ml-3 text-[#d1b28d]">Zafari CC Design</span>
          </Link>
          <span className="text-sm align-top ml-2 text-[#d1b28d]">LLC</span>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="text-[#d1b28d] h-6 w-6" /> : <Menu className="text-[#d1b28d] h-6 w-6" />}
        </button>

        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex space-x-6`}>
          <Link href="/" className="text-[#d1b28d] hover:text-white">Home</Link>
          <Link href="/projects" className="text-[#d1b28d] hover:text-white">Projects</Link>
          <Link href="/contact" className="text-[#d1b28d] hover:text-white">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#6a4e23] text-[#d1b28d] p-4 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/projects" className="block">Projects</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
