import './App.css';
import ErrorMessage from './components/ErrorMessage';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';



// function App() {
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      display_name: '',
      lat: '',
      lon: '',
      mapUrl: '',
      error: false,
      errorMessage: '',
      show: false,
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

    try {

      // I was using '' single quote instead of backticks causing error when getting data, TA Raven caught it

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      console.log('city', this.state.city);
      console.log('lat', this.state.lat);
      console.log('lon', this.state.lon);


      let cityData = await axios.get(url);

      // TA Charlie advised cityData.data instead of this.state.lat for both latitude and longitude

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=10&markers=icon:tiny-red-cutout`
      let mapData = await axios.get(mapUrl)
      console.log('mapData', mapData.data);

      this.setState({
        cityData: cityData.data[0],
        display_name: cityData.data[0].display_name,
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        mapUrl: mapUrl,
        error: false,
      })
      console.log('cityData', cityData.data);

    } catch(error){
      console.log('errorMessage', error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      })

    }
  }

  // handleErrorMessage = (err) => {
  //   if (this.state.error) {
  //     this.setState({
  //       show: true,
  //     })
  //   }
  // }

 



  // >>>>> not getting the lat and lon values <<<<

  // getMapData = async (event) => {
  //   event.preventDefault();

  //   let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=10&markers=icon:tiny-red-cutout`

  //   let mapData = await axios.get(mapUrl)
  //   console.log('mapData', mapData.data);

  //   this.setState({
  //     mapUrl: mapUrl,
  //   })
  // }
  

  render() {
  
    return (

      // TA Brandon advised to delete the pre-existing div and logo to see the deployed site at localhost

      <section>
        <h1>API Call</h1>
        <form onSubmit={this.getCityData}>
          <label>Enter City:
            <input type="text" onInput={this.handleInput} />
            <button type="submit">Explore!</button>
          </label>
        </form>

        <ul className='selectedCityInfo'>
            <ListGroup.Item>{this.state.display_name}</ListGroup.Item>
            <ListGroup.Item>{this.state.lat}</ListGroup.Item>
            <ListGroup.Item>{this.state.lon}</ListGroup.Item>
        </ul>

        <Figure className='fig-parent'>
          <Figure.Image
            className='fig-image'
            width={300}
            height={300}
            alt="city map"
            src={this.state.mapUrl}
          />
          <Figure.Caption className='fig-caption'>
            City: {this.state.display_name}, 
            Latitude: {this.state.lat}, 
            Longitude: {this.state.lon}
          </Figure.Caption>
        </Figure>

        {/* {
          this.state.error ? <ErrorMessage /> : <p></p>
        } */}

        <ErrorMessage 
          errorMessage={this.state.errorMessage}
        />

      </section>


    );
  }


}

export default App;
