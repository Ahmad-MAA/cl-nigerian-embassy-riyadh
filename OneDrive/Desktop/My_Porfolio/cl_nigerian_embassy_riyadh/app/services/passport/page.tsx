import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Passport Services',
  description:
    'Apply for or renew your Nigerian standard passport or e-passport at the Embassy in Riyadh — online application on the NIS portal, biometric appointment, documents and fees.',
  keywords: [
    'Nigerian passport',
    'passport renewal',
    'Nigerian e-passport',
    'passport application',
    'biometric appointment',
    'NIS portal',
    'Nigeria Immigration Service',
    'passport collection',
    'passport requirements',
  ],
  path: '/services/passport',
});

const REQUIREMENTS = [
  'Your current Nigerian passport (or the most recent expired one).',
  'A valid Saudi Iqama (residence permit) — original and one clear copy.',
  'A completed online application form from the Nigeria Immigration Service portal.',
  'Payment receipt for the passport fee, paid online before your appointment.',
  'Two recent passport-size photographs with a white background (for under-18 applicants).',
  'Birth certificate or sworn declaration of age (for first-time and minor applicants).',
  'Marriage certificate, where there has been a change of name.',
  'Letter of consent from both parents and copies of their passports (for minor applicants).',
  'Police report (if the previous passport has been lost or stolen).',
];

const STEPS = [
  {
    title: 'Create an account on the NIS portal',
    body: 'Go to the Nigeria Immigration Service e-passport portal and register for an account using a working email address.',
  },
  {
    title: 'Complete the application form',
    body: 'Choose Renewal (or New Application), fill in your details accurately, upload a digital passport photograph and pay the fee online.',
  },
  {
    title: 'Print the application slip',
    body: 'Print the acknowledgement slip and the payment receipt. You will need both at your Embassy appointment.',
  },
  {
    title: 'Book a biometric appointment',
    body: 'Book an appointment online for fingerprint and photograph capture at the Embassy in Riyadh. Walk-ins are not accepted.',
  },
  {
    title: 'Attend your appointment',
    body: 'Bring all original documents and copies. Biometric capture is mandatory and is done at the Embassy on the appointment date.',
  },
  {
    title: 'Collect your new passport',
    body: 'Standard processing takes 4–6 weeks. You will be notified by email or phone when your passport is ready for collection.',
  },
];

export default function PassportPage() {
  return (
    <MainLayout
      breadcrumbs={[
        { label: 'Services', href: '/services/visa' },
        { label: 'Passport' },
      ]}
      title="Passport Renewal"
      description="Apply for, renew or replace your Nigerian passport from Saudi Arabia."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Overview */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The Embassy issues and renews Nigerian standard passports and e-passports for citizens
            living or working in the Kingdom of Saudi Arabia. We recommend that you apply for
            renewal at least <strong>six months before</strong> your current passport expires, as
            many countries do not accept passports with less than six months of validity.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The full passport process is online — you complete the application and pay the fee
            through the Nigeria Immigration Service portal, then attend the Embassy in person for
            biometric capture and document verification.
          </p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Requirements
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Please bring the following original documents and a copy of each:
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
            Need help with your passport application?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have questions about your application, biometric appointment or document
            requirements, please contact the Passport Section:
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
                href="mailto:passport@nigerianembassyriyadh.gov.ng"
              >
                passport@nigerianembassyriyadh.gov.ng
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
