
var divLoading = document.querySelector("#divLoading");

//NUEVO Correo
var formContacto = document.querySelector("#formcontacto");
    formContacto.onsubmit = function(e){
        e.preventDefault();
        
        var strNombre = document.querySelector("#nombre").value;
        var strEmail = document.querySelector("#email").value;
        var intCelular = document.querySelector("#Celular").value;
        var strMensaje= document.querySelector("#Mensaje").value;

        if (strNombre == ''|| strEmail  == '' || intCelular  == '' || strMensaje =='')
        {
            swal("Atención", "Rellenar todos los campos", "error");
            return false;
        }

        divLoading.style.display = "flex";

        var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        var ajaxUrl = 'https://formsubmit.co/ajax/gmartinezn@autonoma.edu.pe'; 
        var formData = new FormData(formContacto);
        console.log(formData);
        request.open("POST",ajaxUrl,true);
        request.send(formData);
        request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){

            divLoading.style.display = "none";
            formContacto.reset();
            swal("Muchas Gracias","Mensaje Enviado" ,"success");    

                
        }else{

            swal("Error", "Mensaje Enviado" , "error");
            return false;
            
        }
      }



}
  



function controlTag(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true; 
    else if (tecla==0||tecla==9)  return true;
    patron =/[0-9\s]/;
    n = String.fromCharCode(tecla);
    return patron.test(n); 
}

