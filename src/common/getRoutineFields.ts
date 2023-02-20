import { RoutineInterface } from "#backend/models/Routine";

export function getRoutineFields(routine?: RoutineInterface | null) {
  return [
    {
      defaultValue: routine?.title || "",
      id: "title",
      input: "text",
      inputTag: "input",
      label: "Title",
      name: "title",
      required: true,
    },
  ];
}
