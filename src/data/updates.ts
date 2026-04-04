export interface Update {
  id: string;
  week: number;
  date: string;
  title: string;
  content: string;
  author: string;
  trackType: 'Wetlab' | 'Drylab' | 'HP' | 'General';
  highlights: string[];
  nextWeekGoals: string[];
  challenges?: string[];
}

export const updates: Update[] = [
  {
    id: 'update-week-1',
    week: 1,
    date: '2026-03-07',
    title: 'Kickoff and Project Framing',
    author: 'Sophia Lin',
    trackType: 'General',
    content: `
Welcome to iGEM 2026! This week marked our official project kickoff. All three tracks (Wetlab, Drylab, and HP) convened to align on project vision, objectives, and timelines. We established our collaboration framework and identified key interdependencies between tracks.

The Wetlab team confirmed the core biotic components of our system, focusing on stress-response circuits and biosecurity measures. Drylab committed to supporting hardware and computational design in parallel. The HP team presented preliminary market research and stakeholder engagement strategy.

Project leads were assigned for each major workstream, and we established our weekly meeting cadence and communication protocols.
    `,
    highlights: [
      'All three tracks fully mobilized and aligned',
      'Project charter and success metrics finalized',
      'Team working agreements established',
      'First integrated planning session completed',
    ],
    nextWeekGoals: [
      'Complete literature review for stress circuit design',
      'Finalize hydroponic system specifications',
      'Conduct initial market research interviews',
      'Set up project documentation wiki structure',
    ],
    challenges: [
      'Coordinating across three complex workstreams with different methodologies',
      'Ensuring adequate resource allocation across tracks',
    ],
  },
  {
    id: 'update-week-2',
    week: 2,
    date: '2026-03-14',
    title: 'Stress Model Planning and Module Concept Development',
    author: 'Eva Zhong',
    trackType: 'General',
    content: `
This week focused on deepening our understanding of the plant stress response mechanisms and translating these into engineerable modules. The Wetlab team completed an extensive literature review on drought and heat stress responses in model plants, identifying key regulatory genes and signaling pathways.

In collaboration with Drylab, we began developing computational models to predict plant stress dynamics. The Drylab team initiated the mathematical modeling framework and started parameter estimation from published data. Additionally, protectant evaluation commenced with initial screening of candidate compounds.

The HP team expanded stakeholder engagement efforts, scheduling interviews with agricultural extension offices and sustainable farming organizations. Initial business model canvases were drafted exploring different commercialization routes.
    `,
    highlights: [
      'Completed comprehensive stress pathway literature review',
      'Mathematical model framework design initiated',
      'Protectant screening assays planned and partially set up',
      'First round of stakeholder interviews completed (5 interviews)',
      'Brand identity workshop with design team',
    ],
    nextWeekGoals: [
      'Begin cloning of stress-responsive genes in E. coli',
      'Establish baseline organism cultures',
      'Finalize sensor hardware specifications',
      'Draft business plan outline',
      'Complete wiki navigation structure',
    ],
    challenges: [
      'Literature review revealed complexity in stress response pathways requiring expanded scope',
      'Protectant availability constraints for initial screening',
      'Coordinating Wetlab and Drylab modeling efforts with different timescales',
    ],
  },
  {
    id: 'update-week-3',
    week: 3,
    date: '2026-03-21',
    title: 'Building Project Infrastructure and Execution Structure',
    author: 'Anton Lin',
    trackType: 'General',
    content: `
Week 3 focused on establishing robust project infrastructure to support sustained execution. The Drylab team finalized the hydroponic box design specifications and began CAD modeling. Sensor hardware component selection was completed, and preliminary PCB layouts were initiated. The gene circuit simulation environment was set up and parametrized with data from our literature review.

On the Wetlab side, organism culture protocols were standardized and baseline cultures established. Initial experiments for stress model characterization began, with the first generation of stress-responsive plants planted. Strain curation for cloning was completed, ready for transformation next week.

HP successfully launched the project wiki with full documentation architecture. Market research analysis from stakeholder interviews was synthesized into preliminary personas and value propositions. The business plan structure was outlined with timelines for each section.

Cross-track synchronization meetings proved valuable, clarifying data flow between Drylab modeling outputs and Wetlab experimental design.
    `,
    highlights: [
      'Hydroponic system CAD models 40% complete',
      'Sensor hardware BOM finalized and ordered',
      'Gene circuit simulation environment fully operational',
      'Baseline organisms cultured and characterized',
      'Stress model plants established in growth chambers',
      'Project wiki launched with 15 initial articles',
      'Stakeholder personas developed from 12 interviews',
      'First integrated data architecture review completed',
    ],
    nextWeekGoals: [
      'Complete first transformation of E. coli with stress genes',
      'Begin protectant efficacy screening',
      'Achieve 70% completion on hydroponic CAD',
      'Start PCB fabrication layout',
      'Conduct second round of stakeholder interviews (10 target)',
      'Draft initial wiki content on methodology',
    ],
    challenges: [
      'PCB design complexity requiring extended timeline by 1 week',
      'Some organisms showing slower growth than expected; adjusted media',
      'Need for better cross-team documentation of assumptions and parameters',
    ],
  },
];

// Helper functions
export const getUpdatesByWeek = (week: number): Update | undefined => {
  return updates.find(update => update.week === week);
};

export const getUpdatesByTrack = (trackType: 'Wetlab' | 'Drylab' | 'HP' | 'General'): Update[] => {
  return updates.filter(update => update.trackType === trackType).sort((a, b) => b.week - a.week);
};

export const getLatestUpdate = (): Update | undefined => {
  return updates.length > 0 ? updates[updates.length - 1] : undefined;
};

export const getUpdatesByAuthor = (author: string): Update[] => {
  return updates.filter(update => update.author.toLowerCase() === author.toLowerCase());
};

export const getAllChallenges = (): { week: number; challenges: string[] }[] => {
  return updates
    .filter(update => update.challenges && update.challenges.length > 0)
    .map(update => ({
      week: update.week,
      challenges: update.challenges || [],
    }));
};

export const getMilestonesSummary = (): {
  totalUpdates: number;
  latestWeek: number;
  tracksCovered: string[];
} => {
  const tracksCovered = new Set<string>();
  updates.forEach(update => {
    tracksCovered.add(update.trackType);
  });

  return {
    totalUpdates: updates.length,
    latestWeek: updates.length > 0 ? updates[updates.length - 1].week : 0,
    tracksCovered: Array.from(tracksCovered),
  };
};
