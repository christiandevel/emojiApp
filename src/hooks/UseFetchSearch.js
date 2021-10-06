import { useEffect, useState } from "react";
import { getSearchEmoji } from "../helpers/getSearchEmoji";

export const UseFetchSearch = (emoji) => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getSearchEmoji(emoji).then((emojis) => {
      setState({
        data: emojis,
      });
    });
  }, [emoji]);

  return state;
};
