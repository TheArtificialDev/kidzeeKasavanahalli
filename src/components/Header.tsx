'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-purple-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <Image
            src="/images/Kidzee New Logo.png"
            alt="Kidzee Kasavanahalli Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <span className="text-purple-700 font-bold text-xl md:text-2xl tracking-tight">
            Kidzee Kasavanahalli
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-base font-semibold">
          <li><Link href="/programs" className="text-gray-700 hover:text-purple-700 transition-colors py-2 px-1">Programs</Link></li>
          <li><Link href="/activities" className="text-gray-700 hover:text-purple-700 transition-colors py-2 px-1">Activities</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-purple-700 transition-colors py-2 px-1">About</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-purple-700 transition-colors py-2 px-1">Contact</Link></li>
          <li><Link href="/blogs" className="text-gray-700 hover:text-purple-700 transition-colors py-2 px-1">Blogs</Link></li>
        </ul>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school" className="bg-yellow-400 text-purple-700 px-6 py-3 rounded-lg font-bold text-sm hover:bg-yellow-500 transition-colors shadow-md hover:shadow-lg">
            💬 WhatsApp Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 border-0 bg-transparent cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-200 shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            <li><Link href="/programs" className="block text-gray-700 hover:text-purple-700 transition-colors py-3 px-2 font-semibold" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
            <li><Link href="/activities" className="block text-gray-700 hover:text-purple-700 transition-colors py-3 px-2 font-semibold" onClick={() => setIsMenuOpen(false)}>Activities</Link></li>
            <li><Link href="/about" className="block text-gray-700 hover:text-purple-700 transition-colors py-3 px-2 font-semibold" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="block text-gray-700 hover:text-purple-700 transition-colors py-3 px-2 font-semibold" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/blogs" className="block text-gray-700 hover:text-purple-700 transition-colors py-3 px-2 font-semibold" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
            <li className="pt-2">
              <a href="https://wa.me/918884750750?text=Hey%20Ma'am,%20Looking%20to%20know%20more%20about%20the%20school" className="block bg-yellow-400 text-purple-700 px-4 py-3 rounded-lg font-bold text-center hover:bg-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                💬 WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
