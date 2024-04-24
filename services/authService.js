const jwt = require("jsonwebtoken");

// Almacenamos la clave secreta

const JWT_SECRET =
  "34f70117374d447c0f81de5df16fc21b2e78b23af274e86e2c8f789b3ca4e9ad";

// Creamos una funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token
}

module.exports= {
    generateToken
}