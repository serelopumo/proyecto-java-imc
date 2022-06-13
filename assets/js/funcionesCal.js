//declaro variables
let resultadoFormula;

export function CalcularCaloriasDiarias(genero, edad, talla, peso, actividadFisica) {
    BorrarContenidoCal();
    peso = parseInt(peso);
    genero = parseInt(genero);
    talla = parseInt(talla);
    actividadFisica = parseInt(actividadFisica);
    if ((!peso) || (!genero) || (!talla) || (!actividadFisica)) {
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

export function ErrorValidacionCal() {
    return `<h3>¡Vaya!, algo ha ido mal. Por favor, corrige los campos destacados.</h3>`
}

export function BorrarContenidoCal() {
    let contenidoCal = document.querySelector('.section2__resultadoCalorias');
    contenidoCal.innerHTML = "";
}

export function MostrarCaloriasDiar() {
    return `<h3>Sus calorias diarias recomendadas son: ${resultadoFormula.toFixed(0)}</h3>`
}

export function calcularFormula(genero, edad, talla, peso, actividadFisica) {
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
    console.log(`resultado:${resultadoFormula}`)
}