var fs = require("fs");

var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";


stream.once("data", function () {
  console.log("\n\n\n");
  console.log("Leyendo archivo");
  console.log("\n\n\n");
});

stream.on("data", function (chunk) {
  process.stdout.write(`  chunk: ${chunk.length} |`);
  data += chunk;
});

stream.on("end", function () {
  console.log("\n\n\n");
  console.log(`Se termino de leer el archivo ${data.length}`);
  console.log("\n\n\n");
});