import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import { getUser, updateUser, uploadImage } from "../api/UserAPI";
import { createAddress, editAddress, getAddress } from "../api/AddressAPI";
import { createNotification } from "../services/notifications";

import { GLOBAL } from "../api/GLOBAL";

const loggedUserJSON = window.localStorage.getItem('loggedUser');
if(loggedUserJSON != undefined) {
    var loggedUser = JSON.parse(loggedUserJSON);
var imageUser = loggedUser.image;
}

const Profile = (props) => {
    var banderaAdress;
    const [user, setUser] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        var loggedUser;
        if(loggedUserJSON) {
            loggedUser = JSON.parse(loggedUserJSON);
        }

        getUser(loggedUser.token).then(res => {
            if(res != undefined) {
                console.log(res);
                document.getElementById("userName").value = res.nick;
                document.getElementById("userEmail").value = res.email;
                document.getElementById("userFirstName").value = res.name;
                document.getElementById("userLastName").value = res.surname;
            } 
        }).catch(err => {
            console.log(err);
        });

        getAddress(loggedUser.token).then(res => {
            if(res.data.length !== 0) {
                banderaAdress=1;
                document.getElementById("adr1").value = res.data[0].calle;
                document.getElementById("adr2").value = res.data[0].numExt;
                document.getElementById("adr3").value = res.data[0].colonia;
                document.getElementById("adr4").value = res.data[0].codPostal;
            } 
        }).catch(err => {
            console.log(err);
        });

        
    }, [])

    const upAdressUser = () => {
        var pcalle = document.getElementById("adr1").value;
        var pnumero = document.getElementById("adr2").value;
        var pcolonia = document.getElementById("adr3").value;
        var pcodigo = document.getElementById("adr4").value;

        if(pcalle != "" && pnumero != "" && pcolonia != "" && pcodigo != "") {
            
            const loggedUserJSON = window.localStorage.getItem('loggedUser');
            if(loggedUserJSON) {
                var loggedUser = JSON.parse(loggedUserJSON);
            }
            
            var userAddressData = {
                calle: pcalle, 
                numExt: pnumero,
                colonia: pcolonia,
                codPostal: pcodigo
            }
            if(banderaAdress !== 1){
                createAddress(userAddressData, loggedUser.token).then(res => {
                    if(res != undefined) {
    
                        createNotification(200, "Direccion actualizada correctamente", true, "/profile");
                        console.log(res);
                    }
                }).catch(err => {
                    console.log(err);
                })    

            }else{
                console.log(userAddressData);
                editAddress(userAddressData, loggedUser.token).then(res => {
                    console.log(res);
                     if(res != undefined) {
    
                         createNotification(200, "Direccion actualizada correctamente", true, "/profile");
                         console.log(res);
                     }
                }).catch(err => {
                    console.log(err);
                })    
            }

        } else {
            createNotification(201, "Ingresa los datos faltantes.!", false, "");
        }

    };
    const upUser = () => {
        var userName = document.getElementById("userName").value;
        var userEmail = document.getElementById("userEmail").value;
        var userPassword = document.getElementById("userPassword").value;
        var userFirstName = document.getElementById("userFirstName").value;
        var userLastName = document.getElementById("userLastName").value;

        if(userName != "" && userEmail != "" && userFirstName != "" && userLastName != "") {
            
            const loggedUserJSON = window.localStorage.getItem('loggedUser');
            if(loggedUserJSON) {
                var loggedUser = JSON.parse(loggedUserJSON);
            }
            
            var userData = {
                name: userFirstName, 
                surname: userLastName,
                nick: userName,
                email: userEmail,
                password: userPassword
            }

            updateUser(userData, loggedUser.token, loggedUser.id).then(res => {
                if(res != undefined) {

                    window.localStorage.removeItem('loggedUser');

                    var userSession = {
                        id: res.user._id,
                        name: res.user.name,
                        surname: res.user.surname,
                        image: res.user.image,
                        role: res.user.role,
                        token: loggedUser.token
                    }
            
                    window.localStorage.setItem(
                        'loggedUser', JSON.stringify(userSession)
                    )

                    createNotification(200, "Usuario actualizada correctamente", true, "/profile");
                    console.log(res);
                }
            }).catch(err => {
                console.log(err);
            })

        } else {
            createNotification(201, "Ingresa los datos faltantes.!", false, "");
        }

    };

    const upPhotoUser = () => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }
        var photo = document.getElementById("formFileSm").files[0];

        if(photo == undefined) {
            createNotification(204, "Llena la informaci??n faltante del producto.", false, "");
        } else {
            var formData = new FormData();
            const imagefile = document.getElementById("formFileSm");
            formData.append("image", imagefile.files[0]);

            uploadImage(loggedUser.id, formData, loggedUser.token).then(res => {
                if(res != undefined) {

                    window.localStorage.removeItem('loggedUser');

                    var userSession = {
                        id: res._id,
                        name: res.name,
                        surname: res.surname,
                        image: res.image,
                        role: res.role,
                        token: loggedUser.token
                    }
            
                    window.localStorage.setItem(
                        'loggedUser', JSON.stringify(userSession)
                    )

                    createNotification(200, "Imagen actualizada correctamente", true, "/profile");
                }
            }).catch(err => {
                createNotification(500, err, false, "");
                console.log(err);
            });
        }
    }

    return (
        <Fragment>
            <Container id="" className="container-sm">
                <div id="divPerfil">
                    <br/>
                    <div className="row">
                        <span className="col-8">
                            <div className="row justify-content-center">
                                <img src={`${GLOBAL.url}/get-image-user/${imageUser}`}
                                    alt="Responsive Circle Image" height="400" width="400"
                                    className="d-inline-block align-text-top rounded-circle nav-item col-6" />
                                <hr/><hr/>
                                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                                <Button id="imgBtnProfile" onClick={upPhotoUser} className="btn-primary col-8">Agregar foto</Button>
                            </div>
                        </span>
                        <span className="col-4">
                            <br/>
                            <div className="text-center">
                                <h2 className="hProfile">Usuario</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup className="mb-3">
                                        <input type="text" id="userName" className="form-control"/>
                                    </InputGroup>
                                    </div>
                                </div>

                                <h2 className="hProfile">Email</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="email" id="userEmail" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Contrase??a</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" id="userPassword"  className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Nombre</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" id="userFirstName" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Apellidos</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" id="userLastName" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <Button id="editBtn" onClick={upUser} className="col-8"> Editar </Button>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </span>
                    </div>
                    <br/>
                    <br/>
                    <div className="row justify-content-center">
                        
                        <span className="col-4">
                            <br/>
                            <center><h2 className="hProfile">Direccion</h2></center>

                            <div className="text-center">
                                <h5 className="hProfile">Calle</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup className="mb-3">
                                        <input id="adr1" type="text" className="form-control" placeholder="Calle"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <h5 className="hProfile">Num Ext</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input id="adr2" type="number" className="form-control" placeholder="254"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h5 className="hProfile">Colonia</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input id="adr3" type="text" className="form-control" placeholder="San Benito"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h5 className="hProfile">Cod Postal</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input id="adr4" type="number" className="form-control" placeholder="123456"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <Button id="editBtnAddress" onClick={upAdressUser} className="col-12"> Editar </Button>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        </span>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
}
export default Profile;