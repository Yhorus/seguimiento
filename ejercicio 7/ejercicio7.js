const General = 50000;
const Preferencial = 150000;
const vip = 300000;
const impuesto = 0.1;

let localizacion = parseInt(prompt("seleccione el lugar deseado: \n1 General \n2 Preferencial \n3 VIP"))

let boletos = parseInt(prompt("seleccione la cantidad de boletos (1-5)"));

let pago = parseInt(prompt("desea pagar con: \n1 efectivo \n2 tarjeta"))

if (boletos < 1 || boletos > 5) {
    alert("Solo puedes comprar de (1-5)");
  }

  
switch (localizacion) {
    case 1:
    precio= General * boletos;
    valor= precio * impuesto;
    total= precio + valor;
    alert(total)
    break;

    case 2: 
    precio = Preferencial * boletos;
    valor = precio * impuesto;
    total= precio + valor;
    alert(total)
    break;

    case 3:
    total = vip * boletos;
    alert(total)
    default:
    break;
}