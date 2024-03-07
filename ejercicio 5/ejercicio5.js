const bestsellers = 500;
const literatura = 100;
const academicos = 0;
const descuentomayor10dias = 0.9; 

let libros = parseInt(
  prompt(
    "Seleccione el tipo de libro que desea llevar: \n1. Bestsellers \n2. Literatura \n3. Académicos"
  )
);

let dias = parseInt(
  prompt("Ingrese la cantidad de días que desea tener los libros (1-30)")
);
if (dias < 1 || dias > 30) {
  alert("Días inválidos");
}

let cantidadLibros = parseInt(prompt("¿Cuántos libros vas a llevar? (1-5)"));
if (cantidadLibros < 1 || cantidadLibros > 5) {
  alert("No puedes llevar más de 5 libros");
}

let precioTotal;

switch (libros) {
  case 1:
    precioTotal = bestsellers * cantidadLibros * dias;
    break;
  case 2:
    precioTotal = literatura * cantidadLibros * dias;
    break;
  case 3:
    precioTotal = academicos * cantidadLibros * dias;
    break;
  default:
    alert("Opción de libro no válida");
}

if (dias >= 10) {
  precioTotal *= descuentomayor10dias; 
}

alert("Su total a pagar es: " + precioTotal);
