/**
 * Static client-side search index.
 *
 * Each entry combines a page's title, summary and freeform `body` text — the
 * SearchBar runs simple case-insensitive substring matching across all of it.
 *
 * When you add a new page, add an entry here so it becomes searchable.
 */

export type SearchDoc = {
  title: string;
  href: string;
  summary: string;
  body: string;
};

export const SEARCH_INDEX: SearchDoc[] = [
  {
    title: 'Home',
    href: '/',
    summary: 'Welcome to the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia.',
    body: 'home welcome embassy nigeria riyadh saudi arabia quick links visa passport emergency travel announcements contact',
  },
  {
    title: 'About the Embassy',
    href: '/about',
    summary: 'Mission, roles and a message from the Ambassador.',
    body: 'about mission roles ambassador diplomatic relations consular services trade investment hajj umrah education culture',
  },
  {
    title: 'News & Announcements',
    href: '/news',
    summary: 'Latest news, press releases and announcements from the Embassy.',
    body: 'news announcements press releases updates events independence day reception consular operations e-passport',
  },
  {
    title: 'Contact the Embassy',
    href: '/contact',
    summary: 'Address, phone, email and office hours.',
    body: 'contact address phone email office hours diplomatic quarter riyadh telephone fax appointment',
  },
  {
    title: 'Frequently Asked Questions',
    href: '/faq',
    summary: 'Visa, passport and general inquiries answered.',
    body: 'faq frequently asked questions visa passport general inquiries help support',
  },
  {
    title: 'Visa Services',
    href: '/services/visa',
    summary: 'Tourist, business, transit and diplomatic visas to Nigeria.',
    body: 'visa tourist business transit diplomatic application requirements yellow fever iqama appointment fee nigeria immigration service',
  },
  {
    title: 'Passport Services',
    href: '/services/passport',
    summary: 'Apply for or renew a Nigerian passport from Saudi Arabia.',
    body: 'passport renewal new application e-passport biometric capture nigeria immigration service iqama child minor lost stolen',
  },
  {
    title: 'Emergency Travel Certificate',
    href: '/services/emergency-travel',
    summary: 'One-way travel document for urgent return to Nigeria.',
    body: 'emergency travel certificate etc lost stolen passport repatriation hotline urgent return nigeria police report',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    summary: 'How we collect, use and protect your personal information.',
    body: 'privacy policy personal information data protection cookies',
  },
  {
    title: 'Terms of Use',
    href: '/terms',
    summary: 'Conditions governing your use of this website.',
    body: 'terms of use conditions website legal copyright disclaimer',
  },
  {
    title: 'Sitemap',
    href: '/sitemap',
    summary: 'Index of all pages on this website.',
    body: 'sitemap index pages directory navigation',
  },
  {
    title: 'Accessibility',
    href: '/accessibility',
    summary: 'Our commitment to digital accessibility (WCAG 2.2 AA).',
    body: 'accessibility wcag screen reader keyboard navigation contrast inclusive disability',
  },
];

/**
 * Score-and-filter search.
 * Splits the query into terms; each term must appear somewhere in the document.
 * Title matches are ranked higher than body matches.
 */
export function searchSite(query: string, limit = 8): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  type Scored = { doc: SearchDoc; score: number };
  const scored: Scored[] = [];

  for (const doc of SEARCH_INDEX) {
    const title = doc.title.toLowerCase();
    const summary = doc.summary.toLowerCase();
    const body = doc.body.toLowerCase();

    let score = 0;
    let allMatched = true;
    for (const t of terms) {
      const inTitle = title.includes(t);
      const inSummary = summary.includes(t);
      const inBody = body.includes(t);
      if (!inTitle && !inSummary && !inBody) {
        allMatched = false;
        break;
      }
      if (inTitle) score += 5;
      if (inSummary) score += 2;
      if (inBody) score += 1;
    }
    if (allMatched) scored.push({ doc, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.doc);
}
