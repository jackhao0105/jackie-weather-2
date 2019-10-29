import React from 'react';

const Weather = props => (
  <div>
    {props.description && <p>{props.description}</p>}
    {props.icon && <p>{props.icon}</p>}
    {props.city && props.country && (
      <h2>
        {props.city}, {props.country}{' '}
      </h2>
    )}

    {/* ! Show the date*/}
    <p>Date :... </p>

    {/* ! Show the Humidity*/}
    {props.humidity && (
      <div>
        <p>H</p> <p> {props.humidity} </p>
      </div>
    )}

    {/* ! Show the speed of Wind*/}
    {props.wind && (
      <div>
        <p>W</p> <p> {props.wind} </p>
      </div>
    )}

    {/*Display the weather*/}
    {props.temperature && <p>{props.temperature}</p>}

    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
