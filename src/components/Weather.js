import './components/Weather.js';
import React from "react";
import Accordion from 'react-bootstrap/Accordion';


// import Alert from 'react-bootstrap/Alert';
// // import Button from 'react-bootstrap/Button';


class Weather extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Header>{this.props.city}</Accordion.Header>
        <Accordion.Body>
          {this.props.weatherData}
        </Accordion.Body>
      </Accordion>
      
    )
  }
}

export default Weather;