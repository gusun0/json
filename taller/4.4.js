const got = require('../data/got.json');
// imporante el saveFile para hacer cambios en el archivo
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(got);

//Taller 4.4: Delete
const personaje = 'Daenerys';
//TODO: Eliminar a Daenerys de la lista de personajes

delete got[personaje];

console.log('Delete:');
console.table(got);

saveFile.toJSON(got);
