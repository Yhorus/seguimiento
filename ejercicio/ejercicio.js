const precio_basico = 2000;
const precio_premium= 4000;

const opcion_Basico = 1;
const opcion_premium = 2;

let costounitario;
let piezas;

let opcioneseleccionada = parseInt(prompt("seleccione tipo de servicio: \n1 basico \n2 premium"))

if(opcioneseleccionada === opcion_Basico){
costounitario = precio_basico;
piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20)"));
} else if (opcioneseleccionada === opcion_premium) {
    costounitario = precio_premium;
    piezas = parseInt(prompt("ingrese cantidad de piezas (1-20)"));
    alert (piezas)
} else { 
    console.log ("opcion invalida")
}

if(piezas <1 || piezas >20 ){
    console.log ("cantidad de piezas invalida");
}else{
    console.log("costo total: $" + (costounitario * piezas));
}