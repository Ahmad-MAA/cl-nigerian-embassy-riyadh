import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about Nigerian visas, passports and consular services at the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia.',
  keywords: [
    'FAQ',
    'frequently asked questions',
    'visa FAQ',
    'passport FAQ',
    'consular FAQ',
    'Embassy help',
  ],
  path: '/faq',
});

type Faq = { q: string; a: string };

const VISA_FAQS: Faq[] = [
  {
    q: 'Who can apply for a Nigerian visa at the Embassy in Riyadh?',
    a: 'Anyone legally resident in Saudi Arabia (with a valid Iqama) or holding a valid Saudi visit visa may apply for a Nigerian visa here.',
  },
  {
    q: 'How do I start a visa application?',
    a: 'All visa applications begin online on the Nigeria Immigration Service portal. Once you have completed and paid online, you book an appointment to attend the Embassy in person.',
  },
  {
    q: 'How long does a visa take to process?',
    a: 'Standard processing is 2–5 working days from the date of your Embassy appointment, provided all documents are in order.',
  },
  {
    q: 'Do I need a Yellow Fever vaccination certificate?',
    a: 'Yes. Travellers to Nigeria must present a valid Yellow Fever vaccination certificate on arrival. The Embassy may request to see it during the visa interview.',
  },
  {
    q: 'Can the Embassy refund my visa fee?',
    a: 'Visa fees are paid to the Nigeria Immigration Service online and are non-refundable, even if the visa application is refused.',
  },
];

const PASSPORT_FAQS: Faq[] = [
  {
    q: 'How long does passport renewal take?',
    a: 'Standard processing is 4–6 weeks from the date your biometrics are captured at the Embassy. Expedited service is not currently available.',
  },
  {
    q: 'Do I need an appointment for biometric capture?',
    a: 'Yes. All passport biometric appointments must be booked online. Walk-ins are not accepted.',
  },
  {
    q: 'When should I renew my passport?',
    a: 'Apply at least six months before your current passport expires. Many countries (including Saudi Arabia for some visa categories) require at least six months of validity remaining.',
  },
  {
    q: 'Can I apply for a passport for my child born in Saudi Arabia?',
    a: 'Yes. Both parents must be present with original IDs and copies of their passports, the child\u2019s birth certificate, and two recent passport photographs of the child.',
  },
  {
    q: 'My passport was lost or stolen — what do I do?',
    a: 'File a police report immediately, then contact the Embassy. You may apply for a replacement passport or, if travel is urgent, an Emergency Travel Certificate.',
  },
];

const GENERAL_FAQS: Faq[] = [
  {
    q: 'What are the Embassy office hours?',
    a: 'The Embassy is open Sunday to Thursday, 09:00 – 16:00 (Riyadh time). The Embassy is closed on Friday, Saturday and on Nigerian and Saudi public holidays.',
  },
  {
    q: 'Where is the Embassy located?',
    a: 'The Embassy is located in the Diplomatic Quarter, Riyadh 11693, Kingdom of Saudi Arabia. Full directions are on the Contact page.',
  },
  {
    q: 'How can I contact the Embassy in an emergency?',
    a: 'For genuine emergencies (lost passport, medical emergency, distress), call the 24/7 hotline on +966 (0) 11 482 3000.',
  },
  {
    q: 'Does the Embassy provide legal advice?',
    a: 'The Embassy does not provide legal advice but can supply a list of recommended local lawyers and interpreters on request.',
  },
  {
    q: 'How do I authenticate a Nigerian document for use in Saudi Arabia?',
    a: 'Bring the original document and a copy to the Consular Section. The document must already be authenticated by the Nigerian Ministry of Foreign Affairs in Abuja before the Embassy can attest it for use abroad.',
  },
];

function FaqList({ items }: { items: Faq[] }) {
  return (
    <ul className="space-y-3">
      {items.map((f) => (
        <li
          key={f.q}
          className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
        >
          <details className="group">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-semibold text-gray-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded-lg">
              <span>{f.q}</span>
              <svg
                className="w-5 h-5 flex-shrink-0 text-green-700 dark:text-green-400 group-open:rotate-180"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-5 pb-5 text-gray-700 dark:text-gray-300 leading-relaxed">{f.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export default function FaqPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'FAQ' }]}
      title="Frequently Asked Questions"
      description="Answers to common questions about visas, passports and Embassy services."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Quick jump links */}
        <nav aria-label="On this page" className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">On this page:</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-green-700 dark:text-green-400">
            <li><a className="hover:underline" href="#visa">Visa questions</a></li>
            <li><a className="hover:underline" href="#passport">Passport questions</a></li>
            <li><a className="hover:underline" href="#general">General inquiries</a></li>
          </ul>
        </nav>

        <div id="visa" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Visa questions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Common questions about applying for a Nigerian visa from Saudi Arabia.
          </p>
          <FaqList items={VISA_FAQS} />
        </div>

        <div id="passport" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Passport questions
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Information on Nigerian passport renewal, replacement and biometric capture.
          </p>
          <FaqList items={PASSPORT_FAQS} />
        </div>

        <div id="general" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            General inquiries
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            Office hours, location, emergencies and other consular matters.
          </p>
          <FaqList items={GENERAL_FAQS} />
        </div>

        {/* Still need help? */}
        <div className="bg-green-50 dark:bg-gray-900 border-l-4 border-green-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Still need help?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If your question is not answered above, please get in touch — we are happy to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            Contact the Embassy
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
