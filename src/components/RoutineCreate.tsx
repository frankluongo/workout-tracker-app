import { RoutineInterface } from "#models/Routine";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { RoutineForm } from "./RoutineForm";

export const RoutineCreate = ({ exercises, routine }: RoutineCreateProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Routine</button>
      {showModal && (
        <Modal setShow={setShowModal} title="Add Routine">
          <RoutineForm routine={routine} exercises={exercises} />
        </Modal>
      )}
    </>
  );
};

interface RoutineCreateProps {
  exercises: Array<any>;
  routine?: RoutineInterface | null;
}
