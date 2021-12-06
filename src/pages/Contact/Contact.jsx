import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Contact.scss';

const Contact = () => {
  let name = document.querySelector('input.input-name');
  let email = document.querySelector('input.input-email');
  let topic = document.querySelector('input.input-topic');
  let textarea = document.querySelector('textarea.input-textarea');

  const handleClick = () => {
    if (name === '' || email === '' || topic === '' || textarea === '') {
      alert('Favor completar todos os campos!');
    } else {
      alert('Email enviado com sucesso!');
      resetForm();
    }
  };

  const resetForm = () => {
    document.getElementById('form-contact').reset();
  };

  return (
    <>
      <Header />
      <div className="container-form">
        <h1 className="title-contact">Entre em contato conosco</h1>
        <form id="form-contact">
          <input
            className="input-name"
            type="text"
            name="name"
            placeholder="Nome"
          ></input>
          <input
            className="input-email"
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            className="input-topic"
            type="text"
            name="topic"
            placeholder="Assunto"
          ></input>
          <textarea
            className="input-textarea"
            name="textarea"
            placeholder="Digite aqui sua mensagem..."
          ></textarea>
          <div className="btn-form">
            <input
              type="button"
              className="btn-reset"
              onClick={resetForm}
              value="Cancelar"
            />
            <input
              type="button"
              className="btn-submit"
              onClick={handleClick}
              value="Enviar"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
