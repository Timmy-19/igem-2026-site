import { useState } from 'react';

interface Resource {
  title: string;
  desc: string;
  type: string;
  updated: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  resources: Resource[];
}

const categories: Category[] = [
  { id: 'onboarding', label: 'Onboarding', icon: '📋', resources: [
    { title: 'Project Introduction Deck', desc: 'Overview of mission, team structure, and workstreams for new members', type: 'Slides', updated: 'Mar 2026' },
    { title: 'Team Orientation Guide', desc: 'Communication channels, meeting schedule, and expectations', type: 'Document', updated: 'Mar 2026' },
  ]},
  { id: 'protocols', label: 'Protocols', icon: '🔬', resources: [
    { title: 'Gene Cloning Protocol', desc: 'Standard procedure for gene cloning used across Wetlab workstreams', type: 'Protocol', updated: 'Mar 2026' },
    { title: 'B. subtilis Transformation', desc: 'Protocol for transforming B. subtilis chassis', type: 'Protocol', updated: 'Mar 2026' },
    { title: 'Stress Assay Standard', desc: 'Standardized stress assay for measuring plant stress indicators', type: 'Protocol', updated: 'Mar 2026' },
  ]},
  { id: 'reading', label: 'Reading List', icon: '📚', resources: [
    { title: 'Abiotic Stress Background', desc: 'Key papers on plant abiotic stress mechanisms and responses', type: 'Literature', updated: 'Mar 2026' },
    { title: 'Biosecurity Circuit References', desc: 'Foundational literature on kill switches and biosecurity systems', type: 'Literature', updated: 'Mar 2026' },
    { title: 'Trehalose Pathway Literature', desc: 'Review papers on trehalose biosynthesis as abiotic stress protectant', type: 'Literature', updated: 'Mar 2026' },
  ]},
  { id: 'templates', label: 'Templates', icon: '📄', resources: [
    { title: 'Weekly Update Template', desc: 'Structured template for weekly progress reports by workstream', type: 'Template', updated: 'Mar 2026' },
    { title: 'Milestone Review Sheet', desc: 'Template for documenting milestone completion and blockers', type: 'Template', updated: 'Mar 2026' },
    { title: 'Experiment Log Template', desc: 'Lab notebook template for wet lab experiments', type: 'Template', updated: 'Mar 2026' },
  ]},
  { id: 'meeting', label: 'Meeting Materials', icon: '📅', resources: [
    { title: 'Weekly Sync Agenda', desc: 'Standard agenda format for weekly all-hands sync', type: 'Template', updated: 'Mar 2026' },
    { title: 'Meeting Notes Archive', desc: 'Archive of all team meeting notes and decisions', type: 'Archive', updated: 'Apr 2026' },
  ]},
  { id: 'glossary', label: 'Glossary', icon: '📖', resources: [
    { title: 'Synthetic Biology Terms', desc: 'Definitions of key synbio concepts used in our project', type: 'Reference', updated: 'Mar 2026' },
    { title: 'Project-Specific Terminology', desc: 'Glossary of terms and abbreviations specific to this project', type: 'Reference', updated: 'Mar 2026' },
  ]},
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('onboarding');

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f2a05 0%, #2d6618 100%)' }} className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-6">
            Support
          </span>
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-white/80">Documentation, protocols, and shared materials</p>
        </div>
      </div>

      <section className="py-20 px-6" style={{ backgroundColor: '#f8faf5' }}>
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-slate-200 text-gray-700 hover:border-gray-400'
                }`}
              >
                <span className="mr-2">{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.resources.map((resource, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{resource.title}</h3>
                  <span className="text-xs font-semibold rounded-full px-2 py-1 ml-2 flex-shrink-0" style={{ background: '#779E45' + '20', color: '#779E45' }}>
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">{resource.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Updated {resource.updated}</span>
                  <button className="px-3 py-1 text-sm font-semibold rounded border border-gray-300 hover:bg-gray-50 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
