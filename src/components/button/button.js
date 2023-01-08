import React from 'react';

export const Button = ({
  children,
  onClick,
  variant,
  size,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}` + (disabled ? ' btn-disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};