import React from "react";

type Props = {
  children: any;
  color?: string;
  Tag:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "div"
    | "button"
    | "a";
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "link";
};

import css from "./Type.module.css";

export const Type = (props: Props) => {
  const { children, color, Tag, variant } = props;
  const style: any = {};
  if (color) style["--color"] = `var(--${color})`;
  return (
    <Tag className={`${css.Typography} ${variant}`} style={{ ...style }}>
      {children}
    </Tag>
  );
};

Type.defaultProps = {
  Tag: "span",
  variant: "",
};
