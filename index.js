const express  = require('express');
var router     = require("express").Router();
const Cocktail = require("./get-cocktails.js");

const app  = express();
const port = 3000;



// Routen
router.get("/cocktails", Cocktail.findAll);
router.get("/cocktails/:id", Cocktail.findById);
router.get("/", (req, res) => {
  res.send("API funktioniert. Nutze die Routen /cocktails oder /cocktails/:id, um Daten zu erhalten.");
});

app.use(router);
// App starten
app.listen(port, () => {
  console.log('App gestartet');
})
