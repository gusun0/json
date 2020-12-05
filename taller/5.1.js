const api = require('../api/got.js');
/*
const conversion = (clave,valor) => {
	
	if(clave === 'books'){
		len = clave.length;
		//console.log(len);
		return len;
	}	

	if(clave == 'createdAt'){
           r = new Date(valor); 
	  return r; 
	}


	return valor;
}
*/
/*
const conversion2 = (clave, valor) => {
	if(clave == 'createdAt'){
           r = new Date(valor); 
	  return r; 
	}
	return valor;
}
*/
// Herramientas
const show = (result) => { 
    console.table(`${result.name} ${result.location} ${result.founder}`);


    
    //TODO:
    // Acceder a las propiedades de Jon Snow:
    // - titles
    // - name
    // - gender
    // - culture
    // - house
	
  // console.log(result.titles);
  // console.log(result.name);
  // console.log(result.gender);
  // console.log(result.culture);
  // console.log(result.house);
}




// Taller 5.1: API https://api.got.show
const endpoint = 'api/book/characters/Jon%20Snow';
api.request(endpoint, show);




