//declaro variables
let genero;
let peso;
let talla;
let edad;
let actividadFisica;


//declaro clases
import * as Nutris from "./clases.js";

//declaro funciones
import * as funcionesNutris from './funcionesNutri.js';
import * as funcionesIMC from './funcionesIMC.js';
import * as funcionesCal from './funcionesCal.js';
import * as funcionesPlanes from './funcionesPlanes.js';
import * as funcionesRecetas from './funcionesRecetas.js';

/*
------------------------------------------------------------------------------------------
---------------------------------CALORIAS DIARIAS-----------------------------------------
------------------------------------------------------------------------------------------
 */

/*EVENTO EN LOS BTN GENERO MUJER U HOMBRE SEGUN LO QUE EL USUARIO CLICKEA 
Y GUARDO ESE DATO - SOLO ADMITE UNA OPCION */
let btnObtenerGenero = document.getElementById("btngeneroH");
btnObtenerGenero.addEventListener('focus', () => {
    genero = 1;
    console.log(genero)
})

let btnObtenerGeneroM = document.getElementById("btngeneroM");
btnObtenerGeneroM.addEventListener('focus', () => {
    genero = 2;
    console.log(genero)
})

//EVENTO EN EL INPUT EDAD Y GUARDO ESE DATO
let inputEdad = document.getElementById("inputCalEdad");
inputEdad.addEventListener("input", () => {
    edad = parseInt(inputEdad.value);
    console.log(edad)
})

//EVENTO EN EL INPUT TALLA Y GUARDO ESE DATO
let inputAltura = document.getElementById("inputCalAltura");
inputAltura.addEventListener("input", () => {
    talla = parseInt(inputAltura.value);
    console.log(talla)
})

//EVENTO EN EL INPUT PESO Y GUARDO ESE DATO
let inputPeso = document.getElementById("inputCalPeso");
inputPeso.addEventListener("input", () => {
    peso = parseInt(inputPeso.value);
    console.log(peso)
})

//EVENTO EN EL BTN ACTIVIDAD FISICA Y GUARDO ESE DATO - SOLO ADMITE UNA OPCION
let btnAcf1 = document.getElementById("btnCalAf1");
btnAcf1.addEventListener("focus", () => {
    actividadFisica = 1;
    console.log(actividadFisica)
})

let btnAcf2 = document.getElementById("btnCalAf2");
btnAcf2.addEventListener("focus", () => {
    actividadFisica = 2;
    console.log(actividadFisica)
})

let btnAcf3 = document.getElementById("btnCalAf3");
btnAcf3.addEventListener("focus", () => {
    actividadFisica = 3;
    console.log(actividadFisica)
})

let btnAcf4 = document.getElementById("btnCalAf4");
btnAcf4.addEventListener("focus", () => {
    actividadFisica = 4;
    console.log(actividadFisica)
})

