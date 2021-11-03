import React from "react";

const login = (props) => {
    return (
        <div>
            <div id="loginDiv" className="container-sm items-align-center text-center col-6">
                <br/>
                <img
                        src="https://art.ngfiles.com/images/400000/400612_theiyoume_gorilla-head.png?f1453329574"
                        alt=""
                        width="100"
                        height="100"
                        class="d-inline-block align-text-top"
                    />
                <h2>Log-In</h2>
                <br/>
                <h5 className="hlogin">Nombre de usuario</h5>
                <input type="text" className="form-control" />
                <br/>
                <h5 className="hlogin">Contraseña</h5>
                <input type="password" className="form-control" />
                <br/>
                <div className="col-12">
                    <h5 className="hlogin">Tipo de Usuario</h5>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Selecciona</option>
                        <option value="1">Administrador</option>
                        <option value="2">Cliente</option>
                    </select>
                </div>
                <br/>
                <div class="col-12">
                   <button class="btn btn-primary col-6">Logearse</button>
                </div>
                <br/>
            </div>
        </div>
    )
}
export default login;