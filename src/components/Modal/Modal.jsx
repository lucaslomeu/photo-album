import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import SizeChoice from '../SizeChoice/SizeChoice';
import './Modal.scss';

const Modal = ({
  id = 'modal',
  onClose = () => {},
  src,
  alt,
  photographer,
  photographer_url,
  fetchModal,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const openPhotographerUrl = () => {
    window.open(`${photographer_url}`);
  };

  return (
    <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <div className="modal-content">
          <div className="close-modal" onClick={onClose}>
            <RiCloseLine />
          </div>
          <div className="left-modal">
            <img className="img-modal" src={src} alt={alt} />
          </div>
          <div className="info-modal">
            <div onClick={openPhotographerUrl} className="photographer">
              {photographer}
            </div>
            <div className="photographer"></div>
            <div className="size-img">
              <SizeChoice size={fetchModal.src.small} text="Pequeno" />
              <SizeChoice size={fetchModal.src.medium} text="Médio" />
              <SizeChoice size={fetchModal.src.large} text="Largo" />
              <SizeChoice size={fetchModal.src.original} text="Original" />
              <SizeChoice size={fetchModal.src.portrait} text="Retrato" />
              <SizeChoice size={fetchModal.src.landscape} text="Paisagem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
