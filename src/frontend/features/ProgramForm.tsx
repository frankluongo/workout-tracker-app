import React from "react";

import { ProgramModel } from "#backend/models/Program";
import { Form } from "#base/Form/Form";
import { useProgramFields } from "#frontend/hooks/useProgramfields";
import { appFetch } from "#common/appFetch";
import { API } from "#common/constants";

export const ProgramForm = (props: Props) => {
  const { program } = props;
  const fields = useProgramFields(program);
  return (
    <Form
      initialState={program}
      formChildren={fields}
      submitHandler={submitHandler}
      submitText="Add Program"
    />
  );

  async function submitHandler(data: any) {
    try {
      const res = await appFetch(API.programs, "POST", data);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
};

ProgramForm.defaultProps = {
  program: {},
};

type Props = {
  program?: ProgramModel;
};
