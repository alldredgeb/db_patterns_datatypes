import React, { Component } from 'react';
import Functional from './Functional';
import axios from 'axios';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      f_name: 'Benjamin',
      light: 0,
      gravity: 0

    }
    this.onLightChange = this.onLightChange.bind(this);
    this.onGravityChange = this.onGravityChange.bind(this);
    this.handleSubmitOnClick = this.handleSubmitOnClick.bind(this);
  }

  onLightChange(event) {
    this.setState({
      light: event.target.value
    })
  }

  onGravityChange(event) {
    this.setState({
      gravity: event.target.value
    })
  }

  handleSubmitOnClick() {
    axios.post(`/api/addanswers`, {
      light: +this.state.light,
      gravity: +this.state.gravity
    }).then(response => {
      console.log(response);
    }).catch( error => {
      console.log('add answer to db error', error);
    })
  }

  render() {
    return (
      <div>
        <Functional f_name={this.state.f_name}/>
        <p>How many meters per second does light travel?</p>
        <input onChange={this.onLightChange}/>
        <p>What number represents the gravitational constant?</p>
        <input onChange={this.onGravityChange}/>
        <br />
        <br />
        <button onClick={this.handleSubmitOnClick}>Submit</button>
      </div>
    )
  }
}

export default Entry;