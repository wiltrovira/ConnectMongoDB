/**
 * Para ejecutar este módulo, crear un archivo con el nombre ".env"
 * Agregar una línea con la variable
 *          EXAMPLE_MONGODB_CONNSTRING=cadenaConexionMongoDB
 */
require("dotenv").config(); //Requiere el módulo dotenv para cargar variables de entorno

var mongoClient = require("mongodb").MongoClient;

/**
 * Abre la conexión a la base de datos on mongoClient
 * La función conectarMongoDB() es un callback
 */
mongoClient.connect(
    process.env.EXAMPLE_MONGODB_CONNSTRING,
    callbackConectarMongoDB
);

/**
 * Esta es una función callback que abre la cadena de conexión a la base de datos y procesa el error
 * @param {*} err En caso de error al conectar, devuelve un objeto con el error
 * @param {*} db  Objeto con la conexión a la base de datos
 * @returns
 */
function callbackConectarMongoDB(err, db) {
    if (err) {
        // if (err instanceof MongoServerError) {
            console.log("Error al conectarse a la base de datos: ", err.message);
            return;
        // }
    }

    console.log("Conexión a base de datos fue exitosa!!!");
    db.close(); //Cierra la conexión a la base de datos
    console.log("Conexión cerrada con éxito");
}

// //Exporta la función conectar
module.exports = mongoClient;
