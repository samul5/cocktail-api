const express  = require('express');
var router     = require("express").Router();
const Cocktail = require("./get-cocktails.js");

const app  = express();
const port = 3000;
app.use(router);


// Routen
router.get("/cocktails", Cocktail.findAll);
router.get("/cocktails/:id", Cocktail.findById);
router.get("/", (req, res) => {
  res.send("API funktioniert. Nutze die Routen /cocktails oder /cocktails/:id, um Daten zu erhalten.");
});

// App starten
app.listen(port, () => {
  console.log('App gestartet');
})
