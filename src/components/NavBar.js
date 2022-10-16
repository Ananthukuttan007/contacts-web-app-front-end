import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
    const navigate = useNavigate()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Contacts-Web App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Contact List</Nav.Link>
                        <Nav.Link onClick={() => navigate('/msglist')} > Message List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="secondary" size="sm" onClick={() => navigate('/add')}>Add New Contact</Button>
            </Container>
        </Navbar >
    )
}

export default NavBar