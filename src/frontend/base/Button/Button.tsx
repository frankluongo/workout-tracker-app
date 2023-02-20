import React from "react";

import css from "./Button.module.css";

type Props = {
  children?: any;
  onClick?: any;
  size: string;
  style: string;
  Tag: keyof JSX.IntrinsicElements;
  type?: any;
};

export const Button = (props: Props) => {
  const { children, Tag, size, style, ...rest } = props;
  return (
    <Tag className={css.Button} data-button={`${size} ${style}`} {...rest}>
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  Tag: "button",
  type: "button",
};
