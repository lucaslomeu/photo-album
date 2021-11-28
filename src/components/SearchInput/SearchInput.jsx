import React from 'react';

import './SearchInput.scss';
import { HiOutlineSearchCircle } from 'react-icons/hi';

const SearchInput = ({ type = 'search', placeholder, onChange }) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  function change(e) {
    if (e.key === 'Enter') {
      handleChange(e);
    }
  }

  function handleClick() {
    let inputValue = document.querySelector('input.search-input').value;
    onChange(inputValue);
  }

  return (
    <div className="search-container">
      <div className="box-search">
        <input
          className="search-input"
          type={type}
          placeholder={placeholder}
          onKeyPress={change}
        />
        <button className="search-btn" type="submit" onClick={handleClick}>
          <HiOutlineSearchCircle />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
