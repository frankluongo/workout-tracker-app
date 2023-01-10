import { API } from "#common/constants";
import { appFetch } from "#lib/appFetch";

export async function fetchExercises() {
  return appFetch(API.exercises);
}

export async function addExercise(_: any, { data }: { data: object }) {
  return appFetch(API.exercises, 'POST', data);
}

export async function deleteExercise(_: any, { id }: { id: string }) {
  return appFetch(API.exercises, 'DELETE', { id })
}

export async function updateExercise(_: any, { data }: { data: object }) {
  return appFetch(API.exercises, 'PATCH', data);
}