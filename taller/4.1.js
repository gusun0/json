// Importando el archhivo JSON
const got = require('../data/got.json');
// importando el saveFile
const saveFile = require('../api/saveFile');




console.log('Personajes:');
console.table(got);

//Taller 4.1: Create

const descripcion = {
    actor: 'Bella Ramsey',
    genero: 'Female',
    casa: 'Mormonts'
};

console.log(descripcion);


const personaje = 'Lyanna';

/*
//TODO: Adicionar a Lyanna a la lista de personajes con su respectiva descripcion
*/
// create
got[personaje] = descripcion;
console.table(got);

saveFile.toJSON(got);

// Read
const personaje2 = 'Tyrion';
const resultado = got[personaje2];
console.table(resultado);
console.table(resultado.actor);

// UPDATE
const personaje3 = 'Jon Snow';
got[personaje3].casa = 'Tarariyens';
console.table(got);






