'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: 'Creations', href: '/' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className="bg-background dark:bg-background border-b-2 border-outline dark:border-outline-variant shadow-[4px_4px_0px_0px_rgba(137,114,107,1)] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-gutter h-16 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim uppercase tracking-tighter hover:opacity-80 transition-opacity">
          Mana Embroidery
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-stack-lg">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-label-sm text-label-sm uppercase transition-colors duration-100 ${
                isActive(item.href)
                  ? 'text-on-primary-fixed-variant border-b-2 border-primary-container pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Icons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-stack-md">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-container border-t border-outline-variant">
          <div className="flex flex-col px-gutter py-stack-md space-y-stack-md">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-sm text-label-sm uppercase transition-colors ${
                  isActive(item.href)
                    ? 'text-primary border-l-2 border-primary pl-2'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
