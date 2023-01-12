import React from "react";
import { Input } from "./Input";

import { useForm } from "#hooks/useForm";

export const Form = ({
  formChildren,
  initialState,
  submitHandler,
  submitText,
}: FormPropsInterface) => {
  const { state, dispatch } = useForm(initialState);
  return (
    <form className="form block-gap:16" onSubmit={onSubmit}>
      {formChildren.map((input: any) => (
        <Input key={input.id} dispatch={dispatch} {...input} />
      ))}
      <button type="submit">{submitText}</button>
    </form>
  );

  function onSubmit(e: any) {
    e.preventDefault();
    submitHandler(state);
  }
};

Form.defaultProps = {
  initialState: {},
};

interface FormPropsInterface {
  formChildren: any;
  initialState: object;
  submitHandler: Function;
  submitText: string;
}
