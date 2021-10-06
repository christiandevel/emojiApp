export const getSearchEmoji = async (emoji) => {
  const URL = "https://emoji-api.com/emojis";
  const API_KEY = "74f69d45f3dbe4cb9241212e7ecadd9eb5549e3b";

  const resp = await fetch(`${URL}?search=${emoji}&access_key=${API_KEY}`);
  const [...data] = await resp.json();

  const emojis = data.map((emoji, ind) => {
    return {
      id: ind,
      nombre: emoji.slug,
      caracter: emoji.character,
      group: emoji.group,
      resume: emoji.unicodeName,
    };
  });

  return emojis;
};
