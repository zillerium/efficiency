'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What we do', href: '#what-we-do' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 font-sans backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <a
          href="#"
          className="text-lg font-extrabold tracking-tight text-[#0B2239] sm:text-xl"
        >
         Efficiency 
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#0B2239]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#start-review"
            onClick={(e) => handleScroll(e, '#start-review')}
            className="rounded-lg bg-[#0D7A6E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0A6359]"
          >
            Start your free review
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#0B2239] hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200/80 bg-white px-4 pt-3 pb-5 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-[#475569] hover:bg-slate-50 hover:text-[#0B2239]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#start-review"
              onClick={(e) => handleScroll(e, '#start-review')}
              className="mt-2 rounded-lg bg-[#0D7A6E] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0A6359]"
            >
              Start your free review
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
