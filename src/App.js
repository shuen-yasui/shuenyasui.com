import React from 'react';
import ProjectEntry from './ProjectEntry';

function App() {
  let state = {
    data: [
      {
        id: 1,
        title: "title1",
        body: "body1",
        link: null
      },
      {
        id: 2,
        title: "title2",
        body: "body2",
        link: "http://www.google.com"
      }
    ],
    current: {}
  }
  let data = state.data.map((d) => {
    let outputBody = [];
    outputBody.push(d.body);
    if (d.link) {
      outputBody.push(React.createElement('a',{ key:d.link, href:d.link},d.link));
    }
      return (
        <div key={d.id}>
            <div>{d.title}</div>
            <div>{outputBody}</div>
        </div>
      );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Page
          { data }
        </h1>
        <ProjectEntry />
      </header>
    </div>
  );
}

export default App;
