import { useEffect, useState } from "react";
import { getCategory } from "../helpers/getEmoji";

export const UseFetchEmojis = () => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getCategory().then((emojis) => {
      setState({
        data: emojis,
        loading: false,
      });
    });
  }, []);

  return state;
};
