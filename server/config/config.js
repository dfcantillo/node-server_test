// ==================================
// CONFIGURACIONES GLOBALES
// ==================================

process.env.PORT =  process.env.PORT || 3000;

// =================================================
// Entorno
// =================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'develop';

// =================================================
// Base de datos
// =================================================
let urlDB = (process.env.NODE_ENV  === 'develop') ? 'mongodb://localhost:27017/claveDelMarDB' :
'mongodb+srv://admin:ucZy3gyXKmqKQkRd@cluster0-oy3h9.mongodb.net/claveDelMarDB';
// urlDB = 'mongodb+srv://admin:ucZy3gyXKmqKQkRd@cluster0-oy3h9.mongodb.net/claveDelMarDB';

process.env.URLDB = urlDB;