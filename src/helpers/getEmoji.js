export const getCategory = async () => {
  const URL = "https://emoji-api.com/";
  const API_KEY = "74f69d45f3dbe4cb9241212e7ecadd9eb5549e3b";
  const resp = await fetch(`${URL}categories?access_key=${API_KEY}`);
  const [...data] = await resp.json();

  const emojis = data.map((categoria, ind) => {
    return {
      id: ind,
      nombre: categoria.slug,
    };
  });

  return emojis;
};
