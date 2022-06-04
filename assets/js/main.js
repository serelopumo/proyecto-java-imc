/*Calculo del requerimiento energetico diario/calorias diarias recomendadas.
Lo obtengo por la Fórmula de Mifflin-St Jeor y luego le sumo el porcentaje de Actividad
Fisica. 
Para Hombres GER(kcal/dia) = (10 x peso(kg)) + [6,25 x T(cm)] - [5 x E(años)] + 5
Para Mujeres GER(kcal/dia) = (10 x peso(kg)) + [6,25 x T(cm)] - [5 x E(años)] - 161
Porcentaje que debe adicionarse segun Actividad Fisica
Sedentaria---------------------------30%
Moderada o Poco Activa --------------50%
Activa o moderadamente activa -------75%
Muy Activa o Intensa ----------------100%
GER + AF = GED
*/

//declaro variables
let genero;
let peso;
let talla;
let edad;
let actividadFisica;
let resultadoFormula;

let pesoIMC;
let tallaIMC;
let resIMC;
let resClasificacion;

//declaro clases
class Nutricionistas {
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

//declaro funciones
function preguntarDatos() {
    genero = parseInt(prompt("Ingrese su genero: \n Ingrese 0 si es un hombre \n Ingrese 1 si es mujer"));
    while ((genero != 0) && (genero != 1)) {
        genero = parseInt(prompt("Ingrese su genero: \n Ingrese 0 si es un hombre \n Ingrese 1 si es mujer"));
    }
    peso = parseInt(prompt("Ingrese su peso en kg:"));
    while (!peso) {
        peso = parseInt(prompt("Ingrese su peso en kg:"));
    }
    talla = parseInt(prompt("Ingrese su talla en cm:"));
    while (!talla) {
        talla = parseInt(prompt("Ingrese su talla en cm:"));
    }
    edad = parseInt(prompt("Ingrese su edad:"));
    while (!edad) {
        edad = parseInt(prompt("Ingrese su edad:"));
    }
    actividadFisica = parseInt(prompt("Ingrese su actividad fisica: \n Ingrese 0 para sedentario\n Ingrese 1 para moderado o poco activo\n Ingrese 2 para activo\n Ingrese 3 para muy activo"));
    while (!(actividadFisica == 0 || actividadFisica == 1 || actividadFisica == 2 || actividadFisica == 3)) {
        actividadFisica = parseInt(prompt("Ingrese su actividad fisica: \n Ingrese 0 para sedentario\n Ingrese 1 para moderado o poco activo\n Ingrese 2 para activo\n Ingrese 3 para muy activo"));
    }
}

function calcularFormula() {
    if (genero == 0) {
        resultadoFormula = (10 * peso) + (6.25 * talla) - (5 * edad) + 5;
    } else if (genero == 1) {
        resultadoFormula = (10 * peso) + (6.25 * talla) - (5 * edad) - 161;
    }
    switch (actividadFisica) {
        case 0:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.3);
            break;
        case 1:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.5);
            break;
        case 2:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.75);
            break;
        default:
            resultadoFormula = resultadoFormula * 2;
            break;
    }
}
const calcularIMC = () => {
    tallaIMC = tallaIMC * 0.01
    resIMC = pesoIMC / (Math.pow(tallaIMC, 2))
}
const datosIMC = () => {
    // let labelAltura = document.getElementById("labelIMCaltura");
    // tallaIMC = parseInt(labelAltura.innerHTML);
    // console.log(tallaIMC)
    pesoIMC = parseInt(prompt("Ingresar su peso actual en kg:"));
    while (!pesoIMC) {
        pesoIMC = parseInt(prompt("Ingresar su peso actual en kg:"));
    }
    tallaIMC = parseInt(prompt("Ingrese su talla en cm"));
    while (!tallaIMC) {
        tallaIMC = parseInt(prompt("Ingrese su talla en cm"));
    }

}
const categoriaIMC = () => {
    if (resIMC < 18.5) {
        resClasificacion = "Bajo peso"
    } else if (resIMC < 25) {
        resClasificacion = "Normopeso / Peso saludable"
    } else if (resIMC < 30) {
        resClasificacion = "Sobrepeso"
    } else if (resIMC < 35) {
        resClasificacion = "Obeso grado 1"
    } else if (resIMC < 40) {
        resClasificacion = "Obeso grado 2"
    } else {
        resClasificacion = "Obeso grado 3"
    }
}

datosIMC();
calcularIMC();
categoriaIMC();

console.log("IMC:" + resIMC);
console.log("Clasificacion IMC: \n" + resClasificacion)
preguntarDatos();
calcularFormula();
alert("Sus calorias diarias recomendadas son:" + " " + resultadoFormula);

//Creo un array llamado cartilla con los datos de los objetos nutricionistas
const cartilla = [
    new Nutricionistas("Sabrina Lopez Meyer", "Palermo", "Bulnes 2821 1c", "celíacos", "swiss medical", "1563291089","./assets/img/nutri1.jpg"),
    new Nutricionistas("Rafael Hernandez", "Belgrano", "Cuidad de la paz 2223 3a", "vegetarianos", "osde", "1523545476","./assets/img/nutri4.jpg"),
    new Nutricionistas("Luciano Caseres", "Caballito", "Acoyte 56 2a", "celíacos", "union personal", "1532543476","./assets/img/nutri6.jpg"),
    new Nutricionistas("Marina Paz Vallese", "Belgrano", "Cuidad de la paz 2222", "diabéticos", "osde", "1122333421","./assets/img/nutri2.jpg"),
    new Nutricionistas("Rodrigo Fernández", "Palermo", "Charcas 2342", "vegetarianos", "swiss medical", "2323321456","./assets/img/nutri7.jpg"),
    new Nutricionistas("Mónica Facchini", "Palermo", "Güemes 3574", "diabéticos", "osde", "1174893424","./assets/img/nutri3.jpg"),
    new Nutricionistas("Mariela Aronow", "Caballito", "Lavalleja 106", "vegetarianos", "union personal","2345786743","./assets/img/nutri5.jpg"),
    new Nutricionistas("Constanza Bustos", "Palermo", "Av Sante Fe 2250", "celíacos","sancor","1145362718","./assets/img/nutri9.jpg")
]
console.table(cartilla);

//Agrego un nuevo objeto nutricionista al array
cartilla.push(new Nutricionistas("Carlos Javier Caire", "Palermo", "Olleros 1300", "vegetarianos", "sancor", "1198453219","./assets/img/nutri8.jpg"));
console.table(cartilla);

//Recorro al array cartilla para hacer las card en el html utilizando el DOM
let contenidoCard = document.querySelector('.section3__contenido');
for(Nutricionistas of cartilla){
    let nuevaCard = document.createElement('div')
    nuevaCard.className = "section3__contenido__card";
    nuevaCard.innerHTML = Nutricionistas.crearHtml();
    contenidoCard.append(nuevaCard);
}

//Agrego metodos de busqueda
//Filtro nutricionistas por especialidad
const resEspecialidad = cartilla.filter((el) => el.especialidad == "vegetarianos");
if (!(resEspecialidad.length === 0)) {
    console.log(resEspecialidad);
}