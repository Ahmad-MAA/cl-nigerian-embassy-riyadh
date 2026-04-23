'use client';

import Link from 'next/link';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { searchSite, type SearchDoc } from './searchIndex';

export default function SearchBar() {
  const id = useId();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results: SearchDoc[] = useMemo(() => searchSite(query), [query]);

  // Close when clicking outside or pressing Escape.
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (results.length === 0 ? -1 : (i + 1) % results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) =>
        results.length === 0 ? -1 : (i - 1 + results.length) % results.length,
      );
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && results[activeIndex]) {
        e.preventDefault();
        window.location.href = results[activeIndex].href;
      }
    }
  };

  const showPanel = open && query.trim().length > 0;
  const listboxId = `${id}-listbox`;

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor={`${id}-input`} className="sr-only">
        Search the website
      </label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          id={`${id}-input`}
          ref={inputRef}
          type="search"
          inputMode="search"
          autoComplete="off"
          placeholder="Search the site…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `${id}-opt-${activeIndex}` : undefined
          }
          className="block w-full min-h-[40px] ps-10 pe-3 py-2 text-sm sm:text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
        />
      </div>

      {showPanel && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Search results"
          className="absolute right-0 left-0 sm:left-auto sm:w-96 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-96 overflow-y-auto z-50"
        >
          {results.length === 0 ? (
            <p className="p-4 text-sm text-gray-600 dark:text-gray-400">
              No results for &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <ul className="py-1">
              {results.map((r, i) => (
                <li key={r.href} role="none">
                  <Link
                    id={`${id}-opt-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    href={r.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery('');
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`block px-4 py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${
                      i === activeIndex
                        ? 'bg-green-50 dark:bg-green-900/30'
                        : 'hover:bg-green-50 dark:hover:bg-green-900/30'
                    } focus:outline-none focus-visible:bg-green-50 dark:focus-visible:bg-green-900/30`}
                  >
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {r.title}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                      {r.summary}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p className="px-4 py-2 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800">
            Press <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd> to navigate,{' '}
            <kbd className="font-mono">Enter</kbd> to open.
          </p>
        </div>
      )}
    </div>
  );
}
