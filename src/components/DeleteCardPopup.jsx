import React from 'react'
import PopupWithForm from './PopupWithForm'
const DeleteCardPopup = ({ name, title, buttonText, isOpen, onClose, onSubmit }) => {

  return (
    <PopupWithForm onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} name={name} title={title} buttonText={buttonText} />

  )
}

export default DeleteCardPopup
