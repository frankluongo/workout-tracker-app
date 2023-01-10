// Boolean (true/false) fields:
const booleanFields = ['archived', 'timed', 'unilateral'];
// Number fields
const numberFields = ['baseWeight', 'oneRepMax'];

export function validateExercise(obj: any) {
  // These fields will come through as "on" if checked,
  // so we need to set them to "true" instead:
  booleanFields.forEach((prop) => {
    obj[prop] = !!obj[prop];
  });

  // These fields will come through as strings,
  // so lets make them integers:
  numberFields.forEach((prop) => {
    const value = obj[prop];
    if (!value || typeof value === 'number') return;
    obj[prop] = parseInt(value);
  });

  // Make sure the exercise has a name:
  if (!obj.name) throw new Error('Name field is required.');
  
  // return our validated object:
  return obj;
}
 