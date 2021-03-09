const api_key = 'oCMI8hJjs2ZlBimVxVCIlwLrc5Laq2Sw';
const endpoint = 'http://api.giphy.com/v1/gifs/random';


const peticion = fetch(`${endpoint}?api_key=${api_key}`);

peticion
.then(response=> response.json())
.then(({data}) => {
    // console.log(data.images.original.url);
    const {url} = data.images.original;
    const img = document.createElement('img')
    img.src = url;

    document.body.append(img);

})
.catch(err => console.warn(err))
