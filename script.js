let auditoriaRRHH = "Auditoria sobre recursos humanos de su empresa: Revision de procesos y gestiones internas.";
let gestionRRHH = "Gestiones internas sobre recursos humanos de su empresa: Organización e implementación de procesos relacionados";

let costoAuditoriaRRHH = 50700;
let costoGestionRRHH = 70300;
let costoTotal = costoAuditoriaRRHH + costoGestionRRHH;

let adicionales = 0;

while(true){
    let costoServicio = parseInt(prompt(`Bienvenido! Vamos a calcular los costos del servicio en el que estes interesado: Selecciona una opcion con un numero: \n\n 1. Auditoria de Recursos humanos.\n 2. Gestión de Recursos Humanos.`));

    if(costoServicio == 1) {
        let costoGestionRRHH = 0
        alert(`Usted selecciono: ${auditoriaRRHH} Con un valor de ${costoAuditoriaRRHH}`);
        break;
    }else if (costoServicio == 2) {
        let costoAuditoriaRRHH = 0;
        alert(`Usted selecciono: ${gestionRRHH} Con un valor ${costoGestionRRHH}`);
        break;
    }else if(costoServicio != 1 || costoServicio != 2){
        alert("Intente nuevamente");
        continue;
    }
}    

function descuentoCostos(costoTotal){
    return (costoTotal * 0.90);
}

let descuento = descuentoCostos(costoTotal);


alert(`Ahora vamos a calcular los extras de cada servicio! Recuerde que tiene un 10% de descuento con pago en efectivo! En total: ${descuento}`);

while(true){
    let opcionExtras = parseInt(prompt("Los servicios adicionales son: \n\n 1. Gestion y auditoria de contenido de calidad en el footprint digital. \n 2. Implemetación de metodologias SCRUM en los equipos presentes en la organización."));

    if (opcionExtras == 1) {
        let adicionales = 18500;
        alert(`El costo de este servicio seria de ${adicionales}`);
        break;
    }else if (opcionExtras == 2) {
        let adicionales = 21400;
        alert(`El costo de este servicio seria de ${adicionales}`);
        break;
    }else if (opcionExtras != 1 || opcionExtras != 2) {
        alert("Intente nuevamente");
        continue;
    }
}

function sumaTotal (adicionales) {
    return (descuento + adicionales);
}

let descuentoFinal = sumaTotal(adicionales);

alert(`El total de todo seria: ${descuentoFinal}`);
