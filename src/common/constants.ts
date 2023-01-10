export const API = {
  exercises: '/api/v1/exercises',
  routines: 'api/v1/routines'
}

export const APP_STATES = {
  default: "default",
  exercises: 'exercises',
  routines: 'routines',
  settings: 'settings',
  stats: 'stats',
  workingOut: 'workingOut'
};

export const EQUIPMENT: Array<{ label: string, slug: string}> = [
  { label: 'Bands', slug: "bands" },
  { label: 'Barbell', slug: "barbell" },
  { label: 'Bodyweight', slug: "bodyweight" },
  { label: 'Cable Machine', slug: "cable-machine" },
  { label: 'Dumbbells', slug: "dumbbells" },
  { label: 'Plate-loaded Machine', slug: "plate-loaded-machine" },
]

export const MUSCLE_GROUPS: Array<{ label: string, slug: string}> = [
  { label: "Biceps", slug: "biceps" },
  { label: "Calves", slug: "calves" },
  { label: "Chest", slug: "chest" },
  { label: "Core", slug: "core" },
  { label: "Glutes", slug: "glutes" },
  { label: "Hamstrings", slug: "hamstrings" },
  { label: "Lower Back", slug: "lower-back" },
  { label: "Quads", slug: "quads" },
  { label: "Shoulders", slug: "shoulders" },
  { label: "Triceps", slug: "triceps" },
  { label: "Upper Back", slug: "upper-back" }
]

export const NAVIGATION = [
  { label: "Routines", to: "/routines" },
  { label: "Exercises", to: "/exercises" },
  { label: "Home", to: "/" },
  { label: "Stats", to: "/stats" },
  { label: "Settings", to: "/settings" },
];

export const SET_TYPES = {
  drop: 'drop',
  working: 'working',
  warmUp: 'warmUp'
}