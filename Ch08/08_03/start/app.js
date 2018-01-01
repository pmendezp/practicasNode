var express = require("express");
var cors = require("cors");
var app = express();

var skierTerms = [
    {
        term: "Marcadora",
        defined: "Se le llama asi a la pistola de paintball, se escucha mas amigable que pistola."
    },
    {
        term: "Speedball",
        defined: "Es un tipo de juego en el paintball donde se juega en infables (bunkers)"
    },
    {
        term: "Bunker",
        defined: "Parte o cosa donde puedes cubrirte para que no te marquen"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app runeando en el puerto 3000");

module.exports = app;