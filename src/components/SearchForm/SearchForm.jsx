import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './SearchForm.scss';

const SearchForm = ({
  onClick,
  onChange,
  firstTag,
  secondTag,
  thirdTag,
  fourthTag,
  info,
  setTag,
}) => {
  const suggestTags = (e) => {
    let tag = e.target.innerText;
    setTag(tag);
  };

  return (
    <div className="search-section">
      <div className="title-search">
        As <span>melhores</span> fotos estão aqui:
      </div>
      <SearchInput
        type="search"
        placeholder="Pesquise sua foto gratuitamente"
        onClick={onClick}
        onChange={onChange}
      />
      {!info && (
        <div className="suggets-tags">
          <h3>Tags:</h3>
          <p onClick={suggestTags}>{firstTag}</p>
          <p onClick={suggestTags}>{secondTag}</p>
          <p onClick={suggestTags}>{thirdTag}</p>
          <p onClick={suggestTags}>{fourthTag}</p>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
