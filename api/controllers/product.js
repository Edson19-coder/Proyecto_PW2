var Product = require("../models/product");
var Processor = require("../models/processor");
var Motherboard = require("../models/motherboard");
var GraphicCard = require("../models/graphicCard");
var Storage = require("../models/storage");
var Ram = require("../models/ram");
var Cabinet = require("../models/cabinet");
var Powersupply = require("../models/powersupply");

function getAllProducts(req, res) {
  var page = 1;
  if (req.params.page) {
    page = req.params.page;
  }

  var itemsPerPage = 5;
  Product.find()
    .sort("_id")
    .paginate(page, itemsPerPage, (err, products, total) => {
      if (err) return res.status(500).send({ message: "Error en la peticio" });

      if (!products)
        return res
          .status(404)
          .send({ message: "No hay productos disponibles." });

      return res.status(200).send({
        products,
        total,
        pages: Math.ceil(total / itemsPerPage),
      });
    });
}

function getProductByIdAndCategorie(req, res) {
  var params = req.params;

  if (params.productId && params.categorie) {
    switch (params.categorie) {
      case "CABINET":
        Cabinet.find({ productId: params.productId }).exec((err, cabinet) => {
          if (err) {
            console.log(err);
            return res.status(500).send({ message: "Error en la petición." });
          }

          console.log(cabinet);
          return res.status(200).send(cabinet);
        });
        break;

      case "GRAPHICCARD":
        GraphicCard.find({ productId: params.productId }).exec(
          (err, graphicCard) => {
            if (err) {
              console.log(err);
              return res.status(500).send({ message: "Error en la petición." });
            }

            console.log(graphicCard);
            return res.status(200).send(graphicCard);
          }
        );
        break;

      case "MOTHERBOARD":
        Motherboard.find({ productId: params.productId }).exec(
          (err, motherboard) => {
            if (err) {
              console.log(err);
              return res.status(500).send({ message: "Error en la petición." });
            }

            console.log(motherboard);
            return res.status(200).send(motherboard);
          }
        );
        break;

      case "POWERSUPPLY":
        Powersupply.find({ productId: params.productId }).exec(
          (err, powersupply) => {
            if (err) {
              console.log(err);
              return res.status(500).send({ message: "Error en la petición." });
            }

            console.log(powersupply);
            return res.status(200).send(powersupply);
          }
        );
        break;

      case "PROCESSOR":
        Processor.find({ productId: params.productId }).exec(
          (err, processor) => {
            if (err) {
              console.log(err);
              return res.status(500).send({ message: "Error en la petición." });
            }

            console.log(processor);
            return res.status(200).send(processor);
          }
        );
        break;

      case "RAM":
        Ram.find({ productId: params.productId }).exec((err, ram) => {
          if (err) {
            console.log(err);
            return res.status(500).send({ message: "Error en la petición." });
          }

          console.log(ram);
          return res.status(200).send(ram);
        });
        break;

      case "STORAGE":
        console.log(params.productId);
        Storage.find({ productId: params.productId }).exec((err, storage) => {
          if (err) {
            console.log(err);
            return res.status(500).send({ message: "Error en la petición." });
          }

          console.log(storage);
          return res.status(200).send(storage);
        });
        break;

      default:
        return res.status(404).send("Petición no valida.");
        break;
    }
  } else {
    console.log("Envia todos los datos faltantes.");
    res.status(200).send({ message: "Envia todos los datos faltantes." });
  }
}

module.exports = {
  getAllProducts,
  getProductByIdAndCategorie,
};
