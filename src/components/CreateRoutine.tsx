import { RoutineInterface } from "#models/Routine";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { RoutineForm } from "./RoutineForm";

export const CreateRoutine = ({
  exercises,
  routine,
}: {
  exercises: Array<any>;
  routine?: RoutineInterface | null;
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>CreateRoutine</button>
      {showModal && (
        <Modal setShow={setShowModal} title="Add Routine">
          <RoutineForm routine={routine} exercises={exercises} />
        </Modal>
      )}
    </>
  );
};
