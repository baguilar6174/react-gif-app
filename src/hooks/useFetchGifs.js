import { useEffect, useState } from "react"
import { getGifsByCategory } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    setGifs(await getGifsByCategory(category));
  }

  useEffect(() => {
    getGifs();
    setIsLoading(false);
  }, []);

  return {
    gifs,
    isLoading,
  }
}