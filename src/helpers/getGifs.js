export const getGifsByCategory = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YbG96pwnopR7ANIWm0BO1UovGzmAFWa6&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
}