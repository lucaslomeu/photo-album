import React from 'react';

import SearchInput from '../SearchInput/SearchInput';

import './HeroSection.scss';

const HeroSection = ({ onClick }) => {
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
    </div>
  );
};

export default HeroSection;
