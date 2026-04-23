import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How the Embassy of the Federal Republic of Nigeria, Riyadh collects, uses, secures and shares personal information, and the rights you have over your data.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'data collection',
    'data security',
    'user rights',
    'Nigerian Data Protection Commission',
    'cookies',
  ],
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Privacy Policy' }]}
      title="Privacy Policy"
      description="How the Embassy collects, uses and protects your personal information."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: April 2026</p>

        {/* Intro */}
        <div>
          <p className="text-lg">
            The Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia (&ldquo;the
            Embassy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
            policy explains what personal information we collect when you use this website or
            apply for our consular services, how we use and protect it, and the rights you have
            over your own data.
          </p>
        </div>

        {/* Quick jump links */}
        <nav aria-label="On this page" className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">On this page:</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-green-700 dark:text-green-400">
            <li><a className="hover:underline" href="#data-collection">Data collection</a></li>
            <li><a className="hover:underline" href="#usage">Usage</a></li>
            <li><a className="hover:underline" href="#security">Security</a></li>
            <li><a className="hover:underline" href="#your-rights">Your rights</a></li>
          </ul>
        </nav>

        {/* 1. Data Collection */}
        <div id="data-collection" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            1. Data collection
          </h2>
          <p className="mb-4">
            We only collect personal information that is necessary to provide consular services,
            respond to your enquiries and keep the website safe. We collect data in two ways:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Information you give us
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>
              <strong>Identity data</strong> — full name, date of birth, nationality, gender, and
              passport or national identification number.
            </li>
            <li>
              <strong>Contact data</strong> — postal address, email address, and phone number.
            </li>
            <li>
              <strong>Residency data</strong> — Saudi Iqama (residence permit) number, visa
              details and proof of legal status in the Kingdom.
            </li>
            <li>
              <strong>Application data</strong> — supporting documents such as birth
              certificates, marriage certificates, police reports, photographs and travel
              itineraries.
            </li>
            <li>
              <strong>Correspondence</strong> — messages you send us through the contact form,
              feedback form, phone or email.
            </li>
            <li>
              <strong>Payment data</strong> — the receipt and reference number of any fees paid
              online to the Nigeria Immigration Service. The Embassy does not store card numbers
              or bank details.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Information collected automatically
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Technical data</strong> — IP address, browser type and version, operating
              system, referring page and the date and time of your visit.
            </li>
            <li>
              <strong>Usage data</strong> — pages viewed, links clicked and approximate
              geographic region (country / city).
            </li>
            <li>
              <strong>Cookies</strong> — small files used only to keep the site working (for
              example, remembering that you have dismissed a notice). We do not use advertising
              or cross-site tracking cookies.
            </li>
          </ul>
        </div>

        {/* 2. Usage */}
        <div id="usage" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            2. Usage
          </h2>
          <p className="mb-4">
            We use your information only for purposes connected with the official work of the
            Embassy. Specifically, we use your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>Receive, verify and process visa, passport and consular applications.</li>
            <li>Verify your identity and your eligibility for the service requested.</li>
            <li>
              Communicate with you about your application — for example, requesting additional
              documents or letting you know when your passport is ready for collection.
            </li>
            <li>
              Respond to enquiries, feedback and complaints submitted through the website, phone
              or email.
            </li>
            <li>Assist Nigerian citizens in emergencies and with welfare matters.</li>
            <li>
              Meet legal and reporting obligations under the laws of the Federal Republic of
              Nigeria and, where applicable, the Kingdom of Saudi Arabia.
            </li>
            <li>
              Monitor and improve the security, performance and accessibility of this website.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Sharing of information
          </h3>
          <p className="mb-3">
            We do not sell personal information. Data may be shared, strictly on a
            need-to-know basis, with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Federal Ministry of Foreign Affairs of Nigeria and other Nigerian diplomatic
              missions.
            </li>
            <li>The Nigeria Immigration Service, for passport and visa processing.</li>
            <li>
              Authorised Saudi Arabian authorities, where sharing is required by Saudi law or by
              a legal assistance request.
            </li>
            <li>
              Service providers who host or maintain this website under written confidentiality
              agreements.
            </li>
          </ul>
        </div>

        {/* 3. Security */}
        <div id="security" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            3. Security
          </h2>
          <p className="mb-4">
            We take the protection of your personal information seriously and use reasonable
            technical, physical and organisational measures to prevent unauthorised access, loss
            or disclosure. These measures include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Encryption in transit</strong> — the website is served over HTTPS so data
              sent between your browser and the Embassy is encrypted.
            </li>
            <li>
              <strong>Access control</strong> — personal data is accessible only to authorised
              Embassy staff who need it to perform their duties.
            </li>
            <li>
              <strong>Secure storage</strong> — paper documents are kept in locked files and
              electronic records are stored on protected servers with backup and audit logs.
            </li>
            <li>
              <strong>Retention limits</strong> — we keep your data only for as long as it is
              needed for the service requested or as required by Nigerian record-keeping law.
            </li>
            <li>
              <strong>Staff training</strong> — Embassy staff receive regular briefings on
              confidentiality and data-handling obligations.
            </li>
          </ul>
          <p>
            No method of transmission over the internet is completely secure. If you become
            aware of a possible breach of your data, please contact the Embassy immediately using
            the details on the{' '}
            <Link
              href="/contact"
              className="text-green-700 dark:text-green-400 hover:underline font-semibold"
            >
              Contact page
            </Link>
            .
          </p>
        </div>

        {/* 4. User Rights */}
        <div id="your-rights" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            4. Your rights
          </h2>
          <p className="mb-4">
            You have the following rights in relation to your personal information held by the
            Embassy. To exercise any of them, contact us in writing — by email or by post — and
            allow up to <strong>30 days</strong> for a response.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>
              <strong>Right of access</strong> — request a copy of the personal information we
              hold about you.
            </li>
            <li>
              <strong>Right to correction</strong> — ask us to correct information that is
              inaccurate or out of date.
            </li>
            <li>
              <strong>Right to deletion</strong> — ask us to delete your personal information,
              unless we are required to retain it by law (for example, passport records).
            </li>
            <li>
              <strong>Right to restriction</strong> — ask us to limit how your data is used while
              a query or dispute is resolved.
            </li>
            <li>
              <strong>Right to withdraw consent</strong> — where processing is based on your
              consent, you may withdraw it at any time; this will not affect the lawfulness of
              processing carried out before you withdrew consent.
            </li>
            <li>
              <strong>Right to lodge a complaint</strong> — if you are not satisfied with how
              your request has been handled, you may escalate the matter to the Nigerian Data
              Protection Commission.
            </li>
          </ul>
          <p>
            To make a request, or if you have any question about this policy, please contact the
            Embassy through the{' '}
            <Link
              href="/contact"
              className="text-green-700 dark:text-green-400 hover:underline font-semibold"
            >
              Contact page
            </Link>
            .
          </p>
        </div>

        {/* Changes */}
        <div className="bg-green-50 dark:bg-gray-900 border-l-4 border-green-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time to reflect changes in the law or in the
            way we provide services. The &ldquo;Last updated&rdquo; date at the top of this page
            shows when the policy was last revised. Material changes will also be announced on
            the{' '}
            <Link href="/news" className="text-green-700 dark:text-green-400 hover:underline font-semibold">
              News
            </Link>{' '}
            page.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
