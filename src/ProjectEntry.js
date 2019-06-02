import React, { Component } from 'react';
import Jdata from './projectEntryData.json';
import Image from 'react-bootstrap/Image';

class ProjectEntry extends Component {
  render() {
    let readData = Jdata.map((data) => {
      let bodyData = [];
      let image = null;
      if (data.body) {
        for (var i = 0; i < data.body.length; i++) {
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
        if (data.image.type === "rounded") {
          image = <a href={data.image.link}><Image src={data.image.src} rounded fluid /></a>
        }
        if (data.image.type === "roundedCircle") {
          image = <a href={data.image.link}><Image src={data.image.src} roundedCircle fluid /></a>
        }
      }
      return (
      <div key={data.id}>
        <div><h1>{data.title}</h1></div>
        <div><h5>Date: {data.date}</h5></div>
        <div>{bodyData}</div>
        <div align="center">{image}</div>
      </div>
      );
    });
    return (
      <div>
        <div>Projects:</div>
        <div>{readData}</div>
      </div>
    );
  }
}

export default ProjectEntry
