import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import SelectInput from '../../components/SelectInput/SelectInput';

import '../../assets/styles/reset.scss';

import './Home.scss';

const Home = () => {
  // const token = '563492ad6f917000010000011a0345788a394ca0ad1bc4cfa3a8beb3';
  const token = '563492ad6f91700001000001c9f99ac2e2f24a48b34488987d3cda09';
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (photo) {
      fetch(`https://api.pexels.com/v1/search?query=${photo}?per_page=15`, {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setInfo(data.photos);
        });
    } else {
      fetch(`https://api.pexels.com/v1/popular?per_page=12`, {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setInfo(data.photos);
        });
    }
  }, [photo]);

  return (
    <div>
      <Header />
      <HeroSection
        // src={info ? info[1].src.small :
        // {(info === 'random')[1].src.small}}
        onChange={(search) => setPhoto(search)}
      />
      <div className="list-navbar">
        <p className="link-navbar">Newest</p>
        <p className="link-navbar">Popular</p>
        <p className="link-navbar">Random</p>
      </div>

      {info && (
        <div className="list-result">
          {!photo ? (
            <div className="header-list">Fotos gratuitas</div>
          ) : (
            <div className="header-list">{photo}</div>
          )}
          <ul className="list-images">
            {info.map((img) => (
              <li key={img.id} className="item-img">
                <img
                  src={img.src.portrait}
                  alt={`Photography number ${img.id}`}
                ></img>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
