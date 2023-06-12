<?php 

if($_POST){

	$Nombre = $_POST['nombre'];
	$strEmail = $_POST['email'];
	$strCelular = intval($_POST['Celular']);
	$strMensaje = $_POST['Mensaje'];

	
	if($Nombre == '' || $strEmail == '' || $strCelular == '' || $strMensaje==''){

		$arrResponse = array('status' => false, 'msg' => 'Los campos están vacios' );

	}else{

          //para enviar al correo podemos utilizar esto o tambien el de abajo
/*
		$to = "garymartinez832@gmail.com";
	    $subject = "Asunto del email";
	    $consulta = " Nombre:" . $Nombre ."\n E-mail: " . $strEmail ."\n Celular: " . $strCelular . "\n Mensaje: " . $strMensaje;
	    
	    $headers = "From: gmartinezn@autonoma.edu.pe" . "\r\n" . "CC: garymartinez832@gmail.com";
	    
	    mail($to, $subject, $consulta, $headers);
*/
	  


		/*$consulta = " Nombre:" . $Nombre ."\n E-mail: " . $strEmail ."\n Celular: " . $strCelular . "\n Mensaje: " . $strMensaje;

		mail("garymartinez832@gmail.com", "Mensaje del formulario de contacto", $consulta);*/
		

		$arrResponse = array('status' => true, 'msg' => 'Gracias por su preferencia');

	}

	 echo json_encode($arrResponse,JSON_UNESCAPED_UNICODE);

	die();
}


?>
