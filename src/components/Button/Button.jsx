import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <IoMdAddCircleOutline />
    </button>
  );
};

export default Button;
