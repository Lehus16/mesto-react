import React from "react";

const Main = () => {
    const handleEditAvatarClick = () => {
        const popup = document.querySelector(".popup-avatar");
        if (!popup) {
            return;
        } else {
            popup.classList.add("popup__openned");
        }
    };

    const handleEditProfileClick = () => {
        const popup = document.querySelector(".popup-edit");
        if (!popup) {
            return;
        } else {
            popup.classList.add("popup__openned");
        }
    };

    const handleAddPlaceClick = () => {
        const popup = document.querySelector(".popup-add");
        if (!popup) {
            return;
        } else {
            popup.classList.add("popup__openned");
        }
    };
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__image-container">
                    <button
                        onClick={handleEditAvatarClick}
                        className="profile__image-edit"
                    />
                    <img
                        src="#"
                        className="profile__image"
                        alt="Фотография Кусто"
                    />
                </div>

                <div className="profile__info">
                    <h1 className="profile__title">Алексей Ушаков</h1>
                    <button
                        onClick={handleEditProfileClick}
                        aria-label="Редактировать профиль"
                        type="button"
                        className="profile__button-edit"
                    />
                    <p className="profile__paragraph">frontend dev</p>
                </div>
                <button
                    onClick={handleAddPlaceClick}
                    aria-label="Добавить фотографию"
                    type="button"
                    className="profile__button-add"
                />
            </section>
            <section className="elements" aria-label="Элементы" />
        </main>
    );
};

export default Main;
