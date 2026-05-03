"use client"; // Nødvendig for at håndtere mobil-menu states

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Hjælpefunktion til at se om et link er aktivt
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Forside', href: '/' },
    { name: 'Ydelser', href: '/#services' },
    { name: 'Om mig', href: '/brand' },
  ];

  return (
    <div className='font-sans text-gi-dark'>
      <nav className="bg-linear-to-b from-blue-300 to-sky-200  w-full z-100 fixed bg-white/70 backdrop-blur-md border-b border-slate-100">

        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <Image
              src="/Gi5-square-nobg1.png"
              alt="Gi5lund IT Logo"
              width={96}
              height={96}
              className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-xl tracking-tight text-[#2c3e50]">
              Gi5lund IT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#94a3b8] ${isActive(link.href) ? 'text-taupe-400' : 'text-mauve-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="bg-[#2c3e50] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#94a3b8] transition-all shadow-sm"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobil Menu Knap */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobil Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-slate-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setIsOpen(false)}
              className="block text-[#94a3b8] font-bold text-lg"
            >
              Kontakt →
            </Link>
          </div>
        )}
      </nav>

    </div>

  );
}