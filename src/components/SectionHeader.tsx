import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="mb-8">
      <div className="mb-2">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="text-lg text-blue-600 font-semibold mt-1">{subtitle}</p>
        )}
      </div>
      {description && (
        <p className="text-base text-slate-600 mt-4 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
