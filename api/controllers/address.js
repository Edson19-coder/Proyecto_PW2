const { updateOne } = require('../models/address');
var Address = require('../models/address');
var User = require('../models/user'); 

function createAddress(req, res) {

    var params = req.body;

    if(params.calle && params.numExt && params.colonia && params.codPostal) {
        
        var newAddress = Address();
        newAddress.calle = params.calle;
        newAddress.numExt = params.numExt;
        newAddress.colonia = params.colonia;
        newAddress.codPostal = params.codPostal;
        newAddress.userId = req.user.sub; 
        newAddress.default = true;

        Address.find({userId: req.user.sub}).exec((err, address) => {
            
            if(err) {
                console.log(err);
                return res.status(500).send({message: 'Error en la petición createAddress.'});
            }

            address.forEach((addr) => {
                if (addr && addr.userId == req.user.sub) newAddress.default = false;
            });

            newAddress.save((err, addressStored) => {

                if(err) {
                    console.log(err);
                    return res.status(500).send({message: 'Error al guardar la nueva dirección.'});
                }

                if(addressStored) {
                    res.status(200).send(addressStored);
                } else {
                    res.status(404).send({ message: "No se ha registrado el usuario." });
                }

            });
          
        });

    } else {
        console.log("Envia todos los datos faltantes.");
        res.status(200).send({ message: "Envia todos los datos faltantes." });
    }

}

function deleteAddress(req, res) {

    var params = req.params;

    if(params.addressId) {
        Address.findById(params.addressId).remove(err => {
            if(err) {
                console.log(err);
                return res.status(500).send({message: 'Error al borrar la dirección.'});
            }
        
            return res.status(200).send({message: 'Dirección borrado correctamente.'});
        });
    } else {
        console.log("Envia todos los datos faltantes.");
        res.status(200).send({ message: "Envia todos los datos faltantes." });
    }

}

function updateDefaul(req, res) {

    var params = req.params;

    if(params.addressId) {
        Address.findOneAndUpdate(
            {$and: [ {userId: req.user.sub}, {default: true} ] },
            {$set: {default: false}},
            (err, result) => {
                
                if(err) {
                    console.log(err);
                    return res.status(500).send({message: 'Error al actualizar los datos del default.'})
                }

                if(!result) {
                    console.log('No se ha podido actualizar los datos del default.')
                    return res.status(404).send({ message: "No se ha podido actualizar los datos del default." });
                } 

                console.log(result);


                Address.findByIdAndUpdate(
                    params.addressId,
                    {$set: {default: true}},
                    (err, addressUpdate) => {

                        if(err) {
                            console.log(err);
                            return res.status(500).send({message: 'Error al actualizar los datos del nuevo default.'})
                        }
        
                        if(!addressUpdate) {
                            console.log('No se ha podido actualizar los datos del nuevo default.')
                            return res.status(404).send({ message: "No se ha podido actualizar los datos del nuevo default." });
                        }

                        console.log(addressUpdate);
                        return res.status(200).send({ addressUpdate: addressUpdate });
                    }
                );


            }
        );

    } else {
        console.log("Envia todos los datos faltantes.");
        res.status(200).send({ message: "Envia todos los datos faltantes." });
    }
}

function getAllAddressByUserId(req, res) {

    if(req.user.sub) {
        
        Address.find({userId: req.user.sub}).exec((err, addresses) => {
            
            if (err) {
                console.log(err);
                return res.status(500).send({ message: "Error en la petición." });
            }
        
            if (!addresses) {
                console.log("Direcciones no existen");
                return res.status(404).send({ message: "Direcciones no existen" });
            }
    
            console.log(addresses);
            return res.status(200).send({ addresses: addresses });

        }); 

    } else {
        console.log("Envia todos los datos faltantes.");
        res.status(200).send({ message: "Envia todos los datos faltantes." });
    }

}

module.exports = {
    createAddress,
    deleteAddress,
    updateDefaul,
    getAllAddressByUserId
};