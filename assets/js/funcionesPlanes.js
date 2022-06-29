let respuesta;
let planes;

//Traigo datos de mi archivo json utilizando fetch y ruta relativa
export async function BuscarPlanes(i){
    respuesta = await fetch('./assets/js/planes.json');
    planes = await respuesta.json();
    return planes[i];
}

export async function TraerPlanes (){
    const datos = await BuscarPlanes(0);
    return ` <h3>${datos.categoria}</h3>
    <h4>$${datos.precio}</h4>
    <ul>
        <li>${datos.descripcion[0]}</li>
        <li>${datos.descripcion[1]}</li>
        <li>${datos.descripcion[2]}</li>
        <li>${datos.descripcion[3]}</li>
        <li>${datos.descripcion[4]}</li>
        <li>${datos.descripcion[5]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}

export async function TraerPlanes2 (){
    const datos = await BuscarPlanes(1);
    return ` <h3>${datos.categoria}</h3>
    <h4>$${datos.precio}</h4>
    <ul>
        <li>${datos.descripcion[0]}</li>
        <li>${datos.descripcion[1]}</li>
        <li>${datos.descripcion[2]}</li>
        <li>${datos.descripcion[3]}</li>
        <li>${datos.descripcion[4]}</li>
        <li>${datos.descripcion[5]}</li>
        <li>${datos.descripcion[6]}</li>
        <li>${datos.descripcion[7]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}


export async function TraerPlanes3 (){
    const datos = await BuscarPlanes(2);
    return ` <h3 class="tituloPlan">${datos.categoria}</h3>
    <h4>$${datos.precio}</h4>
    <ul>
        <li>${datos.descripcion[0]}</li>
        <li>${datos.descripcion[1]}</li>
        <li>${datos.descripcion[2]}</li>
        <li>${datos.descripcion[3]}</li>
        <li>${datos.descripcion[4]}</li>
        <li>${datos.descripcion[5]}</li>
        <li>${datos.descripcion[6]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}