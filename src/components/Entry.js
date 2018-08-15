import React, { Component } from 'react';
import Functional from './Functional';
import axios from 'axios';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      f_name: 'Benjamin',
      light: 0,
      gravity: 0,
      image_1: '',
      image_2: '',
      image_3: ''

    }
    this.onLightChange = this.onLightChange.bind(this);
    this.onGravityChange = this.onGravityChange.bind(this);
    this.handleSubmitOnClick = this.handleSubmitOnClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/get_images`).then( response => {
      console.log('get images response', response.data[0]);
      this.setState({
        image_1: response.data[0].img_1,
        image_2: response.data[0].img_2,
        image_3: response.data[0].img_3
      })
    }).catch( error => {
      console.log('get images error', error);
    })
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
        <Functional f_name={this.state.f_name} />
        <img className='pic_one' src={this.state.image_1} alt='Pic One'/>
        <img className='pic_two' src={this.state.image_2} alt='Pic Two'/>
        <img className='pic_three' src={this.state.image_3} alt='Pic Three'/>
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