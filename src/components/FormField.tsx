import React from "react";

export const FormField = ({ field }: FormFieldProps) => {
  const Tag = field.inputTag;
  console.log(field);

  if (Tag === "select") {
    return (
      <div>
        <label htmlFor={field.name}>{field.label}</label>
        <select>
          {field?.options?.map((opt) => (
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
      <label htmlFor={field.name}>{field.label}</label>
      <Tag
        type={field.input}
        required={field.required}
        defaultValue={field.defaultValue}
      />
    </div>
  );
};

interface FormFieldProps {
  field: FormFieldInterface;
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
