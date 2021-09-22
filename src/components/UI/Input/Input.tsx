import React from 'react';
import cl from './Input.module.css';

export const Input: React.FC = (props, ref) => {
  return (
    <input ref={ref} className={cl.myInpt} {...props} />
  );
}
