

const URL_random='https://api.thecatapi.com/v1/images/search?limit=10&page=0&api_key=live_5v8rcjNV9f0gPMwDNBaqrKm6rNTyP2fwj7ylWCxxCvJwCMdTrQF9df4LiJTupue9';
const URL_favoritos='https://api.thecatapi.com/v1/favourites?limit=10&page=0';

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
    const data = await res.json();
 

    console.log('randoms',data);
    if(res.status!==200){
        spanError.innerHTML = 'Hubo un error' + res.status;
    }else{
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

const  favoritosMichis = async () =>{
    const res = await fetch(URL_favoritos);
    const data = await res.json();
 
    if(res.status!==200){
        spanError.innerHTML = 'Hubo un error' + res.status;
    }else{
        img1.src = data[0].url;
        img2.src = data[1].url;
    }

}

let boton = document.getElementById('btn');


cambiarTresImagenRandoms();
favoritosMichis();

boton.addEventListener('click',cambiarTresImagenRandoms);

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

