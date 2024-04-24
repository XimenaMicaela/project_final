// immportar mongoose para crear la conexion a la db de mongoDB

const mongoose = require("mongoose");

// conectamos la DB utilizando el metodo conect() de mongoose.

const mongoURL = "mongodb+srv://ximenapazmino7613:JqeUwBvg7Cj7Z9cg@cluster0.ugcy2mo.mongodb.net/project";

// Funcion para conectarnos a la DB
function connectDB() {
    return new Promise((res, rej) => {
      // Conectar a la base de datos usando la URL proporcioanada
      mongoose
        .connect(mongoURL)
        .then(() => {
          console.log("Conexion a la DB establecida correctamente");
          // Si la conexion es exitosa resolvemos la promesa-
          res();
        })
        .catch((err) => {
          // Si hay un error al conectar, imprimir el error y rechazar la promesa
          console.error("Error al conectar a la DB ", err);
          rej(err);
        });
    });
  }
  
  //Exportamos la funcion de la conexion a la base de datos para poder utilizarla en el app.js
  module.exports = connectDB;
