var bcrypt = require("bcrypt-nodejs");
var User = require("../models/user");
var jwt = require("../services/jwt");
var mongoosePaginate = require("mongoose-pagination");

function createUser(req, res) {
  var params = req.body;
  var user = new User();

  if (
    params.name &&
    params.surname &&
    params.nick &&
    params.email &&
    params.password
  ) {
    user.name = params.name;
    user.surname = params.surname;
    user.nick = params.nick;
    user.email = params.email;
    user.role = "CLIENT";
    user.image = null;

    //Validamos que los datos email y nick no esten ya registrados.
    User.find({
      $or: [
        { email: user.email.toLowerCase() },
        { nick: user.nick.toLowerCase() },
        { nick: user.nick },
      ],
    }).exec((err, users) => {
      if (err)
        return res.status(500).send({ message: "Error en la petición." });

      if (users && users.length >= 1) {
        return res.status(200).send({ message: "Esta cuenta ya existe." });
      } else {
        //Encriptamos la contraseña
        bcrypt.hash(params.password, null, null, (err, hash) => {
          user.password = hash;

          user.save((err, userStored) => {
            if (err)
              return res
                .status(500)
                .send({ message: "Error al guardar el usuario." });

            if (userStored) {
              res.status(200).send({ message: userStored });
            } else {
              res
                .status(404)
                .send({ message: "No se ha registrado el usuario." });
            }
          });
        });
      }
    });
  } else {
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function loginUser(req, res) {
  var params = req.body;
  var email = params.email;
  var password = params.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) return res.status(500).send({ message: "Error en la petición." });

    if (user) {
      bcrypt.compare(password, user.password, (err, check) => {
        if (check) {
          //Para poder ver el token el los params agregamos una variable llamada gettoken = true
          if (params.gettoken) {
            //Generar y devolver un token
            return res.status(200).send({ token: jwt.createToken(user) });
          } else {
            //devolver datos de usuario
            user.password = undefined;
            return res.status(200).send({ user });
          }
        } else {
          return res
            .status(404)
            .send({ message: "Este usuario no se pudo identificar." });
        }
      });
    } else {
      return res
        .status(404)
        .send({ message: "Este usuario no se pudo identificar!." });
    }
  });
}

function updateUser(req, res) {
  var userId = req.params.id;
  var update = req.body;
  delete update.password;

  if (userId != req.user.sub) {
    return res
      .status(500)
      .send({
        message: "No tienes permisos para editar los datos de este perfil.",
      });
  }

  User.find({
    $or: [
      { email: update.email.toLowerCase() },
      { nick: update.nick.toLowerCase() },
      { nick: update.nick },
    ],
  }).exec((err, users) => {
    var user_isset = false;

    users.forEach((user) => {
      if (user && user._id != userId) user_isset = true;
    });

    if (user_isset) {
      return res.status(404).send({ message: "Los datos ya estan en uso" });
    }

    User.findByIdAndUpdate(
      userId,
      update,
      { new: true, useFindAndModify: false },
      (err, userUpdate) => {
        if (err)
          return res
            .status(500)
            .send({ message: "Error en la petición updateUser()" });

        if (!userUpdate)
          return res
            .status(404)
            .send({ message: "No se ha podido actualizar el usuario." });

        return res.status(200).send({ user: userUpdate });
      }
    );
  });
}

function getUserById(req, res) {
  var userId = req.params.id;

  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send({ message: "Error en la peticion." });

    if (!user) return res.status(404).send({ message: "El usuario no existe" });

    return res.status(200).send({ user: user });
  });
}

function getAllUer(req, res) {
  var page = 1;
  if (req.params.page) {
    page = req.params.page;
  }

  var itemsPerPage = 5;
  User.find()
    .sort("_id")
    .paginate(page, itemsPerPage, (err, users, total) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error en la peticio getUsers()" });

      if (!users)
        return res
          .status(404)
          .send({ message: "No hay usuarios disponibles." });

      return res.status(200).send({
        users,
        total,
        pages: Math.ceil(total / itemsPerPage),
      });
    });
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUserById,
  getAllUer,
};
