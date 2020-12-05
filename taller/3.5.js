// usando ES5
/* 
const pagina =  {
  alIniciar: function(){
    console.log('se ha iniciado el ciclo de vida');
  },
  alFInalizar: function(){
console.log('se ha finalizado el ciclo de vida');
  }
}

//let evento = 'alIniciar';
//pagina.alIniciar();
//pagina[evento]();

const metodo = (evento) => pagina[evento](); 
let evento = 'alIniciar';
metodo(evento);

*/


// USANDO ES6 forma # 1
/*
const pagina =  {
  alIniciar(){
    console.log('se ha iniciado el ciclo de vida');
  },
  alFinalizar(){
console.log('se ha finalizado el ciclo de vida');
  }
}

//let evento = 'alIniciar';
//pagina.alIniciar();
//pagina[evento]();

const metodo = (evento) => evento && pagina[evento](); 
let evento = 'alFinalizar';
metodo(evento);
*/

// USANDO ES6 forma # 2 

const pagina =  {
  alIniciar:() => console.log('se ha iniciado el ciclo de vida')
  ,
  alFinalizar:() => console.log('se ha finalizado el ciclo de vida')
}

//let evento = 'alIniciar';
//pagina.alIniciar();
//pagina[evento]();

const metodo = (evento) => evento && pagina[evento](); 
let evento = 'alFinalizar';
metodo(evento);
