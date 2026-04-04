export type ResourceCategory =
  | 'Onboarding'
  | 'Meeting Materials'
  | 'Protocols'
  | 'Reading List'
  | 'Templates'
  | 'Glossary';

export interface Resource {
  id: string;
  title: string;
  category: ResourceCategory;
  description: string;
  url?: string;
  format: 'PDF' | 'Google Doc' | 'Spreadsheet' | 'Wiki' | 'Link' | 'Video';
  trackType?: 'Wetlab' | 'Drylab' | 'HP' | 'General';
  lastUpdated: string;
  author: string;
  accessLevel: 'Public' | 'Team' | 'Lead Only';
}

export const resources: Resource[] = [
  // ONBOARDING RESOURCES
  {
    id: 'onboarding-101',
    title: 'iGEM 2026 Project Overview',
    category: 'Onboarding',
    description: 'High-level overview of the project goals, team structure, and success metrics',
    url: 'https://wiki.igem2026.example.com/project-overview',
    format: 'Wiki',
    trackType: 'General',
    lastUpdated: '2026-03-07',
    author: 'Sophia Lin',
    accessLevel: 'Public',
  },
  {
    id: 'onboarding-teams',
    title: 'Team Member Directory & Contact Info',
    category: 'Onboarding',
    description: 'Complete team roster with roles, contact information, and track affiliations',
    url: 'https://docs.google.com/spreadsheets/d/igem2026-team-directory',
    format: 'Spreadsheet',
    trackType: 'General',
    lastUpdated: '2026-03-05',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },
  {
    id: 'onboarding-wetlab-safety',
    title: 'Wetlab Safety Protocols & Guidelines',
    category: 'Onboarding',
    description: 'Essential safety information for all wetlab team members',
    url: 'https://wiki.igem2026.example.com/wetlab-safety',
    format: 'Wiki',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-01',
    author: 'Alex Li',
    accessLevel: 'Team',
  },
  {
    id: 'onboarding-drylab-tools',
    title: 'Drylab Software & Tools Setup Guide',
    category: 'Onboarding',
    description: 'Setup instructions for computational tools, CAD software, and simulation environments',
    url: 'https://wiki.igem2026.example.com/drylab-tools',
    format: 'Wiki',
    trackType: 'Drylab',
    lastUpdated: '2026-03-03',
    author: 'Anton Lin',
    accessLevel: 'Team',
  },

  // MEETING MATERIALS
  {
    id: 'meeting-week1-notes',
    title: 'Week 1 Kickoff Meeting Notes',
    category: 'Meeting Materials',
    description: 'Detailed notes from the project kickoff meeting including action items',
    url: 'https://docs.google.com/document/d/igem2026-week1-notes',
    format: 'Google Doc',
    trackType: 'General',
    lastUpdated: '2026-03-07',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },
  {
    id: 'meeting-wetlab-sync',
    title: 'Wetlab Weekly Sync Agenda Template',
    category: 'Meeting Materials',
    description: 'Standard agenda format for weekly wetlab team synchronization',
    url: 'https://docs.google.com/document/d/igem2026-wetlab-sync-template',
    format: 'Google Doc',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-10',
    author: 'Alex Li',
    accessLevel: 'Team',
  },
  {
    id: 'meeting-cross-track-sync',
    title: 'Cross-Track Synchronization Meeting Notes (Weekly)',
    category: 'Meeting Materials',
    description: 'Notes and action items from weekly cross-track alignment meetings',
    url: 'https://docs.google.com/document/d/igem2026-cross-sync-notes',
    format: 'Google Doc',
    trackType: 'General',
    lastUpdated: '2026-03-21',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },
  {
    id: 'meeting-hp-strategy',
    title: 'HP Team Strategy Session Slides',
    category: 'Meeting Materials',
    description: 'Presentation slides from HP strategy planning and stakeholder analysis session',
    url: 'https://docs.google.com/presentation/d/igem2026-hp-strategy',
    format: 'Google Doc',
    trackType: 'HP',
    lastUpdated: '2026-03-15',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },

  // PROTOCOLS
  {
    id: 'protocol-transformation',
    title: 'E. coli Chemical Competence & Transformation Protocol',
    category: 'Protocols',
    description: 'Step-by-step protocol for preparing competent cells and transformation',
    url: 'https://wiki.igem2026.example.com/protocols/transformation',
    format: 'Wiki',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-05',
    author: 'Alex Li',
    accessLevel: 'Team',
  },
  {
    id: 'protocol-culture',
    title: 'Organism Culture Maintenance & Characterization',
    category: 'Protocols',
    description: 'Standardized protocols for culturing B. subtilis and plant models',
    url: 'https://wiki.igem2026.example.com/protocols/culture',
    format: 'Wiki',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-08',
    author: 'Sara Chen',
    accessLevel: 'Team',
  },
  {
    id: 'protocol-stress-assay',
    title: 'Plant Stress Response Assay Protocol',
    category: 'Protocols',
    description: 'Methods for measuring drought and heat stress responses in plant models',
    url: 'https://wiki.igem2026.example.com/protocols/stress-assay',
    format: 'Wiki',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-12',
    author: 'Sara Chen',
    accessLevel: 'Team',
  },
  {
    id: 'protocol-cad-design',
    title: 'CAD Design Standards & Conventions',
    category: 'Protocols',
    description: 'Standardized conventions for hydroponic system and sensor hardware CAD models',
    url: 'https://wiki.igem2026.example.com/protocols/cad-design',
    format: 'Wiki',
    trackType: 'Drylab',
    lastUpdated: '2026-03-10',
    author: 'Anton Lin',
    accessLevel: 'Team',
  },
  {
    id: 'protocol-simulation',
    title: 'Gene Circuit Simulation Best Practices',
    category: 'Protocols',
    description: 'Methodology for setting up and validating computational gene circuit models',
    url: 'https://wiki.igem2026.example.com/protocols/simulation',
    format: 'Wiki',
    trackType: 'Drylab',
    lastUpdated: '2026-03-14',
    author: 'Jacquelyn',
    accessLevel: 'Team',
  },

  // READING LIST
  {
    id: 'reading-stress-pathways',
    title: 'Plant Stress Response Pathways - Literature Compilation',
    category: 'Reading List',
    description: 'Curated collection of key papers on plant drought and heat stress responses',
    url: 'https://docs.google.com/spreadsheet/d/igem2026-reading-stress',
    format: 'Spreadsheet',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-12',
    author: 'Sara Chen',
    accessLevel: 'Team',
  },
  {
    id: 'reading-synthetic-biology',
    title: 'Synthetic Biology & Gene Circuit Design Papers',
    category: 'Reading List',
    description: 'Foundational papers on synthetic gene circuits and metabolic engineering',
    url: 'https://docs.google.com/spreadsheet/d/igem2026-reading-synbio',
    format: 'Spreadsheet',
    trackType: 'Drylab',
    lastUpdated: '2026-03-10',
    author: 'Jacquelyn',
    accessLevel: 'Team',
  },
  {
    id: 'reading-sustainable-agriculture',
    title: 'Sustainable Agriculture & Market Analysis',
    category: 'Reading List',
    description: 'Papers and reports on agricultural innovation, market trends, and sustainability',
    url: 'https://docs.google.com/spreadsheet/d/igem2026-reading-agriculture',
    format: 'Spreadsheet',
    trackType: 'HP',
    lastUpdated: '2026-03-18',
    author: 'Sophia Lin',
    accessLevel: 'Public',
  },

  // TEMPLATES
  {
    id: 'template-experiment-log',
    title: 'Experiment Log Template',
    category: 'Templates',
    description: 'Standard template for documenting all wetlab experiments with date, methods, and results',
    url: 'https://docs.google.com/document/d/igem2026-exp-log-template',
    format: 'Google Doc',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-05',
    author: 'Alex Li',
    accessLevel: 'Team',
  },
  {
    id: 'template-design-review',
    title: 'Design Review Meeting Template',
    category: 'Templates',
    description: 'Template for conducting and documenting design reviews across all tracks',
    url: 'https://docs.google.com/document/d/igem2026-design-review-template',
    format: 'Google Doc',
    trackType: 'General',
    lastUpdated: '2026-03-10',
    author: 'Anton Lin',
    accessLevel: 'Team',
  },
  {
    id: 'template-weekly-report',
    title: 'Weekly Progress Report Template',
    category: 'Templates',
    description: 'Standardized template for team leads to provide weekly progress updates',
    url: 'https://docs.google.com/document/d/igem2026-weekly-report-template',
    format: 'Google Doc',
    trackType: 'General',
    lastUpdated: '2026-03-08',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },
  {
    id: 'template-stakeholder-interview',
    title: 'Stakeholder Interview Guide & Template',
    category: 'Templates',
    description: 'Guide for conducting and analyzing stakeholder interviews',
    url: 'https://docs.google.com/document/d/igem2026-interview-template',
    format: 'Google Doc',
    trackType: 'HP',
    lastUpdated: '2026-03-12',
    author: 'Sophia Lin',
    accessLevel: 'Team',
  },

  // GLOSSARY
  {
    id: 'glossary-technical',
    title: 'Technical Glossary - Key Terms & Definitions',
    category: 'Glossary',
    description: 'Definitions of technical terms used across all tracks',
    url: 'https://wiki.igem2026.example.com/glossary',
    format: 'Wiki',
    trackType: 'General',
    lastUpdated: '2026-03-14',
    author: 'Alex Li',
    accessLevel: 'Public',
  },
  {
    id: 'glossary-plant-biology',
    title: 'Plant Biology & Stress Physiology Glossary',
    category: 'Glossary',
    description: 'Definitions specific to plant biology, stress responses, and related pathways',
    url: 'https://wiki.igem2026.example.com/glossary/plant-biology',
    format: 'Wiki',
    trackType: 'Wetlab',
    lastUpdated: '2026-03-15',
    author: 'Sara Chen',
    accessLevel: 'Public',
  },
  {
    id: 'glossary-synthetic-circuits',
    title: 'Gene Circuit & Synthetic Biology Terms',
    category: 'Glossary',
    description: 'Definitions for synthetic biology, genetic engineering, and circuit design concepts',
    url: 'https://wiki.igem2026.example.com/glossary/synthetic-biology',
    format: 'Wiki',
    trackType: 'Drylab',
    lastUpdated: '2026-03-15',
    author: 'Jacquelyn',
    accessLevel: 'Public',
  },
];

