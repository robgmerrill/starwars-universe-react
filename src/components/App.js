import React, { Component } from 'react';
var Universe = require('./Universe');

class App extends Component {
  render() {
    return (
      <div className="container">
        <Universe/>
      </div>
    );
  }
}

export default App;
