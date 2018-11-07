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
function redondeaNumero(val,decimals){

    return Number.parseFloat(val).toFixed(decimals);

}


let velocidadInicial = readlineSync.questionFloat('Indica la velocidad (B) inicial del propyectil. ');
let inclinacionInicial = readlineSync.questionFloat('Indica la inclinación(a) inicial del proyectil. ');
let coordenadasY;
let coordenadasX;
let tiempo = 0.1;
let x=0, y=0;

//////////////////////////////////////////////////////////////////////////////////
//Calcula y redondea las coordenadas X e Y hasta que Y(altura sea 0 o menor).
console.log('TIEMPO\t\tPOSICION_X\tPOSICION_Y');
do{
    coordenadasX = coordX(velocidadInicial,inclinacionInicial,tiempo);
    coordenadasY = coordY(velocidadInicial, inclinacionInicial,tiempo);

//////////////////////////////////////////////////////////////////////////////////
//Condición para guardar el valor más alto en una variable.
if (coordenadasX>x){
        x=coordenadasX
    }
if (coordenadasY>y){
        y=coordenadasY
    }


tiempo = tiempo + 0.1;

console.log(redondeaNumero(tiempo,2) +'\t\t'+ redondeaNumero(coordenadasX,2) +'\t\t'+redondeaNumero(coordenadasY,2));
}while (coordenadasY >0);

console.log(' ');
console.log('Fin de lanzamiento. ');
console.log(' ');
console.log('============================================');
console.log(' ');
console.log('Altura máxima: '+redondeaNumero(y,2)+' ----- '+'Distancia máxima: '+redondeaNumero(x,2));


