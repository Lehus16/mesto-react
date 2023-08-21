import React, { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import Input from './Input'
const EditAvatarPopup = ({ name, title, buttonText, isOpen, onClose, onUpdateAvatar, isLoading }) => {

  const [avatar, setAvatar] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar
    });
  }

  useEffect(() => {
    setAvatar('')
  }, [isOpen])

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name={name} title={title} buttonText={!isLoading ? 'Сохранение...' : buttonText} >
      <Input onChange={e => setAvatar(e.target.value)} value={avatar || ''} name={'avatar'} placeholder={'Ссылка на картинку'} type={'url'} />
    </PopupWithForm>
  )
}

export default EditAvatarPopup
