// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#6a4e23] to-[#9e7a3f] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpeg" alt="Zafari CC Design Logo" className="h-12" />
          <span className="text-2xl font-bold ml-3 text-[#d1b28d]">Zafari CC Design</span>
          <span className="text-sm align-top ml-2 text-[#d1b28d]">LLC</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-[#d1b28d] hover:text-white">Home</Link>
          <Link href="/about" className="text-[#d1b28d] hover:text-white">About</Link>
          <Link href="/projects" className="text-[#d1b28d] hover:text-white">Projects</Link>
          <Link href="/contact" className="text-[#d1b28d] hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
