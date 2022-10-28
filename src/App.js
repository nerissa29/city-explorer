import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Weather from './components/Weather';
import Movie from './components/Movie';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
// import Movie from './components/Movie';



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
      errorMessage: 'Enter the City you want to display',
      show: false,
      weatherData: [],
      movieData: [],
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
      

      let cityLocation = cityData.data[0];
      let citySearched = this.state.city;

      console.log('cityData.data[0]', cityData.data[0])
      console.log('city', this.state.city);
      console.log('cityData', cityData);

      console.log('city location', cityLocation)

      this.getWeatherData(cityLocation);
      this.getMovieData(citySearched)

      this.setState({
        cityData: cityData.data[0],
        display_name: cityData.data[0].display_name,
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        mapUrl: mapUrl,
        error: false,
      })

    } catch(error){
      console.log('errorMessage', error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      });

    }
  }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> on localhost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
//   http://localhost:3001/weather?city_name=seattle&lat=47.60621&lon=-122.33207&day=5&units=F
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  getWeatherData = async (cityLoc) => {
    try {
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${cityLoc.lat}&lon=${cityLoc.lon}&day=7&units=F`;
    
      let weatherData = await axios.get(weatherUrl);
      console.log(weatherData);

      this.setState({
        weatherData: weatherData.data,
        error: false,
        errorMessage: '',
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      })
    }
  }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> on localhost <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//
//  http://localhost:3001/movies?city_name=Seattle&language=en-US&page=1&include_adult=false
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  getMovieData = async (cityTitle) => {
    try {
      let movieURL = `${process.env.REACT_APP_SERVER}/movies?city_name=${cityTitle}&language=en-US&page=1&include_adult=false`;

      console.log('cityTitle', cityTitle)

      let movieData = await axios.get(movieURL);

      this.setState({
        movieData: movieData.data,
        error: false,
        errorMessage: '',
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  }

  render() {
  
    return (

      // TA Brandon advised to delete the pre-existing div and logo to see the deployed site at localhost

      <section>

        
        <ErrorMessage 
          errorMessage={this.state.errorMessage}
          lat= {this.state.lat}
          lon= {this.state.lon}
        />

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

        <Weather 
          weatherData = {this.state.weatherData}

        />

        <Movie
          movieData = {this.state.movieData}
        />
        

      </section>


    );
  }


}

export default App;
