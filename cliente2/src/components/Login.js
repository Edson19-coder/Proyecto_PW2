import React from 'react'
import NavBar from './NavBar';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Login() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-fluid">
                <br/>
                <br/>
                <div className="container-sm items-align-center text-center col-6" style={{backgroundColor: '#e6e6e6', border: 'black 5px solid', borderRadius: '1em'}}>
                    <img
                    src="https://art.ngfiles.com/images/400000/400612_theiyoume_gorilla-head.png?f1453329574"
                    alt=""
                    width="100"
                    height="100"
                    className="d-inline-block align-text-top"/>
                    <h2>Log-In</h2>
                    <h5>Nombre de usuario</h5>
                    <div className="form-floating mb-3 col-12">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Nombre de usuario</label>
                    </div>
                    <h5>Contraseña</h5>
                    <div className="form-floating mb-3 col-12">
                    <input type="password" className="form-control" id="floatingInput2" placeholder="name@example.com"/>
                    <label for="floatingInput2">Contraseña</label>
                    </div>
                    <br/>
                    <div className="col-12">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Selecciona</option>
                        <option value="1">Administrador</option>
                        <option value="2">Cliente</option>
                    </select>
                    </div>
                    <br/>
                    <div className="col-12">
                    <button className="btn btn-primary col-6">Login</button>
                    </div>
                    <br/>
                    <div className="col-12">
                    <button className="btn btn-primary col-6"><a href="/Register">Registrar</a></button>
                    </div>
                    <br/>
                </div>
                <br/>
            </div>

        </div>
    )
}
