import React from 'react';

const SizeChoice = ({ size, text }) => {
  return (
    <a href={size} target="_blank" rel="noreferrer">
      <p>{text}</p>
    </a>
  );
};

export default SizeChoice;
