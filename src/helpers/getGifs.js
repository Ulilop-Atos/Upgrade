const API_KEY = 's72CgPyMo1BaTfGeqLLtNqeCK8SPOsbC';

const getGifs = async (query) => {
  const queryEncoded = encodeURIComponent(query);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${queryEncoded}&limit=25`;

  const response = await fetch( url );
  const { data } = await response.json();

  return data.map( gif => ({
      id: gif.id,
      title: gif.title? gif.title: query,
      url: gif.images.downsized.url,
  }));
}

export default getGifs;