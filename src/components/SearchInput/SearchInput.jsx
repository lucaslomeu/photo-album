import React, { useState } from 'react';
import './SearchInput.scss';
import { HiOutlineSearchCircle } from 'react-icons/hi';

const SearchInput = ({ type = 'search', placeholder, onClick }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      onClick(value);
    }
  };

  const handleClick = () => {
    onClick(value);
  };

  return (
    <div className="search-container">
      <div className="box-search">
        <input
          className="search-input"
          type={type}
          placeholder={placeholder}
          onKeyPress={handleChange}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit" onClick={handleClick}>
          <HiOutlineSearchCircle />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
