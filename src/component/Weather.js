import React from 'react';
import './Weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='weather-wrap d-flex flex-column justify-content-between'>
        {this.props.error && <p>{this.props.error}</p>}
        <div className='weather'>
          {this.props.description && (
            <p className='display-4'>{this.props.description}</p>
          )}
          {this.props.icon && <img src={this.props.icon} alt='icon' />}
        </div>

        <div className='row border-top border-dark'>
          <div className='col-md-7 d-flex justify-content-center align-items-center'>
            {this.props.city && this.props.country && (
              <p className='display-4'>
                {this.props.city}, {this.props.country}{' '}
              </p>
            )}
          </div>

          {/* ! Show the Humidity*/}
          <div className='col-md-1 px-0'>
            <div className='column'>
              {this.props.humidity && (
                <div className='border border-top-0 border-dark'>
                  <p>H</p>
                  <p> {this.props.humidity}% </p>
                </div>
              )}

              {/* ! Show the speed of Wind*/}
              {this.props.wind && (
                <div className='border border-top-0 border-dark'>
                  <p>W</p>
                  <p>{this.props.wind} m/s</p>
                </div>
              )}
            </div>
          </div>

          <div className='col-md-4 d-flex justify-content-center align-items-center'>
            {/*Display the weather*/}
            {this.props.temperature && (
              <p className='display-4'>
                {this.props.temperature}
                {'\u00b0'}C
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
