import React from "react";

const PopupImage = ({ card, cardData, onClose }) => {
  return (
    <div onClick={() => {
      onClose();
    }} className={`popup popup-image popup-overlay ${card ? 'popup__openned' : ''}`}>
      <div onClick={(e) => e.stopPropagation()} className="popup-image__container" >
        <img className="popup-image__picture" alt={cardData.name} src={cardData.link} />
        <p className="popup-image__caption">{cardData.name}</p>
        <button onClick={onClose} className="popup__button-close popup-image__button-close" />
      </div>
    </div>
  )
}

export default PopupImage;
