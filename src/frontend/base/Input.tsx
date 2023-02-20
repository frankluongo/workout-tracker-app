import React from "react";

const views: InputViews = {
  select: Select,
  input: InputHTML,
  textarea: Textarea,
};

export const Input = ({
  action,
  dispatch,
  initialObj,
  inputTag,
  label,
  name,
  type: inputType,
  ...rest
}: InputProps) => {
  const InputElement = views[inputTag] || InputHTML;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputElement
        onChange={changeHandler}
        {...rest}
        name={name}
        type={inputType}
      />
    </div>
  );

  function changeHandler(e: any) {
    const value = inputType === "checkbox" ? e.target.checked : e.target.value;
    const { type, payload } = initialObj;
    payload.value = value;
    dispatch({ type, payload });
  }
};

function InputHTML(props: object) {
  return <input {...props} />;
}

function Select({ options, ...rest }: { options: Array<any> }) {
  return (
    <select {...rest}>
      {options.map((option: { _id: string; name: string }) => (
        <option key={option._id} value={option._id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

function Textarea(props: object) {
  return <textarea {...props} />;
}

interface InputViews {
  select: any;
  input: any;
  textarea: any;
}

interface InputProps {
  action: string;
  dispatch: Function;
  initialObj: { type: string; payload: { value: string } };
  inputTag: keyof InputViews;
  label: string;
  name: string;
  options?: Array<{ _id: string; name: string }>;
  type: string | null;
}
