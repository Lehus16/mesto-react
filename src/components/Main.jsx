import React, { useEffect, useState } from "react";
import { cardsData, userData } from "../utils/constants";
import Card from "./Card";
import myApi from '../utils/Api'




const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {


  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])


  useEffect(() => {
    myApi.getUserInfo().then(user => {
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
    })
    myApi.getInitialCards().then(cards => {
      setCards(cards)
    })
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-container">
          <button
            onClick={onEditAvatar}
            className="profile__image-edit"
          />
          <img
            src={userAvatar}
            className="profile__image"
            alt="Аватарка"
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            onClick={onEditProfile}
            aria-label="Редактировать профиль"
            type="button"
            className="profile__button-edit"
          />
          <p className="profile__paragraph">{userDescription}</p>
        </div>
        <button
          onClick={onAddPlace}
          aria-label="Добавить фотографию"
          type="button"
          className="profile__button-add"
        />
      </section>
      <section className="elements" aria-label="Элементы">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
};

export default Main;
