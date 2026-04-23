'use client';

import { useEffect, useState } from 'react';

type Lang = 'en' | 'ar';
const STORAGE_KEY = 'embassy-site-lang';

function applyLang(lang: Lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY)) as
      | Lang
      | null;
    const initial: Lang = stored === 'ar' || stored === 'en' ? stored : 'en';
    setLang(initial);
    applyLang(initial);
    setMounted(true);
  }, []);

  const choose = (next: Lang) => {
    setLang(next);
    applyLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage unavailable — silently ignore */
    }
  };

  return (
    <div
      role="group"
      aria-label="Language / اللغة"
      className="inline-flex items-center rounded-full bg-white/15 text-white text-xs sm:text-sm overflow-hidden shadow-sm ring-1 ring-white/30 flex-shrink-0"
    >
      <button
        type="button"
        onClick={() => choose('en')}
        aria-pressed={mounted && lang === 'en'}
        lang="en"
        className={`px-3 py-1 font-semibold transition ${
          mounted && lang === 'en'
            ? 'bg-white text-green-800'
            : 'text-white hover:bg-white/20 focus-visible:bg-white/20'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => choose('ar')}
        aria-pressed={mounted && lang === 'ar'}
        lang="ar"
        className={`px-3 py-1 font-semibold transition ${
          mounted && lang === 'ar'
            ? 'bg-white text-green-800'
            : 'text-white hover:bg-white/20 focus-visible:bg-white/20'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      >
        عربي
      </button>
    </div>
  );
}
