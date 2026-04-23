import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Sitemap',
  description:
    'Complete index of pages on the Embassy of the Federal Republic of Nigeria, Riyadh — services, news, contact, legal and accessibility information.',
  keywords: [
    'sitemap',
    'site index',
    'page index',
    'website map',
    'all pages',
  ],
  path: '/sitemap',
});

const SITEMAP: Array<{ heading: string; links: Array<{ label: string; href: string }> }> = [
  {
    heading: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Useful Links', href: '/useful-links' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Visa', href: '/services/visa' },
      { label: 'Passport', href: '/services/passport' },
      { label: 'Emergency Travel', href: '/services/emergency-travel' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Sitemap' }]}
      title="Sitemap"
      description="Index of all pages on this website."
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITEMAP.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {section.heading}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-green-700 dark:text-green-400 hover:underline focus:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
