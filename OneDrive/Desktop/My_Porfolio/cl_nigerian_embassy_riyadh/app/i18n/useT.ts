'use client';

import { useSyncExternalStore } from 'react';
import {
  CHANGE_EVENT,
  STORAGE_KEY,
  TRANSLATIONS,
  type Lang,
  type TranslationDict,
} from './translations';

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

export function setLang(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* localStorage unavailable — silently ignore */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, readStored, getServerSnapshot);
}

export function useT(): TranslationDict {
  const lang = useLang();
  return TRANSLATIONS[lang];
}
