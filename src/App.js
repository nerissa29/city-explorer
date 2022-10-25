import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


// function App() {
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData1: [],
      // display_name: '',
      // lat: '',
      // lon: '',
    }
  }

  // get ser input/request for city
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value,
    })
  }

  // handler event to get city data
  getCityData = async (event) => {
    event.preventDefault();

    // I was using '' single quote instead of backticks causing error when getting data, TA Raven caught it

    // let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&center=40.7484284,-73.9856546198733&zoom=10`

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    console.log(url);

    let cityData = await axios.get(url);
    this.setState({
      cityData: cityData.data[0],
      display_name: cityData.data[0].display_name,
      lat: cityData.data[0].lat,
      lon: cityData.data[0].lon,

    })
    console.log(cityData.data);

  }

  render() {
    // let selectedCity = this.state.cityData.map((selCity, index) => {
    //   // return <ListGroup.Item key={index}>{selCity.display_name}{selCity.lat}{selCity.lon}</ListGroup.Item>
    //   return <ListGroup.Item key={index}>{selCity.display_name}</ListGroup.Item>

    // })
    return (

      // TA Brandon advised to delete the pre-existing div and logo to see the deployed site at localhost

      <>
        <h1>API Call</h1>
        <form onSubmit={this.getCityData}>
          <label>Enter City:
            <input type="text" onInput={this.handleInput} />
            <button type="submit">Explore!</button>
          </label>
        </form>

        <ul className='selectedCityInfo'>
          {/* <ListGroup> */}
            <ListGroup.Item>{this.state.display_name}</ListGroup.Item>
            <ListGroup.Item>{this.state.lat}</ListGroup.Item>
            <ListGroup.Item>{this.state.lon}</ListGroup.Item>
          {/* </ListGroup> */}
        </ul>
      </>


    );
  }


}

export default App;
