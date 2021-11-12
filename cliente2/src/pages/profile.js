import React from "react";
import { Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'


const profile = (props) => {
    return (
        <Fragment>
            <Container id="" className="container-sm">
                <div id="divPerfil">
                    <br/>
                    <div className="row">
                        <span className="col-8">
                            <div className="row justify-content-center">
                                <img src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                                    alt="Responsive Circle Image" height="400" width="400"
                                    className="d-inline-block align-text-top rounded-circle nav-item col-6" />
                                <Button id="imgBtnProfile" className="btn-primary col-8">Agregar foto</Button>
                            </div>
                        </span>
                        <span className="col-4">
                            <br/>
                            <div className="text-center">
                                <h2 className="hProfile">Usuario</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup className="mb-3">
                                        <input type="text" className="form-control"/>
                                    </InputGroup>
                                    </div>
                                </div>

                                <h2 className="hProfile">Email</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="email" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Contraseña</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Nombre</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h2 className="hProfile">Apellidos</h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" className="form-control" />
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <Button id="editBtn" className="col-8"> Editar </Button>
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
                                        <input type="text" className="form-control" placeholder="Juan"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <h5 className="hProfile">Num Ext</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="number" className="form-control" placeholder="Juan"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h5 className="hProfile">Colonia</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="text" className="form-control" placeholder="Juan"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <h5 className="hProfile">Cod Postal</h5>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                    <InputGroup>
                                        <input type="number" className="form-control" placeholder="Juan"/>
                                    </InputGroup>
                                    </div>
                                </div>
                                <br/>
                                <div className="row justify-content-center">
                                    <div className="col-4">
                                        <Button id="editBtn" className="col-12"> Editar </Button>
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
export default profile;