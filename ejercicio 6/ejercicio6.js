const hamburguesa = 25000
const pizza = 85000
const fideos = 18000
const envio = 5000

let restaurante = parseInt(prompt("seleccione el restaurate: \n1 hamburgueseria \n2 pizzeria \n3 comida china"))

let domicilio = prompt("¿Desea la comida a domicilio? (Si / No)").toLowerCase();

let pago = prompt("¿desea pagar con: \n1 efectivo \n2 tarjeta ?")



switch (restaurante) {
case 1:
let hamburgueseria = parseInt(prompt("seleccione la comida que desea: \n1 hamburguesa"))
valor = hamburguesa
alert(valor)
break;

case 2: 
let pizzeria = parseInt(prompt("selecciene la comida que desea: \n1 pizza familiar"))
valor = pizza
alert(valor)
break;

case 3: 
let china= parseInt(prompt("seleccione la comida que deseea: \n1 fideos con pollo"))
valor = fideos
alert(valor)
break;
    default:
      break;
}


if (domicilio === "si" || domicilio === "si") {
    const totalConEnvio = valor + envio;
    alert(`su pedido puede tardar entre 45 min a una hora`)
    alert(`El costo de envío es de $${envio}`);
    alert(`Total a pagar con envío: $${totalConEnvio}`);
} else if (domicilio === "no") {
    alert("Usted ha elegido recoger su pedido en el restaurante.");
} else {
    alert("Respuesta inválida. Por favor, responda 'Si' o 'No'.");
    }
