import React from 'react';
import ProjectEntry from './ProjectEntry';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

let pageState = null;

function App() {

  pageState = <ProjectEntry />;

  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#" onClick={(e) => onMouseClick(e,"projects")}>PROJECTS</Nav.Link>
                <Nav.Link href="#" onClick={(e) => onMouseClick(e,"about")}>ABOUT</Nav.Link>
              </Nav>
              <Navbar.Brand>SHUEN YASUI</Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">PROJECTS</h1>
            <p className="lead">A showcase of my coding projects - Continuous learning and exploration through creative works:</p>
          </Container>
        </Jumbotron>
        <Container>
          {pageState}
        </Container>
      </header>
    </div>
  );
}
function onMouseClick(e,type){
  console.log("clicked ",type);
}

export default App;
