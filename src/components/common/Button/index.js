import React from 'react';
import './button.css'

const Button = ({buttonText, onClick, customClasses,prefix}) => {
  return <div className={`button-wrapper flex absolute-center ${customClasses}`}  onClick={onClick}>
 {prefix} {buttonText}
  </div>;
};

export default Button;
