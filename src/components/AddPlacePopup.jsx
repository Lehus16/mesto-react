import React, { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import Input from './Input'

const AddPlacePopup = ({ name, title, buttonText, isOpen, onClose, onSubmit }) => {
  const [placeName, setPlaceName] = useState('')
  const [placeLink, setPlaceLink] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: placeName,
      link: placeLink
    })
  }
  useEffect(() => {
    setPlaceName('')
    setPlaceLink('')
  }, [isOpen])

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name={name} title={title} buttonText={buttonText} >
      <Input onChange={e => setPlaceName(e.target.value)} value={placeName} name={'place-name'} minLength={2} maxLength={30} placeholder={'Название'} type={'text'} />
      <Input onChange={e => setPlaceLink(e.target.value)} value={placeLink} name={'url'} placeholder={'Ссылка на картинку'} type={'url'} />
    </PopupWithForm>
  )
}

export default AddPlacePopup
