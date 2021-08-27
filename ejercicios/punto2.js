
function obtenerNombre(codigoNave){

    let nombrePiloto =codigoNave.split(":");

    // console.log("El nombre del piloto es"+nombrePiloto [1]);
    // console.log(`El nombre del piloto es ${nombrePiloto [1]}`);
    return(`El nombre del piloto es ${nombrePiloto [1]}`);
}

//LLAMAR LA FUNCION
console.log (obtenerNombre("ARQU: Juan"));
let nombre= obtenerNombre("ARQU: Juan");
console.log(nombre);