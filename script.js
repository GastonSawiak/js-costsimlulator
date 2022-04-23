//Variables declaradas
let auditoriaRRHH = "Auditoria sobre recursos humanos de su empresa: Revision de procesos y gestiones internas.";
let gestionRRHH = "Gestiones internas sobre recursos humanos de su empresa: Organización e implementación de procesos relacionados";
//Arrays
let arr = ["Masterclass de metodologias agiles", "Masterclass de gestión de equipos", "Masterclass de gestión emocional"];
//Objetos
let staff = {
    member1: [{
        teamName: "Gaston Sawiak",
        role: "Developer, Scrum Master, IT Recruiter",
        studies: "Developer Front End, programador y creador de contenido multimedia. Certificado en lenguajes de programación, metodologias SCRUM y cargos medios."
    }],
    member2: [{
        teamName: "Hector Sawiak",
        role: "Chief Executive Officer, CEO",
        studies: "Lider del proyecto, encargado de realizar los servicios de consultoria. Años de experiencia como Manager y Gerente. Licenciado en ciencias de la educacion y teologia.",
    }]
}
//Loop de selección de servicios principales
while(true){
    let costoServicio = parseInt(prompt(`Bienvenido! Vamos a calcular los costos del servicio en el que estes interesado: Selecciona una opcion con un numero: \n\n 1. Auditoria de Recursos humanos.\n 2. Gestión de Recursos Humanos.`));

    if(costoServicio == 1) {
        costoRRHH = 57000;
        alert(`Usted selecciono: ${auditoriaRRHH} Con un valor de ${costoRRHH}`);
        document.write(`<h3>Usted selecciono: ${auditoriaRRHH} Con un valor de ${costoRRHH}</h3>`);
        break;
    }else if (costoServicio == 2) {
        costoRRHH = 73000;
        alert(`Usted selecciono: ${gestionRRHH} Con un valor ${costoRRHH}`);
        document.write(`<h3>Usted selecciono: ${gestionRRHH} Con un valor ${costoRRHH}`);
        break;
    }else if(costoServicio != 1 || costoServicio != 2){
        alert("Intente nuevamente");
        continue;
    }
}    
//Funcion para realizar descuentos
function descuentoCostos(costoRRHH){
    return (costoRRHH * 0.90);
}

let descuento = descuentoCostos(costoRRHH);

//Alertar descuento 
alert(`Recuerde que tiene un 10% de descuento con pago en efectivo! En total: ${descuento}`);
document.write(`<h3>Recuerde que tiene un 10% de descuento con pago en efectivo! En total: ${descuento}</h3>`);
//Loop para seleccionar servicios adicionales(luego hacer una para seleccionar ninguno!)
while(true){
    let opcionExtras = parseInt(prompt("Los servicios adicionales son: \n\n 1. Gestion y auditoria de contenido de calidad en el footprint digital. \n 2. Implemetación de metodologias SCRUM en los equipos presentes en la organización."));

    if (opcionExtras == 1) {
        adicionales = 18500;
        alert(`El costo de este servicio seria de ${adicionales}`);
        document.write(`<h3>El costo de este servicio seria de ${adicionales}</h3>`);
        break;
    }else if (opcionExtras == 2) {
        adicionales = 21400;
        alert(`El costo de este servicio seria de ${adicionales}`);
        document.write(`<h3>El costo de este servicio seria de ${adicionales}</h3>`);
        break;
    }else if (opcionExtras != 1 || opcionExtras != 2) {
        alert("Intente nuevamente");
        continue;
    }
}
//Funcion para sumar todos los totales
function sumaTotal (adicionales) {
    return (descuento + adicionales);
}

let descuentoFinal = sumaTotal(adicionales);
//Alertar el costo total
alert(`El total de todo seria: ${descuentoFinal}`);
document.write(`<h2>El total de todo seria: ${descuentoFinal}</h2>`);
//Funcion para conseguir la fecha del dia en el que el usuario realiza el presupuesto
const f = new Date();
document.write("Este presupuesto corresponte a la fecha: " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
//Funcion que utiliza random para poder mostrar un servicio al azar que pueda ser de interes del cliente
document.write("<br>Encontra otros servicios como: " + arr[Math.floor(random(1, 4))-1]),
randomServ()

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
} 
