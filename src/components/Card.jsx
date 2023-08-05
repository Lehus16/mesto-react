import React from "react";


const Card = ({ card, onCardClick }) => {

  const handleClick = (card) => {
    onCardClick(card)
  }


  return (

    <figure className="element">
      <button className="element__trash" />
      <img onClick={() => {
        handleClick(card)
      }} className="element__image" src={card.link} alt={card.name} />
      <figcaption className="element__footer">
        <h3 className="element__paragraph">
          {card.name}
        </h3>
        <div className="element__button-container">
          <button
            aria-label="Поставить лайк"
            type="button"
            className="element__button"
          />
          <p className="element__likes">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>

  )
}


export default Card;
