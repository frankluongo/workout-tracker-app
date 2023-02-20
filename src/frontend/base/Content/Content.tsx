import React from "react";

import css from "./Content.module.css";

type Props = {
  children?: JSX.Element;
};

export const Content = ({ children }: Props) => {
  return <section className={css.Content}>{children}</section>;
};
