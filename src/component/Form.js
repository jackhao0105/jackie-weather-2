import React from 'react';
import './Form.css';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input
      type='text'
      name='city'
      placeholder='Enter City Name'
      className='formSearch mr-sm-3'
    ></input>
    <button type='submit' className='btn btn-warning my-1 my-sm-1'>
      Search
    </button>
  </form>
);

export default Form;
