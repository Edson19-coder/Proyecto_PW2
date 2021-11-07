import React from 'react'
import { Navbar, Container, FormControl, Button } from "react-bootstrap";
import { MdSearch } from 'react-icons/md';

const NavBar = ( props ) => {
    return (
        <div>
            <Navbar className="LogNavbar" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                    <FormControl id="BusquedaNavbar" placeholder="Buscar..." aria-label="Search" aria-describedby="inputGroup-sizing-sm"/>
                    <a href="/search"><MdSearch className="search-icon" /></a>
                    <Button id="btnEntrar" variant="light" href="/login">LogIn</Button>
                    <Button id="btnRegistrar" variant="outline-light" href="/register">SignIn</Button>
                </Container>                
            </Navbar>
            <Navbar className="navbar-expand-lg container-fluid " variant='dark' expand="lg">
                <Container>
                    <div className="btn-group me-12 col-12">
                        <Button className="NavbarBtn" href="">Laptops</Button>
                        <Button className="NavbarBtn" href="">Componentes</Button>
                        <Button className="NavbarBtn" href="">Building</Button>
                        <Button className="NavbarBtn" href="">Crear Producto</Button>
                    </div>
                </Container>
                
            </Navbar>
        </div>
    )
}
export default NavBar;