import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import headphones from '../images/headphones.jpg';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                alt=""
                src={headphones}
                width="30"
                height="30"
                className="d-inline-block align-top"/>
            </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/brands">Brands</Nav.Link>
                <Nav.Link href="/headphones">Headphones</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;