//Variables declaradas
let auditoriaRRHH = "Auditoria sobre recursos humanos de su empresa: Revision de procesos y gestiones internas.";
let gestionRRHH = "Gestiones internas sobre recursos humanos de su empresa: Organización e implementación de procesos relacionados";
let btnContratar = document.querySelector('.btn-primary');

//Arrays
let arr = ["Masterclass de metodologias agiles", "Masterclass de gestión de equipos", "Masterclass de gestión emocional"];
let provincias = [" Mendoza", " San Juan ", " San Luis", " Cordoba", " Buenos Aires"];

//Objetos
let staff = [{
        teamName: "Gaston Sawiak",
        role: ["Developer", "Scrum Master", "IT Recruiter"],
        studies: "Developer Front End, programador y creador de contenido multimedia. Certificado en lenguajes de programación, metodologias SCRUM y cargos medios.",
        disponible: false
    },
    {
        teamName: "Hector Sawiak",
        role: ["Chief Executive Officer", "CEO"],
        studies: "Lider del proyecto, encargado de realizar los servicios de consultoria. Años de experiencia como Manager y Gerente. Licenciado en ciencias de la educacion y teologia.",
        disponible: true
    }]

//Loop de selección de servicios principales
while(true){
    let costoServicio = parseInt(prompt(`Bienvenido! Vamos a calcular los costos del servicio en el que estes interesado: Selecciona una opcion con un numero: \n\n 1. Auditoria de Recursos humanos.\n 2. Gestión de Recursos Humanos.`));

    if(costoServicio == 1) {
        costoRRHH = 57000;
        alert(`Usted selecciono: ${auditoriaRRHH} Con un valor de ${costoRRHH}`);
        document.getElementById("card-title").innerHTML=`${auditoriaRRHH} Con un valor de ${costoRRHH}`;
        break;
    }else if (costoServicio == 2) {
        costoRRHH = 73000;
        alert(`Usted selecciono: ${gestionRRHH} Con un valor ${costoRRHH}`);
        document.getElementById("card-title").innerHTML=`${auditoriaRRHH} Con un valor de ${costoRRHH}`;
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
document.getElementById("card-text").innerHTML=`Recuerde que tiene un 10% de descuento con pago en efectivo! En total: ${descuento} <span class="badge bg-secondary">10% OFF</span>`;

//Loop para seleccionar servicios adicionales(luego hacer una para seleccionar ninguno!)
while(true){
    let opcionExtras = parseInt(prompt("Los servicios adicionales son: \n\n 1. Gestion y auditoria de contenido de calidad en el footprint digital. \n 2. Implemetación de metodologias SCRUM en los equipos presentes en la organización."));

    if (opcionExtras == 1) {
        adicionales = 18500;
        alert(`El costo de este servicio seria de ${adicionales}`);
        document.getElementById("card-text2").innerHTML=`El costo de este servicio seria de ${adicionales}`;
        break;
    }else if (opcionExtras == 2) {
        adicionales = 21400;
        alert(`El costo de este servicio seria de ${adicionales}`);
        document.getElementById("card-text2").innerHTML=`El costo de este servicio seria de ${adicionales}`;
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
document.getElementById("card-text3").innerHTML=`El total de todo seria: ${descuentoFinal}`;

//Funcion para conseguir la fecha del dia en el que el usuario realiza el presupuesto
const f = new Date();
document.getElementById("card-footer").innerHTML="Este presupuesto corresponte a la fecha: " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

//hacer print de informacion solo cuando el cliente hace click en contratar

btnContratar.addEventListener("click", infoContratar);

function infoContratar() {

  document.getElementById("infoContrato").innerHTML = "Pronto nos pondremos en contacto con usted!";


    //Funcion que utiliza random para poder mostrar un servicio al azar que pueda ser de interes del cliente
    document.getElementById('masInfo').innerHTML = "<br>Encontra otros servicios como: " + '<a href="#">' + arr[Math.floor(random(1, 4))-1] + "</a>";
    
    random()

    function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    } 
} 

//Quien esta disponible para el servicio
staff.forEach(object => {
    if(object.disponible === true){
        document.getElementById("perDisponible").innerHTML = "Personal disponible"
        document.getElementById('cardPersonal').innerHTML = 
        `<div class="card" style="width: 18rem;">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG2XA6D9phxjA/profile-displayphoto-shrink_800_800/0/1640899805963?e=1657756800&v=beta&t=XbUPXlW9p3KAHd0D7hoO2URhIgbHRAzzgC9EjodSJiA" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${object.teamName}</h5>
          <p class="card-text">${object.studies}</p>
          <a href="https://gastonsawiak.github.io/Crux-consulting/" class="btn btn-primary">Conocer mas</a>
        </div>
      </div>`
    } else if (object.disponible === false) {
        document.getElementById('cardPersonal').innerHTML = "No hay personal vacante"
    }
});

//Imprimir solo las provincias habilitadas.
    const start = 3;
    const deleteCount = 2;
    const removedProvs = provincias.splice(start, deleteCount);

document.write(`<br>Estamos disponibles en ${provincias}`);
document.write(`<br>Proximamente vamos a estar en ${removedProvs}`);