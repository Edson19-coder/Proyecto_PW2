import React from "react";
import { createNotification } from "../services/notifications";
import { createUser } from "../api/UserAPI";


const registerUser = async () => {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var e = document.getElementById("role");
    var userRole = e.options[e.selectedIndex].text;

    var userData = {
        name: name,
        surname: surname,
        nick: userName,
        email: userEmail,
        password: userPassword,
        role: userRole.toUpperCase()
    };
    
    var response = await createUser(userData);

    var message = response.data["message"];

    if(response.status == 200) {
        message = "Usuario registrado correctamente.!";
    }

    createNotification(response.status, message, true, "/login");
           
    console.log(response.data["message"]);
}


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
                <h5 className="hregister">Nombre</h5>
                <input type="text" class="form-control" id="name" />
                <br/>
                <h5 className="hregister">Apellido</h5>
                <input type="text" class="form-control" id="surname" />
                <br/>
                <h5 className="hregister">Nombre de usuario</h5>
                <input type="text" class="form-control" id="userName" />
                <br/>
                <h5 className="hregister">Email</h5>
                <input type="email" class="form-control" id="userEmail" />
                <br/>
                <h5 className="hregister">Contraseña</h5>
                <input type="password" class="form-control" id="userPassword" />
                <br/>
                <div class="col-12">
                <h5 className="hlogin">Tipo de Usuario</h5>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="role" >
                    <option selected>Selecciona</option>
                    <option value="1">Administrador</option>
                    <option value="2">Cliente</option>
                </select>
                </div>
                <br/>
                <div class="col-12">
                <button class="btn btn-primary col-6" onClick={registerUser}>Registrar</button>
                </div>
                <br/>
            </div>
        </div>
    )
}
export default register;