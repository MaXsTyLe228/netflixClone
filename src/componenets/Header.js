import React from 'react';
import logo from "../static/logo192.png";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

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
                    <NavDropdown title="Films" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/movie/popular">Popular</NavDropdown.Item>
                        <NavDropdown.Item href="/movie/top_rated">Top rated</NavDropdown.Item>
                        <NavDropdown.Item href="/movie/now_playing">Now Playing</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/movie/upcoming">Upcoming</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/tv">Serials</Nav.Link>
                    <Nav.Link href="/">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;