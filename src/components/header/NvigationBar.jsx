import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

class Navigation extends Component {
    state = {} 
    render() { 
        return (
            <>
              {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
                  <Container fluid>
                    <Navbar.Brand href="#">Maxims Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                      bg="dark" data-bs-theme="dark"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                          Maxims Blog
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="#action1">Hauptseite</Nav.Link>
                          <Nav.Link href="#action2">Über uns</Nav.Link>
                          <NavDropdown
                            title="Unsere Themen"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item href="#action3">Unser</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <br/>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Suche nach bestimmten Themen"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-success">Suchen</Button>
                        </Form>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
            </>
          );
    }
}
 
export default Navigation;