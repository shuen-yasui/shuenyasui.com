import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class PageAbout extends Component {
  render(){
    return(
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">ABOUT</h1>
            <p className="lead">A word from the developer:</p>
          </Container>
        </Jumbotron>
        <Container>
          <p>
            Thank you for visiting my website. My name is Shuen Yasui and I created this website to showcase my various coding projects and to share what I have learned throughout this journey. If you found my projects interesting, leave a star on its GitHub repository.
          </p>
          <a href="mailto:shuenyasui@gmail.com"><p>Contact me</p></a>
          <a href="https://github.com/shuen-yasui"><p>GitHub</p></a>
          <a href="https://www.linkedin.com/in/shuenyasui/"><p>LinkedIn</p></a>
        </Container>
      </div>
    );
  }
}
export default PageAbout
