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
import Logo from '../images/Logo.svg';
import PageOverlay from "./PageOverlay";
import DeleteCardPopup from "./DeleteCardPopup";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardData, setCardData] = useState({})
  const [isLoading, setIsLoading] = useState(true);


  function escBtnHandle(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    myApi.changeLikeCardStatus(card, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleCardDelete(e) {
    e.preventDefault();
    closeAllPopups();
  }

  function handleUpdateUser({ name, about }) {
    myApi.patchUserInfo({ name, about }).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    })
  }

  function handleUpdateAvatar({ avatar }) {
    myApi.patchUserAvatar({ avatar }).then((data) => {
      console.log(data, avatar);
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    })
  }

  function handleAddPlaceSubmit({ name, link }) {
    myApi.postNewCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    })
  }

  const handleTrashBtnClick = () => {
    setIsDeleteCardPopupOpen(true)
    window.addEventListener('keydown', escBtnHandle)
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
    setIsDeleteCardPopupOpen(false)
    setSelectedCard(false);
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    window.removeEventListener('keydown', escBtnHandle);
  }



  useEffect(() => {
    myApi.getUserInfo().then(user => {
      setCurrentUser(user)
    }).catch((err) => {
      console.error(err);
    });
    myApi.getInitialCards().then(cards => {
      setCards(cards)
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    });
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <CardsContext.Provider value={cards}>
        <div>
          <PageOverlay isLoading={isLoading} Logo={Logo} />
          <Header />
          <Main handleTrashBtnClick={handleTrashBtnClick} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <EditProfilePopup onUpdateUser={handleUpdateUser} onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} formName={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'}>
          </EditProfilePopup>
          <AddPlacePopup onSubmit={handleAddPlaceSubmit} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name={'add'} title={'Новое место'} buttonText={'Создать'} >
          </AddPlacePopup>
          <DeleteCardPopup onSubmit={handleCardDelete} isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} name={'delete'} title={'Вы уверены?'} buttonText={'Да'} >

          </DeleteCardPopup>
          <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} >
          </EditAvatarPopup>

          <PopupImage card={selectedCard} cardData={cardData} onClose={closeAllPopups} />

        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
