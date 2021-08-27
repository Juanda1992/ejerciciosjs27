let temperaturas=[10,50,60,20,5]

// let temperaturas=Array(10,50,60,20,5);

// let maximo=Math.max(5,10,15,20);
// console.log(maximo);

function calcularPromedioTemperatura(...temperaturas){

    let temperaturaMaxima= Math.max(...temperaturas);

    let temperaturaMinima =Math.min(...temperaturas);

    let promedio = (temperaturaMaxima+temperaturaMinima)/2;

    return (promedio);
}

console.log(`La temperatura promedio fue ${calcularPromedioTemperatura(...temperaturas)}°C`);