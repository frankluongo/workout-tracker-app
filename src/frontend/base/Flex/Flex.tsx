import React from "react";

import css from "./Flex.module.css";

type Props = {
  children: any;
  direction: "row" | "column";
  gap: string;
  Tag: any;
};

export const Flex = (props: Props) => {
  const { children, direction, gap, Tag } = props;
  const style = {
    "--direction": direction,
    "--gap": gap,
  };
  return (
    <Tag className={css.Flex} style={{ ...style }}>
      {children}
    </Tag>
  );
};

Flex.defaultProps = {
  direction: "row",
  gap: "1rem",
  Tag: "div",
};
