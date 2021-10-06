
import React, { useState } from "react";

export const AddSearch = ({ setEmoji }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setEmoji((emoj) => [inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una busqueda"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};
