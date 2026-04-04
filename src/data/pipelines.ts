export type PipelineStatus = 'Confirmed' | 'In Progress' | 'Assigning' | 'Not Yet Filled';
export type TaskStatus = 'Not Started' | 'In Progress' | 'Blocked' | 'Completed' | 'On Hold';
export type TrackType = 'Wetlab' | 'Drylab' | 'HP';
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface PipelineTask {
  id: string;
  title: string;
  description: string;
  owner?: string;
  contributors: string[];
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
  estimatedHours: number;
  completionPercentage: number;
  dependencies: string[]; // Task IDs this task depends on
  blockers?: string;
  notes?: string;
}

export interface Pipeline {
  id: string;
  name: string;
  track: TrackType;
  status: PipelineStatus;
  owners: string[];
  contributors: string[];
  description: string;
  tasks: PipelineTask[];
  createdAt: string;
  lastUpdated: string;
}

export const pipelines: Pipeline[] = [
  // WETLAB PIPELINES
  {
    id: 'biosecurity-circuit-pipeline',
    name: 'Biosecurity Circuit',
    track: 'Wetlab',
    status: 'Assigning',
    owners: [],
    contributors: ['Sara Chen', 'Chloe Wu', 'Abigail Lin', 'Abby Tsai', 'Audrey Hsieh', 'Olivia Lin', 'Sophie Liu', 'Joshua Hong', 'Abby Kao'],
    description: 'Development and validation of biosecurity circuit for controlled bioactivity release',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'biosec-task-1',
        title: 'Literature Review: Biosecurity Mechanisms',
        description: 'Comprehensive review of existing biosecurity approaches in synthetic biology',
        owner: 'Sara Chen',
        contributors: ['Audrey Hsieh', 'Sophie Liu'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-31',
        estimatedHours: 40,
        completionPercentage: 50,
        dependencies: [],
        notes: 'Review should cover kill-switch systems, quorum sensing, and circuit-based controls',
      },
      {
        id: 'biosec-task-2',
        title: 'Design Biosecurity Logic Circuits',
        description: 'Design genetic circuits for biosecurity control and validation',
        owner: 'Chloe Wu',
        contributors: ['Abby Tsai', 'Joshua Hong'],
        status: 'Not Started',
        priority: 'Critical',
        dueDate: '2026-04-15',
        estimatedHours: 60,
        completionPercentage: 0,
        dependencies: ['biosec-task-1'],
        notes: 'Must interface with stress circuit modules',
      },
      {
        id: 'biosec-task-3',
        title: 'Biosecurity Construct Cloning',
        description: 'Clone designed biosecurity circuits into target organisms',
        owner: 'Abigail Lin',
        contributors: ['Olivia Lin', 'Abby Kao'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-15',
        estimatedHours: 80,
        completionPercentage: 0,
        dependencies: ['biosec-task-2'],
      },
      {
        id: 'biosec-task-4',
        title: 'Biosecurity Validation Testing',
        description: 'Test biosecurity circuits in controlled laboratory conditions',
        owner: 'Sara Chen',
        contributors: ['Audrey Hsieh', 'Sophie Liu'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-06-30',
        estimatedHours: 100,
        completionPercentage: 0,
        dependencies: ['biosec-task-3'],
      },
    ],
  },
  {
    id: 'stress-circuit-pipeline',
    name: 'Stress Circuit',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    contributors: ['Ethan Chang', 'Ryan Yuan', 'Alex Li', 'Phoebe Chen', 'Naomi Lin', 'Sarah Chou', 'Ryan Wei', 'Sophie Huang', 'Sophie Chen', 'Sophia Yeh'],
    description: 'Engineering and deployment of stress-responsive circuits',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'stress-task-1',
        title: 'Gene Selection & Pathway Mapping',
        description: 'Select and characterize stress-responsive genes and regulatory pathways',
        owner: 'Ethan Chang',
        contributors: ['Ryan Yuan', 'Sophie Huang'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-31',
        estimatedHours: 50,
        completionPercentage: 35,
        dependencies: [],
        notes: 'Focus on drought and heat response pathways in model plants',
      },
      {
        id: 'stress-task-2',
        title: 'E. coli Cloning of Stress Genes',
        description: 'Clone selected stress genes using competent E. coli',
        owner: 'Alex Li',
        contributors: ['Phoebe Chen', 'Naomi Lin'],
        status: 'Not Started',
        priority: 'Critical',
        dueDate: '2026-04-30',
        estimatedHours: 70,
        completionPercentage: 0,
        dependencies: ['stress-task-1'],
      },
      {
        id: 'stress-task-3',
        title: 'B. subtilis Transformation',
        description: 'Transform verified circuits into B. subtilis chassis',
        owner: 'Sarah Chou',
        contributors: ['Ryan Wei', 'Sophia Yeh'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-31',
        estimatedHours: 60,
        completionPercentage: 0,
        dependencies: ['stress-task-2'],
        notes: 'B. subtilis chosen for plant-safe deployment profile',
      },
      {
        id: 'stress-task-4',
        title: 'Stress Circuit Characterization',
        description: 'Characterize stress response of circuit constructs',
        owner: 'Sophie Chen',
        contributors: ['Ryan Yuan', 'Naomi Lin'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-06-30',
        estimatedHours: 80,
        completionPercentage: 0,
        dependencies: ['stress-task-3'],
      },
    ],
  },
  {
    id: 'model-establishing-pipeline',
    name: 'Model Establishing',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    contributors: ['Ethan Chang', 'Ryan Yuan', 'Alex Li', 'Phoebe Chen', 'Naomi Lin', 'Sarah Chou'],
    description: 'Establish plant models and characterize baseline stress responses',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'model-task-1',
        title: 'Organism Culture Setup',
        description: 'Establish baseline cultures of model organisms and plants',
        owner: 'Phoebe Chen',
        contributors: ['Naomi Lin', 'Alex Li'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-15',
        estimatedHours: 30,
        completionPercentage: 65,
        dependencies: [],
        notes: 'B. subtilis and Arabidopsis primary models',
      },
      {
        id: 'model-task-2',
        title: 'Baseline Stress Assay Development',
        description: 'Develop standardized assays for measuring stress responses',
        owner: 'Ryan Yuan',
        contributors: ['Sarah Chou', 'Phoebe Chen'],
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-04-15',
        estimatedHours: 50,
        completionPercentage: 25,
        dependencies: ['model-task-1'],
      },
      {
        id: 'model-task-3',
        title: 'Initial Data Collection & Analysis',
        description: 'Collect baseline stress response data from model organisms',
        owner: 'Alex Li',
        contributors: ['Naomi Lin', 'Ryan Yuan'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-31',
        estimatedHours: 80,
        completionPercentage: 0,
        dependencies: ['model-task-2'],
      },
    ],
  },
  {
    id: 'protectant-development-pipeline',
    name: 'Protectant Development',
    track: 'Wetlab',
    status: 'In Progress',
    owners: [],
    contributors: ['Ethan Chang', 'Ryan Yuan', 'Alex Li', 'Phoebe Chen', 'Naomi Lin', 'Sarah Chou', 'Ryan Wei', 'Sophie Huang', 'Sophie Chen', 'Sophia Yeh'],
    description: 'Development and testing of protective compounds and mechanisms',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'prot-task-1',
        title: 'Protectant Candidate Screening',
        description: 'Evaluate and screen candidate protective compounds',
        owner: 'Ryan Yuan',
        contributors: ['Ethan Chang', 'Sophie Huang'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-10',
        estimatedHours: 60,
        completionPercentage: 20,
        dependencies: [],
        blockers: 'Limited availability of some candidate compounds; sourcing second batch',
      },
      {
        id: 'prot-task-2',
        title: 'Protectant Mechanism Characterization',
        description: 'Characterize molecular mechanisms of top candidate protectants',
        owner: 'Sophie Chen',
        contributors: ['Naomi Lin', 'Sophie Huang'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-15',
        estimatedHours: 70,
        completionPercentage: 0,
        dependencies: ['prot-task-1'],
      },
      {
        id: 'prot-task-3',
        title: 'Efficacy Testing in Plant Models',
        description: 'Test protectant efficacy in stress conditions using plant models',
        owner: 'Phoebe Chen',
        contributors: ['Ryan Wei', 'Sarah Chou'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-06-30',
        estimatedHours: 90,
        completionPercentage: 0,
        dependencies: ['prot-task-2', 'model-task-2'],
      },
    ],
  },

  // DRYLAB PIPELINES
  {
    id: 'hydroponic-system-pipeline',
    name: 'Hydroponic System',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Ethan Liu', 'Noah Tau'],
    contributors: ['Felix Yu', 'Anna Chuang'],
    description: 'Design and fabrication of hydroponic growing systems',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'hydro-task-1',
        title: 'Hydroponic System Specifications',
        description: 'Define technical specifications for hydroponic boxes',
        owner: 'Anton Lin',
        contributors: ['Ethan Liu'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-25',
        estimatedHours: 40,
        completionPercentage: 50,
        dependencies: [],
      },
      {
        id: 'hydro-task-2',
        title: 'CAD Modeling & Design',
        description: 'Create detailed CAD models of hydroponic system',
        owner: 'Ethan Liu',
        contributors: ['Noah Tau', 'Felix Yu'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-15',
        estimatedHours: 80,
        completionPercentage: 40,
        dependencies: ['hydro-task-1'],
      },
      {
        id: 'hydro-task-3',
        title: 'Prototype Fabrication',
        description: 'Fabricate first prototype of hydroponic system',
        owner: 'Noah Tau',
        contributors: ['Anton Lin', 'Anna Chuang'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-30',
        estimatedHours: 100,
        completionPercentage: 0,
        dependencies: ['hydro-task-2'],
      },
      {
        id: 'hydro-task-4',
        title: 'System Testing & Optimization',
        description: 'Test prototype and optimize design for reliability',
        owner: 'Anton Lin',
        contributors: ['Ethan Liu', 'Noah Tau'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-07-15',
        estimatedHours: 60,
        completionPercentage: 0,
        dependencies: ['hydro-task-3'],
      },
    ],
  },
  {
    id: 'soil-metrics-pipeline',
    name: 'Soil Metric Hardware',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Anton Lin', 'Noah Tau'],
    contributors: ['Anna Chuang', 'Jacquelyn'],
    description: 'Development of soil monitoring sensor hardware',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'soil-task-1',
        title: 'Sensor Requirements & Selection',
        description: 'Define requirements and select sensors for soil monitoring',
        owner: 'Noah Tau',
        contributors: ['Anton Lin'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-22',
        estimatedHours: 35,
        completionPercentage: 70,
        dependencies: [],
      },
      {
        id: 'soil-task-2',
        title: 'PCB Design & Fabrication Planning',
        description: 'Design PCB layout and plan fabrication process',
        owner: 'Anton Lin',
        contributors: ['Anna Chuang', 'Jacquelyn'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-20',
        estimatedHours: 70,
        completionPercentage: 25,
        dependencies: ['soil-task-1'],
        blockers: 'PCB complexity higher than expected; extended design timeline by 1 week',
      },
      {
        id: 'soil-task-3',
        title: 'Hardware Assembly & Integration',
        description: 'Assemble sensors and electronics on PCB',
        owner: 'Anna Chuang',
        contributors: ['Noah Tau', 'Jacquelyn'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-05-31',
        estimatedHours: 80,
        completionPercentage: 0,
        dependencies: ['soil-task-2'],
      },
      {
        id: 'soil-task-4',
        title: 'Sensor Calibration & Validation',
        description: 'Calibrate sensors and validate performance',
        owner: 'Noah Tau',
        contributors: ['Anton Lin', 'Anna Chuang'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-07-15',
        estimatedHours: 50,
        completionPercentage: 0,
        dependencies: ['soil-task-3'],
      },
    ],
  },
  {
    id: 'gene-circuit-design-pipeline',
    name: 'Gene Circuit Design',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Jacquelyn', 'Felix Yu'],
    contributors: ['Audrey Chu', 'Eva Zhong', 'Ethan Liu'],
    description: 'In silico design and simulation of genetic circuits',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'gene-task-1',
        title: 'Logic Gate Specification',
        description: 'Define logic requirements and gate specifications',
        owner: 'Jacquelyn',
        contributors: ['Felix Yu'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-03-28',
        estimatedHours: 45,
        completionPercentage: 55,
        dependencies: [],
      },
      {
        id: 'gene-task-2',
        title: 'Circuit Simulation Environment Setup',
        description: 'Set up and configure simulation tools and models',
        owner: 'Felix Yu',
        contributors: ['Ethan Liu', 'Audrey Chu'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-05',
        estimatedHours: 40,
        completionPercentage: 80,
        dependencies: ['gene-task-1'],
      },
      {
        id: 'gene-task-3',
        title: 'Circuit Simulation & Optimization',
        description: 'Run simulations and optimize circuit parameters',
        owner: 'Audrey Chu',
        contributors: ['Jacquelyn', 'Eva Zhong'],
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-05-15',
        estimatedHours: 90,
        completionPercentage: 15,
        dependencies: ['gene-task-2'],
      },
      {
        id: 'gene-task-4',
        title: 'Design Validation & Synthesis',
        description: 'Validate designs and prepare for experimental synthesis',
        owner: 'Felix Yu',
        contributors: ['Jacquelyn', 'Eva Zhong'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-06-15',
        estimatedHours: 60,
        completionPercentage: 0,
        dependencies: ['gene-task-3'],
      },
    ],
  },
  {
    id: 'math-model-pipeline',
    name: 'Math Model',
    track: 'Drylab',
    status: 'Confirmed',
    owners: ['Ethan Liu', 'Anna Chuang'],
    contributors: [],
    description: 'Mathematical modeling of plant stress systems',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'math-task-1',
        title: 'Model Framework Development',
        description: 'Develop mathematical framework for stress response modeling',
        owner: 'Ethan Liu',
        contributors: ['Anna Chuang'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-10',
        estimatedHours: 60,
        completionPercentage: 30,
        dependencies: [],
      },
      {
        id: 'math-task-2',
        title: 'Parameter Estimation from Literature',
        description: 'Extract and estimate model parameters from published data',
        owner: 'Anna Chuang',
        contributors: ['Ethan Liu'],
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-05-15',
        estimatedHours: 70,
        completionPercentage: 10,
        dependencies: ['math-task-1'],
      },
      {
        id: 'math-task-3',
        title: 'Experimental Validation',
        description: 'Validate model predictions against experimental data',
        owner: 'Ethan Liu',
        contributors: ['Anna Chuang'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-07-15',
        estimatedHours: 80,
        completionPercentage: 0,
        dependencies: ['math-task-2', 'model-task-3'],
      },
    ],
  },

  // HP PIPELINES
  {
    id: 'business-plan-pipeline',
    name: 'Business Plan',
    track: 'HP',
    status: 'Assigning',
    owners: [],
    contributors: [],
    description: 'Development of comprehensive business and commercialization plan',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'biz-task-1',
        title: 'Market Research & Analysis',
        description: 'Conduct comprehensive market analysis and competitive landscape review',
        owner: 'Sophia Lin',
        contributors: ['Mia Guo', 'Olivia Du'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-15',
        estimatedHours: 80,
        completionPercentage: 15,
        dependencies: [],
      },
      {
        id: 'biz-task-2',
        title: 'Business Model Development',
        description: 'Develop business model canvas and revenue strategy',
        owner: 'Renée Kuo',
        contributors: ['Sophia Lin'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-06-15',
        estimatedHours: 70,
        completionPercentage: 0,
        dependencies: ['biz-task-1'],
      },
      {
        id: 'biz-task-3',
        title: 'Pitch Deck & Investor Materials',
        description: 'Create pitch deck and investment materials',
        owner: 'Mia Guo',
        contributors: ['Olivia Du', 'Sophia Lin'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-08-15',
        estimatedHours: 60,
        completionPercentage: 0,
        dependencies: ['biz-task-2'],
      },
    ],
  },
  {
    id: 'wiki-setup-pipeline',
    name: 'Wiki Setup',
    track: 'HP',
    status: 'In Progress',
    owners: [],
    contributors: [],
    description: 'Project wiki setup and documentation architecture',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'wiki-task-1',
        title: 'Wiki Architecture & Navigation Design',
        description: 'Design wiki structure and navigation system',
        owner: 'Olivia Du',
        contributors: [],
        status: 'Completed',
        priority: 'Critical',
        dueDate: '2026-03-15',
        estimatedHours: 30,
        completionPercentage: 100,
        dependencies: [],
      },
      {
        id: 'wiki-task-2',
        title: 'Initial Content Creation',
        description: 'Write initial wiki articles and documentation',
        owner: 'Renée Kuo',
        contributors: ['Olivia Du'],
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-05-15',
        estimatedHours: 100,
        completionPercentage: 35,
        dependencies: ['wiki-task-1'],
      },
      {
        id: 'wiki-task-3',
        title: 'Ongoing Maintenance & Updates',
        description: 'Maintain and update wiki with new information',
        owner: 'Mia Guo',
        contributors: [],
        status: 'Not Started',
        priority: 'Medium',
        dueDate: '2026-09-30',
        estimatedHours: 2,
        completionPercentage: 0,
        dependencies: ['wiki-task-2'],
      },
    ],
  },
  {
    id: 'art-design-pipeline',
    name: 'Art Design',
    track: 'HP',
    status: 'In Progress',
    owners: [],
    contributors: [],
    description: 'Visual communication and design asset development',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'art-task-1',
        title: 'Brand Identity & Logo Design',
        description: 'Develop brand identity, logo, and visual guidelines',
        owner: 'Mia Guo',
        contributors: ['Olivia Du'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-04-15',
        estimatedHours: 60,
        completionPercentage: 40,
        dependencies: [],
      },
      {
        id: 'art-task-2',
        title: 'Design Asset Library Creation',
        description: 'Create comprehensive design asset library for project',
        owner: 'Olivia Du',
        contributors: ['Mia Guo'],
        status: 'In Progress',
        priority: 'High',
        dueDate: '2026-06-15',
        estimatedHours: 80,
        completionPercentage: 20,
        dependencies: ['art-task-1'],
      },
      {
        id: 'art-task-3',
        title: 'Marketing & Presentation Materials',
        description: 'Create marketing collateral and presentation materials',
        owner: 'Renée Kuo',
        contributors: ['Mia Guo'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-07-30',
        estimatedHours: 70,
        completionPercentage: 0,
        dependencies: ['art-task-2'],
      },
    ],
  },
  {
    id: 'stakeholder-implementation-pipeline',
    name: 'Stakeholder/Implementation',
    track: 'HP',
    status: 'Assigning',
    owners: [],
    contributors: [],
    description: 'Stakeholder engagement and implementation strategy',
    createdAt: '2026-03-01',
    lastUpdated: '2026-03-21',
    tasks: [
      {
        id: 'stake-task-1',
        title: 'Stakeholder Interview Campaign',
        description: 'Conduct stakeholder interviews and analysis',
        owner: 'Sophia Lin',
        contributors: ['Renée Kuo', 'Olivia Du'],
        status: 'In Progress',
        priority: 'Critical',
        dueDate: '2026-05-15',
        estimatedHours: 80,
        completionPercentage: 20,
        dependencies: [],
      },
      {
        id: 'stake-task-2',
        title: 'Implementation Pathway Planning',
        description: 'Develop implementation strategy and deployment plan',
        owner: 'Renée Kuo',
        contributors: ['Sophia Lin'],
        status: 'Not Started',
        priority: 'High',
        dueDate: '2026-07-15',
        estimatedHours: 70,
        completionPercentage: 0,
        dependencies: ['stake-task-1'],
      },
      {
        id: 'stake-task-3',
        title: 'Partnership & Collaboration Framework',
        description: 'Establish partnerships and collaboration agreements',
        owner: 'Sophia Lin',
        contributors: [],
        status: 'Not Started',
        priority: 'Medium',
        dueDate: '2026-08-30',
        estimatedHours: 50,
        completionPercentage: 0,
        dependencies: ['stake-task-2'],
      },
    ],
  },
];

// Helper functions
export const getPipelinesByTrack = (track: TrackType): Pipeline[] => {
  return pipelines.filter(p => p.track === track);
};

export const getPipelineById = (id: string): Pipeline | undefined => {
  return pipelines.find(p => p.id === id);
};

export const getTaskById = (taskId: string): PipelineTask | undefined => {
  let foundTask: PipelineTask | undefined;
  pipelines.forEach(pipeline => {
    const task = pipeline.tasks.find(t => t.id === taskId);
    if (task) foundTask = task;
  });
  return foundTask;
};

export const getTasksByOwner = (ownerName: string): PipelineTask[] => {
  const tasks: PipelineTask[] = [];
  pipelines.forEach(pipeline => {
    pipeline.tasks.forEach(task => {
      if (task.owner?.toLowerCase() === ownerName.toLowerCase()) {
        tasks.push(task);
      }
    });
  });
  return tasks;
};

export const getTasksByStatus = (status: TaskStatus): PipelineTask[] => {
  const tasks: PipelineTask[] = [];
  pipelines.forEach(pipeline => {
    pipeline.tasks.forEach(task => {
      if (task.status === status) {
        tasks.push(task);
      }
    });
  });
  return tasks;
};

export const getOverdueTasksCount = (): number => {
  const today = new Date().toISOString().split('T')[0];
  let count = 0;
  pipelines.forEach(pipeline => {
    pipeline.tasks.forEach(task => {
      if (task.dueDate < today && task.status !== 'Completed') {
        count++;
      }
    });
  });
  return count;
};

export const getTasksByPriority = (priority: Priority): PipelineTask[] => {
  const tasks: PipelineTask[] = [];
  pipelines.forEach(pipeline => {
    pipeline.tasks.forEach(task => {
      if (task.priority === priority) {
        tasks.push(task);
      }
    });
  });
  return tasks;
};

export const getTotalEstimatedHours = (pipelineId: string): number => {
  const pipeline = getPipelineById(pipelineId);
  return pipeline?.tasks.reduce((sum, task) => sum + task.estimatedHours, 0) || 0;
};

export const getPipelineProgress = (pipelineId: string): number => {
  const pipeline = getPipelineById(pipelineId);
  if (!pipeline || pipeline.tasks.length === 0) return 0;
  const total = pipeline.tasks.reduce((sum, task) => sum + task.completionPercentage, 0);
  return Math.round(total / pipeline.tasks.length);
};

export const getTasksWithBlockers = (): PipelineTask[] => {
  const tasks: PipelineTask[] = [];
  pipelines.forEach(pipeline => {
    pipeline.tasks.forEach(task => {
      if (task.blockers) {
        tasks.push(task);
      }
    });
  });
  return tasks;
};
