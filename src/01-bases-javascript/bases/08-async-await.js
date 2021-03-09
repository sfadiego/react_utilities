const api_key = 'oCMI8hJjs2ZlBimVxVCIlwLrc5Laq2Sw';
const endpoint = 'http://api.giphy.com/v1/gifs/random';

//sin async
const getimgapi = () => new Promise((resolve) => resolve(endpoint))
getimgapi().then(console.log);


const getimgapiasync = async () => {
    try {
        const respuesta = await fetch(`${endpoint}?api_key=${api_key}`);
        const { data } = await respuesta.json()
        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getimgapiasync();