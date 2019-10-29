import React, { Component } from 'react';

// Import the Component File
import Title from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';

// API key
const key = 'e3069f0be257a43853928891a5153904';
// UNIT
const units = 'imperial';

class App extends Component {
  state = {
    temperature: undefined,
    description: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    humidity: undefined,
    icon: undefined,
    picture: undefined,
    error: undefined
  };

  // Get Weather from Value of Input
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units};`
    );
    const data = await api.json();
    if (city) {
      console.log(data);
      this.setState({
        temperature: Math.floor(data.main.temp - 273.15),
        description: data.weather[0].main,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        icon:
          'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png',
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        description: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        humidity: undefined,
        icon: undefined,
        error: 'We can read your input. Maybe your spell wrong'
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <div className='row h-2'>
          <div className='col-md-6 text-left'>
            <Title />
          </div>
          <div className='col-md-6 text-right'>
            <Form getWeather={this.getWeather} />
          </div>
        </div>

        <div className='container d-flex flex-column rounded-lg'>
          <Weather
            temperature={this.state.temperature}
            description={this.state.description}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            wind={this.state.wind}
            icon={this.state.icon}
          />
        </div>
      </div>
    );
  }
}

export default App;
