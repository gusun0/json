//function imprimir(){
//	 console.log('imprimiendo');
//}
//eval('imprimir();');
//const metodo = 'imprimir';
//console.log(typeof metodo)
//eval(typeof metodo +'();');

global.imprimir = function imprimir(){
 console.log('estoy imprimiendo');
}

const metodo = 'imprimir';
global[metodo]();


