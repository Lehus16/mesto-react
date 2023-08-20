import React, { useContext, useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import Input from './Input'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

const EditProfilePopup = ({ formName, title, buttonText, isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext)
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: about,
    });
  }
  useEffect(() => {
    setName(currentUser.name)
    setAbout(currentUser.about)
  }, [currentUser, isOpen])

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name={formName} title={title} buttonText={buttonText}>
      <Input onChange={e => setName(e.target.value)} value={name || ''} name={'name'} minLength={2} maxLength={40} placeholder={'Имя'} type={'text'} />
      <Input onChange={e => setAbout(e.target.value)} value={about || ''} name={'occupation'} minLength={2} maxLength={200} placeholder={'О себе'} type={'text'} />
    </PopupWithForm>
  )
}

export default EditProfilePopup
