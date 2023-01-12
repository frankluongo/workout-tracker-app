import React from "react";

export const FormField = ({ field, subField }: FormFieldProps) => {
  const Tag = field.inputTag;

  const name = subField ? `${subField}.${field.name}` : field.name;
  const id = subField ? `${subField}.${field.id}` : field.id;

  if (Tag === "select") {
    return (
      <div>
        <label htmlFor={name}>{field.label}</label>
        <select id={id} name={name}>
          {field?.options?.map((opt: any) => (
            <option key={opt._id} value={opt._id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name}>{field.label}</label>
      <Tag
        type={field.input}
        required={field.required}
        id={id}
        name={name}
        defaultValue={field.defaultValue}
      />
    </div>
  );
};

interface FormFieldProps {
  field: FormFieldInterface | any;
  subField?: string | number;
}

interface FormFieldInterface {
  defaultValue: string | null;
  id: string;
  input: string;
  inputTag: string;
  label: string;
  name: string;
  required: boolean;
  type: string;
  options?: Array<any>;
}
