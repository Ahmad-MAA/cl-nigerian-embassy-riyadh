import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Useful Links',
  description:
    'Curated directory of Nigerian news and media, government agencies, and professional associations — useful resources for Nigerians in Saudi Arabia.',
  keywords: [
    'Nigeria useful links',
    'Nigerian news',
    'Nigerian media',
    'Nigerian government agencies',
    'Nigerian professional associations',
    'Nigerians in diaspora',
    'Nigeria resources',
    'directory',
  ],
  path: '/useful-links',
});

// NOTE: Replace the placeholder `#` hrefs below with the current official URLs
// when these are confirmed by the Embassy's communications team.
type LinkItem = { label: string; href: string };

const NEWS_MEDIA: LinkItem[] = [
  { label: 'Nigeria Television Authorities', href: '#' },
  { label: 'Nigeriaworld: Nigeria News', href: '#' },
  { label: 'Vanguard', href: '#' },
  { label: 'This Day', href: '#' },
  { label: 'The Guardian', href: '#' },
  { label: 'Nigerian Tribune', href: '#' },
  { label: 'Gamji', href: '#' },
  { label: 'BBC Africa', href: '#' },
  { label: 'Ben Television London (UK)', href: '#' },
  { label: 'CNN', href: '#' },
  { label: 'Channelstv.com', href: '#' },
  { label: 'The Sun', href: '#' },
];

const GOVERNMENT_ORGS: LinkItem[] = [
  { label: 'Economic & Financial Crimes Comm. (EFCC)', href: '#' },
  { label: 'Ministry of Foreign Affairs', href: '#' },
  { label: "Nigeria's Federal Capital Territory (FCT)", href: '#' },
  { label: 'Presidential Research and Commission Unit', href: '#' },
  { label: 'Independent National Electoral Commission', href: '#' },
  { label: 'Corporate Affairs Commission', href: '#' },
  { label: 'The Nigeria Police', href: '#' },
  { label: 'Nigeria National Assembly', href: '#' },
  { label: 'National Drug Law Enforcement Agency (NDLEA)', href: '#' },
  { label: 'Institute of Chartered Accountants of Nigeria (ICAN)', href: '#' },
  {
    label: 'National Agency for Food and Drug Administration and Control (NAFDAC)',
    href: '#',
  },
  { label: 'Nigeria Nuclear Regulatory Authority (NNRA)', href: '#' },
  { label: 'Nigeria Atomic Energy Commission (NAEC)', href: '#' },
  { label: 'Nigeria Golden Jubilee Celebrations', href: '#' },
];

const ASSOCIATIONS: LinkItem[] = [
  { label: 'Medical Association of Nigeria (MANSAG)', href: '#' },
  { label: 'Engineering Forum of Nigerians (EFN)', href: '#' },
  { label: 'Nigerians In Diaspora Organisation Europe (NIDOE)', href: '#' },
  { label: 'Nigerian Bar Association', href: '#' },
  { label: 'Nigeria Labour Congress', href: '#' },
  { label: 'Chartered Accountants of Nigeria (ICAN)', href: '#' },
  { label: 'Chartered Institute of Bankers', href: '#' },
  { label: 'Nigerian Institute of Management (NIM)', href: '#' },
  { label: 'Chartered Institute of Taxation (CITN)', href: '#' },
  { label: 'Central Association of Nigerians in the United Kingdom (CANUK)', href: '#' },
  {
    label: 'Association of British-Nigerian Law Enforcement Officers (ABLE)',
    href: '#',
  },
];

const SECTIONS: Array<{ id: string; heading: string; intro: string; items: LinkItem[] }> = [
  {
    id: 'news-media',
    heading: 'Useful links and info about Nigeria',
    intro:
      'Major Nigerian and international news outlets for current affairs, politics, business and culture.',
    items: NEWS_MEDIA,
  },
  {
    id: 'government',
    heading: 'Government & Organizations',
    intro:
      'Federal ministries, commissions, regulatory agencies and other official bodies of the Federal Republic of Nigeria.',
    items: GOVERNMENT_ORGS,
  },
  {
    id: 'associations',
    heading: 'Associations & Professional Bodies',
    intro:
      'Professional associations and diaspora bodies serving Nigerian nationals at home and abroad.',
    items: ASSOCIATIONS,
  },
];

export default function UsefulLinksPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Useful Links' }]}
      title="Useful Links"
      description="Directory of Nigerian news, government and professional resources."
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Intro */}
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The resources below are provided as a convenience for Nigerian citizens, residents and
            partners in the Kingdom of Saudi Arabia. They are grouped into three sections —
            Nigerian news and media, federal government and public bodies, and professional and
            diaspora associations.
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            External links are provided for information only. Please read the Embassy&rsquo;s{' '}
            <a href="/terms#external-links" className="text-green-700 dark:text-green-400 hover:underline">
              external links policy
            </a>
            .
          </p>
        </div>

        {/* Quick jump links */}
        <nav aria-label="On this page" className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">On this page:</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-green-700 dark:text-green-400">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a className="hover:underline" href={`#${s.id}`}>
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {section.heading}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-5">{section.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 dark:text-green-400 hover:underline focus:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Disclaimer */}
        <div className="bg-green-50 dark:bg-gray-900 border-l-4 border-green-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            A note on external sites
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            The inclusion of a link does not constitute endorsement by the Embassy. Once you follow
            an external link, the privacy policy and terms of use of that site will apply. If any
            of the links on this page are broken or outdated, please let us know via the{' '}
            <a href="/contact" className="text-green-700 dark:text-green-400 hover:underline font-semibold">
              Contact page
            </a>
            .
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