//EVENTO EN EL BTN CALCULAR CALORIAS DIARIAS RECOMENDADAS
let btnCalculo = document.getElementById("formularioCalorias");
btnCalculo.addEventListener("submit", (e) => {
    e.preventDefault();
    funcionesCal.CalcularCaloriasDiarias(genero, edad, talla, peso, actividadFisica)
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

/*EVENTO EN EL BTN CALCULAR OTRO IMC - BORRA EL RESULTADO IMC CARGADO ANTERIORMENTE 
PERMITIENDO CONSULAR OTRO*/
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
let cartilla = [
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
    new Nutris.Nutricionistas("Josefina Marcenaro", "Belgrano", "Av. Cabildo 2517", "celíacos", "union personal", "1154781234", "./assets/img/nutri12.jpg")
]

//Agrego un nuevo objeto nutricionista al array
cartilla.push(new Nutris.Nutricionistas("Carlos Javier Caire", "Palermo", "Olleros 1300", "vegetarianos", "sancor", "1198453219", "./assets/img/nutri8.jpg"));

//Utilizo spread de array para agregar un nutricionista
function AgregarNutri(nombre, barrio, direccion, especialidad, obrasocial, telefono, imagen) {
    const nutri = new Nutris.Nutricionistas(nombre, barrio, direccion, especialidad, obrasocial, telefono, imagen);
    cartilla = [...cartilla, nutri];
}
AgregarNutri("Marta Milikowsky", "Caballito", "Av. Acoyte 702", "vegetarianos", "osde", "1156452187", "./assets/img/nutri13.jpg");

//Agrego metodos de busqueda
//Evento en el boton btnTaerTodosNutris 
let btnNutris = document.getElementById("btnTaerTodosNutris");
btnNutris.addEventListener("click", (e) => {
    e.preventDefault();
    funcionesNutris.TraerTodosNutris(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris vegetarianos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisVeg = document.getElementById("btnTraerNutrisVeg");
btnNutrisVeg.addEventListener("click", (e) => {
    e.preventDefault();
    funcionesNutris.TraerNutrisVeg(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris celiacos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisCel = document.getElementById("btnTraerNutrisCel");
btnNutrisCel.addEventListener("click", (e) => {
    e.preventDefault();
    funcionesNutris.TraerNutrisCel(cartilla, Nutris.Nutricionistas)
});

//Traer Nutris diabeticos: creo evento en el boton y llamo a funcion que interactua con el DOM
let btnNutrisDiabe = document.getElementById("btnTraerNutrisDiab");
btnNutrisDiabe.addEventListener("click", (e) => {
    e.preventDefault();
    funcionesNutris.TraerNutrisDiab(cartilla, Nutris.Nutricionistas)
});

//creo evento en el btn buscar Nutri y en el input buscar nutri y llamo a la function TraerNutriBuscado
let btnBuscarNutri = document.getElementById("btnBuscarNutri");
btnBuscarNutri.addEventListener("click", (e) => {
    e.preventDefault();
    funcionesNutris.TraerNutriBuscado(cartilla, Nutris.Nutricionistas)
});

/*
------------------------------------------------------------------------------------------
--------------------------------------RECETAS---------------------------------------------
------------------------------------------------------------------------------------------
 */

//Consulto mi appi de buscador de recetas y envio datos segun la comida/receta consultada
const btnReceta = document.getElementById('btnBuscarReceta');
btnReceta.addEventListener('click',(e)=>{
    e.preventDefault();
    const contenidoRecetas = document.getElementById('section4__recetas');
    funcionesRecetas.BorrarContenidoRecetas(contenidoRecetas);
    funcionesRecetas.BuscarRecetas();
    funcionesRecetas.LlamarApi();
});

/*
------------------------------------------------------------------------------------------
--------------------------------------PLANES----------------------------------------------
------------------------------------------------------------------------------------------
 */

//Traigo datos de mi archivo json utilizando fetch y ruta relativa
//Plan1
let contenidoPlanes = document.getElementById('tarjetasPlanes');
let nuevoPlan = document.createElement('div')
nuevoPlan.className = "section5__tarjetas--card1";
nuevoPlan.innerHTML = await funcionesPlanes.TraerPlanes();
contenidoPlanes.append(nuevoPlan);

//Plan2
let contenidoPlanes2 = document.getElementById('tarjetasPlanes');
let nuevoPlan2 = document.createElement('div')
nuevoPlan2.className = "section5__tarjetas--card2";
nuevoPlan2.innerHTML = await funcionesPlanes.TraerPlanes2();
contenidoPlanes2.append(nuevoPlan2);

//Plan3
let contenidoPlanes3 = document.getElementById('tarjetasPlanes');
let nuevoPlan3 = document.createElement('div')
nuevoPlan3.className = "section5__tarjetas--card3";
nuevoPlan3.innerHTML = await funcionesPlanes.TraerPlanes3();
contenidoPlanes3.append(nuevoPlan3);

//Agrego alerts de libreria en los btn de comprar Planes
let btnCompraPlan = document.querySelectorAll(".btnComprarPlan");

btnCompraPlan.forEach(element => {
    element.addEventListener('click', (e) => {
        const tituloPlan = e.target.parentElement.childNodes[1].innerHTML.toUpperCase();
        Swal.fire({
            width: '50%',
            heightAuto: true,
            title: `¿Estás seguro que deseas comprar ${tituloPlan}?`,
            text: "Empezá tu vida saludable con nuestros planes!!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#809249ff',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'LISTA TU COMPRA',
                    'Tu plan ya fue confirmado',
                    'success'
                )
            }
        })
    })
})