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
  const token = '563492ad6f91700001000001c9f99ac2e2f24a48b34488987d3cda09';
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState('');
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modal, setModal] = useState(false);

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
      <HeroSection onChange={(search) => setPhoto(search)} />
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
        <Link to="/aleatorio" className="link-navbar">
          Aleatório
        </Link>
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

      <Footer />
    </div>
  );
};

export default Home;
