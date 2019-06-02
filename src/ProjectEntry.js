import React, { Component } from 'react';
import Jdata from './projectEntryData.json';
import Image from 'react-bootstrap/Image';

class ProjectEntry extends Component {
  constructor(props){
    super(props)
    console.log("const", this);
  }
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
          image = <a href={data.image.link}><Image src={data.image.src} className={data.image.className} rounded fluid /></a>
        }
        if (data.image.type === "roundedCircle") {
          image = <a href={data.image.link}><Image src={data.image.src} className={data.image.className} roundedCircle fluid /></a>
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
        <div>{readData}</div>
      </div>
    );
  }
}

export default ProjectEntry
