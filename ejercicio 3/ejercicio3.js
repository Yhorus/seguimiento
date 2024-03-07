const clasicos = 500000;
const running = 800000;
const basketball = 1000000;

let cantidad;
let tipo;
let talla;
let costoTotal;

tipo = parseInt(prompt("Seleccione el tipo de tenis:\n1. Clásicos\n2. Running\n3. Basketball"));

if (tipo < 1 || tipo > 3) {
    alert("Por favor, seleccione un tipo de tenis válido.");
    tipo = parseInt(prompt("Seleccione el tipo de tenis:\n1. Clásicos\n2. Running\n3. Basketball"));
}

talla = parseInt(prompt("Seleccione la talla de su preferencia (35-44):"));

if (talla < 35 || talla > 44) {
    alert("Por favor, ingrese una talla válida.");
    talla = parseInt(prompt("Seleccione la talla de su preferencia (35-44):"));
}

cantidad = parseInt(prompt("Seleccione la cantidad de pares que desea (de 1 a 5 pares):"));

if (cantidad < 3) {
    switch (tipo) {
        case 1:
            costoTotal = cantidad * clasicos;
            break;
        case 2:
            costoTotal = cantidad * running;
            break;
        case 3:
            costoTotal = cantidad * basketball;
            break;
        default:
            alert("Por favor, seleccione un tipo válido.");
            break;
    }
} else {
    let descuento = 0.1; 
    switch (tipo) {
        case 1:
            costoTotal = cantidad * clasicos;
            break;
        case 2:
            costoTotal = cantidad * running;
            break;
        case 3:
            costoTotal = cantidad * basketball;
            break;
        default:
            alert("Por favor, seleccione un tipo válido.");
            break;
    }
    costoTotal -= costoTotal * descuento;
}

alert("El total a pagar es: " + costoTotal);