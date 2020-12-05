/*
const buscar = (valor) => {
//let resultado = '';
switch (valor){
 case 1:
	resultado = 'uno';
	break;
 case 2:
	resultado = 'dos';
	break;
 case 3:
	resultado = 'tres';
	break;
 default:
	resultado = 'cero';
	break;
}
return resultado;

}

console.log(buscar(2));

*/

// Forma 2 

const numeros = {
 1: 'uno',
 2: 'dos',
 3: 'tres'
};


const buscar = (valor) => {
  return numeros[valor] || 'cero'; 
};

console.log(buscar(3));


