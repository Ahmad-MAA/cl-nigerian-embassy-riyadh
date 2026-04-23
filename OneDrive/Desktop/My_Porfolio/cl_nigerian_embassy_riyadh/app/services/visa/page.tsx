import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Visa Services',
  description:
    'Apply for a Nigerian visa from Saudi Arabia — tourist, business, transit and diplomatic visas. Requirements, step-by-step application process and Visa Section contact details.',
  keywords: [
    'Nigerian visa',
    'Nigeria visa application',
    'tourist visa Nigeria',
    'business visa Nigeria',
    'transit visa Nigeria',
    'diplomatic visa Nigeria',
    'Nigeria visa requirements',
    'Nigeria Immigration Service',
    'visa fees',
    'visa processing time',
  ],
  path: '/services/visa',
});

const VISA_TYPES = [
  { name: 'Tourist Visa', desc: 'For visitors travelling to Nigeria for leisure or to see family.' },
  { name: 'Business Visa', desc: 'For meetings, conferences and short-term business travel.' },
  { name: 'Transit Visa', desc: 'For travellers passing through Nigeria on the way to another country.' },
  { name: 'Diplomatic / Official Visa', desc: 'For accredited officials on government assignment.' },
];

const REQUIREMENTS = [
  'A passport that is valid for at least 6 months and has 2 blank pages.',
  'A completed online visa application form (with the printed acknowledgement slip).',
  'Two recent passport-size photographs with a white background.',
  'Proof of legal residence in Saudi Arabia (a valid Iqama or visit visa).',
  'A return or onward flight booking.',
  'Proof of accommodation in Nigeria (hotel reservation or letter of invitation).',
  'Bank statement for the last 3 months showing sufficient funds.',
  'Yellow Fever vaccination certificate.',
  'A letter of invitation from a Nigerian host or company, where applicable.',
  'Receipt for the visa fee paid online.',
];

const STEPS = [
  {
    title: 'Start your application online',
    body: 'Visit the Nigeria Immigration Service portal, choose the correct visa type, complete the form and pay the fee.',
  },
  {
    title: 'Print your acknowledgement slip',
    body: 'After payment, print the acknowledgement slip and the payment receipt. You will need both at the Embassy.',
  },
  {
    title: 'Book an Embassy appointment',
    body: 'Schedule an appointment online for document submission and biometric capture in Riyadh.',
  },
  {
    title: 'Submit your documents',
    body: 'Bring all required documents to the Embassy on the appointment date. Submissions are not accepted by post.',
  },
  {
    title: 'Collect your visa',
    body: 'Standard processing takes 2–5 working days. You will be contacted when your passport is ready for collection.',
  },
];

export default function VisaPage() {
  return (
    <MainLayout
      breadcrumbs={[
        { label: 'Services', href: '/services/visa' },
        { label: 'Visa' },
      ]}
      title="Visa Services"
      description="Apply for a Nigerian visa from Saudi Arabia — requirements, steps and contact."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Overview */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Embassy issues Nigerian entry visas to non-Nigerian nationals living in or visiting
            the Kingdom of Saudi Arabia. All visa applications start online through the Nigeria
            Immigration Service portal; the Embassy completes the in-person verification step.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We offer the following visa categories:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {VISA_TYPES.map((v) => (
              <li
                key={v.name}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {v.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{v.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Requirements
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Please bring the following with you to your Embassy appointment:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {REQUIREMENTS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Application Steps */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Application Steps
          </h2>
          <ol className="space-y-4">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-900"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Step {i + 1}: {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Contact for help */}
        <div className="bg-green-50 dark:bg-gray-900 border-l-4 border-green-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Need help with your visa application?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have questions about visa categories, fees or document requirements, please
            contact the Visa Section:
          </p>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>
              <strong>Phone:</strong>{' '}
              <a className="text-green-700 dark:text-green-400 hover:underline" href="tel:+966114823000">
                +966 (0) 11 482 3000
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a
                className="text-green-700 dark:text-green-400 hover:underline"
                href="mailto:visa@nigerianembassyriyadh.gov.ng"
              >
                visa@nigerianembassyriyadh.gov.ng
              </a>
            </li>
            <li>
              <strong>Office hours:</strong> Sunday – Thursday, 09:00 – 16:00 (Riyadh time)
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex px-5 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          >
            Visit the Contact page
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
