import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavHeader = () => {

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home"><img className="img-fluid w-25 ml-5" src="https://i.ibb.co/6DdQDrX/logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className="text-nav active"  href="#home">Home</Nav.Link>
                <Nav.Link className="text-nav" href="#link">Our Portfolio</Nav.Link>
                <Nav.Link className="text-nav" href="#link">Our Team</Nav.Link>
                <Nav.Link className="text-nav" href="#link">Contact Us</Nav.Link>
                <Nav.Link  href="#link"> <button className="btn btn-brand text-white mr-5">Login</button> </Nav.Link>
                </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavHeader;