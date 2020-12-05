const api = require('../api/got.js');

/*
const conversion = (clave, valor) => {
	if(clave == 'founder'){
		if(clave == ''){
			console.log(valor);
		}
	}	
	return valor;
}

*/


// Herramientas
const show = (result) => {
//	console.log(result);
	/*
//    console.log(result);

    r = JSON.stringify(result,null,4);
//    console.log(r);
   
    r2 = JSON.parse(r,conversion);
   // console.log(r2);
	 */

//   result.forEach(n => console.log(n.name)); 
 //  console.log('\n');
 //  result.forEach(n => console.log(n.location)); 
 //  console.log('\n');
 //  result.forEach(n => console.log(n.founder)); 
 //  console.log('\n');

/*
    result.forEach(n => {
    if(n.founder.length > 0){
	    console.log(n.founder);
     }
    })
  */
	result.forEach(n => {	
		if(n.religion.length > 0) {
		  console.log(`(${n.religion}) ${n.name}`);
		}
		})

   
//	console.log(result);

}



    //TODO:
    // Entrar a la pagina de Game of Thrones API x 
    // Cambiar el endpoint para obtener todos los Castillos x
    // Filtrar el resultado con los castillos que tengan nombre de fundador
    
    // Acceder a las propiedades:
    // - name
    // - location
    // - founder



// Taller 5.2: API https://api.got.show
const endpoint = 'api/show/castles';
api.request(endpoint, show);





