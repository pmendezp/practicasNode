var preguntas = [
  "Como te llamas?",

  "Que haces en tus ratos libres?",

  "Cual lenguaje de programacion es tu favorito?"

];



var respuestas = [];



function preguntar(i) {


  process.stdout.write(`\n\n\n\n ${preguntas[i]}`);


  process.stdout.write("  >  ");

}



process.stdin.on('data', function (data) {


  respuestas.push(data.toString().trim());


  if (respuestas.length < preguntas.length) {

    preguntar(respuestas.length);

  } else {

    process.exit();

  }


});



process.on('exit', function () {
  process.stdout.write("\n\n\n\n");



  process.stdout.write(`Go ${respuestas[1]} ${respuestas[0]} you can finish writing ${respuestas[2]} later`);



  process.stdout.write("\n\n\n\n");


});



preguntar(0);

