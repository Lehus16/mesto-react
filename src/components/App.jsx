import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupImage from "./PopupImage";
import Input from "./Input";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardData, setCardData] = useState({})
  const [escBtnHandle, setEscBtnHandle] = useState(false);


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
    setEscBtnHandle(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
    setEscBtnHandle(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
    setEscBtnHandle(true)
  };

  const handleCardClick = (card) => {
    setCardData(card);
    setSelectedCard(true);
    setEscBtnHandle(true)
  }

  const closeAllPopups = () => {
    setSelectedCard(false);
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setEscBtnHandle(false)
  }

  return (
    <div>
      {/* <div className="page-overlay">
                <img
                    className="page-overlay__logo"
                    src="<%=require('../images/Logo.svg')%>"
                    alt=""
                />
            </div> */}
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm escBtnHandle={escBtnHandle} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'}>
        <Input name={'name'} minLength={2} maxLength={40} placeholder={'Имя'} type={'text'} />
        <Input name={'occupation'} minLength={2} maxLength={200} placeholder={'О себе'} type={'text'} />
      </PopupWithForm>
      <PopupWithForm escBtnHandle={escBtnHandle} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} >
        <Input name={'place-name'} minLength={2} maxLength={30} placeholder={'Название'} type={'text'} />
        <Input name={'url'} placeholder={'Ссылка на картинку'} type={'url'} />
      </PopupWithForm>
      <PopupWithForm escBtnHandle={escBtnHandle} onClose={closeAllPopups} name={'delete'} title={'Вы уверены?'} buttonText={'Да'} >

      </PopupWithForm>
      <PopupWithForm escBtnHandle={escBtnHandle} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} >
        <Input name={'avatar'} placeholder={'Ссылка на картинку'} type={'url'} />
      </PopupWithForm>

      <PopupImage escBtnHandle={escBtnHandle} card={selectedCard} cardData={cardData} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
