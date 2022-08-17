//Miercoles 10 de Agosto del 2022

function obtenerFecha(){
    let fechaActual = new Date();
    // console.log(fechaActual)
    // console.log(fechaActual.getDate())
    // console.log(fechaActual.getDay()); // valor del 0 al 6 siendo 0 dia domingo 
    // console.log(fechaActual.getMonth())
    // console.log(fechaActual.getFullYear());
    
    let parrafoFecha = document.getElementById("fecha");
    
    let diaSemana = ["domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    parrafoFecha.innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;

let horas = document.getElementById("hora");

let hora = fechaActual.getHours();
    if(hora < 10){
        hora = "0" + hora
            }
horas.innerHTML = `${hora}:`


let minutos = document.getElementById("minutos")

let minutitos = fechaActual.getMinutes();
if(minutitos < 10){
    minutitos = "0" + minutitos
}

minutos.innerHTML = `${minutitos}:`


let segundos = document.getElementById("segundos")

let segunditos = fechaActual.getSeconds();
if(segunditos < 10){
    segunditos = "0" + segunditos
}

segundos.innerHTML = `${segunditos}`

let ampm = document.getElementById("ampm")



if(horas < 13 ){
    ampm.innerHTML = "AM"
}else{
    ampm.innerHTML = "PM"
}


}

setInterval(obtenerFecha,1000);