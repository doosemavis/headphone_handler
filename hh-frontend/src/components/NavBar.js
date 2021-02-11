import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import headphones from '../images/headphones.jpg';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src={headphones}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Nav.Link href="/brands">Brands</Nav.Link>
                <Nav.Link href="/headphones">Headphones</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavBar;