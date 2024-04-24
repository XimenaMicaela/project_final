// importar mongoose para definir y tener el esquem de usuario y el modelo

const mongoose = require("mongoose")

//definir el esquema de usuario utilizando el constructor de mongoose schema

const userSchema =  new mongoose.Schema({
    nombre : {
        type: String,
        required: true // El nombre es obligatorio.
    },
    edad:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true //El correo electronico tiene que ser unico.
    },
    contraseña:{
        type:String,
        required:true 
    }

});

// Crear el modelo user utilizando el esquema definido anteriormente

const User= mongoose.model("User", userSchema)

// Exportamos el modelo User para usarlo en cualquier parte.

module.exports= User