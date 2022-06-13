export function TraerTodosNutris(cartilla,Nutricionistas){
    BorrarContenido();    
    let contenidoCard = document.querySelector('.section3__contenido');
    for(Nutricionistas of cartilla){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

export function TraerNutrisVeg(cartilla,Nutricionistas){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "vegetarianos");
    for(Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

export function TraerNutrisCel(cartilla,Nutricionistas){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "celíacos");
    for(Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

export function TraerNutrisDiab(cartilla,Nutricionistas){
    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.especialidad == "diabéticos");
    for(Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}

//Borrar Contenido Nutris: borro contenido del html mediante el DOM
export function BorrarContenido(){
    let contenidoCard = document.querySelector('.section3__contenido');
    contenidoCard.innerHTML = "";
}

export function TraerNutriBuscado(cartilla,Nutricionistas){
    
    //Creo evento en el input de buscar nutricionista
    let inputBuscoNutri = document.getElementById("inputBuscarNutri");
    inputBuscoNutri.addEventListener("input", ()=>{console.log(inputBuscoNutri.value)}); 

    //Paso todo a capitalize
    let stringNutri = inputBuscoNutri.value;
    let upperNutri = stringNutri.charAt(0).toUpperCase() + stringNutri.slice(1).toLowerCase();

    BorrarContenido();
    let contenidoCard = document.querySelector('.section3__contenido');
    const resultado1 = cartilla.filter((el) => el.nombre.includes(`${upperNutri}`));
    for(Nutricionistas of resultado1){
        let nuevaCard = document.createElement('div')
        nuevaCard.className = "section3__contenido__card";
        nuevaCard.innerHTML = Nutricionistas.crearHtml();
        contenidoCard.append(nuevaCard);
    }
}