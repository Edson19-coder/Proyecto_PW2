var Product = require("../models/product");
var History = require("../models/history");

var moment = require("moment");

function saveHistory(req, res) {
    var params = req.body;
    var history = new History();
  
    if (params.product) {
      
      history.userId = req.user.sub;
      history.product = params.product;
      history.date = moment().unix();
  
      history.save((err, historyStored) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .send({ message: "Error al guardar el Historial." });
        }
  
        if (historyStored) {
          console.log(historyStored);
          res.status(200).send({ message: historyStored });
        } else {
          console.log("No se ha registrado el Historial.");
          res.status(404).send({ message: "No se ha registrado el Historial." });
        }
      });
    } else {
      console.log("Envia todos los datos faltantes.");
      res.status(200).send({ message: "Envia todos los datos faltantes." });
    }
}

function getHistory(req, res) {

  History.find({userId: req.user.sub}).populate({path:'product'}).exec((err, histories) => {

    if(err) {
      console.log(err);
      return res.status(500).send({message: 'Error al obtener el Historial.'});
    }

    if(!histories) {
      console.log("El Historial no existe.")
      return res.status(404).send({message: 'El Historial no existe.'});
    }

    console.log(histories);
    return res.status(200).send(histories);

  });

}

module.exports = {
    saveHistory,
    getHistory
};