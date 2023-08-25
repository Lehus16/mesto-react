import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
import { useForm } from "react-hook-form";

const AddPlacePopup = ({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}) => {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");
  const [isInputUrlValid, setIsInputUrlValid] = useState(true);
  const [isInputNameValid, setIsInputNameValid] = useState(true);
  const [isButtonDisabled, setButtonDisabled] = useState(true);


  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: placeName,
      link: placeLink
    })
  }

  const nameInputHandler = (e) => {
    setPlaceName(e.target.value);
    if (!e.target.value.lenght >= 2 && e.target.value.lenght <= 30) {
      setIsInputNameValid(true);
      setButtonDisabled(false);
    } else {
      setIsInputNameValid(false);
      setButtonDisabled(true);
    }
  };

  const urlInputHandler = (e) => {
    setPlaceLink(e.target.value);
    const regex =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;

    if (regex.test(e.target.value)) {
      setIsInputUrlValid(true);
      setButtonDisabled(false);
    } else {
      setIsInputUrlValid(false);
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    setPlaceName("");
    setPlaceLink("");
    setButtonDisabled(true);
    setIsInputUrlValid(true);
    setIsInputNameValid(true);
  }, [isOpen]);

  return (
    <PopupWithForm
      isButtonDisabled={!isButtonDisabled}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name={name}
      title={title}
      buttonText={!isLoading ? "Создание..." : buttonText}
    >
      <Input
        onChange={(e) => nameInputHandler(e)}
        value={placeName}
        name={"place-name"}
        minLength={2}
        maxLength={30}
        placeholder={"Название"}
        type={"text"}
        validateMessage={
          isInputNameValid
            ? ""
            : "Название должно быть от 2 до 30 символов"
        }
      />
      <Input
        onChange={(e) => urlInputHandler(e)}
        value={placeLink}
        name={"url"}
        placeholder={"Ссылка на картинку"}
        type={"url"}
        validateMessage={
          isInputUrlValid ? "" : "Укажите URL на картинку"
        }
      />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
