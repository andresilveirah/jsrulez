import React from 'react';

const Field = ({ name, label, children, ...inputProps }) => (
  <div className="field">
    <label htmlFor={name}>
      <strong>{label || name}</strong>
    </label>
    {children || <input type="text" name={name} {...inputProps} />}
  </div>
);

export default Field;
