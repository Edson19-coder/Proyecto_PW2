import React from "react";
import { createNotification } from "../services/notifications";
import { getUserByEmailAndPassword } from "../api/UserAPI";

const loginUser = async () => {
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    var userData = {
        email: userEmail,
        password: userPassword, 
        gettoken: false
    }

    var user = await getUserByEmailAndPassword(userData);
    
    if(user.data.user != undefined) {
        userData.gettoken = true;
        var token = await getUserByEmailAndPassword(userData);

        var userSession = {
            id: user.data.user._id,
            name: user.data.user.name,
            surname: user.data.user.surname,
            image: user.data.user.image,
            role: user.data.user.role,
            token: token.data.token
        }

        window.localStorage.setItem(
            'loggedUser', JSON.stringify(userSession)
        )

        if(token.status != 200) {
            createNotification(token.status, token.data["message"], false, "");
        } else {
            window.location = "/";
        }
    } else {
        var message = user.data["message"];

        if(user.status == 204) {
            message = "Este usuario no se pudo identificar!.";
        }

        createNotification(user.status, message, false, "");
    }
}

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
                <h5 className="hlogin">Email</h5>
                <input type="email" className="form-control" id="userEmail" />
                <br/>
                <h5 className="hlogin">Contraseña</h5>
                <input type="password" className="form-control" id="userPassword" />
                <br/>
                <div class="col-12">
                   <button class="btn btn-primary col-6" onClick={loginUser} >Logearse</button>
                </div>
                <br/>
            </div>
        </div>
    )
}
export default login;