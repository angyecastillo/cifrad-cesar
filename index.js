const start = (chooseFunction) => {
	//Obtener el texto ingresado para cifrar
 	const string = document.getElementById('text').value;
 	//Numero de posiciones a recorrer
	const offset = parseInt(document.getElementById('number').value) % 26;
 	//limpiar / borrar contenido de la etiqueta
	document.getElementById('text-result').innerHTML = '';
	//Condicional para ver que funcion ejecutar dependiendo del boton, true = encripta, false = desencripta.
 	if(chooseFunction){
 		//Imprimir en pantalla el texto cifrado que retorna la funcion encode
 		document.getElementById('text-result').innerHTML = cipher.encode(offset, string);
 	}else{
 		//Imprimir en pantalla el texto decifrado que retorna la funcion decode
 		document.getElementById('text-result').innerHTML = cipher.decode(offset, string);
 	}
}
