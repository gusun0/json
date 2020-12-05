
const simpsons = {
	     "nombre": "Homer J Simpson",
	     "edad": 39,
	     "direccion": {
		             "calle": "Avenida Siempreviva 742",
		             "ciudad": "Springfield"
		         },
	     "esEmpleado": true,
	     "hijos": [ "Bart", "Lisa", "Maggie" ]
 }

//const nombre = simpsons.nombre;
//const calle = simpsons.direccion.calle;

const {nombre, edad, direccion: {calle, ciudad}, hijos} = simpsons;

console.log(nombre);
console.log(hijos[0]);

