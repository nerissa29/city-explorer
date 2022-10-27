// import './components/Weather.js';
import React from "react";
import Accordion from 'react-bootstrap/Accordion';

// // import Button from 'react-bootstrap/Button';


class Weather extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        {/* TA Brandon caught 'idx' was passed in before 'datetime' */}
        {this.props.weatherData.map((datetime, idx) => 
          <Accordion.Item eventKey={idx} key={idx}>          
            <Accordion.Header>{datetime.datetime}</Accordion.Header>
            <Accordion.Body>
              {datetime.description}
            </Accordion.Body>
          </Accordion.Item>                  
        )}
      </Accordion>
    )
  }
}

export default Weather;