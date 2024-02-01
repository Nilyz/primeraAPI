const URL_random='https://api.thecatapi.com/v1/images/search?limit=10&page=0&api_key=live_5v8rcjNV9f0gPMwDNBaqrKm6rNTyP2fwj7ylWCxxCvJwCMdTrQF9df4LiJTupue9';
const URL_favoritos='https://api.thecatapi.com/v1/favourites';

const spanError= document.getElementById('error');

/*fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src = data[0].url;
    })
*/


const cambiarTresImagenRandoms = async () => {
    const res = await fetch(URL_random);
    if(res.status<200 || res.status>299){
        spanError.innerHTML = 'Hubo un error' + res.status;
    }
    const data = await res.json();
    console.log('randoms',data);
    img1.src = data[0].url;
    img2.src = data[1].url;
}

const  favoritosMichis = async () =>{
    const res = await fetch(URL_favoritos);
    if(res.status<200 || res.status>299){
        spanError.innerHTML = 'Hubo un error: ' + res.status;
    }
    const data = await res.json();
    console.log('favoritos', data);

    /*if(res.status!==200){
    }else{
    } */

}

let boton = document.getElementById('btn');


cambiarTresImagenRandoms();
favoritosMichis();

boton.addEventListener('click',cambiarTresImagenRandoms);

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

