import React, { Component } from 'react';
import ProjectEntry from './ProjectEntry';
import PageAbout from './PageAbout';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends Component {
  constructor(props){
    super(props);
    this.pageState = <ProjectEntry />;
  }
  onMouseClick(e,page){
    switch (page) {
      case "projects":
        this.setState(this.pageState = <ProjectEntry />);
        break;
      case "about":
        this.setState(this.pageState = <PageAbout />);
        break;
      default:
        this.setState(this.pageState = <ProjectEntry />);
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
                  <Nav.Link onClick={(e) => this.onMouseClick(e,"projects")}>PROJECTS</Nav.Link>
                  <Nav.Link onClick={(e) => this.onMouseClick(e,"about")}>ABOUT</Nav.Link>
                </Nav>
                <Navbar.Brand>SHUEN YASUI</Navbar.Brand>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {this.pageState}
        </header>
      </div>
    );
  }
}
export default App;
