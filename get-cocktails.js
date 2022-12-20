const sql = require("./db-config.js");

// Alle Cocktails
exports.findAll = (_request, result) => {
  sql.query(`SELECT * FROM cocktail`, (_err, res) => {
    console.log("cocktails: ", res);
    result.send(res);
  });
}

// Einzelner Cocktail
exports.findById = (request, result) => {
  sql.query(`SELECT * FROM cocktail WHERE id = ${request.params.id}`, (_err, res) => {
    console.log("einzelner cocktail: ", res[0]);
    result.send(res[0]);
  });
};