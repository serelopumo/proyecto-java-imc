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

let genero;
let peso;
let talla;
let edad;
let actividadFisica;
let resultadoFormula;


 function preguntarDatos(){
    genero = parseInt(prompt("Ingrese su genero: \n Ingrese 0 si es un hombre \n Ingrese 1 si es mujer"));
    while((genero !=0) && (genero!=1)){
        genero = parseInt(prompt("Ingrese su genero: \n Ingrese 0 si es un hombre \n Ingrese 1 si es mujer"));
    }  
    peso = parseInt(prompt("Ingrese su peso en kg:"));
    while(!peso){
        peso = parseInt(prompt("Ingrese su peso en kg:"));
    } 
    talla = parseInt(prompt("Ingrese su talla en cm:"));
    while(!talla){
        talla = parseInt(prompt("Ingrese su talla en cm:"));
    }  
    edad = parseInt(prompt("Ingrese su edad:"));
    while(!edad){
        edad = parseInt(prompt("Ingrese su edad:"));
    }   
    actividadFisica = parseInt(prompt("Ingrese su actividad fisica: \n Ingrese 0 para sedentario\n Ingrese 1 para moderado o poco activo\n Ingrese 2 para activo\n Ingrese 3 para muy activo"));
    while(!(actividadFisica==0 || actividadFisica==1 || actividadFisica==2 || actividadFisica==3)){
       actividadFisica = parseInt(prompt("Ingrese su actividad fisica: \n Ingrese 0 para sedentario\n Ingrese 1 para moderado o poco activo\n Ingrese 2 para activo\n Ingrese 3 para muy activo"));
    }  
}

function calcularFormula(){
    if(genero == 0){
        resultadoFormula = (10*peso) + (6.25 * talla) - (5*edad) + 5  ;
    }
    else if(genero == 1){
        resultadoFormula = (10*peso) + (6.25 * talla) - (5*edad) - 161  ;
    }
    switch(actividadFisica){
        case 0:
            resultadoFormula = resultadoFormula + (resultadoFormula*0.3);
            break;
        case 1:
            resultadoFormula = resultadoFormula + (resultadoFormula*0.5);
            break;
        case 2:
            resultadoFormula = resultadoFormula + (resultadoFormula*0.75);
            break;
        default:
            resultadoFormula = resultadoFormula * 2;
            break;
    }
}

preguntarDatos();
calcularFormula();
alert("Sus calorias diarias recomendadas son:" + " " + resultadoFormula);


//Clase Nutricionistas
class Nutricionistas{
    constructor(nombre,barrio,direccion,especialidad,obrasocial,telefono){
        this.nombre = nombre;
        this.barrio = barrio;
        this.direccion = direccion;
        this.especialidad = especialidad;
        this.obrasocial = obrasocial;
        this.telefono = telefono;
    }
}

//Creo un vector llamado cartilla con los datos de los objetos nutricionistas
const cartilla = [
    new Nutricionistas("Sabrina Lopez Meyer", "Palermo", "Bulnes 2821 1c", "celiacos", "swiss medical","1563291089"),
    new Nutricionistas("Rafael Hernandez", "Belgrano", "Cuidad de la paz 2223 3a", "vegetarianos", "osde","1523545476"),
    new Nutricionistas("Luciano Caseres", "Caballito", "Acoyte 56 2a", "celiacos", "union personal","1532543476"),
    new Nutricionistas("Marina Paz Vallese", "Belgrano", "Cuidad de la paz 2222", "diabeticos", "osde","1122333421"),
]
console.table(cartilla);

//Agrego un nuevo objeto nutricionista al vector
cartilla.push(new Nutricionistas("Carlos Javier Caire", "Palermo", "Olleros 1300", "vegetarianos", "sancor","1198453219"));
console.table(cartilla);

//Recorro al vector cartilla y muestro el nombre de cada clase del vector
for(const Nutricionistas of cartilla){
    console.log(Nutricionistas.nombre);
}

