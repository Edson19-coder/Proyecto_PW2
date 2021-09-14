var Cart = require("../models/cart");
var Product = require("../models/product");

function saveBuilding(req, res) {
    var params = req.body;
    var cart = new Cart();
  
    if (
      params.motherboardId &&
      params.processorId &&
      params.graphiccardId &&
      params.ramId &&
      params.storageId
    ) {
      cart.userId = req.user.sub;
      cart.motherboardId = params.motherboardId;
      cart.processorId = params.processorId;
      cart.graphiccardId = params.graphiccardId;
      cart.ramId = params.ramId;
      cart.storageId = params.storageId;
  
      cart.save((err, cartStored) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .send({ message: "Error al guardar el Carrito." });
        }
  
        if (cartStored) {
          console.log(cartStored);
          res.status(200).send({ message: cartStored });
        } else {
          console.log("No se ha registrado el Carrito.");
          res.status(404).send({ message: "No se ha registrado el Carrito." });
        }
      });
    } else {
      console.log("Envia todos los datos faltantes.");
      res.status(200).send({ message: "Envia todos los datos faltantes." });
    }
}
  
function deleteBuilding(req, res) {
  
    var params = req.params;
  
    if(params.cartId) {
  
      Cart.findById(params.cartId).remove(err => {
  
        if(err) {
          console.log(err);
          return res.status(500).send({message: 'Error al borrar el Carrito.'});
        }
  
        console.log("Carrito borrado correctamente.");
        return res.status(200).send({message: 'Carrito borrado correctamente.'});
  
      });
  
    } else {
      console.log("Envia todos los datos faltantes.");
      res.status(200).send({ message: "Envia todos los datos faltantes." });
    }
  
}

function getCart(req, res) {

  Cart.find({userId: req.user.sub}).exec((err, cart) => {

    if(err) {
      console.log(err);
      return res.status(500).send({message: 'Error al obtener el carrito.'});
    }

    if(!cart) {
      console.log("El carrito no existe.")
      return res.status(404).send({message: 'El carrito no existe.'});
    }

    console.log(cart);
    return res.status(200).send(cart);

  });

}

module.exports = {
    saveBuilding,
    deleteBuilding,
    getCart
};