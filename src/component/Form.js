import React, { Component } from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type='text' name='city' placeholder='Enter City Name'></input>
    <button type='submit'>Search</button>
  </form>
);

export default Form;
