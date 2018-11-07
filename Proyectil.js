let readlineSync = require('readline-sync');

//Función que calcula las coordenadas Y.
function coordX(vel,incli,tiemp){
    
    let x = (vel*Math.cos(incli)*tiemp)
    return x;

}
//Función que calcula las coordenadas X.
function coordY(vel,incli,tiemp){

    let y = (vel*Math.sin(incli)*tiemp) - (0.5*40) * Math.pow(tiemp,2);
    return y;
}
//Función que redondea a los decimales que le indiques.
function roundNumber(val,decimals){

    return Number.parseFloat(val).toFixed(decimals);

}


let velocidadInicial = readlineSync.questionFloat('Indica la velocidad (B) inicial del propyectil. ');
let inclinacionInicial = readlineSync.questionFloat('Indica la inclinación(a) inicial del proyectil. ');
let coordenadasY;
let coordenadasX;
let tiempo = 0.1;
let x=0, y=0;


//Redondear a dos decimales el resultado de la función coordenadas Y.
coordenadasY = coordY(velocidadInicial,inclinacionInicial,tiempo);
coordenadasY = Math.round(coordenadasY * 100) / 100
//Redondear a dos decimales el resultado de la función coordenadas X.
coordenadasX = coordX(velocidadInicial,inclinacionInicial,tiempo);
coordenadasX = Math.round(coordenadasX * 100) / 100

//////////////////////////////////////////////////////////////////////////////////
//Calcula y redondea las coordenadas X e Y hasta que Y(altura sea 0 o menor).
console.log('TIEMPO\t\tPOSICION_X\tPOSICION_Y');
do{
    coordenadasX = coordX(velocidadInicial,inclinacionInicial,tiempo);
    coordenadasX = Math.round(coordenadasX * 100) / 100
    coordenadasY = coordY(velocidadInicial, inclinacionInicial,tiempo);
    coordenadasY = Math.round(coordenadasY * 100) / 100

//////////////////////////////////////////////////////////////////////////////////
//Condición para guardar el valor más alto en una variable.
if (coordenadasX>x){
        x=coordenadasX
    }
if (coordenadasY>y){
        y=coordenadasY
    }


tiempo = tiempo + 0.1;

console.log(roundNumber(tiempo,2) +'\t\t'+ roundNumber(coordenadasX,2) +'\t\t'+roundNumber(coordenadasY,2));
}while (coordenadasY >0);

console.log(' ');
console.log('Fin de lanzamiento. ');
console.log(' ');
console.log('============================================');
console.log(' ');
console.log('Altura máxima: '+y+' ----- '+'Distancia máxima: '+x);



Number.parseFloat(tiempo).toFixed(2);