export type Track = 'WETLAB' | 'DRYLAB' | 'HP';
export type AffiliationType = 'Major' | 'Minor';

export interface TeamMember {
  id: string;
  name: string;
  tracks: {
    track: Track;
    affiliationType: AffiliationType;
  }[];
  executionGroups?: string[]; // For wetlab execution groups
  dryLabTracks?: string[]; // For drylab execution tracks
  pronouns?: string;
}

// All team members with their track affiliations
export const teamMembers: TeamMember[] = [
  // WETLAB MAJOR - Group A members
  {
    id: 'sara-chen',
    name: 'Sara Chen',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'chloe-wu',
    name: 'Chloe Wu',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'abigail-lin',
    name: 'Abigail Lin',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'abby-tsai',
    name: 'Abby Tsai',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'audrey-hsieh',
    name: 'Audrey Hsieh',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'olivia-lin',
    name: 'Olivia Lin',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'sophie-liu',
    name: 'Sophie Liu',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'joshua-hong',
    name: 'Joshua Hong',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },
  {
    id: 'abby-kao',
    name: 'Abby Kao',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group A'],
  },

  // WETLAB MAJOR - Group B members
  {
    id: 'ethan-chang',
    name: 'Ethan Chang',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'ryan-yuan',
    name: 'Ryan Yuan',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'alex-li',
    name: 'Alex Li',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'phoebe-chen',
    name: 'Phoebe Chen',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'naomi-lin',
    name: 'Naomi Lin',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'sarah-chou',
    name: 'Sarah Chou',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'ryan-wei',
    name: 'Ryan Wei',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'sophie-huang',
    name: 'Sophie Huang',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'sophie-chen',
    name: 'Sophie Chen',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'DRYLAB', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },
  {
    id: 'sophia-yeh',
    name: 'Sophia Yeh',
    tracks: [{ track: 'WETLAB', affiliationType: 'Major' }, { track: 'HP', affiliationType: 'Minor' }],
    executionGroups: ['Group B'],
  },

  // WETLAB MINOR
  {
    id: 'jacquelyn',
    name: 'Jacquelyn',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Soil Metric Hardware', 'Gene Circuit Design'],
  },
  {
    id: 'eva-zhong',
    name: 'Eva Zhong',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Protectant', 'Gene Circuit Design'],
  },
  {
    id: 'felix-yu',
    name: 'Felix Yu',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Hydroponic System', 'Protectant', 'Gene Circuit Design'],
  },
  {
    id: 'anna-chuang',
    name: 'Anna Chuang',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Hydroponic System', 'Mathematical Model', 'Soil Metric Hardware'],
  },
  {
    id: 'anton-lin',
    name: 'Anton Lin',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Hydroponic System', 'Protectant', 'Soil Metric Hardware'],
  },
  {
    id: 'ethan-liu',
    name: 'Ethan Liu',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Hydroponic System', 'Gene Circuit Design', 'Mathematical Model'],
  },
  {
    id: 'noah-tau',
    name: 'Noah Tau',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Hydroponic System', 'Soil Metric Hardware'],
  },
  {
    id: 'audrey-chu',
    name: 'Audrey Chu',
    tracks: [{ track: 'WETLAB', affiliationType: 'Minor' }, { track: 'DRYLAB', affiliationType: 'Major' }],
    dryLabTracks: ['Protectant', 'Gene Circuit Design'],
  },

  // HP MAJOR
  {
    id: 'sophia-lin',
    name: 'Sophia Lin',
    tracks: [{ track: 'HP', affiliationType: 'Major' }],
  },
  {
    id: 'mia-guo',
    name: 'Mia Guo',
    tracks: [{ track: 'HP', affiliationType: 'Major' }, { track: 'WETLAB', affiliationType: 'Minor' }],
  },
  {
    id: 'olivia-du',
    name: 'Olivia Du',
    tracks: [{ track: 'HP', affiliationType: 'Major' }, { track: 'WETLAB', affiliationType: 'Minor' }],
  },
  {
    id: 'renee-kuo',
    name: 'Renée Kuo',
    tracks: [{ track: 'HP', affiliationType: 'Major' }, { track: 'WETLAB', affiliationType: 'Minor' }],
  },
];

// Helper functions
export const getTeamMembersByTrack = (track: Track, affiliationType?: AffiliationType): TeamMember[] => {
  return teamMembers.filter(member =>
    member.tracks.some(t => t.track === track && (!affiliationType || t.affiliationType === affiliationType))
  );
};

export const getTeamMembersByExecutionGroup = (group: 'Group A' | 'Group B'): TeamMember[] => {
  return teamMembers.filter(member => member.executionGroups?.includes(group));
};

export const getTeamMembersByDryLabTrack = (trackName: string): TeamMember[] => {
  return teamMembers.filter(member => member.dryLabTracks?.includes(trackName));
};

export const getTeamMemberByName = (name: string): TeamMember | undefined => {
  return teamMembers.find(member => member.name.toLowerCase() === name.toLowerCase());
};
