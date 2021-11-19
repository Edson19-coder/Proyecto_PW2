import React from 'react'
import { Navbar, Container, FormControl, Button, NavDropdown } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';

const NavBar = ( props ) => {
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
                                 src="https://images.creativemarket.com/0.1.0/ps/1441527/1160/772/m1/fpnw/wm0/businessman-avatar-icon-01-.jpg?1468234792&s=e3a468692e15e93a2056bd848193e97a"
                                 alt="Responsive Circle Image"
                                 style={{width:'30px', height:'30px'}}
                                 className="d-inline-block align-text-top rounded-circle nav-item"
                               />
                    }  id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Historial</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/CreateProduct">Crear Producto</NavDropdown.Item>
                    </NavDropdown>
                    <Button id="btnEntrar" variant="light" href="/login">LogIn</Button>
                    <Button id="btnRegistrar" variant="outline-light" href="/register">SignIn</Button>
                </Container>                
            </Navbar>
            <Navbar className="navbar-expand-lg container-fluid " variant='dark' expand="lg">
                <Container>
                    <div className="btn-group me-12 col-12">
                        <Button className="NavbarBtn" href="">Gabinete</Button>
                        <Button className="NavbarBtn" href="">Tarjeta Grafica</Button>
                        <Button className="NavbarBtn" href="/build">MotherBoard</Button>
                        <Button className="NavbarBtn" href="/createProduct">Fuente Poder</Button>
                        <Button className="NavbarBtn" href="/profile">Procesador</Button>
                        <Button className="NavbarBtn" href="/profile">Almacenamiento</Button>
                        <Button className="NavbarBtn" href="/profile">RAM</Button>
                        <Button className="NavbarBtn" href="/profile">Laptops</Button>
                    </div>
                </Container>
                
            </Navbar>
        </div>
    )
}
export default NavBar;