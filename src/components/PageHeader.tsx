import React from 'react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border-b border-slate-200 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-6">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-4">
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-400">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <h1 className="text-4xl font-bold text-slate-900 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
