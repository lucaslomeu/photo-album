import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Modal from '../../components/Modal/Modal';

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

  const openSizeImage = (size) => {
    window.open(`${size}`);
  };
  return (
    <div>
      <Header />
      <HeroSection onChange={(search) => setPhoto(search)} />
      <div className="list-navbar">
        {!photo ? (
          <p className="link-navbar">Álbum de Fotos</p>
        ) : (
          <p className="link-navbar">{photo}</p>
        )}
        <p className="link-navbar">Newest</p>
        <p className="link-navbar">Popular</p>
        <p className="link-navbar">Aleatório</p>
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
                {/* CRIAR UM MAP/FOREACH PARA CADA TAMANHO DE IMAGEM E ABRIR EM UMA NOVA ABA IGUAL OS ANCORAS ABAIXO */}

                <a href={modalPhoto.src.small} target="_blank" rel="noreferrer">
                  Pequeno
                </a>
                <a
                  href={modalPhoto.src.medium}
                  target="_blank"
                  rel="noreferrer"
                >
                  Médio
                </a>
                <a href={modalPhoto.src.large} target="_blank" rel="noreferrer">
                  Largo
                </a>
                <a
                  href={modalPhoto.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  Original
                </a>
                <a
                  href={modalPhoto.src.portrait}
                  target="_blank"
                  rel="noreferrer"
                >
                  Retrato
                </a>
                <a
                  href={modalPhoto.src.landscape}
                  target="_blank"
                  rel="noreferrer"
                >
                  Paisagem
                </a>
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
