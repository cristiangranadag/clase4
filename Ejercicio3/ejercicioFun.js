// Determinar cuánto dinero ahorra una persona en un año si considera que cada
// semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no
//    cambia el sueldo)


let semana;
let mes;
let dinero;
let ano;

dinero = Number(prompt("Ingrese cuanto sueldo? "));

// let total = Ano(dinero)



function Total(dinero) {
    semana = dinero*0.15;
    mes = 4* semana;
    ano = 12*mes;
    return ano;
}

alert("Total ahorra : "+ Total(dinero));

/*alert("cada semana ahorra 15% de sueldo "+ semana);*/
