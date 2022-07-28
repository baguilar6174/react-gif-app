import { useEffect, useState } from "react"
import { getGifsByCategory } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const gifs = await getGifsByCategory(category);
    setGifs(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getGifs();
  }, []);

  return {
    gifs,
    isLoading,
  }
}