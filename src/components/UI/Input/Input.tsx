import React, { FC, InputHTMLAttributes } from 'react';
import cl from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} className={cl.myInpt} />
    </div>
  );
}
