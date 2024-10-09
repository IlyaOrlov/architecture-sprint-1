import React from 'react';

import '../styles/popup/popup.css';
import '../styles/popup/_is-opened/popup_is-opened.css';


function PopupWithForm({
  title,
  name,
  isOpen,
  buttonText = 'Сохранить',
  onSubmit,
  children,
}) {

  function onClose() {
    dispatchEvent(new CustomEvent("close", {}))
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content">
        <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
          <button type="button" className="popup__close" onClick={onClose}></button>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="submit" className="button popup__button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
