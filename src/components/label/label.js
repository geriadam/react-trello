import React from 'react';

export const Label = ({
  title,
  variant
}) => {
  return (
    <label className={`label label-${variant}`}>
      {title}
    </label>
  );
};