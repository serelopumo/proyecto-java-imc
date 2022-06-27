export class Nutricionistas {
    constructor(nombre, barrio, direccion, especialidad, obrasocial, telefono,imagen) {
        this.nombre = nombre;
        this.barrio = barrio;
        this.direccion = direccion;
        this.especialidad = especialidad;
        this.obrasocial = obrasocial;
        this.telefono = telefono;
        this.imagen =  imagen;
    }
    crearHtml = () => {
        return `<img src="${this.imagen}" class="section3__contenido--imagen" alt="${this.nombre}">
                <h3 class="section3__contenido--titulo">${this.nombre}</h3>
                <div class="section3__contenido--datos">
                    <p>Barrio: ${this.barrio} <br>Dirección: ${this.direccion}<br>Especialidad: ${this.especialidad}<br>Obra social: ${this.obrasocial} <br>Teléfono: ${this.telefono}</p>
                </div>`
    }

}

let respuesta;
let planes;

//Traigo datos de mi archivo json utilizando fetch y ruta relativa
async function BuscarPlanes(i){
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