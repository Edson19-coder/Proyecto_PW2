import React from 'react'
import '../css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from 'react-bootstrap'

export default function NavBar() {
    return (
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    Logo
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
