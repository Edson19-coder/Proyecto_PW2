import React from "react";

const register = (props) => {
    return (
        <div>
            <div id="registerDiv" class="container-sm items-align-center text-center col-6">
                <br/>
                <img
                        src="https://art.ngfiles.com/images/400000/400612_theiyoume_gorilla-head.png?f1453329574"
                        alt=""
                        width="100"
                        height="100"
                        class="d-inline-block align-text-top"
                    />
                <h2>Sign-In</h2>
                <h5 className="hregister">Nombre de usuario</h5>
                <input type="text" class="form-control" />
                <br/>
                <h5 className="hregister">Email</h5>
                <input type="email" class="form-control" />
                <br/>
                <h5 className="hregister">Contraseña</h5>
                <input type="password" class="form-control" />
                <br/>
                <div class="col-12">
                <h5 className="hlogin">Tipo de Usuario</h5>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Selecciona</option>
                    <option value="1">Administrador</option>
                    <option value="2">Cliente</option>
                </select>
                </div>
                <br/>
                <div class="col-12">
                <button class="btn btn-primary col-6">Registrar</button>
                </div>
                <br/>
            </div>
        </div>
    )
}
export default register;