const edad = () => 18;
// creando método calcularFecha
const calcularFecha = () => (new Date()).toJSON();

// Taller 2.3: Conversiones
const maltrecho = {
    esValido: false,
    calcular: edad(),
    fecha: calcularFecha()
}

//TODO: Convertir a Texto

const texto = JSON.stringify(maltrecho);
console.log(texto);

const filtro = JSON.stringify(maltrecho, ['calcular','fecha'],2);
console.log(filtro);

const filtro2 = (clave, valor) => {
 if(!clave || typeof valor === 'int' && valor === 18){
  return valor;	
 }
return undefined;
} 

const texto3 = JSON.stringify(maltrecho, filtro2);
console.log(texto3);
