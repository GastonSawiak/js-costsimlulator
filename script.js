//Variables declaradas
let auditoriaRRHH = "Auditoria sobre recursos humanos de su empresa: Revision de procesos y gestiones internas.";
let gestionRRHH = "Gestiones internas sobre recursos humanos de su empresa: Organización e implementación de procesos relacionados";
let btnContratar = document.querySelector('#btnContratar');
let btnGuardar = document.getElementById('boton-guardar');
let btnS = document.querySelector('#btnS');
let btnSec = document.querySelector('#btnSec');
let sb = document.querySelector('#serviciosMain'); 
let sSec = document.querySelector('#serviciosSec');  
let costoRRHH = 0;
let adicionales = 0;
let kanyetext = document.getElementById('kanyetitleh');

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
    }];

//Local Storage - Guardar Nombre
document.addEventListener("DOMContentLoaded", function(){

    btnGuardar.addEventListener('click', function(){
        /*Captura de datos escrito en los inputs*/        
        let nom = document.getElementById("nombretxt").value;
        let apell = document.getElementById("apellidotxt").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apell);

        let nombre = localStorage.getItem("Nombre");

        document.getElementById('welcomeMsg').innerHTML = `Hola ${nombre}!`
    })
});


//Loop de selección de servicios principales
/*while(true){
    let costoServicio = parseInt(prompt(`Bienvenido! Vamos a calcular los costos del servicio en el que estes interesado: Selecciona una opcion con un numero: \n\n 1. Auditoria de Recursos humanos.\n 2. Gestión de Recursos Humanos.`));

    if(costoServicio == 1) {
        costoRRHH = 57000;
        alert(`Usted selecciono: ${auditoriaRRHH} Con un valor de ${costoRRHH}`);
        document.getElementById("card-title").innerHTML=`${auditoriaRRHH} Con un valor de ${costoRRHH}`;
        break;
    }else if (costoServicio == 2) {
        costoRRHH = 73000;
        alert(`Usted selecciono: ${gestionRRHH} Con un valor ${costoRRHH}`);
        document.getElementById("card-title").innerHTML=`${gestionRRHH} Con un valor de ${costoRRHH}`;
        break;
    }else if(costoServicio != 1 || costoServicio != 2){
        alert("Intente nuevamente");
        continue;
    }
}*/ 

//la wea fome seleccionar option de servicio en menu select (esto me costo lagrimas)

btnS.addEventListener('click', displayMains);

function displayMains() {
    // show the selected index
    if(sb.selectedIndex == 0){
        costoRRHH = 57000;
        document.getElementById("card-title").innerHTML=`${auditoriaRRHH} Con un valor de ${costoRRHH}`;
    }else if (sb.selectedIndex == 1){
        costoRRHH = 73000;
        document.getElementById("card-title").innerHTML=`${gestionRRHH} Con un valor de ${costoRRHH}`;
    }
};

btnSec.addEventListener('click', displaySecs);

function displaySecs() {
    // show the selected index
    if(sSec.selectedIndex == 0){
        adicionales = 18500;
        document.getElementById("card-text2").innerHTML=`El costo de este servicio adicional seria de ${adicionales}`;
    }else if (sSec.selectedIndex == 1){
        adicionales = 16500;
        document.getElementById("card-text2").innerHTML=`El costo de este servicio adicional seria de ${adicionales}`;
    }else if (sSec.selectedIndex == 2){
        adicionales = 16700;
        document.getElementById("card-text2").innerHTML=`El costo de este servicio adicional seria de ${adicionales}`;
    }else if (sSec.selectedIndex == 3){
        adicionales = 0;
        document.getElementById("card-text2").innerHTML=`El costo de este servicio adicional seria de ${adicionales}`;
    }
};

//Funcion para realizar descuentos
function descuentoCostos(costoRRHH){
    return (costoRRHH * 0.90);
};

let descuento = descuentoCostos();

//Alertar descuento 
document.getElementById("card-text").innerHTML=`Recuerde que tiene un 10% de descuento con pago en efectivo! <span class="badge bg-secondary">10% OFF</span>`;

//Funcion para sumar todos los totales
function sumaTotal (adicionales) {
    return (descuento + adicionales)
};

let descuentoFinal = sumaTotal(adicionales);

//Alertar el costo total
document.getElementById("card-text3").innerHTML=`El total de todo seria: ${descuentoFinal}`;

//Funcion para conseguir la fecha del dia en el que el usuario realiza el presupuesto
function Date() {
    const f = new Date();
    document.getElementById("card-footer").innerHTML="Este presupuesto corresponte a la fecha: " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
}


//hacer print de informacion solo cuando el cliente hace click en contratar
btnContratar.addEventListener("click", infoContratar);



function infoContratar() {

    Date()

  document.getElementById("infoContrato").innerHTML = "Pronto nos pondremos en contacto con usted!";

    //Funcion que utiliza random para poder mostrar un servicio al azar que pueda ser de interes del cliente
    document.getElementById('masInfo').innerHTML = "<br>Encontra otros servicios como: " + '<a href="#">' + arr[Math.floor(random(1, 4))-1] + "</a>";
    
    random()

    function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    } 
} ;

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

fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        kanyetext.innerHTML = `<p> ${quote.quote} </p>`
    });
