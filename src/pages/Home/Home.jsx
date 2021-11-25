import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import '../../assets/styles/reset.scss';

const Home = () => {
  const token = '563492ad6f91700001000001c9f99ac2e2f24a48b34488987d3cda09';
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch('https://api.pexels.com/v1/search?query=summer?page=1&per_page=15', {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setPhoto(data.photos);
      });
  }, [photo]);

  console.log(photo);
  return (
    <div>
      <Header />
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      <h2>Oi</h2>
      {/* {photo.map((img) => (
        <li>
          {' '}
          {img.id}
          <img src={img.src.small}></img>
        </li>
      ))} */}
      <Footer />
    </div>
  );
};

export default Home;
