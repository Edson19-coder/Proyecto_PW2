import React from 'react'
import NavBar from './NavBar';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Perfil() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-sm">
            <br/>
                <div style={{backgroundColor: 'rgb(215, 218, 219)', border: 'black 5px solid', borderRadius: '1em'}}>
                <br/>
                    <div className="row">
                        <span className="col-8">
                            <div className="row justify-content-center">
                                <img
                                src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                                alt="Responsive Circle Image" height="400" width="400"
                                className="d-inline-block align-text-top rounded-circle nav-item col-6" />
                                <br/>
                                <button className="btn btn-primary col-8">Agregar foto</button>
                            </div>
                        </span>
                        <span className="col-4">
                            <br/>
                            <div className="text-center">
                                <span>
                                    <h2>Usuario</h2>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Juan" disabled="true"/>
                                                <button className="btn btn-warning">Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2>Email</h2>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div className="input-group">
                                                <input type="email" className="form-control" placeholder="juan@gmail.com" disabled="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2>Contraseña</h2>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="juan123" disabled="true"/>
                                                    <button className="btn btn-warning">Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <button className="btn btn-primary">
                                            Guardar</button>
                                        </div>
                                    </div>
                               </span>
                            </div>
                     </span>
                    </div>
                    <br/>
                </div>
            </div>
            <br/>
            <br/>
        </div>
        
    )
}
