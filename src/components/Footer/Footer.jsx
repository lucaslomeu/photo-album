import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-credits">
        Fotos fornecidas por <a href="https://www.pexels.com/">Pexel</a>
      </div>
      <div className="footer-developer">
        Website desenvolvido por{' '}
        <a href="https://github.com/lucaslomeu">Lucas Lomeu</a>
      </div>
    </div>
  );
};

export default Footer;
