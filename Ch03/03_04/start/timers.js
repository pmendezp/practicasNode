var tiempoEspera = 3000;
var tiempoActual = 0;
var intervaloEspera = 10;
var porcentajeEsperado = 0;

function escribirPorcentajeEspera(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function () {
  tiempoActual += intervaloEspera;
  porcentajeEsperado = Math.floor((tiempoActual / tiempoEspera) * 100);
  escribirPorcentajeEspera(porcentajeEsperado);
}, intervaloEspera);

setTimeout(function () {
  clearInterval(interval);
  escribirPorcentajeEspera(100);
  console.log("\n\n done \n\n");
}, tiempoEspera);

process.stdout.write("\n\n");
escribirPorcentajeEspera(porcentajeEsperado);