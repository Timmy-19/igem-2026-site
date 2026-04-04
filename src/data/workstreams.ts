export type WorkstreamStatus = 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
export type TrackType = 'Wetlab' | 'Drylab' | 'HP';

export interface Workstream {
  id: string;
  name: string;
  track: TrackType;
  status: WorkstreamStatus;
  owners: string[]; // Team member names
  description?: string;
  createdAt: string;
}

export const workstreams: Workstream[] = [
  // WETLAB WORKSTREAMS
  {
    id: 'biosecurity-circuit',
    name: 'Biosecurity Circuit',
    track: 'Wetlab',
    status: 'Assigning',
    owners: [],
    description: 'Development of biosecurity circuit for plant protection system',
    createdAt: '2026-03-01',
  },
  {
    id: 'stress-circuit',
    name: 'Stress Circuit',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    description: 'Engineering stress-response circuits in B. subtilis',
    createdAt: '2026-03-01',
  },
  {
    id: 'model-establishing',
    name: 'Model Establishing',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    description: 'Establishing baseline plant stress models and characterization',
    createdAt: '2026-03-01',
  },
  {
    id: 'protectant-development',
    name: 'Protectant Development',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    description: 'Development and testing of protective compounds',
    createdAt: '2026-03-01',
  },
  {
    id: 'integrated-system-validation',
    name: 'Integrated System Validation',
    track: 'Wetlab',
    status: 'Not Yet Filled',
    owners: [],
    description: 'Validation of complete integrated system in field conditions',
    createdAt: '2026-03-01',
  },

  // DRYLAB WORKSTREAMS
  {
    id: 'hydroponic-system-boxes',
    name: 'Hydroponic System Boxes',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Ethan Liu', 'Noah Tau'],
    description: 'Design and fabrication of hydroponic growing boxes',
    createdAt: '2026-03-01',
  },
  {
    id: 'soil-metrics-sensor-hardware',
    name: 'Soil Metrics Sensor Hardware',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Noah Tau'],
    description: 'Hardware development for soil moisture and nutrient sensors',
    createdAt: '2026-03-01',
  },
  {
    id: 'gene-circuit-logic-design',
    name: 'In Silico Gene Circuit Logic Design',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Jacquelyn', 'Felix Yu'],
    description: 'Computational design and simulation of gene circuits',
    createdAt: '2026-03-01',
  },
  {
    id: 'mathematical-model-plant',
    name: 'Mathematical Model of Plant Stress System',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Ethan Liu', 'Anna Chuang'],
    description: 'Development of predictive mathematical models for plant stress response',
    createdAt: '2026-03-01',
  },

  // HP WORKSTREAMS
  {
    id: 'business-plan',
    name: 'Business Plan',
    track: 'HP',
    status: 'Assigning',
    owners: [],
    description: 'Development of business model and commercialization strategy',
    createdAt: '2026-03-01',
  },
  {
    id: 'wiki-setup-documentation',
    name: 'Wiki Setup / Documentation Architecture',
    track: 'HP',
    status: 'In Progress',
    owners: [],
    description: 'Creation and organization of project documentation and wiki',
    createdAt: '2026-03-01',
  },
  {
    id: 'art-design-visual',
    name: 'Art Design / Visual Communication',
    track: 'HP',
    status: 'In Progress',
    owners: [],
    description: 'Visual branding, design, and communication materials',
    createdAt: '2026-03-01',
  },
  {
    id: 'stakeholder-implementation',
    name: 'Stakeholder / Implementation Framing',
    track: 'HP',
    status: 'Assigning',
    owners: [],
    description: 'Stakeholder engagement and implementation strategy development',
    createdAt: '2026-03-01',
  },
];

// Helper functions
export const getWorkstreamsByTrack = (track: TrackType): Workstream[] => {
  return workstreams.filter(ws => ws.track === track);
};

export const getWorkstreamsByStatus = (status: WorkstreamStatus): Workstream[] => {
  return workstreams.filter(ws => ws.status === status);
};

export const getWorkstreamByName = (name: string): Workstream | undefined => {
  return workstreams.find(ws => ws.name.toLowerCase() === name.toLowerCase());
};

export const getWorkstreamById = (id: string): Workstream | undefined => {
  return workstreams.find(ws => ws.id === id);
};

export const getWorkstreamsByOwner = (ownerName: string): Workstream[] => {
  return workstreams.filter(ws => ws.owners.some(o => o.toLowerCase() === ownerName.toLowerCase()));
};

export const getUnassignedWorkstreams = (): Workstream[] => {
  return workstreams.filter(ws => ws.owners.length === 0 || ws.status === 'Assigning' || ws.status === 'Not Yet Filled');
};
