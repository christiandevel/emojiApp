import React from "react";
import { useFetchCategoryEmogi } from "../hooks/UseFetchCategori";
import { EmojiGridItem } from "./EmojiGridItem";

export const EmojiGrid = ({ category }) => {
  const { data } = useFetchCategoryEmogi(category);
  return (
    <>
      <p className="categoria-title">{category}</p>
			<div className="grid-emoji">
				{data.map((cat) => (
					<EmojiGridItem key={cat.nombre} {...cat} />
					// <li key={cat.nombre}> {cat.caracter}</li>
				))}
			</div>
    </>
  );
};
