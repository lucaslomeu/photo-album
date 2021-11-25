import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';

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
          console.log(info);
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
          console.log(info);
        });
    }
  }, [photo]);

  return (
    <div>
      <Header />
      <HeroSection onChange={(search) => setPhoto(search)} />
      <div className="list-navbar">
        <p>Newest</p>
        <p>Popular</p>
        <p>Random</p>
        <p>Sort by</p>
      </div>

      {info && (
        <ul className="list-images">
          {info.map((img) => (
            <li className="item-img">
              <img
                src={img.src.portrait}
                alt={`Photography number ${img.id}`}
              ></img>
            </li>
          ))}
        </ul>
      )}

      <Footer />
    </div>
  );
};

export default Home;
