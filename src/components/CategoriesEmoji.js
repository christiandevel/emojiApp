import React from "react";
import { UseFetchEmojis } from "../hooks/UseFetchEmojis";

export const CategoriesEmoji = () => {
	
	const handleSumbit = (e) => {
		console.log(e.target.innerText)
	}
	
  const { data } = UseFetchEmojis();

  return (
    <>
      <p className="categoria-title">Categorias</p>
      <div className="categorias">
        {data.map((cats) => (
          <a key={cats.id} onClick={handleSumbit}> {cats.nombre}</a>
        ))}
      </div>
    </>
  );
};
