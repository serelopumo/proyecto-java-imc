/*Para el calculo del IMC necesito el peso y la talla ya que:
IMC = peso / talla^2
La talla debe estar en metros
Luego de calcular el IMC veo a que categoria IMC corresponde segun IMC calculado
*/

//DECLARO VARIABLES GLOBALES
let pesoIMC;
let tallaIMC;
let resIMC;
let resClasificacion;

//CALCULO DE IMC UTILIZANDO LA FORMULA
export const calcularIMC = () => {
    tallaIMC = tallaIMC * 0.01
    resIMC = pesoIMC / (Math.pow(tallaIMC, 2))
}

//MUESTRO ERROR AL FALTAR ALGUN DATO EN LA CARGA YA SEA PESO O TALLA O AMBOS
export function ErrorValidacionIMC(){
    return `<h3>¡Vaya!, algo ha ido mal. Por favor, corrige los campos destacados.</h3>`
}

//CATEGORIA IMC SEGUN EL IMC CALCULADO UTILIZANDO LOS VALORES DE LA TABLA DE LA OMS
export const categoriaIMC = () => {
    //Utilizo operador ternario
    resClasificacion = resIMC < 18.5 ? "Bajo peso" :  resIMC < 25 ? 
    "Normopeso / Peso saludable" : resIMC < 30 ? "Sobrepeso" : resIMC < 35 ?
    "Obeso grado 1" : resIMC < 40 ? "Obeso grado 2" : "Obeso grado 3";
}

//MUESTRO EL RESULTADO DEL IMC Y SU CLASIFICACION
export function MostrarIMC(){
    return `<h3>IMC: ${resIMC.toFixed(2)}</h3>
            <h3>Clasificacion IMC: ${resClasificacion}</h3>`
}

//FUNCION AL HACER CLICK EN CALCULA TU IMC
export function ClickenIMC(){
    BorrarContenidoIMC();
    let inputIMCaltura = document.getElementById("inputIMCaltura");
    inputIMCaltura.addEventListener("input", ()=>console.log(inputIMCaltura.value));

    let inputIMCpeso = document.getElementById("inputIMCpeso");
    inputIMCpeso.addEventListener("input", ()=>console.log(inputIMCpeso.value));

    pesoIMC = parseInt(inputIMCpeso.value);
    tallaIMC = parseInt(inputIMCaltura.value);

    //Guardo en el local storage los datos del IMC que cargo el usuario
    localStorage.setItem('peso', pesoIMC);
    localStorage.setItem('altura', tallaIMC);

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

//BORRO EL RESULTADO DEL IMC UTILIZANDO EL DOM
export function BorrarContenidoIMC(){
    let contenidoIMC = document.querySelector('.section1__resultadoIMC');
    contenidoIMC.innerHTML = "";
}
