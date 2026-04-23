/**
 * Shared SEO constants and helpers for the Embassy website.
 *
 * - `SITE_NAME`: used in the root `<title>` template and OpenGraph `siteName`.
 * - `SITE_URL`: used as `metadataBase` so per-page `alternates.canonical` and
 *   OG URLs can be given as absolute-from-root paths.
 * - `COMMON_KEYWORDS`: baseline keywords included on every page. Next.js
 *   replaces (rather than merges) the `keywords` array when a child page sets
 *   its own, so `pageMetadata()` spreads these into each page's keyword list.
 * - `pageMetadata()`: build per-page `Metadata` with consistent title /
 *   description / keywords / canonical / OpenGraph / Twitter shape.
 */
import type { Metadata } from 'next';

export const SITE_NAME = 'Embassy of the Federal Republic of Nigeria, Riyadh';

export const SITE_URL = 'https://www.nigerianembassyriyadh.gov.ng';

export const COMMON_KEYWORDS: string[] = [
  'Embassy of the Federal Republic of Nigeria',
  'Nigerian Embassy Riyadh',
  'Nigerian Embassy Saudi Arabia',
  'Nigeria Riyadh',
  'Nigeria Saudi Arabia',
  'Nigerian diplomatic mission',
  'consular services',
  'Riyadh',
  'Saudi Arabia',
  'Kingdom of Saudi Arabia',
];

export interface PageMetadataInput {
  /** Short, page-specific title (e.g. "FAQ", "Visa Services"). The root
   *  layout's title template will append ` | ${SITE_NAME}` automatically. */
  title: string;
  /** One-paragraph page description (aim 150–160 chars). */
  description: string;
  /** Page-specific keywords. `COMMON_KEYWORDS` are prepended automatically. */
  keywords?: string[];
  /** Site-root-relative canonical path (e.g. "/faq", "/services/visa"). */
  path: string;
}

export function pageMetadata({
  title,
  description,
  keywords = [],
  path,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    keywords: [...COMMON_KEYWORDS, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
