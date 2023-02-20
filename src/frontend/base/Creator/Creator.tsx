import React, { useState } from "react";
import { Modal } from "#base/Modal/Modal";
import { Button } from "#base/Button/Button";

type Props = {
  createText: string;
  FormComponent: React.FunctionComponent<any>;
  [key: string]: any;
  title: string;
};

export const Creator = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { createText, FormComponent, title, ...rest } = props;
  return (
    <>
      <Button size="small" style="save" onClick={() => setShowModal(true)}>
        {createText}
      </Button>
      {showModal && (
        <Modal setShow={setShowModal} title={title}>
          <FormComponent createText={createText} {...rest} />
        </Modal>
      )}
    </>
  );
};
