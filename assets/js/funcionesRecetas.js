//DECLARO VARIABLES
let inputReceta;

//CREO EVENTO EN EL INPUT BUSCAR RECETA DE LA BARRA DE BUSQUEDA
export async function BuscarRecetas() {
    inputReceta = document.getElementById('inputBuscarReceta');
    inputReceta.addEventListener('input', () => {
        console.log(inputReceta.value)
    });
}

//LLAMO A MI API CONSULTANDO LA RECETA BUSCADA
export async function LlamarApi() {
    let APP_ID = "220a1d60";
    let APP_KEY = "e4aa815d97272f0e7b21246cab19ff33";
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${inputReceta.value}`);
    let data = await response.json();

    data.hits.forEach(element => {
        traerRecetas(element)
    })
    console.log(data)

    //Creo evento para el signo + de cada receta, para traer mas info de la misma
    const search = document.querySelectorAll('.searchmore');
    search.forEach(function (userItem) {
        userItem.addEventListener('click', (e) => {
            //Busco el label del elemento clickeado
            const theTarget = e.target.parentElement.childNodes[2].innerHTML;
            console.log(theTarget)
            //Guardo mi objeto clickeado
            const ObjetoBuscado = (Object.values(data)[5].filter((e) => e.recipe.label == theTarget))
            //Agrego alerta con las especificaciones de la receta
            Swal.fire({
                title: `${ObjetoBuscado[0].recipe.label}`,
                text: `Ingredientes: ${ObjetoBuscado[0].recipe.ingredientLines}`,
                imageUrl: `${ObjetoBuscado[0].recipe.image}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: `${ObjetoBuscado[0].recipe.label}`,
            })
        })
    });
}

//CARGO LOS DATOS DE LAS RECETAS BUSCADAS UTILIZANDO API EXTERNA
export async function traerRecetas(data) {
    const contenidoRecetas = document.getElementById('section4__recetas');
    let nuevaRecetacontenido = document.createElement('div')
    nuevaRecetacontenido.className = "section4__cardReceta";
    nuevaRecetacontenido.innerHTML = `<div class="section4__cardReceta--individual"><img src="${data.recipe.image}" class="section4__cardReceta--imagen" alt="${data.recipe.label}">
    <h3 class="section4__cardReceta--titulo">${data.recipe.label}</h3>
    <div class="section4__cardReceta--datos">
        <p>Calorias: ${data.recipe.calories.toFixed(0)} <br>Tipo de comida: ${data.recipe.dishType}</p>
    </div>  <i  class="fa-solid fa-plus searchmore" ></i></div>`
    contenidoRecetas.append(nuevaRecetacontenido)
}

//BORRO CONTENIDO DE LAS RECETAS DEL HTML
export function BorrarContenidoRecetas(contenidoRecetas){
    contenidoRecetas.innerHTML = "";
}