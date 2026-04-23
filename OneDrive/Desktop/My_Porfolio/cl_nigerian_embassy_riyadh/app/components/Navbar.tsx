'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

type NavLeaf = { label: string; href: string };
type NavItem = NavLeaf | { label: string; submenu: NavLeaf[] };

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    submenu: [
      { label: 'Visa', href: '/services/visa' },
      { label: 'Passport', href: '/services/passport' },
      { label: 'Emergency Travel', href: '/services/emergency-travel' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

const hasSubmenu = (item: NavItem): item is { label: string; submenu: NavLeaf[] } =>
  'submenu' in item;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const dropdownId = useId();
  const navRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<Record<string, Array<HTMLAnchorElement | null>>>({});

  // Close menus on Escape; collapse outside clicks for desktop dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
        setOpenMobileSubmenu(null);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
  };

  const handleSubmenuKey = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    parentLabel: string,
    index: number,
  ) => {
    const items = submenuRefs.current[parentLabel] ?? [];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(index + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(index - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === 'Tab') {
      setOpenDropdown(null);
    }
  };

  return (
    <div ref={navRef} className="w-full">
      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-1" role="menubar" aria-label="Primary">
        {NAV_ITEMS.map((item) => {
          if (!hasSubmenu(item)) {
            return (
              <li key={item.label} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="inline-block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openDropdown === item.label;
          const panelId = `${dropdownId}-${item.label}`;
          return (
            <li
              key={item.label}
              role="none"
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenDropdown(item.label);
                    requestAnimationFrame(() => {
                      submenuRefs.current[item.label]?.[0]?.focus();
                    });
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
              >
                {item.label}
                <svg
                  className={`w-4 h-4 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul
                id={panelId}
                role="menu"
                aria-label={item.label}
                className={`absolute left-0 top-full mt-1 min-w-[12rem] bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {item.submenu.map((sub, idx) => (
                  <li key={sub.label} role="none">
                    <Link
                      href={sub.href}
                      role="menuitem"
                      ref={(el) => {
                        submenuRefs.current[item.label] ??= [];
                        submenuRefs.current[item.label][idx] = el;
                      }}
                      onClick={() => setOpenDropdown(null)}
                      onKeyDown={(e) => handleSubmenuKey(e, item.label, idx)}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus-visible:bg-green-50 dark:focus-visible:bg-green-900/30 focus-visible:text-green-700 dark:focus-visible:text-green-400"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
      >
        <svg className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="md:hidden absolute left-0 right-0 top-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto z-40"
      >
        <ul className="px-2 py-3 space-y-1" role="menu" aria-label="Primary mobile">
          {NAV_ITEMS.map((item) => {
            if (!hasSubmenu(item)) {
              return (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={closeAll}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            const isSubOpen = openMobileSubmenu === item.label;
            const mobilePanelId = `${dropdownId}-m-${item.label}`;
            return (
              <li key={item.label} role="none">
                <button
                  type="button"
                  role="menuitem"
                  aria-haspopup="menu"
                  aria-expanded={isSubOpen}
                  aria-controls={mobilePanelId}
                  onClick={() => setOpenMobileSubmenu(isSubOpen ? null : item.label)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 ${isSubOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  id={mobilePanelId}
                  role="menu"
                  aria-label={item.label}
                  hidden={!isSubOpen}
                  className="mt-1 ml-3 border-l border-gray-200 dark:border-gray-700 pl-3 space-y-1"
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.label} role="none">
                      <Link
                        href={sub.href}
                        role="menuitem"
                        onClick={closeAll}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
