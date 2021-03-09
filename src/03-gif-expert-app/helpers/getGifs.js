export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oCMI8hJjs2ZlBimVxVCIlwLrc5Laq2Sw&limit=10&q=${encodeURI(categoria)}`
    const request = await fetch(url);
    const { data } = await request.json();
    const newObject = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        }
    });

    return newObject;
}