import React from 'react';
import SearchInput from '../SearchInput/SearchInput';

import './HeroSection.scss';

const HeroSection = ({ onChange }) => {
  return (
    <div className="hero-section">
      <h1>Encontre as melhores imagens</h1>
      <SearchInput
        type="search"
        placeholder="Search for free photos"
        onChange={onChange}
      />
    </div>
  );
};

export default HeroSection;
