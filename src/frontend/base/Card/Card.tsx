import React from "react";

import css from "./Card.module.css";

export const Card = ({ children, Tag, type, ...rest }: any) => {
  return (
    <Tag className={css.Card} data-type={type} {...rest}>
      {children}
    </Tag>
  );
};

Card.defaultProps = {
  Tag: "div",
  type: "dark",
};
