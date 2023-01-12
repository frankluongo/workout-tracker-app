export class SuperFormData extends FormData {
  constructor(data: any) {
    super(data);
  }

  toJson() {
    const obj: any = {};
    obj.title = this.get('title');
    obj.exercises = [];
    if (!obj.title) throw new Error('Title is required');
    const exercises = parseInt(this?.get('exercisesLength'));
    Array.from({ length: exercises }).forEach((_, i) => {
      const exerciseObj: any = {};
      const keys = [...this.keys()].filter(key => key.includes(`exercise-${i}`));
      keys.forEach(key => {
        const newKey = key.replace(`exercise-${i}.`, '');
        exerciseObj[newKey] = this.get(key);
      });
      obj.exercises.push(exerciseObj);
    });
    return obj;
  }
}