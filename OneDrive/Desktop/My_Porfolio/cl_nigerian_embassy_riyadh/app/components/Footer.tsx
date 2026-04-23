'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useT } from '../i18n/useT';

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export default function Footer() {
  const t = useT();

  const QUICK_LINKS = [
    { label: t.nav.items.home, href: '/' },
    { label: t.nav.items.about, href: '/about' },
    { label: t.nav.items.news, href: '/news' },
    { label: t.nav.items.contact, href: '/contact' },
    { label: t.nav.items.faq, href: '/faq' },
    { label: t.footer.usefulLinks, href: '/useful-links' },
  ];

  const SERVICE_LINKS = [
    { label: t.nav.items.visa, href: '/services/visa' },
    { label: t.nav.items.passport, href: '/services/passport' },
    { label: t.nav.items.emergencyTravel, href: '/services/emergency-travel' },
  ];

  const LEGAL_LINKS = [
    { label: t.footer.privacy, href: '/privacy' },
    { label: t.footer.terms, href: '/terms' },
    { label: t.footer.sitemap, href: '/sitemap' },
    { label: t.footer.accessibility, href: '/accessibility' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-100 mt-auto border-t-4 border-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Embassy block */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex items-start gap-3 mb-4">
              <Image
                src="/images/m_arm.png"
                alt=""
                width={96}
                height={96}
                className="w-12 h-12 bg-white rounded-full p-1 flex-shrink-0 object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {t.footer.embassyName}
                </h3>
                <p className="text-sm text-green-400 font-semibold">{t.footer.country}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <nav aria-label={t.footer.quickLinks}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-green-400 focus:outline-none focus-visible:text-green-400 focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={t.footer.services}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-green-400 focus:outline-none focus-visible:text-green-400 focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="group">
                <div className="flex items-start gap-2">
                  <Icon>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </Icon>
                  <a
                    href="https://maps.app.goo.gl/8PNucwrbJ4FRLYXh9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 focus:outline-none focus-visible:text-green-400 focus-visible:underline"
                  >
                    <address className="not-italic">{t.footer.address}</address>
                  </a>
                </div>
                <div
                  aria-hidden="true"
                  className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:max-h-56 group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-56 group-focus-within:opacity-100"
                >
                  <div className="rounded-md overflow-hidden border border-gray-700 shadow-lg">
                    <iframe
                      title="Embassy of the Federal Republic of Nigeria, Riyadh — location map"
                      src="https://maps.google.com/maps?q=Embassy%20of%20Nigeria%2C%20Diplomatic%20Quarter%2C%20Riyadh&hl=en&z=15&output=embed"
                      width="100%"
                      height="180"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block border-0"
                    />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Icon>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/>
                </Icon>
                <a href="tel:+966114823000" className="hover:text-green-400" dir="ltr">
                  +966 (0) 11 482 3000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </Icon>
                <a
                  href="mailto:info@nigerianembassyriyadh.gov.ng"
                  className="hover:text-green-400 break-all"
                  dir="ltr"
                >
                  info@nigerianembassyriyadh.gov.ng
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2.5 2.5M12 21a9 9 0 110-18 9 9 0 010 18z"/>
                </Icon>
                <span>{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-start">{t.footer.copyright}</p>
          <ul className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 text-sm">
            {LEGAL_LINKS.map((link, i) => (
              <li key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 focus:outline-none focus-visible:text-green-400 focus-visible:underline"
                >
                  {link.label}
                </Link>
                {i < LEGAL_LINKS.length - 1 && (
                  <span className="text-gray-600" aria-hidden="true">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
