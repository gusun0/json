// Taller 2.4: Conversiones

// función de conversión
const conversion = (clave, valor) => {
 if(typeof valor !== 'string'){
	 return valor;
 }
/*
const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
// verificando que el valor cumpla con el regex
if(isoDate.test(valor)){
return new Date(valor);
	*/

	// usando clave
	if(clave == 'fecha'){
	return new Date(valor);	
	}

//}
//  return valor;
}


const texto = '{"esValido": false, "calcular": 18, "fecha": "2020-04-01T03:15:32.130Z"}';
//TODO: Convertir a Objeto

console.log(texto);
console.log(typeof texto);

//const maltrecho = JSON.parse(texto);
//console.log(typeof maltrecho);

// haciendo un reviver
const maltrecho = JSON.parse(texto, conversion);
console.log(maltrecho);
console.log(typeof maltrecho);
