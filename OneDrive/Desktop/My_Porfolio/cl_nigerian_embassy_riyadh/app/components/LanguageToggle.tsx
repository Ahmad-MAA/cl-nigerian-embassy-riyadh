'use client';

import { useEffect, useSyncExternalStore } from 'react';

type Lang = 'en' | 'ar';
const STORAGE_KEY = 'embassy-site-lang';
const CHANGE_EVENT = 'embassy-site-lang-change';

function readStored(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' || stored === 'en' ? stored : 'en';
  } catch {
    return 'en';
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getServerSnapshot(): Lang {
  return 'en';
}

function applyLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

export default function LanguageToggle() {
  const lang = useSyncExternalStore(subscribe, readStored, getServerSnapshot);

  useEffect(() => {
    applyLang(lang);
  }, [lang]);

  const choose = (next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage unavailable — silently ignore */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
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
        onClick={() => choose('ar')}
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
