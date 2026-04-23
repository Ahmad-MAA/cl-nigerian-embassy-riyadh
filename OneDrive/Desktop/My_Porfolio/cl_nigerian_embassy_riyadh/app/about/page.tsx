import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'About the Embassy of the Federal Republic of Nigeria, Riyadh — our mission, roles and the Ambassador leading the mission to the Kingdom of Saudi Arabia.',
  keywords: [
    'about the Embassy',
    'Embassy mission',
    'Ambassador of Nigeria',
    'diplomatic relations',
    'Nigeria Saudi Arabia ties',
    'Embassy leadership',
  ],
  path: '/about',
});

const ROLES = [
  {
    title: 'Consular services',
    body: 'Issue and renew Nigerian passports, process visas, register births and marriages, and authenticate Nigerian documents.',
  },
  {
    title: 'Citizen welfare',
    body: 'Protect the welfare of Nigerians living, working or studying in Saudi Arabia, and assist in emergencies.',
  },
  {
    title: 'Diplomatic relations',
    body: 'Strengthen political, economic and cultural ties between Nigeria and the Kingdom of Saudi Arabia.',
  },
  {
    title: 'Trade and investment',
    body: 'Promote bilateral trade and investment opportunities between Nigerian and Saudi businesses.',
  },
  {
    title: 'Education and culture',
    body: 'Support Nigerian students and scholars in the Kingdom and showcase Nigerian arts, culture and heritage.',
  },
  {
    title: 'Hajj and Umrah affairs',
    body: 'Coordinate with Saudi authorities on matters relating to Nigerian pilgrims during Hajj and Umrah.',
  },
];

export default function AboutPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'About' }]}
      title="About the Embassy"
      description="Our mission, our work, and the leadership of the Embassy in Riyadh."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Mission */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Embassy of the Federal Republic of Nigeria in Riyadh is the official diplomatic
            mission of Nigeria to the Kingdom of Saudi Arabia. Our mission is to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>Represent and protect the interests of Nigeria and its citizens in the Kingdom.</li>
            <li>
              Provide timely, transparent and respectful consular services to Nigerians and to
              foreign nationals travelling to Nigeria.
            </li>
            <li>
              Promote friendly relations, cooperation and mutual understanding between Nigeria
              and Saudi Arabia.
            </li>
            <li>
              Encourage trade, investment, education and cultural exchange between the two
              countries.
            </li>
          </ul>
        </div>

        {/* Roles */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The Embassy carries out a wide range of duties on behalf of the Federal Government of
            Nigeria. Our main areas of work are:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {ROLES.map((r) => (
              <li
                key={r.title}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{r.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Ambassador */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Message from the Ambassador
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Portrait placeholder */}
            <div className="md:col-span-1">
              <div
                className="aspect-[3/4] rounded-md bg-green-100 dark:bg-gray-800 border border-green-200 dark:border-gray-700 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-24 h-24 text-green-700 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-bold text-gray-900 dark:text-white">[Ambassador&apos;s Name]</p>
                <p className="text-sm text-green-700 dark:text-green-400 font-semibold">
                  Ambassador Extraordinary and Plenipotentiary
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Federal Republic of Nigeria to the Kingdom of Saudi Arabia
                </p>
              </div>
            </div>

            {/* Welcome letter */}
            <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                On behalf of the Government and people of the Federal Republic of Nigeria, I warmly
                welcome you to the official website of our Embassy in Riyadh.
              </p>
              <p>
                This website has been designed to give you clear, up-to-date information about our
                consular services and how to access them. Whether you are a Nigerian citizen
                living in the Kingdom, a Saudi national planning a visit to Nigeria, or a friend
                of Nigeria from anywhere in the world, you are welcome here.
              </p>
              <p>
                The Embassy is committed to serving you with professionalism, courtesy and respect.
                If you cannot find what you need on this site, please do not hesitate to{' '}
                <Link
                  href="/contact"
                  className="text-green-700 dark:text-green-400 font-semibold hover:underline"
                >
                  contact us
                </Link>
                .
              </p>
              <p className="italic text-gray-600 dark:text-gray-400">
                — The Ambassador
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
