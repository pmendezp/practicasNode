var dichos = [
  "Camaron que se duerme se lo lleva la corriente",
  "Dime con quien andas y te dire quien eres",
  "Mas vale en pajaron en mano que ver un ciento volando"
];

var interval = setInterval(function () {
  var i = Math.floor(Math.random() * dichos.length);
  process.stdout.write(`${dichos[i]} \n`);
}, 1000);

process.stdin.on('data', function (data) {
  console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});