import React from "react";
import { Input } from "../Input";

import { useForm } from "#frontend/hooks/useForm";

import css from "./Form.module.css";
import { Button } from "#base/Button/Button";

export const Form = ({
  children,
  formChildren,
  initialState,
  submitHandler,
  submitText,
}: FormPropsInterface) => {
  const { state, dispatch } = useForm(initialState);
  return (
    <form className={css.Form} onSubmit={onSubmit}>
      {formChildren && (
        <>
          {formChildren.map((input: any) => (
            <Input key={input.id} dispatch={dispatch} {...input} />
          ))}
        </>
      )}
      {children && <>{children}</>}
      <Button size="small" style="save" type="submit">
        {submitText}
      </Button>
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
  children?: any;
  formChildren?: any;
  initialState: object;
  submitHandler: Function;
  submitText: string;
}
