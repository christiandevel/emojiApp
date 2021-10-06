import React from "react";
import { UseFetchSearch } from "../hooks/UseFetchSearch";

export const Emoji = ({ emoji }) => {
  const { data } = UseFetchSearch(emoji);

  return (
    <>
			<p className="title-search">Resultados de Busqueda para: {emoji}</p>
			<div className="grid-search">
				{data.map((emoji) => (
					<li className="list-search" key={emoji.id}>{emoji.caracter}</li>
				))}
			</div>
    </>
  );
};
