import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Accessibility',
  description:
    'Accessibility statement for the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia — our commitment to WCAG-compliant, inclusive digital services.',
  keywords: [
    'accessibility',
    'WCAG',
    'inclusive design',
    'screen reader',
    'assistive technology',
    'accessibility statement',
  ],
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Accessibility' }]}
      title="Accessibility Statement"
      description="Our commitment to making this website usable by everyone."
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: April 2026</p>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Commitment</h2>
          <p>
            The Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia is committed to ensuring digital accessibility for
            people of all abilities. We continuously improve the user experience for everyone and
            apply the relevant accessibility standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Conformance</h2>
          <p>
            This website aims to conform to the{' '}
            <a
              className="text-green-700 dark:text-green-400 hover:underline"
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
            </a>
            . These guidelines explain how to make web content more accessible to people with
            disabilities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Accessibility Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full keyboard navigation across menus, dropdowns and forms.</li>
            <li>Visible focus indicators on all interactive elements.</li>
            <li>Semantic HTML and ARIA landmarks for assistive technologies.</li>
            <li>Sufficient colour contrast in light and dark modes.</li>
            <li>Responsive layouts that scale to any viewport.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Feedback</h2>
          <p>
            If you encounter an accessibility barrier on this site, please let us know via the{' '}
            <a className="text-green-700 dark:text-green-400 hover:underline" href="/contact">
              Contact
            </a>{' '}
            page. We aim to respond to accessibility feedback within five working days.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
