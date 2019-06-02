import React from 'react';
import ProjectEntry from './ProjectEntry';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand>Shuen Yasui</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                Shuen Yasui
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1>Projects</h1>
            <p>A showcase of my coding projects - Continuous learning and exploration through creative works:</p>
          </Container>
        </Jumbotron>
        <Container>
          <ProjectEntry />
        </Container>
      </header>
    </div>
  );
}

export default App;
