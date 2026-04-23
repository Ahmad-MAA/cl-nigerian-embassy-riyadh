import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-950 border-b-4 border-green-700 sticky top-0 z-50 shadow-sm">
      {/* Top notice bar */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
          <p className="font-medium leading-tight">
            Official Website of the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia
          </p>
          <LanguageToggle />
        </div>
      </div>

      {/* Brand + search + nav row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 rounded-md"
          aria-label="Home — Embassy of the Federal Republic of Nigeria, Riyadh"
        >
          {/* Coat of arms */}
          <Image
            src="/images/m_arm.png"
            alt=""
            width={112}
            height={112}
            priority
            className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 object-contain"
          />
          <div className="hidden md:block leading-tight">
            <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white">
              Embassy of the Federal Republic of Nigeria
            </p>
            <p className="text-xs sm:text-sm text-green-700 dark:text-green-400 font-semibold">
              Riyadh, Saudi Arabia
            </p>
          </div>
        </Link>

        {/* Desktop search — sits to the left, grows up to a comfortable cap */}
        <div className="hidden lg:block flex-1 min-w-[17rem] max-w-md">
          <SearchBar />
        </div>

        <div className="ms-auto">
          <Navbar />
        </div>
      </div>

      {/* Search row for narrow viewports — full width, adaptive */}
      <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
