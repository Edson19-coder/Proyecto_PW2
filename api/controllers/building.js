var Processor = require("../models/processor");
var Motherboard = require("../models/motherboard");
var GraphicCard = require("../models/graphicCard");
var Storage = require("../models/storage");
var Ram = require("../models/ram");
var Cabinet = require("../models/cabinet");
var Powersupply = require("../models/powersupply");
var History = require("../models/history");

var moment = require("moment");

function getType(req, res) {
  var params = req.body;

  if (params.typeProcessor) {
    Processor.find({
      $and: [{ type: params.typeProcessor }, { active: true }],
    }).exec((err, processors) => {
      if (err) {
        console.log("Error en la petición.");
        return res.status(500).send({ message: "Error en la petición." });
      }

      if (!processors) {
        console.log("El tipo de procesador no existe");
        return res
          .status(404)
          .send({ message: "El tipo de procesador no existe" });
      }

      console.log(req.user.sub);
      console.log(processors);
      return res.status(200).send({ processors: processors });
    });
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function getProcessor(req, res) {
  var params = req.body;

  if (params.socket && params.chipset) {
    Motherboard.find({
      $and: [{ socket: params.socket }, { chipset: params.chipset }],
    }).exec((err, motherboards) => {
      if (err) {
        console.log("Error en la petición.");
        return res.status(500).send({ message: "Error en la petición." });
      }

      if (!motherboards) {
        console.log("El tipo de tarjeta madre no existe");
        return res
          .status(404)
          .send({ message: "El tipo de tarjeta madre no existe" });
      }

      console.log(motherboards);
      return res.status(200).send({ motherboards: motherboards });
    });
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function getMotherboard(req, res) {
  var params = req.body;

  if (params.idMotherboard) {
    GraphicCard.find().exec((err, graphicCards) => {
      if (err) {
        console.log("Error en la petición.");
        return res.status(500).send({ message: "Error en la petición." });
      }

      console.log({ graphicCards, graphicCards });
      return res.status(500).send({ graphicCards, graphicCards });
    });
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function getGraphicCard(req, res) {
  var params = req.body;

  if (params.idGraphicCard) {
  }
}

function getStorage(req, res) {
  var params = req.body;

  if (params.m2) {
    Storage.find().exec((err, storages) => {
      if (err) {
        console.log("Error en la petición.");
        return res.status(500).send({ message: "Error en la petición." });
      }

      console.log(storages);
      return res.status(500).send({ storages, storages });
    });
  } else {
    console.log("Envia todos los datos faltantes.");
    return res
      .status(200)
      .send({ message: "Envia todos los datos faltantes." });
  }
}

function getRam(req, res) {
  Ram.find().exec((err, rams) => {
    if (err) {
      console.log("Error en la petición.");
      return res.status(500).send({ message: "Error en la petición." });
    }

    console.log(rams);
    return res.status(500).send({ rams, rams });
  });
}

function getCabinet(req, res) {
  var params = req.body;

  if (params.size) {
    Cabinet.find({ $and: [{ size: params.size }] }).exec((err, cabinets) => {
      if (err) {
        console.log("Error en la petición.");
        return res.status(500).send({ message: "Error en la petición." });
      }

      console.log(cabinets);
      return res.status(200).send({ cabinets, cabinets });
    });
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function getPowerSupply(req, res) {
  var params = req.body;

  if (params.totalWatts) {
    Powersupply.find({ $and: [{ wattage: { $gt: params.totalWatts } }] }).exec(
      (err, powerSupplys) => {
        if (err) {
          console.log("Error en la petición.");
          return res.status(500).send({ message: "Error en la petición." });
        }

        console.log(powerSupplys);
        return res.status(200).send({ powerSupplys, powerSupplys });
      }
    );
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

function saveBuilding(req, res) {
  var params = req.body;
  var history = new History();

  if (
    params.motherboardId &&
    params.processorId &&
    params.graphiccardId &&
    params.ramId &&
    params.storageId
  ) {
    history.userId = req.user.sub;
    history.motherboardId = params.motherboardId;
    history.processorId = params.processorId;
    history.graphiccardId = params.graphiccardId;
    history.ramId = params.ramId;
    history.storageId = params.storageId;
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

module.exports = {
  getType,
  getProcessor,
  getMotherboard,
  getStorage,
  getRam,
  getCabinet,
  getPowerSupply,
  saveBuilding,
};
