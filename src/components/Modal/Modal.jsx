import React from 'react';

import './Modal.scss';

const Modal = ({
  id = 'modal',
  onClose = () => {},
  src,
  alt,
  photographer,
  children,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <div className="modal-content">
          <div className="left-modal">
            <img className="img-modal" src={src} alt={alt} />
          </div>
          <div className="info-modal">
            <div className="photographer">{photographer}</div>
            <div className="size-img">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
