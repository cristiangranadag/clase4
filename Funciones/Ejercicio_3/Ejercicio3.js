/* 3. Determinar cuánto dinero ahorra una persona en un año si considera que cada
    semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no
    cambia el sueldo)*/

//Declarar variables
let ahorro;
let sueldo;
let total;

//Leer variables
sueldo = Number(prompt('Ingrese el valor del sueldo'));

//invocar funciones
let ahorroAnual = Ahorro(sueldo);

//imprimir
alert('El ahorro anual es: ' +Total(ahorroAnual));

//Procedimiento en funciones
function Ahorro(sueldo) {
    ahorro = (sueldo*0.15) * 4;
    return ahorro;
}

function Total(ahorro) {
    total = ahorro * 12;
    return total;
}

