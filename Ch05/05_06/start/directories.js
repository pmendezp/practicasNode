var fs = require("fs");

fs.readdirSync("./logs").forEach(function (nombreArch) {

  fs.unlinkSync("./logs/" + nombreArch);

});

fs.rmdir("./logs", function (err) {

  if (err) {
    throw err;
  }

  console.log("Logs se borraron del directorio");

});