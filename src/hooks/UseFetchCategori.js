import { useState, useEffect } from "react";
import { getEmogiCategory } from "../helpers/getEmojiCategory";

export const useFetchCategoryEmogi = (category) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getEmogiCategory(category).then((cat) => {
      setState({
        data: cat,
      });
    });
  }, [category]);

  return state;
};
