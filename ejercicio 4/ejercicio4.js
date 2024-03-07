const mangoLargo = 2000;
const gancho = 500;
const minimacantidad = 1;
const maximacantidad = 30;
let precioTotal = 0;

const modeloEscoba = prompt(
  "Seleccione el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"
);

const material = prompt(
  "Seleccione el tipo de material:\n1. Cerdas sintéticas\n2. Cerdas naturales"
);

const mangoOpcion = prompt(
  "¿Desea opciones adicionales de fabricación?\nSí\nNo"
);

switch (modeloEscoba) {
  case "1":
    precioTotal += material === "1" ? 8000 : 10000;
    break;
  case "2":
    precioTotal += material === "1" ? 15000 : 20000;
    break;
  case "3":
    precioTotal += material === "1" ? 12000 : 15000;
    break;
  default:
    alert("El modelo de escoba no es válido");
    break;
}

let cantidad = parseInt(
  prompt("¿Qué cantidad de escobas desea (1-30)?")
);

if (mangoOpcion === "sí") {
  const mangoLargoOpcion = prompt("¿Desea tener mango largo?\nSí\nNo");

  if (mangoOpcion === "sí") {
    precioTotal += mangoLargo;
  }
  const ganchoOpcion = prompt("¿Desea tener gancho en punta?\nSí\nNo");
  if(mangoLargoOpcion === "no"){
  }else if (ganchoOpcion === "sí") {
    precioTotal += gancho;
  }  
  

  
}
if (cantidad < minimacantidad || cantidad > maximacantidad) {
  alert("Cantidad inválida");
} else {
  alert(
    `Su total a pagar es: ${precioTotal * cantidad}\nHa comprado una cantidad de: ${cantidad}`
  );
}