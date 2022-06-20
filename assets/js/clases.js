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

export const Plan1 = {
    categoria: "PLAN BASICO",
    precio: 1500,
    descripcion: ["1 x  Consulta","Plan Alimentario Personalizado","Nutrium app","Ebook","Comunicación Ilimitada con los Nutricionistas vía email","Lista del Supermercado"]
}

export const Plan2 = {
    categoria: "SILVER PACKAGE",
    precio: 2500,
    descripcion: ["1 x  Consulta","DNA Test para Dieta y Ejercicio","Test de Intolerancias Alimenticias(200 tipos de dietas)","1 x Plan Alimentario Personalizado","Nutrium app","Ebook","Comunicación Ilimitada con los Nutricionistas vía email","Lista del Supermercado"]
}
export const Plan3 = {
    categoria: "GOLD PACKAGE",
    precio: 3200,
    descripcion: ["3 x  Consulta","DNA Test para Dieta y Ejercicio","3 x Plan Alimentario Personalizado","Nutrium app","Ebook","Comunicación Ilimitada con los Nutricionistas vía email","Lista del Supermercado"]
}

//Aplico desestructoracion
const{categoria,precio,descripcion} = Plan1;
const{
    categoria: categoria2,
    precio: precio2,
    descripcion: descripcion2
}= Plan2

const{
    categoria: categoria3,
    precio: precio3,
    descripcion: descripcion3
}= Plan3

export function TraerPlanes (){
    return ` <h3>${categoria}</h3>
    <h4>$${precio}</h4>
    <ul>
        <li>${descripcion[0]}</li>
        <li>${descripcion[1]}</li>
        <li>${descripcion[2]}</li>
        <li>${descripcion[3]}</li>
        <li>${descripcion[4]}</li>
        <li>${descripcion[5]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}

export function TraerPlanes2 (){
    return ` <h3>${categoria2}</h3>
    <h4>$${precio2}</h4>
    <ul>
        <li>${descripcion2[0]}</li>
        <li>${descripcion2[1]}</li>
        <li>${descripcion2[2]}</li>
        <li>${descripcion2[3]}</li>
        <li>${descripcion2[4]}</li>
        <li>${descripcion2[5]}</li>
        <li>${descripcion2[6]}</li>
        <li>${descripcion2[7]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}


export function TraerPlanes3 (){
    return ` <h3>${categoria3}</h3>
    <h4>$${precio3}</h4>
    <ul>
        <li>${descripcion3[0]}</li>
        <li>${descripcion3[1]}</li>
        <li>${descripcion3[2]}</li>
        <li>${descripcion3[3]}</li>
        <li>${descripcion3[4]}</li>
        <li>${descripcion3[5]}</li>
        <li>${descripcion3[6]}</li>
      </ul>
    <button class="btnComprarPlan">COMPRAR</button>`
}