import { assign } from 'xstate';

export const addSet = assign((ctx: any, { i }: { i: number }) => {
  let sets = ctx.workout.exercises[i].sets;
  sets = [
    ...sets,
    { setCount: countSets(sets) + 1, weight: 165, reps: 5, logged: false }
  ];
  ctx.workout.exercises[i].sets = sets;
  return ctx
});

export const storeExercises = assign((_, action: { data: { payload: Array<object>}}) => {
  const exercises = action?.data?.payload || [];
  return { exercises }
});

export const addToExerciseStore = assign((context: any, { data }: any) => {
  const currentExercises = context?.exercises;
  const newExercise = data.payload;

  const match = currentExercises.find((ex: { _id: string }) => ex._id === newExercise._id);
  // If the exercise already exists, yeet!
  if (match) return;

  return { exercises: [...currentExercises, newExercise]};
});

export const updateExerciseStore = assign((context: any, { data }: any) => {
  const currentExercises: Array<any> = context?.exercises || [];
  const newExercise = data.payload;

  const match = currentExercises.findIndex((ex: { _id: string }) => ex._id === newExercise._id);
  currentExercises[match] = newExercise;

  return { exercises: [...currentExercises]};
});

export const updateSet = assign((ctx: any, { newState, exerciseIndex, setIndex }: { newState: object, exerciseIndex: number, setIndex: number }) => {
  ctx.workout.exercises[exerciseIndex].sets[setIndex] = newState;
  return ctx;
});

function countSets(sets: Sets[]): number {
  return sets.reduce((acc: number, cur) => acc + turnIntoInt(cur.setCount), 0)
}

function turnIntoInt(val: string|number) {
  if (typeof val === 'string') return 0;
  return 1;
}

interface Sets {
  setCount: string|number
}