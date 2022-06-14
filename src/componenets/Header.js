import React from 'react';
import logo from "../static/logo192.png";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky={"top"}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Films
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/movies">Films</Nav.Link>
                    <Nav.Link href="/tv">Serials</Nav.Link>
                    <Nav.Link href="/">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;