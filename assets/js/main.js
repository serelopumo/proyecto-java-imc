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
import * as Nutris from "./clases.js";
const pruebanutri = new Nutris.Nutricionistas('hola','sas','sas','sasa','aaa','aa','ssas');
console.log(Nutris.Nutricionistas.nombre)
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
// preguntarDatos();
// calcularFormula();
// alert("Sus calorias diarias recomendadas son:" + " " + resultadoFormula);

const calcularIMC = () => {
    tallaIMC = tallaIMC * 0.01
    resIMC = pesoIMC / (Math.pow(tallaIMC, 2))
}

function ErrorValidacionIMC(){
    return `<h3>¡Vaya!, algo ha ido mal. Por favor, corrige los campos destacados.</h3>`
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

function MostrarIMC(){
    return `<h3>IMC: ${resIMC.toFixed(2)}</h3>
            <h3>Clasificacion IMC: ${resClasificacion}</h3>`
}

//Evento en btn calcular IMC
let btnCalcularIMC = document.getElementById("btnCalularIMC");
btnCalcularIMC.addEventListener('click', ()=>{ClickenIMC()});

function ClickenIMC(){
    BorrarContenidoIMC();
    let inputIMCaltura = document.getElementById("inputIMCaltura");
    inputIMCaltura.addEventListener("input", ()=>console.log(inputIMCaltura.value));

    let inputIMCpeso = document.getElementById("inputIMCpeso");
    inputIMCpeso.addEventListener("input", ()=>console.log(inputIMCpeso.value));

    pesoIMC = parseInt(inputIMCpeso.value);
    tallaIMC = parseInt(inputIMCaltura.value);

    if ((!pesoIMC) || (!tallaIMC)) {
        let contenidoIMC = document.querySelector('.section1__resultadoIMC');
        let resultadoIMC = document.createElement('div')
        resultadoIMC.className = "section1__resultadoIMC--datos";
        resultadoIMC.innerHTML = ErrorValidacionIMC();
        contenidoIMC.append(resultadoIMC);
    }
    else{
        calcularIMC();
        categoriaIMC();
        let contenidoIMC = document.querySelector('.section1__resultadoIMC');
        let resultadoIMC = document.createElement('div')
        resultadoIMC.className = "section1__resultadoIMC--datos";
        resultadoIMC.innerHTML = MostrarIMC();
        contenidoIMC.append(resultadoIMC);
    }
    
}

//Evento en calcular otro IMC
let btnCalcularOtroIMC = document.getElementById("btnBorrarCalculoIMC");
btnCalcularOtroIMC.addEventListener('click',()=>{BorrarContenidoIMC()});

function BorrarContenidoIMC(){
    let contenidoIMC = document.querySelector('.section1__resultadoIMC');
    contenidoIMC.innerHTML = "";
}

//Creo un array llamado cartilla con los datos de los objetos nutricionistas
const cartilla = [
    new Nutris.Nutricionistas("Sabrina Lopez Meyer", "Palermo", "Bulnes 2821 1c", "celíacos", "swiss medical", "1563291089","./assets/img/nutri1.jpg"),
    new Nutris.Nutricionistas("Rafael Hernandez", "Belgrano", "Cuidad de la paz 2223 3a", "vegetarianos", "osde", "1523545476","./assets/img/nutri4.jpg"),
    new Nutris.Nutricionistas("Luciano Caseres", "Caballito", "Acoyte 56 2a", "celíacos", "union personal", "1532543476","./assets/img/nutri6.jpg"),
    new Nutris.Nutricionistas("Marina Paz Vallese", "Belgrano", "Cuidad de la paz 2222", "diabéticos", "osde", "1122333421","./assets/img/nutri2.jpg"),
    new Nutris.Nutricionistas("Rodrigo Fernández", "Palermo", "Charcas 2342", "vegetarianos", "swiss medical", "2323321456","./assets/img/nutri7.jpg"),
    new Nutris.Nutricionistas("Mónica Facchini", "Palermo", "Güemes 3574", "diabéticos", "osde", "1174893424","./assets/img/nutri3.jpg"),
    new Nutris.Nutricionistas("Mariela Aronow", "Caballito", "Lavalleja 106", "vegetarianos", "union personal","2345786743","./assets/img/nutri5.jpg"),
    new Nutris.Nutricionistas("Constanza Bustos", "Palermo", "Av Sante Fe 2250", "celíacos","sancor","1145362718","./assets/img/nutri9.jpg"),
    new Nutris.Nutricionistas("Roberto Vidal", "Caballito", "Av. Díaz Vélez 5044", "diabéticos","osde","1145261726","./assets/img/nutri10.jpg"),
    new Nutris.Nutricionistas("Viviana Lacher", "Palermo", "Guatemala 5648", "vegetarianos","swiss medical","1145281987","./assets/img/nutri11.jpg"),
    new Nutris.Nutricionistas("Josefina Marcenaro", "Belgrano", "Av. Cabildo 2517", "celíacos","union personal","1154781234","./assets/img/nutri12.jpg"),
    new Nutris.Nutricionistas("Marta Milikowsky", "Caballito", "Av. Acoyte 702", "vegetarianos","osde","1156452187","./assets/img/nutri13.jpg")
]
console.table(cartilla);

//Agrego un nuevo objeto nutricionista al array
cartilla.push(new Nutris.Nutricionistas("Carlos Javier Caire", "Palermo", "Olleros 1300", "vegetarianos", "sancor", "1198453219","./assets/img/nutri8.jpg"));
console.table(cartilla);

//Agrego metodos de busqueda
//Evento en el boton btnTaerTodosNutris 
let btnNutris = document.getElementById("btnTaerTodosNutris");
btnNutris.addEventListener("click", ()=>{TraerTodosNutris()});

function TraerTodosNutris(){
    
    BorrarContenido();    
    let contenidoCard = document.querySelector('.section3__contenido');
    for(Nutris.Nutricionistas of cartilla){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutris.Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

//Traer Nutris vegetarianos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisVeg = document.getElementById("btnTraerNutrisVeg");
btnNutrisVeg.addEventListener("click",()=>{TraerNutrisVeg()});

function TraerNutrisVeg(){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "vegetarianos");
    for(Nutris.Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutris.Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

//Traer Nutris celiacos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisCel = document.getElementById("btnTraerNutrisCel");
btnNutrisCel.addEventListener("click",()=>{TraerNutrisCel()});

function TraerNutrisCel(){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "celíacos");
    for(Nutris.Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutris.Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

//Traer Nutris diabeticos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisDiabe = document.getElementById("btnTraerNutrisDiab");
btnNutrisDiabe.addEventListener("click",()=>{TraerNutrisDiab()});

function TraerNutrisDiab(){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "diabéticos");
    for(Nutris.Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutris.Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

//Borrar Contenido Nutris: borro contenido del html mediante el DOM
function BorrarContenido(){
    let contenidoCard = document.querySelector('.section3__contenido');
    contenidoCard.innerHTML = "";
}

let inputBuscoNutri = document.getElementById("inputBuscarNutri");
inputBuscoNutri.addEventListener("input", ()=>{console.log(inputBuscoNutri.value)});


let btnBuscarNutri = document.getElementById("btnBuscarNutri");
btnBuscarNutri.addEventListener("click",()=>{TraerNutriBuscado()});

function TraerNutriBuscado(){
    //Paso todo a capitalize
    let stringNutri = inputBuscoNutri.value;
    let upperNutri = stringNutri.charAt(0).toUpperCase() + stringNutri.slice(1).toLowerCase();

    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.nombre.includes(`${upperNutri}`));
    for(Nutris.Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutris.Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

