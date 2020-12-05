const usuarios = {};
let usuario = 'equiman';
usuarios[usuario] = {};
usuarios[usuario].tipo = 'Administrador';
usuarios[usuario].alerta = {};
usuarios[usuario].alerta.tiempo = 30;
usuarios[usuario].alerta.tipo = 'seg';

usuario = 'equimancho';
const alerta = {tiempo: 60, tipo: 'seg'};
usuarios[usuario] = {tipo: 'usuario', alerta: alerta};

//usuarios[usuario].alerta = alerta;
const tiempo = (usuarios[usuario] && usuarios[usuario].alerta && usuarios[usuario].alerta.tiempo) || 0;


usuarios.equiman.alerta.tiempo = 10;
usuarios.equimancho.alerta.tiempo = 20;

const espacios = ["Juan Camilo", "Martinez Coronado"];
const especial = {[espacios[0]]: {}, [espacios[1]]:{}};


console.log(`tiempo: ${tiempo}`);
console.log(JSON.stringify(usuarios,null, 2));
console.log(JSON.stringify(especial,null, 2));
