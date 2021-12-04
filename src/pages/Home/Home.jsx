import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Modal from '../../components/Modal/Modal';
import SizeChoice from '../../components/SizeChoice/SizeChoice';
import Button from '../../components/Button/Button';

import '../../assets/styles/reset.scss';
import './Home.scss';

const Home = () => {
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState('');
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  const token = `${process.env.REACT_APP_MY_API_TOKEN}`;

  const setQueryUrl = `https://api.pexels.com/v1/search?query=${photo}&page=${page}&per_page=15`;
  const standardUrl = `https://api.pexels.com/v1/popular?page=${page}&per_page=15`;

  useEffect(() => {
    if (photo !== '') {
      fetch(setQueryUrl, {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setInfo(data.photos);
          console.log(page);
        });
    } else {
      fetch(standardUrl, {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setInfo(data.photos);
          console.log(page);
        });
    }
  }, [page, photo]);

  function handleSearch() {
    let inputValue = document.querySelector('input.search-input').value;
    setPage(1);
    setPhoto(inputValue);
  }

  function randomGenerator(e) {
    let inputValue = document.querySelector('button.btn').innerText;
    console.log(inputValue);
    setPage(1);
    setPhoto(inputValue);
  }

  return (
    <>
      <Header />
      <HeroSection onClick={() => handleSearch()} />
      <div className="list-navbar">
        {!photo ? <Button text="Álbum de Fotos" /> : <Button text={photo} />}
        <Button text="Novo" onClick={() => randomGenerator()} />
        <Button text="Popular" onClick={() => randomGenerator()} />
        <Button text="Aleatório" onClick={() => randomGenerator()} />
      </div>
      {info && (
        <div className="list-result">
          <ul className="list-images">
            {info.map((img) => (
              <li key={img.id} className="item-img">
                <img
                  src={img.src.portrait}
                  alt={`Photography number ${img.id}`}
                  onClick={() => {
                    setModalPhoto(img);
                    setModal(true);
                  }}
                ></img>
              </li>
            ))}
          </ul>
        </div>
      )}

      {modal ? (
        <Modal
          onClose={() => setModal(false)}
          src={modalPhoto.src.medium}
          alt={modalPhoto.id}
          photographer={modalPhoto.photographer}
        >
          <div className="size-img">
            <SizeChoice size={modalPhoto.src.small} text="Pequeno" />
            <SizeChoice size={modalPhoto.src.medium} text="Médio" />
            <SizeChoice size={modalPhoto.src.large} text="Largo" />
            <SizeChoice size={modalPhoto.src.original} text="Original" />
            <SizeChoice size={modalPhoto.src.portrait} text="Retrato" />
            <SizeChoice size={modalPhoto.src.landscape} text="Paisagem" />
          </div>
        </Modal>
      ) : null}

      <button onClick={() => setPage(page + 1)}>PROX</button>
      <Footer />
    </>
  );
};

export default Home;
