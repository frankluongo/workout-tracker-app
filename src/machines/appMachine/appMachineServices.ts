export async function fetchExercises() {
  try {
    const res = await fetch('/api/v1/exercises');
    return await res.json();
  } catch(e) {
    console.error(e);
  }
}

export async function addExercise(_: any, { data }: { data: object }) {
  try {
    const res = await fetch('/api/v1/exercises', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch(e) {
    console.error(e);
  }
}

export async function updateExercise(_: any, { data }: { data: object }) {
  try {
    const res = await fetch('/api/v1/exercises', {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch(e) {
    console.error(e);
  }
}