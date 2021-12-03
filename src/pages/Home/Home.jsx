import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Modal from '../../components/Modal/Modal';
import SizeChoice from '../../components/SizeChoice/SizeChoice';

import '../../assets/styles/reset.scss';
import './Home.scss';

const Home = () => {
  const token = `${process.env.REACT_APP_MY_API_TOKEN}`;

  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState('');
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  const setQueryUrl = `https://api.pexels.com/v1/search?query=${photo}&page=${page}&per_page=15`;
  const standardUrl = `https://api.pexels.com/v1/popular?page=${page}&per_page=15`;
  const randomUrl = `https://api.pexels.com/v1/random?page=${page}&per_page=15`;

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

  function randomGenerator() {
    let inputValue = 'Random';
    setPage(1);
    setPhoto(inputValue);
  }

  return (
    <>
      <Header />
      <HeroSection onClick={() => handleSearch()} />
      <div className="list-navbar">
        {!photo ? (
          <Link to="/" className="link-navbar">
            Álbum de Fotos
          </Link>
        ) : (
          <Link to="/" className="link-navbar">
            {photo}
          </Link>
        )}
        <Link to="/novo" className="link-navbar">
          Novo
        </Link>
        <Link to="/popular" className="link-navbar">
          Popular
        </Link>
        <button onClick={() => randomGenerator()}>Aleatorio</button>
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
        <Modal onClose={() => setModal(false)}>
          <div className="modal-content">
            <div className="left-modal">
              <img
                className="img-modal"
                src={modalPhoto.src.medium}
                alt={modalPhoto.id}
              />
            </div>
            <div className="info-modal">
              <div className="photographer">{modalPhoto.photographer}</div>
              <div className="size-img">
                <SizeChoice size={modalPhoto.src.small} text="Pequeno" />
                <SizeChoice size={modalPhoto.src.medium} text="Médio" />
                <SizeChoice size={modalPhoto.src.large} text="Largo" />
                <SizeChoice size={modalPhoto.src.original} text="Original" />
                <SizeChoice size={modalPhoto.src.portrait} text="Retrato" />
                <SizeChoice size={modalPhoto.src.landscape} text="Paisagem" />
              </div>
            </div>
          </div>
        </Modal>
      ) : null}

      <button onClick={() => setPage(page + 1)}>PROX</button>
      <Footer />
    </>
  );
};

export default Home;
