import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import SearchBar from './SearchBar.jsx'
import { HouseDoorFill } from "react-bootstrap-icons";

const NavBar = (props) => {
    return (<Navbar bg="light" expand="lg">
        <Container>
            <Link to="/">
                <Navbar.Brand>
                    <HouseDoorFill />{' '}Team11
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/?submit">
                        <Nav.Link href="#link">Submit Info</Nav.Link>
                    </Link>
                    <SearchBar history={props.history} location={props.location} />
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavBar