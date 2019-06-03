import React, { Component } from 'react';
import ProjectEntry from './ProjectEntry';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends Component {
  constructor(props){
    super(props);
    this.pageState = <ProjectEntry />;

  }
  onMouseClick(e,p){
    switch (p) {
      case "projects":
        this.setState(this.pageState = <ProjectEntry />);
        break;
      case "about":
        this.setState(this.pageState = <h1>about</h1>);
        break;
      default:
        this.setState(this.pageState = null);
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#" onClick={(e) => this.onMouseClick(e,"projects")}>PROJECTS</Nav.Link>
                  <Nav.Link href="#" onClick={(e) => this.onMouseClick(e,"about")}>ABOUT</Nav.Link>
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
            {this.pageState}
          </Container>
        </header>
      </div>
    );
  }
}
export default App;
