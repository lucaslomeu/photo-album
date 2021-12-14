import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

import '../../assets/styles/reset.scss';
import './Home.scss';

const Home = () => {
  const [info, setInfo] = useState();
  const [photo, setPhoto] = useState('');
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = `563492ad6f917000010000011a0345788a394ca0ad1bc4cfa3a8beb3`;
    const setQueryUrl = `https://api.pexels.com/v1/search?query=${photo}&page=${page}&per_page=15`;

    if (photo) {
      fetch(setQueryUrl, {
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setInfo((info) => (info ? [...info, ...data.photos] : data.photos));
        });
    }
  }, [page, photo]);

  const newRender = () => {
    setPage(page + 1);
  };

  const setTag = (tag) => {
    setPhoto(tag);
  };

  const searchClickRender = (value) => {
    setPage(1);
    setPhoto(value);
    setInfo(null);
  };

  return (
    <div className="container">
      <Header />
      <SearchForm
        onClick={(value) => searchClickRender(value)}
        firstTag="Música"
        secondTag="Gato"
        thirdTag="Verão"
        fourthTag="Pizza"
        setTag={setTag}
        info={info}
      />
      {info && (
        <div className="container">
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
          <Button onClick={newRender} />
        </div>
      )}
      {modal ? (
        <Modal
          onClose={() => setModal(false)}
          src={modalPhoto.src.medium}
          alt={modalPhoto.id}
          photographer={modalPhoto.photographer}
          photographer_url={modalPhoto.photographer_url}
          fetchModal={modalPhoto}
        ></Modal>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
