

const URL='https://api.thecatapi.com/v1/images/search?limit=10&page=0&api_key=live_5v8rcjNV9f0gPMwDNBaqrKm6rNTyP2fwj7ylWCxxCvJwCMdTrQF9df4LiJTupue9';

/*fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src = data[0].url;
    })
*/


const cambiarImagen = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    console.log(data)
}

let boton = document.getElementById('btn');
cambiarImagen()
boton.addEventListener('click',cambiarImagen)

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
