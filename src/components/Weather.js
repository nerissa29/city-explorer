import React from "react";
import WeatherDay from "./WeatherDay";
// import Accordion from 'react-bootstrap/Accordion';

// class component
class Weather extends React.Component {
  render() {
    let weatherDaySingleForecast = this.props.weatherData.map((element, idx) => {
      return <WeatherDay 
        datetime={element.datetime}
        description = {element.description}
        key={idx}
      />
    })
    return (
      <>
        <main>
          {weatherDaySingleForecast}
        </main>    
      </>
    )
  }
}

// export
export default Weather;





// ...............................................................................
//               LAB 07 CODE (this part been move to WeatherDay)
// ...............................................................................

// {/* <Accordion defaultActiveKey="0"> */}
//           {/* TA Brandon caught 'idx' was passed in before 'datetime' */}
//           {/* {this.props.weatherData.map((datetime, idx) => 
//             <Accordion.Item eventKey={idx} key={idx}>          
//               <Accordion.Header>{datetime.datetime}</Accordion.Header>
//               <Accordion.Body>
//                 {datetime.description}
//               </Accordion.Body>
//             </Accordion.Item>   
//           )}
//         </Accordion> */}

// ...............................................................................
// ...............................................................................

