import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm'
import Input from './Input'
const EditAvatarPopup = ({ name, title, buttonText, isOpen, onClose, onUpdateAvatar }) => {

  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  // const [avatar, setAvatar] = useState('')

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onUpdateAvatar({
  //     avatar: avatar
  //   });
  // }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen} name={name} title={title} buttonText={buttonText} >
      <input placeholder='Ссылка на картинку' className="popup__input popup__input_type_avatar" ref={inputRef} type='url' name='avatar' />
      <span className="popup__error popup__input-span popup__input-name-error popup__error_visible"></span>
      {/* <Input onChange={e => setAvatar(e.target.value)} value={avatar || ''} name={'avatar'} placeholder={'Ссылка на картинку'} type={'url'} /> */}
    </PopupWithForm>
  )
}

export default EditAvatarPopup
