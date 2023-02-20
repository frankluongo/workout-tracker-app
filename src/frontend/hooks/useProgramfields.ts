import { ProgramModel } from "#backend/models/Program";
import { fieldBuilder } from "#frontend/utils/fieldBuilder";
import { FormActions } from "./useForm";

export function useProgramFields(program: ProgramModel | undefined) {
  return [
    fieldBuilder({
      key: "title",
      label: "Title",
      obj: program,
      type: FormActions.SET_VALUE,
    }),
  ];
}
