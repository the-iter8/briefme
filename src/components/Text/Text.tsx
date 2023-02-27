import React from 'react';

const Text = (props) => {
  const {
    variant,
    className,
    children,
    font,
    color,
    weight,
    size,
    align,
    ...rest
  } = props;

  const classes = [
    align || 'inherit',
    font || 'primary',
    weight || 'medium',
    size || 'md',
    color || 'inherit',
    className || '',
  ];

  if (variant == 'p' || variant == undefined) {
    return <p className={classes.join(' ')}>{children}</p>;
  }
  if (variant == 'a') {
    return (
      <a
        className={classes.join(' ')}
        href={props.href}
        rel='noreferrer'
        target={'_blank'}
      >
        {children}
      </a>
    );
  }
};

export default Text;

export type TextProps = React.HTMLAttributes<any> & {
  font?: 'primary' | 'secondary';
  color?:
    | 'light'
    | 'grey'
    | 'dark'
    | 'danger'
    | 'success'
    | 'grey2'
    | 'grey6'
    | 'grey7'
    | 'grey8'
    | 'primary-color'
    | 'primary-light'
    | 'black'
    | 'info';
  weight?: 'normal' | 'medium' | 'semi-bold' | 'bold' | 'heavy';
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'tiny';
  align?: 'left' | 'center' | 'right' | 'justify';
  variant?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
};
