//ENTRADAS DEL SISTEMA

let coordenadax1 = 0;
let coordenadax2 = 50;
let coordenaday1 = 0;
let coordenaday2 = -70;

//PROCESO

//let restax = coordenadax2 - coordenadax1;
//let restay = coordenaday2 - coordenaday1;

//let potenciax =Math.pow(restax,2);
//let potenciay =Math.pow(restay,2);

//let sumatoria = potenciax + potenciay;

let distancia =Math.sqrt(Math.pow(coordenadax2 - coordenadax1,2) + Math.pow(coordenaday2 - coordenaday1,2));

//SALIDA 

console.log ("La distancia del planeta yavin4 a naboo es: " + distancia);