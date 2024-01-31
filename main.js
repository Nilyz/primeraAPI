console.log("hola");

const URL='https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        data[0].url
    })
