 export default class Nutricionistas {
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