const got = require('../data/got.json');
// para hacer los cambios en el archivo
const saveFile = require('../api/saveFile');



console.log('Personajes:');
console.table(got);

//Taller 4.3: Update
const personaje = 'Jon Snow';
//TODO:Actualizar la casa de Jon Snow a Targaryens
got[personaje].casa = 'Targaryinens';

console.log('Update:');
console.table(got);


saveFile.toJSON(got);
