export const API = {
  exercises: "/api/v1/exercises",
  programs: "/api/v1/programs",
  routines: "/api/v1/routines",
};

export const APP_STATES = {
  default: "default",
  exercises: "exercises",
  routines: "routines",
  settings: "settings",
  stats: "stats",
  workingOut: "workingOut",
};

interface OptionObj {
  _id: string;
  name: string;
}

export const EQUIPMENT: Array<OptionObj> = [
  { name: "Bands", _id: "Bands" },
  { name: "Barbell", _id: "Barbell" },
  { name: "Bodyweight", _id: "Bodyweight" },
  { name: "Cable Machine", _id: "Cable Machine" },
  { name: "Dumbbells", _id: "Dumbbells" },
  { name: "Plate-loaded Machine", _id: "Plate-loaded Machine" },
];

export const MUSCLE_GROUPS: Array<OptionObj> = [
  { name: "Biceps", _id: "Biceps" },
  { name: "Calves", _id: "Calves" },
  { name: "Chest", _id: "Chest" },
  { name: "Core", _id: "Core" },
  { name: "Glutes", _id: "Glutes" },
  { name: "Hamstrings", _id: "Hamstrings" },
  { name: "Lower Back", _id: "Lower Back" },
  { name: "Quads", _id: "Quads" },
  { name: "Shoulders", _id: "Shoulders" },
  { name: "Triceps", _id: "Triceps" },
  { name: "Upper Back", _id: "Upper Back" },
];

export const NAVIGATION = [
  { name: "Programs", to: "/programs" },
  { name: "Routines", to: "/routines" },
  { name: "Exercises", to: "/exercises" },
  { name: "Home", to: "/" },
  { name: "Stats", to: "/stats" },
  { name: "Settings", to: "/settings" },
];

export const SET_TYPES = {
  drop: "drop",
  working: "working",
  warmUp: "warmUp",
};
