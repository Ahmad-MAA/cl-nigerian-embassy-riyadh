export type Lang = 'en' | 'ar';

export const STORAGE_KEY = 'embassy-site-lang';
export const CHANGE_EVENT = 'embassy-site-lang-change';

type Dict = {
  header: {
    notice: string;
    embassyName: string;
    country: string;
    homeAria: string;
    searchLabel: string;
    searchPlaceholder: string;
  };
  nav: {
    primary: string;
    primaryMobile: string;
    mobileOpen: string;
    mobileClose: string;
    items: {
      home: string;
      about: string;
      services: string;
      visa: string;
      passport: string;
      emergencyTravel: string;
      news: string;
      contact: string;
      faq: string;
    };
  };
  footer: {
    embassyName: string;
    country: string;
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    address: string;
    hours: string;
    copyright: string;
    privacy: string;
    terms: string;
    sitemap: string;
    accessibility: string;
    usefulLinks: string;
  };
};

const en: Dict = {
  header: {
    notice:
      'Official Website of the Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia',
    embassyName: 'Embassy of the Federal Republic of Nigeria',
    country: 'Riyadh, Saudi Arabia',
    homeAria: 'Home — Embassy of the Federal Republic of Nigeria, Riyadh',
    searchLabel: 'Search the website',
    searchPlaceholder: 'Search the site…',
  },
  nav: {
    primary: 'Primary',
    primaryMobile: 'Primary mobile',
    mobileOpen: 'Open navigation menu',
    mobileClose: 'Close navigation menu',
    items: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      visa: 'Visa',
      passport: 'Passport',
      emergencyTravel: 'Emergency Travel',
      news: 'News',
      contact: 'Contact',
      faq: 'FAQ',
    },
  },
  footer: {
    embassyName: 'Embassy of the Federal Republic of Nigeria',
    country: 'Riyadh, Saudi Arabia',
    description:
      'The official website of the Embassy. For visa, passport and consular enquiries, please contact us directly.',
    quickLinks: 'Quick Links',
    services: 'Services',
    contact: 'Contact',
    address:
      'Abubakar Al-Razi Square, Abdullah bin Huzafah Al-Sahami Road, Diplomatic Quarters, Riyadh, Saudi Arabia',
    hours: 'Sun – Thu, 09:00 – 16:00 (Riyadh)',
    copyright:
      '© 2026 Embassy of the Federal Republic of Nigeria, Riyadh, Saudi Arabia. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    sitemap: 'Sitemap',
    accessibility: 'Accessibility',
    usefulLinks: 'Useful Links',
  },
};

const ar: Dict = {
  header: {
    notice:
      'الموقع الرسمي لسفارة جمهورية نيجيريا الاتحادية، الرياض، المملكة العربية السعودية',
    embassyName: 'سفارة جمهورية نيجيريا الاتحادية',
    country: 'الرياض، المملكة العربية السعودية',
    homeAria: 'الصفحة الرئيسية — سفارة جمهورية نيجيريا الاتحادية، الرياض',
    searchLabel: 'ابحث في الموقع',
    searchPlaceholder: 'ابحث في الموقع…',
  },
  nav: {
    primary: 'القائمة الرئيسية',
    primaryMobile: 'القائمة الرئيسية للجوال',
    mobileOpen: 'فتح قائمة التنقل',
    mobileClose: 'إغلاق قائمة التنقل',
    items: {
      home: 'الرئيسية',
      about: 'عن السفارة',
      services: 'الخدمات',
      visa: 'التأشيرة',
      passport: 'جواز السفر',
      emergencyTravel: 'وثيقة سفر طارئة',
      news: 'الأخبار',
      contact: 'اتصل بنا',
      faq: 'الأسئلة الشائعة',
    },
  },
  footer: {
    embassyName: 'سفارة جمهورية نيجيريا الاتحادية',
    country: 'الرياض، المملكة العربية السعودية',
    description:
      'الموقع الرسمي للسفارة. للاستفسارات المتعلقة بالتأشيرة وجواز السفر والخدمات القنصلية، يُرجى التواصل معنا مباشرة.',
    quickLinks: 'روابط سريعة',
    services: 'الخدمات',
    contact: 'اتصل بنا',
    address:
      'ساحة أبو بكر الرازي، طريق عبدالله بن حذافة السهمي، حي السفارات، الرياض، المملكة العربية السعودية',
    hours: 'الأحد – الخميس، 09:00 – 16:00 (توقيت الرياض)',
    copyright:
      '© 2026 سفارة جمهورية نيجيريا الاتحادية، الرياض، المملكة العربية السعودية. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    sitemap: 'خريطة الموقع',
    accessibility: 'إمكانية الوصول',
    usefulLinks: 'روابط مفيدة',
  },
};

export const TRANSLATIONS: Record<Lang, Dict> = { en, ar };
export type TranslationDict = Dict;
