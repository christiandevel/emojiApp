import React, { useState } from "react";
import { AddSearch } from "./components/AddSearch";
import { CategoriesEmoji } from "./components/CategoriesEmoji";
import { Emoji } from "./components/Emoji";
import { EmojiGrid } from "./components/EmojiGrid";

export const EmojiApp = () => {
	
  const [emoji, setEmoji] = useState(["computer"]);
	const [categoria, setCategori] = useState(["travel-places"])

  return (
    <>
      <h1>Emoji App</h1>
      <CategoriesEmoji />
      <AddSearch setEmoji={setEmoji} />
      <div>
        {emoji.map((emo) => (
          <Emoji key={emo} emoji={emo} />
        ))}
      </div>
      <EmojiGrid category={"travel-places"} />
    </>
  );
};
