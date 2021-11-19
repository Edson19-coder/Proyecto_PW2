import React from 'react'
import { useState, useEffect } from "react";

import { Navbar, Container, FormControl, Button, NavDropdown } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';
import { GLOBAL } from "../api/GLOBAL";


const SignOut = async () => {
    window.localStorage.removeItem('loggedUser');
    window.location = "/index";
}
const NavBar = ( props ) => {
    var loggedUser;
    const [loginInfo, setproduct2] = useState([]);
    useEffect(()=>{
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            loggedUser = JSON.parse(loggedUserJSON);
            var botoncito;
            var botoncito2;
            var botoncito3;
            setproduct2(loggedUser);
            if(loggedUser.role === "ADMINISTRADOR"){
                botoncito = document.getElementById("btnEntrar");
                botoncito.style.display = "none";
                botoncito2 = document.getElementById("btnRegistrar");
                botoncito2.style.display = "none";
                botoncito3 = document.getElementById("basic-nav-dropdown2");
                botoncito3.style.display = "none";
    
            }else if(loggedUser.role === "CLIENTE"){
                botoncito = document.getElementById("btnEntrar");
                botoncito.style.display = "none";
                botoncito2 = document.getElementById("btnRegistrar");
                botoncito2.style.display = "none";
                botoncito3 = document.getElementById("basic-nav-dropdown");
                botoncito3.style.display = "none";
            }
    
        }else{
            botoncito = document.getElementById("basic-nav-dropdown");
            botoncito.style.display = "none";
            botoncito2 = document.getElementById("basic-nav-dropdown2");
            botoncito2.style.display = "none";
            botoncito3 = document.getElementById("btnCerrarSesion");
            botoncito3.style.display = "none";
        }
        console.log(loggedUser);
    }, []);
    return (
        <div>
            <Navbar className="LogNavbar" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                    <FormControl id="BusquedaNavbar" placeholder="Buscar..." aria-label="Search" aria-describedby="inputGroup-sizing-sm"/>
                    <a href="/search"><MdSearch className="search-icon" /></a>
                    <NavDropdown
                     title={
                                 <img
                                //  src={`${GLOBAL.url}/get-image-prod/${loggedUser.image}`}
                                 src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                                 alt="Responsive Circle Image"
                                 style={{width:'30px', height:'30px'}}
                                 className="d-inline-block align-text-top rounded-circle nav-item"
                               />
                    }  id="basic-nav-dropdown">
                    <NavDropdown.Item href="/cart">Carrito</NavDropdown.Item>
                    <NavDropdown.Item href="/history">Historial</NavDropdown.Item>
                    <NavDropdown.Item href="/profile">Editar Perfil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/CreateProduct">Crear Producto</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                     title={
                                 <img
                                //  src={`${GLOBAL.url}/get-image-prod/${loggedUser.image}`}
                                 src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                                 alt="Responsive Circle Image"
                                 style={{width:'30px', height:'30px'}}
                                 className="d-inline-block align-text-top rounded-circle nav-item"
                               />
                    }  id="basic-nav-dropdown2">
                    <NavDropdown.Item href="/cart">Carrito</NavDropdown.Item>
                    <NavDropdown.Item href="/history">Historial</NavDropdown.Item>
                    <NavDropdown.Item href="/profile">Editar Perfil</NavDropdown.Item>
                    </NavDropdown>
                    <Button id="btnEntrar" variant="light" href="/login">LogIn</Button>
                    <Button id="btnRegistrar" variant="outline-light" href="/register">SignIn</Button>
                    <Button id="btnCerrarSesion" onClick={SignOut} variant="outline-light">SignOut</Button>
                </Container>                
            </Navbar>
            <Navbar className="navbar-expand-lg container-fluid " variant='dark' expand="lg">
                <Container>
                    <div className="btn-group me-12 col-12">
                        <Button className="NavbarBtn" href="/search/CABINET">Gabinete</Button>
                        <Button className="NavbarBtn" href="/search/GRAPHICCARD">Tarjeta Grafica</Button>
                        <Button className="NavbarBtn" href="/search/MOTHERBOARD">MotherBoard</Button>
                        <Button className="NavbarBtn" href="/search/POWERSUPPLY">Fuente Poder</Button>
                        <Button className="NavbarBtn" href="/search/PROCESSOR">Procesador</Button>
                        <Button className="NavbarBtn" href="/search/STORAGE">Almacenamiento</Button>
                        <Button className="NavbarBtn" href="/search/RAM">RAM</Button>
                        <Button className="NavbarBtn" href="/build">Build</Button>
                    </div>
                </Container>
                
            </Navbar>
        </div>
    )
}
export default NavBar;