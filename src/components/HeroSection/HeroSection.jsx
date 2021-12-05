import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './HeroSection.scss';

const HeroSection = ({
  onClick,
  firstTag,
  secondTag,
  thirdTag,
  fourthTag,
  info,
  setTag = () => {},
}) => {
  const suggestTags = (e) => {
    let tag = e.target.innerText;
    setTag(tag);
  };

  return (
    <div className="hero-section">
      <div className="title-hero">
        As <span>melhores</span> fotos estão aqui:
      </div>
      <SearchInput
        type="search"
        placeholder="Pesquise sua foto gratuitamente"
        onClick={onClick}
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

export default HeroSection;
