import React from 'react';
import SearchInput from '../SearchInput/SearchInput';

import './HeroSection.scss';

const HeroSection = ({ onChange, src }) => {
  return (
    <div className="hero-section">
      <img className="img-bg" src={`${src}`} alt="Background" />
      <h1>Encontre as melhores imagens</h1>
      <SearchInput
        type="search"
        placeholder="Pesquise sua foto gratuitamente"
        onChange={onChange}
      />
    </div>
  );
};

export default HeroSection;
