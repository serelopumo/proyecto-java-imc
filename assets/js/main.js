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


//declaro clases
import * as Nutris from "./clases.js";

//declaro funciones
import * as funciones from './funcionesNutri.js';
import * as funcionesIMC from './funciones.js';
import * as funcionesCal from './funcionesCal.js';

/*
------------------------------------------------------------------------------------------
---------------------------------CALORIAS DIARIAS-----------------------------------------
------------------------------------------------------------------------------------------
 */
//Evento en btn genero
let btnObtenerGenero = document.getElementById("btngeneroH");
btnObtenerGenero.addEventListener('focus', () => {
    genero = 0;
    console.log(genero)
})

let btnObtenerGeneroM = document.getElementById("btngeneroM");
btnObtenerGeneroM.addEventListener('focus', () => {
    genero = 1;
    console.log(genero)
})

//Evento en input edad
let inputEdad = document.getElementById("inputCalEdad");
inputEdad.addEventListener("input", () => {
    edad = parseInt(inputEdad.value);
    console.log(edad)
})

//Evento en input talla
let inputAltura = document.getElementById("inputCalAltura");
inputAltura.addEventListener("input", () => {
    talla = parseInt(inputAltura.value);
    console.log(talla)
})

//Evento en input peso
let inputPeso = document.getElementById("inputCalPeso");
inputPeso.addEventListener("input", () => {
    peso = parseInt(inputPeso.value);
    console.log(peso)
})

//Evento en btn actividad fisica
let btnAcf1 = document.getElementById("btnCalAf1");
btnAcf1.addEventListener("focus", () => {
    actividadFisica = 0;
    console.log(actividadFisica)
})

let btnAcf2 = document.getElementById("btnCalAf2");
btnAcf2.addEventListener("focus", () => {
    actividadFisica = 1;
    console.log(actividadFisica)
})

let btnAcf3 = document.getElementById("btnCalAf3");
btnAcf3.addEventListener("focus", () => {
    actividadFisica = 2;
    console.log(actividadFisica)
})

let btnAcf4 = document.getElementById("btnCalAf4");
btnAcf4.addEventListener("focus", () => {
    actividadFisica = 3;
    console.log(actividadFisica)
})

//Evento en btn calculo calorias diarias
let btnCalculo = document.getElementById("formularioCalorias");
btnCalculo.addEventListener("submit", (e)=>{
    e.preventDefault();
    funcionesCal.CalcularCaloriasDiarias(genero,edad,talla,peso,actividadFisica)
})


/*
------------------------------------------------------------------------------------------
--------------------------------------CALCULAR IMC----------------------------------------
------------------------------------------------------------------------------------------
 */

//Evento en btn calcular IMC
let btnCalcularIMC = document.getElementById("btnCalularIMC");
btnCalcularIMC.addEventListener('click', () => {
    funcionesIMC.ClickenIMC()
});

//Evento en calcular otro IMC
let btnCalcularOtroIMC = document.getElementById("btnBorrarCalculoIMC");
btnCalcularOtroIMC.addEventListener('click', () => {
    funcionesIMC.BorrarContenidoIMC()
});

/*
------------------------------------------------------------------------------------------
--------------------------------------LISTA NUTRIS----------------------------------------
------------------------------------------------------------------------------------------
 */
//Creo un array llamado cartilla con los datos de los objetos nutricionistas
const cartilla = [
    new Nutris.Nutricionistas("Sabrina Lopez Meyer", "Palermo", "Bulnes 2821 1c", "celíacos", "swiss medical", "1563291089", "./assets/img/nutri1.jpg"),
    new Nutris.Nutricionistas("Rafael Hernandez", "Belgrano", "Cuidad de la paz 2223 3a", "vegetarianos", "osde", "1523545476", "./assets/img/nutri4.jpg"),
    new Nutris.Nutricionistas("Luciano Caseres", "Caballito", "Acoyte 56 2a", "celíacos", "union personal", "1532543476", "./assets/img/nutri6.jpg"),
    new Nutris.Nutricionistas("Marina Paz Vallese", "Belgrano", "Cuidad de la paz 2222", "diabéticos", "osde", "1122333421", "./assets/img/nutri2.jpg"),
    new Nutris.Nutricionistas("Rodrigo Fernández", "Palermo", "Charcas 2342", "vegetarianos", "swiss medical", "2323321456", "./assets/img/nutri7.jpg"),
    new Nutris.Nutricionistas("Mónica Facchini", "Palermo", "Güemes 3574", "diabéticos", "osde", "1174893424", "./assets/img/nutri3.jpg"),
    new Nutris.Nutricionistas("Mariela Aronow", "Caballito", "Lavalleja 106", "vegetarianos", "union personal", "2345786743", "./assets/img/nutri5.jpg"),
    new Nutris.Nutricionistas("Constanza Bustos", "Palermo", "Av Sante Fe 2250", "celíacos", "sancor", "1145362718", "./assets/img/nutri9.jpg"),
    new Nutris.Nutricionistas("Roberto Vidal", "Caballito", "Av. Díaz Vélez 5044", "diabéticos", "osde", "1145261726", "./assets/img/nutri10.jpg"),
    new Nutris.Nutricionistas("Viviana Lacher", "Palermo", "Guatemala 5648", "vegetarianos", "swiss medical", "1145281987", "./assets/img/nutri11.jpg"),
    new Nutris.Nutricionistas("Josefina Marcenaro", "Belgrano", "Av. Cabildo 2517", "celíacos", "union personal", "1154781234", "./assets/img/nutri12.jpg"),
    new Nutris.Nutricionistas("Marta Milikowsky", "Caballito", "Av. Acoyte 702", "vegetarianos", "osde", "1156452187", "./assets/img/nutri13.jpg")
]

//Agrego un nuevo objeto nutricionista al array
cartilla.push(new Nutris.Nutricionistas("Carlos Javier Caire", "Palermo", "Olleros 1300", "vegetarianos", "sancor", "1198453219", "./assets/img/nutri8.jpg"));
console.table(cartilla);

//Agrego metodos de busqueda
//Evento en el boton btnTaerTodosNutris 
let btnNutris = document.getElementById("btnTaerTodosNutris");
btnNutris.addEventListener("click", (e) => {
    e.preventDefault();
    funciones.TraerTodosNutris(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris vegetarianos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisVeg = document.getElementById("btnTraerNutrisVeg");
btnNutrisVeg.addEventListener("click", (e) => {
    e.preventDefault();
    funciones.TraerNutrisVeg(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris celiacos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisCel = document.getElementById("btnTraerNutrisCel");
btnNutrisCel.addEventListener("click", (e) => {
    e.preventDefault();
    funciones.TraerNutrisCel(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris diabeticos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisDiabe = document.getElementById("btnTraerNutrisDiab");
btnNutrisDiabe.addEventListener("click", (e) => {
    e.preventDefault();
    funciones.TraerNutrisDiab(cartilla, Nutris.Nutricionistas)
});

//creo evento en el btn buscar Nutro y llamo a la function TraerNutriBuscado
let btnBuscarNutri = document.getElementById("btnBuscarNutri");
btnBuscarNutri.addEventListener("click", (e) => {
    e.preventDefault();
    funciones.TraerNutriBuscado(cartilla, Nutris.Nutricionistas)
});

/*
------------------------------------------------------------------------------------------
--------------------------------------RECETAS---------------------------------------------
------------------------------------------------------------------------------------------
 */