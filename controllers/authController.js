const authService = require("../services/authService");
const User = require("../models/user");

// Controlador para manejar la Autenticacion de Usuarios.// log in

function login(req, res) {
  const { email, contraseña } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Email o contraseña incorrectas" });
      }

      const match = contraseña === user.contraseña;

      if (!match) {
        return res.status(401).json({ message: "Credenciales invalidas" });
      }

      const token = authService.generateToken(user);
      res.json({ token });
    })
    .catch((err) => {
      console.error(error);
      res.status(500).json({ message: "Error al iniciar sesion" });
    });
}

// Controlador para cerrar la sesion

function logout(req,res) {
  res.status(200).json({ message: "Sesion cerrada exitosamente" });
}

module.exports={
    login,
    logout
}