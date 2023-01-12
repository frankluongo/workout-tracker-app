import React, { useState } from "react";
import { ExerciseForm } from "./ExerciseForm";
import { Modal } from "./Modal";

export const ExerciseCreate = ({
  children,
  exercise,
  formSubmitText,
  method,
  modalTitle,
}: ExerciseCreateProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="button:default" onClick={() => setShowModal(true)}>
        {children}
      </button>
      {showModal && (
        <Modal setShow={setShowModal} title={modalTitle}>
          <ExerciseForm
            exercise={exercise}
            submitText={formSubmitText}
            method={method}
          />
        </Modal>
      )}
    </>
  );
};

ExerciseCreate.defaultProps = {
  exercise: {},
  method: "POST",
};

interface ExerciseCreateProps {
  children: any;
  exercise?: any;
  formSubmitText: string;
  method: string;
  modalTitle: string;
}
