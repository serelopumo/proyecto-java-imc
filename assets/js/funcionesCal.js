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

//DECLARO VARIABLES
let resultadoFormula;

//FUNCTION AL HACER CLICK EN EL BTN RECIBO LOS DATOS INGRESADOS Y EN BASE A ESO ACTUO
export function CalcularCaloriasDiarias(genero, edad, talla, peso, actividadFisica) {
    BorrarContenidoCal();
    peso = parseInt(peso);
    genero = parseInt(genero);
    talla = parseInt(talla);
    actividadFisica = parseInt(actividadFisica);
    console.log(`peso:${peso}, genero:${genero}, talla:${talla}, actividad fisica:${actividadFisica}`);
    if ((!peso) || (!edad) || (!genero) || (!talla) || (!actividadFisica)) {
        let contenidoCal = document.querySelector('.section2__resultadoCalorias');
        let resultadoCal = document.createElement('div')
        resultadoCal.className = "section2__resultadoCalorias--datos";
        resultadoCal.innerHTML = ErrorValidacionCal();
        contenidoCal.append(resultadoCal);
    } else {
        calcularFormula(genero, edad, talla, peso, actividadFisica);
        let contenidoCal = document.querySelector('.section2__resultadoCalorias');
        let resultadoCal = document.createElement('div')
        resultadoCal.className = "section2__resultadoCalorias--datos";
        resultadoCal.innerHTML = MostrarCaloriasDiar();
        contenidoCal.append(resultadoCal);
    }

}

//MUESTRO ERROR AL FALTAR ALGUN DATO DE CADA CUADRO
export function ErrorValidacionCal() {
    return `<h3>¡Vaya!, algo ha ido mal. Por favor, corrige los campos destacados.</h3>`
}

//BORRO RESULTADO DE CALORIAS
export function BorrarContenidoCal() {
    let contenidoCal = document.querySelector('.section2__resultadoCalorias');
    contenidoCal.innerHTML = "";
}

//MUESTRO CALORIAS DIARIAS UTILIZANDO EL DOM
export function MostrarCaloriasDiar() {
    return `<h3>Sus calorias diarias recomendadas son: ${resultadoFormula.toFixed(0)}</h3>`
}

//APLICO FORMULA PARA EL CALCULO DE CALORIAS EN BASE A LOS DATOS INGRESADOS
export function calcularFormula(genero, edad, talla, peso, actividadFisica) {
    resultadoFormula = (genero == 1);
    resultadoFormula ? resultadoFormula = ((10 * peso) + (6.25 * talla) - (5 * edad) + 5 ) : resultadoFormula = ((10 * peso) + (6.25 * talla) - (5 * edad) - 161);

        switch (actividadFisica) {
        case 1:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.3);
            break;
        case 2:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.5);
            break;
        case 3:
            resultadoFormula = resultadoFormula + (resultadoFormula * 0.75);
            break;
        default:
            resultadoFormula = resultadoFormula * 2;
            break;
    }
    console.log(`resultado:${resultadoFormula}`)
}