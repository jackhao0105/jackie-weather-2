import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.description && <p>{this.props.description}</p>}
        {this.props.icon && <p>{this.props.icon}</p>}
        {this.props.city && this.props.country && (
          <h2>
            {this.props.city}, {this.props.country}
          </h2>
        )}

        {/* ! Show the date*/}
        <p>Date :... </p>

        {/* ! Show the Humidity*/}
        {this.props.humidity && (
          <div>
            {' '}
            <p>H</p> <p> {this.props.humidity} </p>
          </div>
        )}

        {/* ! Show the speed of Wind*/}
        {this.props.wind && (
          <div>
            {' '}
            <p>W</p> <p> {this.props.wind} </p>
          </div>
        )}

        {/*Display the weather*/}
        {this.props.temperature && <p>{this.props.temperature}</p>}

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
