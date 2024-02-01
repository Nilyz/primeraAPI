const URL_random =
    "https://api.thecatapi.com/v1/images/search?limit=10&page=0&api_key=live_5v8rcjNV9f0gPMwDNBaqrKm6rNTyP2fwj7ylWCxxCvJwCMdTrQF9df4LiJTupue9";
const URL_favoritos =
    "https://api.thecatapi.com/v1/favourites?api_key=live_5v8rcjNV9f0gPMwDNBaqrKm6rNTyP2fwj7ylWCxxCvJwCMdTrQF9df4LiJTupue9";

const spanError = document.getElementById("error");

/*fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img =document.querySelector('img');
        img.src = data[0].url;
    })
*/

const cambiarTresImagenRandoms = async () => {
    const res = await fetch(URL_random);
    if (res.status < 200 || res.status > 299) {
        spanError.innerHTML = "Hubo un error" + res.status;
    }
    const data = await res.json();
    console.log("randoms", data);
    img1.src = data[0].url;
    img2.src = data[1].url;

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");

    let btn_fav1 = document.getElementById("btn_fav1");
    btn_fav1.addEventListener("click", guardarFavoritos);

    let btn_fav2 = document.getElementById("btn_fav2");
    btn_fav2.addEventListener("click", guardarFavoritos);
};

const favoritosMichis = async () => {
    const res = await fetch(URL_favoritos);
    if (res.status < 200 || res.status > 299) {
        spanError.innerHTML = "Hubo un error: " + res.status;
        return null;
    }
    const data = await res.json();

    console.log("favoritos", data);
    data.forEach((michi) => {
        const section = document.getElementById("michisFav");
        const article = document.createElement("article");
        const imagen = document.createElement("img");
        const btn = document.createElement("button");
        const btnText = document.createTextNode("sacar de favoritos");

        btn.appendChild(btnText);
        imagen.src = michi.image.url;
        imagen.width = 150;
        article.appendChild(imagen);
        article.appendChild(btn);
        section.appendChild(article);
    });
};

const guardarFavoritos = async (id) => {
    console.log("entrando a favoritos");
    const res = await fetch(URL_favoritos, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            image_id: id,
        }),
    });

    if (res.status < 200 || res.status > 299) {
        spanError.innerHTML = "Hubo un error: " + res.status;
    }

    console.log(res);
};

let boton = document.getElementById("btn");
boton.addEventListener("click", cambiarTresImagenRandoms);

cambiarTresImagenRandoms();
favoritosMichis();
