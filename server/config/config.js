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
process.env.MONGO_URL;

process.env.URLDB = urlDB;