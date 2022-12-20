const mysql = require('mysql');

//Datenbankverbindung
const connection = mysql.createConnection({
  host: 'cocktailor.mysql.database.azure.com',
  user: 'cocktailor',
  password: 'LZdMej%X6a<55WmY',
  database: 'cocktailor_db',
  port: 3306
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Erfolgreich verbunden...');
});

module.exports = connection;
