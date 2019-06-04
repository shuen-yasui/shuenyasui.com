import React, { Component } from 'react';
import Jdata from './projectEntryData.json';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class ProjectEntry extends Component {
  render() {
    let readData = Jdata.map((data) => {
      let bodyData = [];
      let image = [];
      if (data.body) {
        for (let i = 0; i < data.body.length; i++) {
          let b = data.body[i];
          if (b.text) {
            bodyData.push(b.text);
          }
          if (b.break) {
            bodyData.push(React.createElement('p',{key:b.break}));
          }
          if (b.link) {
            bodyData.push(React.createElement('a',{key:b.link,href:b.src},b.link));
          }
        }
      }
      if (data.image) {
        for (let i = 0; i < data.image.length; i++) {
          let im = data.image[i];
          if (im.type === "rounded") {
            image.push(<a href={im.link}><Image src={im.src} className={im.className} rounded fluid /></a>);
          }
          if (im.type === "roundedCircle") {
            image.push(<a href={im.link}><Image src={im.src} className={im.className} roundedCircle fluid /></a>);
          }
        }
      }
      return (
      <div key={data.id}>
        <div><h2>{data.title}</h2></div>
        <p>Date: {data.date}</p>
        <div>{bodyData}</div>
        <div align="center">{image}</div>
        <hr />
      </div>
      );
    });
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">PROJECTS</h1>
            <p className="lead">A showcase of my coding projects - Continuous learning and exploration through creative works:</p>
          </Container>
        </Jumbotron>
        <Container>{readData}</Container>
      </div>
    );
  }
}

export default ProjectEntry
