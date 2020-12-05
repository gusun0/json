const got = require ('../data/got.json');
// haciendo cambios en el archivo

const saveFile = require('../api/saveFile');

for(const clave in got){
 if(got.hasOwnProperty(clave)){
   //const element = got[clave]; 
    delete got[clave]; 
//	element.season = 9;
 }
}


console.table(got);

saveFile.toJSON(got);
