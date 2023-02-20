const defaults = {
  inputTag: "input",
  inputType: "text",
  required: true,
};

export function fieldBuilder(props: FieldBuilderProps) {
  const fields = {
    ...defaults,
    ...props,
  };

  return {
    defaultValue: fields?.obj?.[fields?.key] || "",
    id: fields.key,
    initialObj: { type: fields.type, payload: { field: fields.key } },
    inputTag: fields.inputTag,
    label: fields.label,
    name: fields.key,
    required: fields.required,
    type: fields.inputType,
  };
}

type FieldBuilderProps = {
  inputTag?: string;
  inputType?: string;
  key: string;
  label: string;
  obj?: any;
  required?: boolean;
  type: string;
};
