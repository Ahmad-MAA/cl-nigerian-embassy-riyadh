'use client';

import { useEffect } from 'react';
import { setLang, useLang } from '../i18n/useT';

function applyLang(lang: 'en' | 'ar') {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export default function LanguageToggle() {
  const lang = useLang();

  useEffect(() => {
    applyLang(lang);
  }, [lang]);

  return (
    <div
      role="group"
      aria-label="Language / اللغة"
      className="inline-flex items-center rounded-full bg-white/15 text-white text-xs sm:text-sm overflow-hidden shadow-sm ring-1 ring-white/30 flex-shrink-0"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        lang="en"
        className={`px-3 py-1 font-semibold transition ${
          lang === 'en'
            ? 'bg-white text-green-800'
            : 'text-white hover:bg-white/20 focus-visible:bg-white/20'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        lang="ar"
        className={`px-3 py-1 font-semibold transition ${
          lang === 'ar'
            ? 'bg-white text-green-800'
            : 'text-white hover:bg-white/20 focus-visible:bg-white/20'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      >
        عربي
      </button>
    </div>
  );
}
