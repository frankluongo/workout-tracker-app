import { Card } from "#base/Card/Card";
import { Creator } from "#base/Creator/Creator";
import { Flex } from "#base/Flex/Flex";
import { Type } from "#base/Type/Type";
import { ExerciseDelete } from "#frontend/features/ExerciseDelete";
import { ExerciseSchemaInterface } from "#ts/types/ExerciseSchemaInterface";
import { ExerciseForm } from "./ExerciseForm";

export const Exercise = ({
  exercise,
}: {
  exercise: ExerciseSchemaInterface;
}) => {
  return (
    <>
      <Card data-archived={exercise.archived}>
        <Flex direction="column">
          <Flex direction="column" gap="0.5rem" Tag="header">
            <h3 className="h3">{exercise.name}</h3>
            {exercise.notes && <p>{exercise.notes}</p>}
          </Flex>
          <Flex Tag="section" direction="column" gap="0.5rem">
            <Type variant="h4" Tag="div">
              <Type color="g7">Equipment:&nbsp;</Type>
              {exercise.equipment}
            </Type>
            <div>
              <strong>Muscle Group:&nbsp;</strong>
              {exercise.muscleGroup}
            </div>
          </Flex>
          <Flex>
            <Creator
              createText="Edit exercise"
              method="PATCH"
              FormComponent={ExerciseForm}
              title="Edit exercise"
            />
            {!exercise.archived && <ExerciseDelete id={exercise._id} />}
          </Flex>
        </Flex>
      </Card>
    </>
  );
};
