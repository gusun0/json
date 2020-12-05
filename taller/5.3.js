const api = require ('../api/got.js');
// saveFile

const saveFile = require('../data/got.json');

const show = (result) => {
	//console.log(result.factionsOne);
	
	let aux;	

	result.forEach(n => {
		if(n.factionsOne.length < 2 &&  n.factionsTwo.length < 2){
			aux += n.factionsOne;
		}
	});

}

saveFile(aux);

const endpoint = 'api/show/battles';
api.request(endpoint, show);

