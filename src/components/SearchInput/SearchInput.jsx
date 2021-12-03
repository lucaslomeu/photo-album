import React from 'react';

import './SearchInput.scss';

import { HiOutlineSearchCircle } from 'react-icons/hi';

const SearchInput = ({ type = 'search', placeholder, onClick }) => {
  function handleChange(e) {
    if (e.key === 'Enter') {
      onClick(e.target.value);
    }
  }

  function handleClick() {
    let inputValue = document.querySelector('input.search-input').value;
    onClick(inputValue);
  }

  return (
    <div className="search-container">
      <div className="box-search">
        <input
          className="search-input"
          type={type}
          placeholder={placeholder}
          onKeyPress={handleChange}
        />
        <button className="search-btn" type="submit" onClick={handleClick}>
          <HiOutlineSearchCircle />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
