const precio_base = 7000000;

let pagototal = 1;
let pagodoscuotas = 2;
let pagotrescuotas = 3;
        
let opcionSeleccionada = parseInt(prompt("seleccione metodo de pago \n1. Pago total \n2. Pagar a dos cuotas \n3. Pagar a tres cuotas"));
        
        
 if(opcionSeleccionada == pagototal) {
            costototal = precio_base; 
            porcentaje = precio_base* 0.05
            descuento = precio_base - porcentaje
            
         alert("su total a pagar es" + " " + descuento )

        }else if (opcionSeleccionada == pagodoscuotas) {
            dividir = precio_base/2;
            porcentaje= dividir * 0.02;
            total = precio_base / 2 - porcentaje 
            alert("su total a pagar es" + " "+total)

        } else if (opcionSeleccionada == pagotrescuotas) {
            dividir = precio_base/3;
            porcentaje= dividir * 0.02;
            total = precio_base / 3 - porcentaje
            alert("su total a pagar es" + " "+total)
        }

        if(opcionSeleccionada < 1 || valor > 3 ) {
            console.log("seleccion invalida, intenta otra vez");
        }       