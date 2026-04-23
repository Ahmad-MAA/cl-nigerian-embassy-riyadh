import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Emergency Travel',
  description:
    'Apply for an Emergency Travel Certificate (ETC) from the Embassy in Riyadh — a one-way travel document for Nigerian citizens who must return urgently to Nigeria.',
  keywords: [
    'Emergency Travel Certificate',
    'ETC Nigeria',
    'emergency passport',
    'lost Nigerian passport',
    'stolen passport Saudi Arabia',
    'urgent return to Nigeria',
    'Embassy hotline',
    'police report',
  ],
  path: '/services/emergency-travel',
});

const REQUIREMENTS = [
  'A police report (if your passport has been lost or stolen).',
  'Proof of Nigerian citizenship — for example, an expired Nigerian passport, National Identification Number (NIN) slip or birth certificate.',
  'A copy of your valid Saudi Iqama or final exit visa from the Saudi authorities.',
  'Two recent passport-size photographs with a white background.',
  'A confirmed flight booking or travel itinerary to Nigeria.',
  'A short written statement explaining the reason for the emergency travel.',
  'Payment receipt for the ETC fee.',
];

const STEPS = [
  {
    title: 'Contact the Embassy immediately',
    body: 'Call or visit the Embassy as soon as possible. In genuine emergencies (medical, lost passport before a flight), come in person without waiting for an appointment.',
  },
  {
    title: 'File a police report (if needed)',
    body: 'If your passport has been lost or stolen, report it at the nearest Saudi police station and obtain an official report.',
  },
  {
    title: 'Complete the ETC application form',
    body: 'Pick up the application form at the Embassy or download it in advance. Fill it in clearly and attach all supporting documents.',
  },
  {
    title: 'Pay the ETC fee',
    body: 'Pay the prescribed fee at the Embassy and keep your receipt. The fee schedule is published at the Consular Section reception.',
  },
  {
    title: 'Verification and issuance',
    body: 'Embassy staff will verify your identity and Nigerian citizenship. Once confirmed, the Emergency Travel Certificate is issued the same day or within 24 hours.',
  },
  {
    title: 'Travel to Nigeria',
    body: 'The ETC is valid for one single journey to Nigeria only. On arrival, present it at Immigration. You should apply for a regular passport once back in Nigeria.',
  },
];

export default function EmergencyTravelPage() {
  return (
    <MainLayout
      breadcrumbs={[
        { label: 'Services', href: '/services/visa' },
        { label: 'Emergency Travel' },
      ]}
      title="Emergency Travel Certificate"
      description="A one-way travel document issued to Nigerian citizens who must return urgently to Nigeria."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Urgent banner */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
          <h2 className="text-lg font-bold text-red-800 dark:text-red-300 mb-1">
            In an emergency?
          </h2>
          <p className="text-red-700 dark:text-red-200">
            Call the Embassy 24/7 hotline:{' '}
            <a className="font-semibold underline" href="tel:+966114823000">
              +966 (0) 11 482 3000
            </a>
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            An Emergency Travel Certificate (ETC) is a temporary travel document issued by the
            Embassy to Nigerian citizens who need to return to Nigeria urgently and cannot wait
            for a regular passport to be processed.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The ETC is typically issued in cases such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>A lost, stolen or destroyed Nigerian passport.</li>
            <li>A passport that has expired before a confirmed travel date.</li>
            <li>Medical emergency or family bereavement requiring immediate return.</li>
            <li>Deportation or repatriation by Saudi authorities.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            The ETC allows <strong>one single journey to Nigeria only</strong>. It cannot be used
            to enter any other country.
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
            Need urgent help?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For Emergency Travel Certificate applications, please contact the Consular Section
            without delay:
          </p>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            <li>
              <strong>24/7 Hotline:</strong>{' '}
              <a className="text-green-700 dark:text-green-400 hover:underline" href="tel:+966114823000">
                +966 (0) 11 482 3000
              </a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a
                className="text-green-700 dark:text-green-400 hover:underline"
                href="mailto:consular@nigerianembassyriyadh.gov.ng"
              >
                consular@nigerianembassyriyadh.gov.ng
              </a>
            </li>
            <li>
              <strong>Office hours:</strong> Sunday – Thursday, 09:00 – 16:00 (Riyadh time). Out
              of hours, please use the hotline.
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
