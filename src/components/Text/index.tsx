import React from "react";
type TextProps = React.HTMLAttributes<any> & {
  font?: "primary" | "secondary";
  color?:
    | "light"
    | "grey"
    | "dark"
    | "danger"
    | "success"
    | "grey2"
    | "grey6"
    | "grey7"
    | "grey8"
    | "primary-color"
    | "primary-light"
    | "black"
    | "info";
  weight?: "normal" | "medium" | "semi-bold" | "bold" | "heavy";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "tiny";
  align?: "left" | "center" | "right" | "justify";
  href?: string;
  variant?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
  sizeCustom?: string;
};

const Text = (props: TextProps) => {
  const { variant, className, children, font, color, weight, size, sizeCustom, align, ...rest } = props;

  const classes = [
    align || "inherit",
    font || "primary",
    weight || "medium",
    size || "xs",
    color || "inherit",
    className || "",
  ];

  if (variant == "p" || variant == undefined) {
    return (
      <p style={{ fontSize: sizeCustom }} className={classes.join(" ")} {...rest}>
        {children}
      </p>
    );
  }

  if (variant == "a") {
    return (
      <a
        style={{ fontSize: sizeCustom }}
        className={classes.join(" ")}
        href={props.href}
        rel='noreferrer'
        target={"_blank"}
        {...rest}
      >
        {children}
      </a>
    );
  }
  if (variant == "span") {
    return (
      <span style={{ fontSize: sizeCustom }} className={classes.join(" ")} {...rest}>
        {children}
      </span>
    );
  }
};

export default Text;
