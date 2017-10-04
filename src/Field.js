import React from 'react';

import './Field.css';

const Field = ({ name, label, children, ...inputProps }) => (
  <div className='Field flex-grid-thirds'>
    <label htmlFor={name} className='col1'>
      <strong>{label || name}</strong>
    </label>
    {children || <input className='Field-input col2' type="text" name={name} {...inputProps} />}
  </div>
);

export default Field;
