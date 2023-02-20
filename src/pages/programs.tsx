import React from "react";

import { fetchPrograms } from "#backend/lib/programs";
import { Card } from "#base/Card/Card";
import { Creator } from "#base/Creator/Creator";
import { PageHeader } from "#base/PageHeader/PageHeader";
import { ProgramForm } from "#features/ProgramForm";
import { Content } from "#base/Content/Content";

type Props = {
  data: any;
};

const ProgramsPage = (props: Props) => {
  const programs = JSON.parse(props.data);
  return (
    <>
      <PageHeader title="Programs">
        <Creator
          createText="Create new program"
          FormComponent={ProgramForm}
          title="Create new program"
        />
      </PageHeader>
      <Content>
        {programs.map((program: any) => (
          <Card key={program._id}>{program.title}</Card>
        ))}
      </Content>
    </>
  );
};

export async function getServerSideProps() {
  const data = await fetchPrograms();
  return { props: { data } };
}

export default ProgramsPage;
