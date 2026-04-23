import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  title?: string;
  description?: string;
}

export default function MainLayout({
  children,
  breadcrumbs,
  title,
  description,
}: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb Navigation (Optional) */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="text-green-700 dark:text-green-400 hover:underline text-sm font-medium">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-green-700 dark:text-green-400 hover:underline text-sm font-medium">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Page Title & Description (Optional) */}
      {(title || description) && (
        <div className="bg-green-50 dark:bg-gray-900 border-b border-green-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {title && (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}
