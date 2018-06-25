window.cipher = {
	encode: (offset, string) => {
		//guardar el codigo de la letra cifrada
		let codeCipher;
		//guardar el resultado de cifrado
		let textResult = '';
		//Recorrer cada uno de las letras
		for (let i = 0; i <= string.length - 1 ; i++) {
			//Si el string es un espacio, se deja igual. No se aplica la formula.
			//revisa si hay un espacio
			if(string[i] === ' '){
				textResult += ' ';
			}else{
				//aki Obtiene el codigo ASCII de cada letra
				const codeAscii = string.charCodeAt(i);
				//Para MINUSCULA, codigo ASCII entre 65 y 90
				if(codeAscii > 90){
					position = codeAscii - 97 + offset;
					//Formula para obtener el codigo ASCII de la letra CIFRADA
					codeCipher = (position % 26) + 97;
				//Para MAYUSCULA, codigo ASCII entre 97 y 122
				}else{
					const position = codeAscii - 65 + offset;
					codeCipher = (position % 26) + 65;
				}
				 //Obtiene la letra que corresponde con el codigo ASCII, caracter ya cifrado
				const letterCipher = String.fromCharCode(codeCipher);
				//Agregar la letra cifrada al resultado osea resultado del texto mas  letra cifrada
				textResult += letterCipher;
			}
		}
		//regresa el resultado
		return textResult;
	},
	decode: (offset, string) => {
		let codeCipher;
		let textResult = '';
		for (let i = 0; i <= string.length - 1; i++) {
			// aqui buscamos en la cadena un espacio
			if(string[i] === ' '){
				textResult += ' ';
				// y si no
			}else{
				const codeAscii = string.charCodeAt(i);
				if(codeAscii > 90){
					//Calcula la cada posicion de la letra del abecedario en mayuscula
					// recuerda que empieza en el 97
					const position = codeAscii - 97 - offset;
					//Si la posicion es menor de cero (negativo)
					if(position < 0){
						//Obtiene el codigo ASCII de la letra ya cifrada.
					codeCipher = (position % 26) + 123;
					//y si no
					}else{
						codeCipher = (position % 26) + 97;
					}
					//y si no. es minuscula y en el alfabeto empiza desde el 65
				}else{
					const position = codeAscii - 65 - offset;
					//
					if(position < 0){
						codeCipher = (position % 26) + 91;
					}else{
						codeCipher = (position % 26) + 65;
					}
				}
				// guardamos la letra cifrada y se agrega a la cedena de texto
				const letterCipher = String.fromCharCode(codeCipher);

				textResult += letterCipher;
			}
		}
		// aqui se tiene que mostrar el texto cifrado
		return textResult;
	}
};
