// 2. A la mamá de Juan le preguntan su edad y contesta, tengo 3 hijos, pregúntele a Juan su edad,
//    Alberto tiene 2/3 de la de Juan, Ana tiene 4/3 y mi edad es la suma de las 3 edades de mis hijos,
//    hacer un programa que muestre la edad de los 4 (mamá y los 3 hijos).


//Declarar variables
let juan;
let alberto;
let ana;
let madre;

//Leer datos
juan = Number(prompt('Cual es la edad de Juan'));

//Procedimiento de funciones
edadAlberto(juan);
edadAna(juan);
edadMadre(juan);

//Procedimiento - invocar
function edadAlberto(juan){
    alberto = (juan*2)/3;
    return alberto;
}

function edadAna(juan){
    ana = (juan*4)/3;
    return ana;
}

function edadMadre(juan){
    madre = juan + alberto + ana;
    return madre;
}

//Imprimir
document.write('La edad de Alberto es: ' + edadAlberto(juan)+', ');
document.write(' la edad de Ana es: ' + edadAna(juan)+', ');
document.write(' la edad de la madre es: ' + edadMadre(juan)+' y');
document.write(' la edad de Juan es: ' + juan);