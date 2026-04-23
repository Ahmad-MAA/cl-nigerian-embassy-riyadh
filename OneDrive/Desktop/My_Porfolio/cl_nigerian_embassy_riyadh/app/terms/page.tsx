import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Terms of Use',
  description:
    'Terms and conditions for using the official website of the Embassy of the Federal Republic of Nigeria, Riyadh — website usage, disclaimer, external links policy and liability limitations.',
  keywords: [
    'terms of use',
    'terms and conditions',
    'website usage',
    'disclaimer',
    'external links policy',
    'liability limitation',
    'intellectual property',
    'governing law',
  ],
  path: '/terms',
});

export default function TermsPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Terms of Use' }]}
      title="Terms of Use"
      description="Conditions governing your use of this website."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: April 2026</p>

        {/* Intro */}
        <div>
          <p className="text-lg">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the
            official website of the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi
            Arabia (&ldquo;the Embassy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By visiting
            or using the website, you agree to these Terms. If you do not agree, please do not
            use the website.
          </p>
        </div>

        {/* Quick jump links */}
        <nav aria-label="On this page" className="text-sm">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">On this page:</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-green-700 dark:text-green-400">
            <li><a className="hover:underline" href="#website-usage">Website usage</a></li>
            <li><a className="hover:underline" href="#disclaimer">Disclaimer</a></li>
            <li><a className="hover:underline" href="#external-links">External links policy</a></li>
            <li><a className="hover:underline" href="#liability">Liability limitations</a></li>
          </ul>
        </nav>

        {/* 1. Website usage */}
        <div id="website-usage" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            1. Website usage
          </h2>
          <p className="mb-4">
            This website is provided for public information and to help Nigerian citizens,
            visitors and partners access consular services offered by the Embassy. You may use
            the website for lawful, personal and non-commercial purposes, subject to the
            following conditions.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Permitted use
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>
              Browsing and reading the information, news, forms and guidance published on the
              site.
            </li>
            <li>
              Downloading or printing individual pages for your personal reference, provided
              that all copyright and other proprietary notices are kept intact.
            </li>
            <li>
              Sharing links to public pages of this website on social media, in emails or in
              other websites, provided the context is not misleading.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Prohibited use
          </h3>
          <p className="mb-3">You must not:</p>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>
              Use the website for any unlawful, fraudulent or deceptive purpose, including
              impersonating another person or submitting false information on any form.
            </li>
            <li>
              Reproduce, adapt, sell or otherwise commercially exploit any content, images or
              official emblems (including the Coat of Arms of the Federal Republic of Nigeria)
              without the prior written permission of the Embassy.
            </li>
            <li>
              Attempt to gain unauthorised access to the website, its servers or any connected
              systems, or interfere with their normal operation (for example, through denial-
              of-service attempts, vulnerability scanning or the use of automated scrapers).
            </li>
            <li>
              Upload or transmit any virus, malicious code or any content that is unlawful,
              defamatory, obscene or likely to cause offence.
            </li>
            <li>
              Frame, mirror or otherwise copy any part of the website so as to suggest an
              association, endorsement or affiliation that does not exist.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Content and intellectual property
          </h3>
          <p>
            All content on this website — text, graphics, photographs, videos, logos, official
            emblems and downloadable documents — is the property of the Embassy of the Federal
            Republic of Nigeria or its licensors and is protected by applicable copyright and
            trademark laws. Nothing in these Terms transfers any intellectual-property rights to
            you.
          </p>
        </div>

        {/* 2. Disclaimer */}
        <div id="disclaimer" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            2. Disclaimer
          </h2>
          <p className="mb-4">
            The Embassy takes reasonable care to keep the information on this website accurate
            and up to date. However, the website is provided on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis, without warranties of any kind, whether express
            or implied.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Information about fees, processing times, documentary requirements and opening
              hours may change without notice. Always confirm critical details directly with the
              consular section before acting on them.
            </li>
            <li>
              Any forms, guidance notes or checklists are provided for general information only
              and do not constitute legal, immigration or other professional advice.
            </li>
            <li>
              The Embassy does not warrant that the website will be available without
              interruption, free of errors, or free from viruses or other harmful components.
            </li>
            <li>
              Translations, where provided, are offered as a convenience; the English version of
              this website is the authoritative version in case of any discrepancy.
            </li>
          </ul>
          <p>
            If you need formal confirmation of any consular matter, please contact the Embassy
            directly through the{' '}
            <Link href="/contact" className="text-green-700 dark:text-green-400 hover:underline font-semibold">
              Contact page
            </Link>
            .
          </p>
        </div>

        {/* 3. External links policy */}
        <div id="external-links" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            3. External links policy
          </h2>
          <p className="mb-4">
            This website may contain links to websites operated by other government agencies,
            international organisations, partner institutions or third parties. These links are
            provided only for your convenience and information.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Our position on external sites
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-5">
            <li>
              The inclusion of a link does not constitute endorsement of the linked site or of
              any opinions, products or services offered there.
            </li>
            <li>
              The Embassy has no control over the content, security or availability of external
              sites, and is not responsible for any loss or damage that may arise from your use
              of them.
            </li>
            <li>
              Once you follow an external link, the privacy policy and terms of use of that
              site will apply. We encourage you to read them before submitting any personal
              information.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Links to this website
          </h3>
          <p>
            You may link to the public pages of this website provided that you do so in a way
            that is fair, lawful and does not suggest any form of association, approval or
            endorsement by the Embassy where none exists. The Embassy reserves the right to
            withdraw linking permission without notice.
          </p>
        </div>

        {/* 4. Liability limitations */}
        <div id="liability" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            4. Liability limitations
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, the Embassy, its officers, employees and
            agents shall not be liable for any loss or damage — whether direct, indirect,
            incidental, special or consequential — arising out of or in connection with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your use of, or inability to use, this website.</li>
            <li>
              Any reliance you place on information published on the website, including any
              errors, omissions or delays in that information.
            </li>
            <li>
              Any interruption, suspension or termination of all or part of the website, whether
              planned or unplanned.
            </li>
            <li>
              Any loss of data, loss of profits, or loss of business opportunity resulting from
              use of the website.
            </li>
            <li>
              Any harm caused by viruses, malware or other technically harmful material that
              may infect your computer or mobile device as a result of accessing or downloading
              material from the website.
            </li>
            <li>
              Acts or omissions of any third-party website, service provider or linked platform.
            </li>
          </ul>
          <p className="mb-4">
            Nothing in these Terms excludes or limits liability that cannot be excluded or
            limited under the laws of the Federal Republic of Nigeria or the Kingdom of Saudi
            Arabia.
          </p>
          <p>
            You agree to indemnify and hold the Embassy harmless from any claim, demand or
            damage, including reasonable legal fees, arising from your breach of these Terms or
            your misuse of the website.
          </p>
        </div>

        {/* Governing law & changes */}
        <div className="bg-green-50 dark:bg-gray-900 border-l-4 border-green-700 rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Governing law and changes
          </h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria, with due
            regard to the host-country laws of the Kingdom of Saudi Arabia. The competent
            Nigerian courts shall have exclusive jurisdiction over any dispute arising out of
            or in connection with these Terms, subject to any immunities enjoyed by the Embassy
            under international law.
          </p>
          <p>
            We may update these Terms from time to time to reflect changes in the law or in the
            way the website operates. The &ldquo;Last updated&rdquo; date at the top of this
            page shows when the Terms were last revised. Continued use of the website after any
            update means you accept the revised Terms. For questions, please contact us via the{' '}
            <Link href="/contact" className="text-green-700 dark:text-green-400 hover:underline font-semibold">
              Contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
