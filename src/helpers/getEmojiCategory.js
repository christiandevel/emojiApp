export const getEmogiCategory = async (category) => {
  const URL = "https://emoji-api.com/";
  const API_KEY = "74f69d45f3dbe4cb9241212e7ecadd9eb5549e3b";

  const resp = await fetch(
    `${URL}categories/${category}?access_key=${API_KEY}`
  );
  const [...data] = await resp.json();

  const emojiCategory = data.map((emoji) => {
    return {
      nombre: emoji.slug,
      caracter: emoji.character,
      resume: emoji.unicodeName,
    };
  });

  return emojiCategory;
};
