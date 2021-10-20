import React from 'react'
import '../css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap'
const divStyle = {   backgroundColor: '#588eb4'};
const navStyle = {   backgroundColor: '#588eb4'};
const navStyle2 = {   backgroundColor: '#8b8e8f00'};
const btnStyle = {
    marginRight: '.1rem',
    marginLleft: '.1rem',
    backgroundColor: 'darkblue'
};
export default function NavBar() {
    return (
        <div className="NavBar" style={divStyle} sticky="top">
            <Navbar style={navStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand col-4">
                    <img src="https://art.ngfiles.com/images/400000/400612_theiyoume_gorilla-head.png?f1453329574" alt=""
                        width="30" height="24" className="d-inline-block align-text-top" />
                        E-Commerce
                    </a>
                    <div className="collapse navbar-collapse ">
                    <form className="d-flex col-10 ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                            viewBox="0 0 16 16">
                            <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        </button>
                    </form>
                    </div>
                    <div className="col-1">
                        <img
                            src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                            alt="Responsive Circle" width="30" height="30"
                            className="d-inline-block align-text-top rounded-circle nav-item" 
                        />

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart nav-item"
                            viewBox="0 0 16 16">
                            <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>
                </div>
            </Navbar>
            <Navbar style={navStyle2}>
                <div className="btn-group me-12 col-12" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-primary"
                    style={btnStyle}>Home</button>
                    <button type="button" className="btn btn-primary"
                    style={btnStyle}>Componentes</button>
                    <button type="button" className="btn btn-primary"
                    style={btnStyle}>Build PC</button>
                    <button type="button" className="btn btn-primary"
                    style={btnStyle}>Login/Register</button>
                </div>
            </Navbar>
        </div>
    )
}