// Helper functions
export const getResourcesByCategory = (category: ResourceCategory): Resource[] => {
  return resources.filter(resource => resource.category === category);
};

export const getResourcesByTrack = (trackType: 'Wetlab' | 'Drylab' | 'HP' | 'General'): Resource[] => {
  return resources.filter(resource => resource.trackType === trackType || resource.trackType === 'General');
};

export const getResourcesByFormat = (format: string): Resource[] => {
  return resources.filter(resource => resource.format === format);
};

export const getResourcesAccessibleTo = (accessLevel: 'Public' | 'Team' | 'Lead Only'): Resource[] => {
  const accessHierarchy = { Public: 3, Team: 2, 'Lead Only': 1 };
  return resources.filter(resource => accessHierarchy[resource.accessLevel] >= accessHierarchy[accessLevel]);
};

export const getResourcesByAuthor = (author: string): Resource[] => {
  return resources.filter(resource => resource.author.toLowerCase() === author.toLowerCase());
};

export const getRecentlyUpdated = (days: number = 7): Resource[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return resources
    .filter(resource => new Date(resource.lastUpdated) >= cutoffDate)
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
};

export const getCategoryBreakdown = (): { category: ResourceCategory; count: number }[] => {
  const categories: ResourceCategory[] = [
    'Onboarding',
    'Meeting Materials',
    'Protocols',
    'Reading List',
    'Templates',
    'Glossary',
  ];

  return categories.map(category => ({
    category,
    count: resources.filter(r => r.category === category).length,
  }));
};
