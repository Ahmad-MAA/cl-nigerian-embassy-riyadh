import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from './seo';

export const metadata = pageMetadata({
  title: 'Home',
  description:
    'Official website of the Embassy of the Federal Republic of Nigeria, Riyadh — apply for Nigerian visas, renew passports, request Emergency Travel Certificates, and find Embassy contact and news.',
  keywords: [
    'Nigerian visa',
    'Nigerian passport',
    'Emergency Travel Certificate',
    'Embassy homepage',
    'Nigeria Immigration Service',
  ],
  path: '/',
});

const QUICK_LINKS = [
  {
    title: 'Visa',
    href: '/services/visa',
    summary: 'Tourist, business, transit and diplomatic visas to Nigeria.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Passport',
    href: '/services/passport',
    summary: 'Apply for a new Nigerian passport or renew an expiring one.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm5 4a2 2 0 100 4 2 2 0 000-4z"
      />
    ),
  },
  {
    title: 'Emergency Travel',
    href: '/services/emergency-travel',
    summary: 'Emergency Travel Certificate for urgent return to Nigeria.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0l-7.1 12.25A2 2 0 005 19z"
      />
    ),
  },
];

const ANNOUNCEMENTS = [
  {
    date: 'April 2026',
    title: 'Embassy Resumes Full Consular Operations',
    summary: 'Passport and visa services have resumed following the seasonal break.',
  },
  {
    date: 'March 2026',
    title: 'Annual Independence Day Reception',
    summary: 'Nigerians in the Kingdom are invited to the 2026 Independence Day reception.',
  },
  {
    date: 'February 2026',
    title: 'New Booking System for E-Passport Capture',
    summary: 'Biometric appointments must now be booked online in advance.',
  },
];

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="w-5 h-5 text-green-700 flex-shrink-0 mt-1"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-gray-950">
      {/* Hero / Welcome */}
      <section className="bg-green-50 dark:bg-gray-900 border-b border-green-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-green-700 dark:text-green-400 uppercase mb-3">
                Welcome
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                We are the official diplomatic mission of Nigeria in the Kingdom of Saudi Arabia.
                We serve Nigerian citizens, support visitors travelling to Nigeria, and strengthen
                the ties between our two nations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services/visa"
                  className="inline-flex justify-center px-6 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  Apply for a Visa
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center px-6 py-3 border border-green-700 text-green-700 dark:text-green-400 dark:border-green-400 font-semibold rounded-md hover:bg-green-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  Contact the Embassy
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <Image
                src="/images/map_nig.png"
                alt="Map of the Federal Republic of Nigeria"
                width={560}
                height={560}
                priority
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome message */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            A message from the Embassy
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            On behalf of the Government and people of the Federal Republic of Nigeria, you are
            warmly welcome. Whether you are a Nigerian living or travelling in the Kingdom, or a
            Saudi national planning a visit to Nigeria, this website is here to help.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            From this site you can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>Apply for a Nigerian visa or check current visa requirements.</li>
            <li>Renew or replace your Nigerian passport.</li>
            <li>Request an Emergency Travel Certificate.</li>
            <li>Read official announcements and updates.</li>
            <li>Find our address, phone numbers and office hours.</li>
          </ul>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-green-50 dark:bg-gray-900 border-b border-green-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Quick Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Go straight to the service you need.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block h-full p-6 bg-white dark:bg-gray-950 border border-green-200 dark:border-green-800 rounded-md hover:border-green-700 dark:hover:border-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-md flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-green-700 dark:text-green-400"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {link.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{link.summary}</p>
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Announcements */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Announcements
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Latest notices from the Embassy.
              </p>
            </div>
            <Link
              href="/news"
              className="text-green-700 dark:text-green-400 font-semibold hover:underline focus:outline-none focus-visible:underline"
            >
              View all news →
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((item) => (
              <li
                key={item.title}
                className="border border-gray-200 dark:border-gray-700 rounded-md p-6 bg-white dark:bg-gray-950"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400 mb-2">
                  {item.date}
                </p>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact summary */}
      <section className="bg-green-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Contact the Embassy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For visa, passport, consular or general enquiries, please use the details opposite
              or visit the full{' '}
              <Link
                href="/contact"
                className="text-green-700 dark:text-green-400 font-semibold hover:underline"
              >
                contact page
              </Link>
              .
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <ContactIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </ContactIcon>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                <p>Diplomatic Quarter, Riyadh 11693, Kingdom of Saudi Arabia</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.5 5.5l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/>
              </ContactIcon>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                <a href="tel:+966114823000" className="hover:text-green-700 dark:hover:text-green-400">
                  +966 (0) 11 482 3000
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </ContactIcon>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                <a
                  href="mailto:info@nigerianembassyriyadh.gov.ng"
                  className="hover:text-green-700 dark:hover:text-green-400 break-all"
                >
                  info@nigerianembassyriyadh.gov.ng
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l2.5 2.5M12 21a9 9 0 110-18 9 9 0 010 18z"/>
              </ContactIcon>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Office Hours</p>
                <p>Sunday – Thursday, 09:00 – 16:00 (Riyadh time)</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
