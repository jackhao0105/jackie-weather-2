import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type='text' name='city' placeholder='Enter City Name'></input>
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Form;
