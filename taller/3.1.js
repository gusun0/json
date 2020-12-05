//Taller 3: Propiedades
const persona = {
    nombre: "Homer J Simpson",
    edad: 39,
    residencia: {
        direccion: "Avenida Siempreviva 742",
        ciudad: "Springfield"
    },
    esEmpleado: true,
    hijos: ["Bart", "Lisa", "Maggie"]
}

const propiedad = persona.hijos;
const prop = 'hijos';
console.log(propiedad);

//TODO: Mostrar cada propiedad
console.log(persona.nombre);
console.log(persona['edad']);
console.log(persona['residencia'].direccion);
console.log(persona.residencia.ciudad);
console.log(persona.esEmpleado);
console.log(persona['hijos'][0]);
console.log(propiedad[1]);
console.log(persona[prop][2]);


