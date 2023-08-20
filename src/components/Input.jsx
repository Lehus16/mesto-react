import React from "react";


const Input = ({ name, minLength, maxLength, placeholder, type, value, onChange, ref }) => {

  return (
    <>
      <input
        onChange={onChange}
        value={value}
        autoComplete="off"
        required=""
        minLength={minLength ? minLength : ''}
        maxLength={maxLength ? maxLength : ''}
        className={`popup__input popup__input_type_${name ? name : ''}`}
        id="popup__input-name"
        placeholder={placeholder}
        type={type}
        name={`popup__input_type_${name ? name : ''}`}
      />
      <span className="popup__error popup__input-span popup__input-name-error popup__error_visible"></span>
    </>


  )
}


export default Input;
