const APIKey = 's72CgPyMo1BaTfGeqLLtNqeCK8SPOsbC';

const petition = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIKey}`);

petition
    .then( resp => resp.json() )
    .then( ({data}) =>  {
        const { url }  = data.images.original
        console.log(url);
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    })
    .catch(console.warn);