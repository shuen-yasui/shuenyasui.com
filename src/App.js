import React from 'react';
import ProjectEntry from './ProjectEntry';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

function App() {
  let state = {
    data: [
      {
        id: 1,
        title: "title1",
        date: "1/1/2019",
        body: [
          {
            body: "b1",
          }
        ],
        image:{
          src: "images/solarsystem01.png",
          type: "roundedCircle"
        }
      },
      {
        id: 2,
        title: "title2",
        date: "1/1/2019",
        body: [
          {
            body: "b2",
          },
          {
            body:"b3"
          },
          {
            id: 1.1,
            newpara: "p",
          },
          {
            link: "http://www.google.com",
            linkword: "google",
          },
          {
            id: 1.2,
            newpara: "p",
          },
          {
            body: "b4",
          },
        ],
      }
    ],
    current: {}
  }
  let data = state.data.map((d) => {
    let outputBody = [];
    let image = null;
    for (var i = 0; i < d.body.length; i++) {
      let row = d.body[i];
      if (row.newpara) {
        outputBody.push(React.createElement('p',{key:row.id}));
      }
      if (row.body) {
        outputBody.push(row.body);
      }
      if (row.link) {
        outputBody.push(React.createElement('a',{ key:row.link, href:row.link},row.linkword));
      }
    }
    if (d.image) {
      if (d.image.type === "rounded") {
        image = <Image src={d.image.src} rounded fluid />
      }
      if (d.image.type === "roundedCircle") {
        image = <Image src={d.image.src} roundedCircle fluid />
      }
    }
      return (
        <Container key={d.id}>
            <h3>{d.title}</h3>
            <p>Date: {d.date}</p>
            <div>{outputBody}</div>
            <div>{image}</div>
        </Container>
      );
  });
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Shuen Yasui</Navbar.Brand>
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
          { data }
        </Container>
        <ProjectEntry />
      </header>
    </div>
  );
}

export default App;
