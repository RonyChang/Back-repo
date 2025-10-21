console.log("Inicio de la Aplicacion");

function suma(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero; + segundoNumero;
    //console.log(resultado)
    return resultado;
};

let primeraRepuesta = suma(55,100);
//alert(primeraRepuesta);
let segundaRespuesta = suma(77,99);
//alert(segundaRespuesta);

function saludo(nombre = 'Anonimo'){
    alert(`Hola, ${nombre}`);
};

let clima = function(nombreCiudad = 'Lima'){
    console.log(`Este es el clima de la ciudad de ${nombreCiudad}`);
};

let multiplicacion = (a, b) => a * b;
console.log(multiplicacion(5, 8));

let numero = 1;
function contar(){
    //let numero = 1;
    return numero++;
};

console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());

function mostrarUsuario({nombre, apellido}){
    return `Hola ${nombre} ${apellido}`;
}

console.log(mostrarUsuario({nombre:'Juan', apellido:'Perez'}));

function operar(a, b, fn){
    return fn(a, b);
}

const resultado = operar(55,42, (x,y)=> x/y);
console.log(resultado);

console.log("Fin de la Aplicacion");