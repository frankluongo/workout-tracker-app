import React from "react";

import css from "./PageHeader.module.css";

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  title,
}: PageHeaderProps) => {
  return (
    <header className={css.PageHeader}>
      <h2 className="h2 color:g12">{title}</h2>
      {children}
    </header>
  );
};

type PageHeaderProps = {
  children?: JSX.Element;
  title: string;
};
