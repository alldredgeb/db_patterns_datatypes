import React, { Component } from 'react';
import Functional from './Functional';
import axios from 'axios';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Benjamin',
      light: 0,
      gravity: 0

    }
    // this.handleNameOnChange = this.handleNameOnChange.bind(this);
  }

  render() {
    return (
      <div>
        <Functional name={this.state.name}/>
        <p>How many meters per second does light travel?</p>
        <input/>
        <p>What number represents the gravitational constant?</p>
        <input/>
      </div>
    )
  }
}

export default Entry;