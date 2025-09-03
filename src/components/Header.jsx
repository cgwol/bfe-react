import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavDropdown } from "react-bootstrap";

export default function Header() {
    return(

        <Navbar expand="lg" className="header-container">
            <Container>
                <Navbar.Brand href='/'>BFE Challenges</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <NavDropdown className="header-container" title="React" id="basic-nav-dropdown">
                            <NavDropdown.Item href="reactchallenge1">Challenge 1</NavDropdown.Item>
                            <NavDropdown.Item href="reactchallenge2">Challenge 2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}