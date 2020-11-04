/* Declarar variables*/
let n1;
let n2;
let n3;
let examen;
let promedio;
let trabajo;
let calificacion;
​
//Leer datos
n1 = parseFloat(prompt('Ingrese la nota 1'));
n2 = parseFloat(prompt('Ingrese la nota 2'));
n3 = parseFloat(prompt('Ingrese la nota 3'));
examen = parseFloat(prompt('Ingrese la nota del examen'));
trabajo = parseFloat(prompt('Ingrese la nota del trabajo final'));
​
//Procedimiento 
/*promediot = ((n1+ n2 + n3)/3)*0.55;
exament = (examen* 0.30);
trabajot = (trabajo*0.15);
*/
calificacion = (n1+n2+n3)/3*0.55 + examen*0.30 + trabajo*0.15;
​
//Imprimir 
console.log('La calificación final es:' + calificacion);
alert('La calificación final es:' + calificacion);
document.write ('La calificación final es:' + calificacion);