console.log("hola");

const URL='https://api.thecatapi.com/v1/images/search';

/*fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src = data[0].url;
    })
*/
const img =document.querySelector('img');

const cambiarImagen = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    img.src = data[0].url;
}

let boton = document.getElementById('btn');
cambiarImagen()
boton.addEventListener('click',cambiarImagen)