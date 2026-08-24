const express = require("express");
const app = express();

const films = require("./data/films.json");

app.get("/api/films", (req, res) => {
    res.status(200).json(films);
});

app.get("/api/films/:annee")

app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
}); 
