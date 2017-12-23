var fs = require("fs");

if (fs.existsSync("lib")) {
  console.log("El directorio ya existe");
} else {

  fs.mkdir("lib", function (err) {

    if (err) {
      console.log(err);
    } else {
      console.log("Directorio creado");
    }

  });

}

