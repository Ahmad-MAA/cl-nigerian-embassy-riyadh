import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'News & Announcements',
  description:
    'Latest news, press releases and official announcements from the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia.',
  keywords: [
    'Embassy news',
    'Nigeria announcements',
    'press release',
    'consular announcement',
    'Independence Day reception',
  ],
  path: '/news',
});

const NEWS = [
  {
    title: 'Embassy Resumes Full Consular Operations',
    date: 'April 2026',
    summary:
      'The Embassy has resumed full passport and visa services following the seasonal break.',
  },
  {
    title: 'Annual Independence Day Reception Announced',
    date: 'March 2026',
    summary:
      'Nigerians in the Kingdom are invited to the 2026 Independence Day reception in Riyadh.',
  },
  {
    title: 'Notice on E-Passport Renewals',
    date: 'February 2026',
    summary:
      'New booking system for biometric capture goes live this month — please book in advance.',
  },
];

export default function NewsPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'News' }]}
      title="News & Announcements"
      description="Press releases and updates from the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia."
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ul className="space-y-6">
          {NEWS.map((n) => (
            <li
              key={n.title}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900"
            >
              <p className="text-sm text-green-700 dark:text-green-400 font-semibold">{n.date}</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                {n.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{n.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}
