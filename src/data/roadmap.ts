export type RoadmapPhase = 'Planning' | 'Development' | 'Testing' | 'Refinement' | 'Validation';

export interface Milestone {
  id: string;
  name: string;
  phase: RoadmapPhase;
  startMonth: string; // e.g., "Mar", "Apr", "May"
  endMonth: string;
  completionPercentage: number;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

export interface RoadmapTrack {
  id: string;
  name: string;
  description: string;
  trackType: 'Wetlab' | 'Drylab' | 'HP';
  startDate: string;
  endDate: string;
  milestones: Milestone[];
  owner?: string;
}

export const roadmapTracks: RoadmapTrack[] = [
  // WETLAB TRACKS
  {
    id: 'biosecurity-circuit-track',
    name: 'Biosecurity Circuit',
    description: 'Development and validation of biosecurity circuit',
    trackType: 'Wetlab',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    milestones: [
      {
        id: 'biosec-1',
        name: 'Concept & Literature Review',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 45,
        status: 'In Progress',
      },
      {
        id: 'biosec-2',
        name: 'Cloning & Validation',
        phase: 'Development',
        startMonth: 'May',
        endMonth: 'Jun',
        completionPercentage: 0,
        status: 'Not Started',
      },
      {
        id: 'biosec-3',
        name: 'Fine-tuning & Assembly',
        phase: 'Refinement',
        startMonth: 'Jun',
        endMonth: 'Aug',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'stress-circuit-track',
    name: 'Stress Circuit',
    description: 'Engineering and deployment of stress-response circuits',
    trackType: 'Wetlab',
    startDate: '2026-03-01',
    endDate: '2026-06-30',
    milestones: [
      {
        id: 'stress-1',
        name: 'Literature Review & Gene Selection',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 30,
        status: 'In Progress',
      },
      {
        id: 'stress-2',
        name: 'Clone in E. coli',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'May',
        completionPercentage: 0,
        status: 'Not Started',
      },
      {
        id: 'stress-3',
        name: 'Transform to B. subtilis',
        phase: 'Testing',
        startMonth: 'May',
        endMonth: 'Jun',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'model-establishing-track',
    name: 'Model Establishing',
    description: 'Baseline organism culture and iterative model refinement',
    trackType: 'Wetlab',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    milestones: [
      {
        id: 'model-1',
        name: 'Culture Organisms Setup',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Mar',
        completionPercentage: 60,
        status: 'In Progress',
      },
      {
        id: 'model-2',
        name: 'Iterative Refinement Phase 1',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 15,
        status: 'In Progress',
      },
      {
        id: 'model-3',
        name: 'Iterative Refinement Phase 2',
        phase: 'Testing',
        startMonth: 'Jul',
        endMonth: 'Aug',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'protectant-development-track',
    name: 'Protectant Development',
    description: 'Evaluation, design, cloning, and refinement of protective compounds',
    trackType: 'Wetlab',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    milestones: [
      {
        id: 'prot-1',
        name: 'Evaluate Candidate Protectants',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 25,
        status: 'In Progress',
      },
      {
        id: 'prot-2',
        name: 'Design, Clone & Test',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 5,
        status: 'In Progress',
      },
      {
        id: 'prot-3',
        name: 'Refine & Optimize',
        phase: 'Refinement',
        startMonth: 'Jun',
        endMonth: 'Aug',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },

  // DRYLAB TRACKS
  {
    id: 'hydroponic-system-track',
    name: 'Hydroponic System Boxes',
    description: 'Design and fabrication of hydroponic growth systems',
    trackType: 'Drylab',
    startDate: '2026-03-01',
    endDate: '2026-07-31',
    owner: 'Anton Lin, Ethan Liu, Noah Tau',
    milestones: [
      {
        id: 'hydro-1',
        name: 'System Design & CAD Modeling',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 40,
        status: 'In Progress',
      },
      {
        id: 'hydro-2',
        name: 'Prototype Fabrication',
        phase: 'Development',
        startMonth: 'May',
        endMonth: 'Jun',
        completionPercentage: 0,
        status: 'Not Started',
      },
      {
        id: 'hydro-3',
        name: 'Testing & Optimization',
        phase: 'Testing',
        startMonth: 'Jun',
        endMonth: 'Jul',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'soil-metrics-track',
    name: 'Soil Metrics Sensor Hardware',
    description: 'Hardware development for environmental monitoring',
    trackType: 'Drylab',
    startDate: '2026-03-01',
    endDate: '2026-07-31',
    owner: 'Anton Lin, Noah Tau',
    milestones: [
      {
        id: 'soil-1',
        name: 'Sensor Selection & Specification',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 35,
        status: 'In Progress',
      },
      {
        id: 'soil-2',
        name: 'PCB & Electronics Design',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 10,
        status: 'In Progress',
      },
      {
        id: 'soil-3',
        name: 'Integration & Calibration',
        phase: 'Testing',
        startMonth: 'Jun',
        endMonth: 'Jul',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'gene-circuit-design-track',
    name: 'Gene Circuit Logic Design',
    description: 'Computational design and simulation of genetic circuits',
    trackType: 'Drylab',
    startDate: '2026-03-01',
    endDate: '2026-06-30',
    owner: 'Jacquelyn, Felix Yu',
    milestones: [
      {
        id: 'gene-1',
        name: 'Logic Gate Definition',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 50,
        status: 'In Progress',
      },
      {
        id: 'gene-2',
        name: 'Simulation & Modeling',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'May',
        completionPercentage: 20,
        status: 'In Progress',
      },
      {
        id: 'gene-3',
        name: 'Optimization & Documentation',
        phase: 'Refinement',
        startMonth: 'May',
        endMonth: 'Jun',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'mathematical-model-track',
    name: 'Mathematical Model of Plant Stress',
    description: 'Development of predictive stress response models',
    trackType: 'Drylab',
    startDate: '2026-03-01',
    endDate: '2026-07-31',
    owner: 'Ethan Liu, Anna Chuang',
    milestones: [
      {
        id: 'math-1',
        name: 'Model Framework Definition',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 30,
        status: 'In Progress',
      },
      {
        id: 'math-2',
        name: 'Parameter Estimation',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 10,
        status: 'In Progress',
      },
      {
        id: 'math-3',
        name: 'Validation & Refinement',
        phase: 'Testing',
        startMonth: 'Jun',
        endMonth: 'Jul',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },

  // HP TRACKS
  {
    id: 'business-plan-track',
    name: 'Business Plan',
    description: 'Development of commercialization and business strategy',
    trackType: 'HP',
    startDate: '2026-03-01',
    endDate: '2026-09-30',
    milestones: [
      {
        id: 'biz-1',
        name: 'Market Research & Analysis',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 10,
        status: 'In Progress',
      },
      {
        id: 'biz-2',
        name: 'Business Model Development',
        phase: 'Development',
        startMonth: 'May',
        endMonth: 'Jul',
        completionPercentage: 0,
        status: 'Not Started',
      },
      {
        id: 'biz-3',
        name: 'Pitch Deck & Go-to-Market',
        phase: 'Refinement',
        startMonth: 'Aug',
        endMonth: 'Sep',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'wiki-documentation-track',
    name: 'Wiki & Documentation',
    description: 'Project documentation and knowledge base setup',
    trackType: 'HP',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    milestones: [
      {
        id: 'wiki-1',
        name: 'Architecture & Structure Design',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 40,
        status: 'In Progress',
      },
      {
        id: 'wiki-2',
        name: 'Content Creation Phase 1',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 25,
        status: 'In Progress',
      },
      {
        id: 'wiki-3',
        name: 'Refinement & Maintenance',
        phase: 'Testing',
        startMonth: 'Jul',
        endMonth: 'Aug',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
  {
    id: 'art-design-track',
    name: 'Art Design & Visual Communication',
    description: 'Visual branding and design assets',
    trackType: 'HP',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    milestones: [
      {
        id: 'art-1',
        name: 'Brand Identity & Guidelines',
        phase: 'Planning',
        startMonth: 'Mar',
        endMonth: 'Apr',
        completionPercentage: 35,
        status: 'In Progress',
      },
      {
        id: 'art-2',
        name: 'Design Asset Creation',
        phase: 'Development',
        startMonth: 'Apr',
        endMonth: 'Jun',
        completionPercentage: 20,
        status: 'In Progress',
      },
      {
        id: 'art-3',
        name: 'Final Polish & Delivery',
        phase: 'Refinement',
        startMonth: 'Jul',
        endMonth: 'Aug',
        completionPercentage: 0,
        status: 'Not Started',
      },
    ],
  },
];

// Helper functions
export const getRoadmapTracksByType = (trackType: 'Wetlab' | 'Drylab' | 'HP'): RoadmapTrack[] => {
  return roadmapTracks.filter(track => track.trackType === trackType);
};

export const getRoadmapTrackById = (id: string): RoadmapTrack | undefined => {
  return roadmapTracks.find(track => track.id === id);
};

export const getOverallProgress = (): number => {
  let totalPercentage = 0;
  let totalMilestones = 0;

  roadmapTracks.forEach(track => {
    track.milestones.forEach(milestone => {
      totalPercentage += milestone.completionPercentage;
      totalMilestones += 1;
    });
  });

  return totalMilestones > 0 ? Math.round(totalPercentage / totalMilestones) : 0;
};

export const getProgressByTrackType = (trackType: 'Wetlab' | 'Drylab' | 'HP'): number => {
  const tracks = getRoadmapTracksByType(trackType);
  let totalPercentage = 0;
  let totalMilestones = 0;

  tracks.forEach(track => {
    track.milestones.forEach(milestone => {
      totalPercentage += milestone.completionPercentage;
      totalMilestones += 1;
    });
  });

  return totalMilestones > 0 ? Math.round(totalPercentage / totalMilestones) : 0;
};
