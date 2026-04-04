import React, { useMemo, useState } from 'react';
import {
  PageHeader,
  SectionHeader,
} from '../components';
import type { ResourceCategory } from '../data/resources';
import { resources, getResourcesByCategory } from '../data/resources';

interface ResourceCardProps {
  title: string;
  description: string;
  format: string;
  trackType?: string;
  lastUpdated: string;
  accessLevel: string;
  url?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  format,
  trackType,
  lastUpdated,
  accessLevel,
  url,
}) => {
  const formatColor = {
    'PDF': 'bg-red-50 text-red-700 border-red-200',
    'Google Doc': 'bg-blue-50 text-blue-700 border-blue-200',
    'Spreadsheet': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Wiki': 'bg-purple-50 text-purple-700 border-purple-200',
    'Link': 'bg-amber-50 text-amber-700 border-amber-200',
    'Video': 'bg-pink-50 text-pink-700 border-pink-200',
  }[format] || 'bg-slate-50 text-slate-700 border-slate-200';

  const accessColor = {
    'Public': 'text-emerald-600',
    'Team': 'text-blue-600',
    'Lead Only': 'text-amber-600',
  }[accessLevel] || 'text-slate-600';

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${formatColor}`}>
          {format}
        </span>
        {trackType && trackType !== 'General' && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
            {trackType}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-slate-500">
            Updated: {new Date(lastUpdated).toLocaleDateString()}
          </p>
          <p className={`text-xs font-medium ${accessColor}`}>
            {accessLevel} Access
          </p>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
          >
            Access
            <span className="text-sm">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'All'>('All');
  const [selectedTrack, setSelectedTrack] = useState<string>('All');

  // Get all unique categories
  const categories: ResourceCategory[] = [
    'Onboarding',
    'Meeting Materials',
    'Protocols',
    'Reading List',
    'Templates',
    'Glossary',
  ];

  const tracks = ['All', 'General', 'Wetlab', 'Drylab', 'HP'];

  // Filter resources
  const filteredResources = useMemo(() => {
    let filtered = resources;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (selectedTrack !== 'All') {
      filtered = filtered.filter(r => r.trackType === selectedTrack || r.trackType === 'General');
    }

    return filtered;
  }, [selectedCategory, selectedTrack]);

  // Count resources by category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat] = getResourcesByCategory(cat).length;
    });
    return counts;
  }, []);

  return (
    <div>
      <PageHeader
        title="Resources"
        subtitle="Project documentation, protocols, and reference materials"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-12">
          <SectionHeader
            title="Project Knowledge Base"
            description="Comprehensive collection of materials organized by resource type and project track. Explore onboarding materials, meeting documentation, experimental protocols, research papers, templates, and technical references."
          />
        </section>

        {/* Filters */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">
                Filter by Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                    selectedCategory === 'All'
                      ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  All Resources
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium flex justify-between items-center ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-xs font-semibold bg-slate-200 rounded-full px-2.5 py-0.5 text-slate-700">
                      {categoryCounts[category] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Track Filter */}
            <div>
              <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">
                Filter by Track
              </h3>
              <div className="space-y-2">
                {tracks.map((track) => (
                  <button
                    key={track}
                    onClick={() => setSelectedTrack(track)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                      selectedTrack === track
                        ? 'bg-emerald-100 text-emerald-700 border-l-4 border-emerald-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {track === 'All' ? 'All Tracks' : track}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              {filteredResources.length} Resource{filteredResources.length !== 1 ? 's' : ''}
            </h3>
            {(selectedCategory !== 'All' || selectedTrack !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTrack('All');
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  format={resource.format}
                  trackType={resource.trackType}
                  lastUpdated={resource.lastUpdated}
                  accessLevel={resource.accessLevel}
                  url={resource.url}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-600 font-medium mb-2">No resources found</p>
              <p className="text-sm text-slate-500">
                Try adjusting your filter selections
              </p>
            </div>
          )}
        </section>

        {/* Legend */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wide">
            Resource Format Guide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['PDF', 'Google Doc', 'Spreadsheet', 'Wiki', 'Link', 'Video'].map((format) => (
              <div key={format} className="text-center">
                <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full border mb-2 ${
                  {
                    'PDF': 'bg-red-50 text-red-700 border-red-200',
                    'Google Doc': 'bg-blue-50 text-blue-700 border-blue-200',
                    'Spreadsheet': 'bg-emerald-50 text-emerald-700 border-emerald-200',
                    'Wiki': 'bg-purple-50 text-purple-700 border-purple-200',
                    'Link': 'bg-amber-50 text-amber-700 border-amber-200',
                    'Video': 'bg-pink-50 text-pink-700 border-pink-200',
                  }[format]
                }`}>
                  {format}
                </div>
                <p className="text-xs text-slate-500 mt-1">{format}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
