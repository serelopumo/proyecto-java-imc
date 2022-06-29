# proyecto-java-imc
## Simulador interactivo de nutrición que cuenta con 5 secciones:
### 1. Cálculo de Indice de Masa Corporal: 
Es un indicador que si bien no es una medición directa, se incluye dentro de la
antropometría y responde a la fórmula: IMC = Peso actual(kg) / Talla^2(m)
El IMC correlaciona bien con el porcentaje de grasa corporal y el riesgo de
morbimortalidad. Por eso el Instituto de Medicina de la Academia Nacional de Ciencias
de los Estados Unidos y la Organización Mundial de la Salud lo utilizan como método
diagnóstico de sobrepeso y obesidad según la siguiente clasificación:

![image](https://user-images.githubusercontent.com/100161377/176322489-278ec763-6c31-43a8-88f2-42f922581f14.png)

### 2. Cálculo de calorías diarias: 
El cálculo de las necesidades energéticas es fundamental para el desarrollo y evaluación de
un plan de alimentación. Hay varias fórmulas para su cálculo pero en este caso se eligió la Fórmula de Mifflin-St Jeor y luego se le
sumó el porcentaje de calorías correspondientes al tipo de actividad física. 

![image](https://user-images.githubusercontent.com/100161377/176323110-e89360cb-5c25-4803-a611-2802cdfec624.png)

Porcentaje de Actividad Física: 

![image](https://user-images.githubusercontent.com/100161377/176323243-6ea10827-81fa-4b89-991e-61b2c098d99c.png)

### 3. Lista de Nutricionistas: 
En esta sección se pueden visualizar los distintos nutricionistas de la página ya sea utilizando
la barra de búsqueda o filtrando por traer todos los nutricionistas o por especialidad (vegetarianos, celíacos y diabéticos)
Para esto se creó un array cartilla del objeto Nutricionista (archivo clases.js). Todas las cards de los nutricionistas son traídos 
utilizando el manejo del DOM.

### 4. Buscador de recetas: 
Carga de datos utilizando api externa mencionada llamada EDAMAM. El objetivo de esta sección es utilizar la
barra de búsqueda escribiendo alguna receta que quiero visualizar, ejemplo pizza y me muestra las siguientes características de la 
receta:

* CALORIAS

* TIPO DE COMIDA

* VISUALIZAR MAS DETALLES: utilizo la libreria sweet alert para poder visualizar foto de la receta en grande, título de la receta e 
ingredientes


### 5. Planes nutricionales: 
Se procede a la carga de datos de los 3 planes nutricionales de mi archivo local planes.json.
Estos planes simulan una compra utilizando la libreria sweet alert para proceder a la misma.



Librería utilizada: Sweet Alert
------------------------------------------------------------------
API utilizada: https://developer.edamam.com/es/api-recetas-edamam
-----------------------------------------------------------------


