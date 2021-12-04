import { useEffect, useState } from 'react';

const Api = (
  info,
  setInfo,
  photo,
  setPhoto,
  modalPhoto,
  setModalPhoto,
  modal,
  setModal,
  page,
  setPage,
  numReq,
  setNumReq,
) => {
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState('');
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [numReq, setNumReq] = useState(0);

  const token = '563492ad6f91700001000001df6ace1c5c0743ec91ef6450ca017412';
  // const token = `${process.env.REACT_APP_MY_API_TOKEN}`;

  useEffect(() => {
    const setQueryUrl = `https://api.pexels.com/v1/search?query=${photo}&page=${page}&per_page=15`;
    const standardUrl = `https://api.pexels.com/v1/popular?page=${page}&per_page=15`;

    setNumReq(numReq + 1);
    if (numReq <= 6) {
      if (photo !== '') {
        fetch(setQueryUrl, {
          headers: {
            Authorization: `${token}`,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            setInfo(data.photos);
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
          });
      }
    }
  }, [page, photo]);
};

export default api;
