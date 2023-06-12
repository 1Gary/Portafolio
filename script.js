let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("empatico");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("Responsabilidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Obtiene el botón y el modal
var btn = document.getElementById("logro-1-button");
var modal = document.getElementById("modal-logro1");
var btn2 = document.getElementById("logro-2-button");
var modal2 = document.getElementById("modal-logro2");

// Obtiene el botón cerrar del modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close-logro2")[0];

// Abre el modal cuando se hace clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Cierra el modal cuando se hace clic en el botón cerrar
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var btnAbrirPDF = document.getElementById('btnAbrirPDF1');
var modalPDF1 = document.getElementById('modalPDF1');
var btnAbrirPDF2 = document.getElementById('btnAbrirPDF2');
var modalPDF2 = document.getElementById('modalPDF2');
var btnAbrirPDF3 = document.getElementById('btnAbrirPDF3');
var modalPDF3 = document.getElementById('modalPDF3');


// Obtiene el botón cerrar del modal
var spandocumento1 = document.getElementsByClassName("close-documento1")[0];
var spandocumento2 = document.getElementsByClassName("close-documento2")[0];
var spandocumento3 = document.getElementsByClassName("close-documento3")[0];

// Cierra el modal cuando se hace clic en el botón cerrar
spandocumento1.onclick = function() {
  modalPDF1.style.display = "none";
}
// Cierra el modal cuando se hace clic en el botón cerrar
spandocumento2.onclick = function() {
  modalPDF2.style.display = "none";
}
// Cierra el modal cuando se hace clic en el botón cerrar
spandocumento3.onclick = function() {
  modalPDF3.style.display = "none";
}

btnAbrirPDF.onclick = function() {
  modalPDF1.style.display = 'block';
}

btnAbrirPDF2.onclick = function() {
  modalPDF2.style.display = 'block';
}

btnAbrirPDF3.onclick = function() {
  modalPDF3.style.display = 'block';
}

// Cierra el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modalPDF1) {
    modalPDF1.style.display = "none";
  }
  if (event.target == modalPDF2) {
    modalPDF2.style.display = "none";
  }
  if (event.target == modalPDF3) {
    modalPDF3.style.display = "none";
  }
}




