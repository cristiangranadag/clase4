// Determinar cuánto dinero ahorra una persona en un año si considera que cada
// semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no
//    cambia el sueldo)

let semana;
let mes;
let sueldo;
let dinero;
let ano;



dinero = Number(prompt("Ingrese cuantos ahorra: "));
ano = sueldo(dinero);


alert("Total ahorra : "+ano);
alert("cada semana ahorra 15% "+ semana);

function sueldo(dinero){
    semana = dinero*.15;
    mes = 4* semana;
    ano = 12*mes;
    return ano;
}
