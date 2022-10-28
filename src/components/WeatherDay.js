import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';


class WeatherDay extends React.Component {
  render() {
    return (
      <>
        {/* <Accordion defaultActiveKey="0">
          
          {this.props.weatherData.map((datetime, idx) => 
            <Accordion.Item eventKey={idx} key={idx}>          
              <Accordion.Header>{datetime.datetime}</Accordion.Header>
              <Accordion.Body>
                {datetime.description}
              </Accordion.Body>
            </Accordion.Item>   
          )}
        </Accordion> */}
      </>

    );
  }
}

export default WeatherDay;