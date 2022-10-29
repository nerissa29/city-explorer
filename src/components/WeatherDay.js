import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <main>
          <Accordion defaultActiveKey="0">
            {/* TA Brandon caught 'idx' was passed in before 'datetime' */}     
            {/* {this.props.weatherData.map((datetime, idx) =>  */}
              {/* <Accordion.Item eventKey={idx} key={idx}>           */}
              <Accordion.Item eventKey={this.props.idx} key={this.props.idx}>   
                <Accordion.Header>{this.props.datetime}</Accordion.Header>
                <Accordion.Body>
                  {this.props.description}
                </Accordion.Body>
              </Accordion.Item>   
            {/* )} */}
          </Accordion>
        </main>

      </>

    );
  }
}

export default WeatherDay;