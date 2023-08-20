import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupImage from "./PopupImage";
import Input from "./Input";
import myApi from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardData, setCardData] = useState({})


  function escBtnHandle(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
    window.removeEventListener('keydown', escBtnHandle);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    myApi.changeLikeCardStatus(card, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    myApi.deleteCard(card).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function handleUpdateUser({ name, about }) {
    myApi.patchUserInfo({ name, about }).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar({ avatar }) {
    myApi.patchUserAvatar({ avatar }).then((data) => {
      console.log(data, avatar);
      setCurrentUser(data);
      closeAllPopups();
    })
  }

  function handleAddPlaceSubmit({ name, link }) {
    myApi.postNewCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
    window.addEventListener('keydown', escBtnHandle)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
    window.addEventListener('keydown', escBtnHandle)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
    window.addEventListener('keydown', escBtnHandle)
  };

  const handleCardClick = (card) => {
    setCardData(card);
    setSelectedCard(true);
    window.addEventListener('keydown', escBtnHandle)
  }

  const closeAllPopups = () => {
    setSelectedCard(false);
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }


  useEffect(() => {
    myApi.getUserInfo().then(user => {
      setCurrentUser(user)
    });
    myApi.getInitialCards().then(cards => {
      setCards(cards)
    });
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <CardsContext.Provider value={cards}>
        <div>
          {/* <div className="page-overlay">
                <img
                    className="page-overlay__logo"
                    src="<%=require('../images/Logo.svg')%>"
                    alt=""
                />
            </div> */}
          <Header />
          <Main onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <EditProfilePopup onUpdateUser={handleUpdateUser} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} formName={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'}>
            <Input name={'name'} minLength={2} maxLength={40} placeholder={'Имя'} type={'text'} />
            <Input name={'occupation'} minLength={2} maxLength={200} placeholder={'О себе'} type={'text'} />
          </EditProfilePopup>
          <AddPlacePopup onSubmit={handleAddPlaceSubmit} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} >
            <Input name={'place-name'} minLength={2} maxLength={30} placeholder={'Название'} type={'text'} />
            <Input name={'url'} placeholder={'Ссылка на картинку'} type={'url'} />
          </AddPlacePopup>
          <PopupWithForm onClose={closeAllPopups} name={'delete'} title={'Вы уверены?'} buttonText={'Да'} >

          </PopupWithForm>
          <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} >
            <Input name={'avatar'} placeholder={'Ссылка на картинку'} type={'url'} />
          </EditAvatarPopup>

          <PopupImage card={selectedCard} cardData={cardData} onClose={closeAllPopups} />

        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
