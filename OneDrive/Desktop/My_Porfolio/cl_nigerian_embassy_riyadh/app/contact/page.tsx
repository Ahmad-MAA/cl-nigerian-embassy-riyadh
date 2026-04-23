import ContactForm from '../components/ContactForm';
import FeedbackForm from '../components/FeedbackForm';
import MainLayout from '../components/MainLayout';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact the Embassy of the Federal Republic of Nigeria, Riyadh — address, telephone, email, office hours and online message and feedback forms.',
  keywords: [
    'contact Embassy',
    'Embassy address',
    'Embassy phone',
    'Embassy email',
    'Diplomatic Quarter Riyadh',
    'office hours',
    'feedback form',
  ],
  path: '/contact',
});

export default function ContactPage() {
  return (
    <MainLayout
      breadcrumbs={[{ label: 'Contact' }]}
      title="Contact the Embassy"
      description="Address, telephone, email, office hours and an online message form."
    >
      {/* Contact details + form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
        {/* Left: address + reach us */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Embassy Address
            </h2>
            <a
              href="https://maps.app.goo.gl/8PNucwrbJ4FRLYXh9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-700 dark:text-green-400 hover:underline focus:outline-none focus-visible:underline"
            >
              <address className="not-italic leading-relaxed">
                Embassy of the Federal Republic of Nigeria<br />
                Abubakar Al-Razi Square<br />
                Abdullah bin Huzafah Al-Sahami Road<br />
                Diplomatic Quarters<br />
                Riyadh, Saudi Arabia
              </address>
            </a>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Open in Google Maps &rarr;
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Office Hours</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Sunday – Thursday<br />
              09:00 – 16:00 (Riyadh time)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reach Us</h2>
            <dl className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex gap-2">
                <dt className="font-semibold">Phone:</dt>
                <dd>
                  <a className="text-green-700 dark:text-green-400 hover:underline" href="tel:+966114823000">
                    +966 (0) 11 482 3000
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">Email:</dt>
                <dd>
                  <a
                    className="text-green-700 dark:text-green-400 hover:underline break-all"
                    href="mailto:info@nigerianembassyriyadh.gov.ng"
                  >
                    info@nigerianembassyriyadh.gov.ng
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">Consular:</dt>
                <dd>
                  <a
                    className="text-green-700 dark:text-green-400 hover:underline break-all"
                    href="mailto:consular@nigerianembassyriyadh.gov.ng"
                  >
                    consular@nigerianembassyriyadh.gov.ng
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Use this form for general enquiries. We aim to reply within 3 working days.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Feedback section */}
      <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Share your feedback
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Tell us how we are doing — your feedback helps us improve our services.
          </p>
          <FeedbackForm />
        </div>
      </section>

      {/* Location map */}
      <section className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Find us on the map
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The Embassy is located in the Diplomatic Quarter of Riyadh. Click the map or the link
            below to open directions in Google Maps.
          </p>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <iframe
              title="Embassy of the Federal Republic of Nigeria, Riyadh — Google Map"
              src="https://maps.google.com/maps?q=Embassy%20of%20Nigeria%2C%20Diplomatic%20Quarter%2C%20Riyadh&hl=en&z=16&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0"
            />
          </div>
          <p className="mt-4 text-sm">
            <a
              href="https://maps.app.goo.gl/8PNucwrbJ4FRLYXh9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-400 hover:underline font-semibold"
            >
              Open larger map in Google Maps &rarr;
            </a>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
