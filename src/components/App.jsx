import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
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
            <Main />
            <Footer />
            <div className="popup popup-edit popup-overlay">
                <div className="popup__window">
                    <form
                        autoComplete="off"
                        noValidate={true}
                        name="popup-edit"
                        className="popup__form popup-edit__form"
                    >
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <input
                            autoComplete="off"
                            required={true}
                            minLength={2}
                            maxLength={40}
                            className="popup__input popup__input_type_name"
                            id="popup__input-name"
                            placeholder="Имя"
                            type="text"
                            name="popup__input_type_name"
                        />
                        <span className="popup__error popup__input-span popup__input-name-error popup__error_visible" />
                        <input
                            autoComplete="off"
                            required={true}
                            minLength={2}
                            maxLength={200}
                            className="popup__input popup__input_type_occupation"
                            id="popup__input-occupation"
                            placeholder="О себе"
                            type="text"
                            name="popup__input_type_occupation"
                        />
                        <span className="popup__error popup__input-span popup__input-occupation-error popup__error_visible" />
                        <button
                            aria-label="Сохранить"
                            type="submit"
                            className="popup__button popup__button-save"
                        >
                            Сохранить
                        </button>
                    </form>
                    <button
                        aria-label="Закрыть окно редактирования"
                        type="button"
                        className="popup-edit__button-close popup__button-close"
                    />
                </div>
            </div>
            <div className="popup popup-add popup-overlay">
                <div className="popup__window">
                    <form
                        autoComplete="off"
                        noValidate={true}
                        name="popup-add"
                        className="popup__form popup-add__form"
                    >
                        <h2 className="popup__title">Новое место</h2>
                        <input
                            autoComplete="off"
                            required={true}
                            minLength={2}
                            maxLength={30}
                            className="popup__input popup__input_type_place-name"
                            id="popup__input-place-name"
                            placeholder="Название"
                            type="text"
                            name="popup__form_type_name"
                        />
                        <span className="popup__error popup__input-span popup__input-place-name-error popup__error_visible" />
                        <input
                            autoComplete="off"
                            required={true}
                            type="url"
                            className="popup__input popup__input_type_url"
                            id="popup__input-url"
                            placeholder="Ссылка на картинку"
                            name="popup__form_type_url"
                        />
                        <span className="popup__error popup__input-span popup__input-url-error popup__error_visible" />
                        <button
                            disabled={true}
                            aria-label="Создать"
                            type="submit"
                            className="popup__button popup__button-make popup__button_disabled"
                        >
                            Создать
                        </button>
                    </form>
                    <button
                        aria-label="Закрыть окно редактирования"
                        type="button"
                        className="popup-add__button-close popup__button-close"
                    />
                </div>
            </div>
            <div className="popup popup-image popup-overlay">
                <div className="popup-image__container">
                    <img className="popup-image__picture" alt="#" src="#" />
                    <p className="popup-image__caption" />
                    <button className="popup__button-close popup-image__button-close" />
                </div>
            </div>
            <div className="popup popup-delete popup-overlay">
                <div className="popup__window">
                    <form
                        className="popup__form popup-delete__form"
                        name="popup-delete"
                    >
                        <h2 className="popup__title popup__delete-title">
                            Вы уверены?
                        </h2>
                        <button className="popup__button" type="submit">
                            Да
                        </button>
                        <button
                            type="button"
                            className="popup__button-close popup-delete__button-close"
                        />
                    </form>
                </div>
            </div>
            <div className="popup popup-avatar popup-overlay">
                <div className="popup__window">
                    <form
                        className="popup__form popup-avatar__form"
                        name="popup-avatar"
                    >
                        <h2 className="popup__title">Обновить аватар</h2>
                        <input
                            autoComplete="off"
                            required={true}
                            type="url"
                            className="popup__input"
                            id="popup__input-image-url"
                            placeholder="Ссылка на картинку"
                            name="popup__form_type_avatar"
                        />
                        <span className="popup__error popup__input-span popup__input-image-url-error popup__error_visible" />
                        <button
                            disabled={true}
                            className="popup__button popup__button_disabled"
                            type="submit"
                        >
                            Сохранить
                        </button>
                        <button className="popup__button-close popup-avatar__button-close" />
                    </form>
                </div>
            </div>
            <template id="element" />
        </div>
    );
}

export default App;
