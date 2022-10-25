import logo from './logo.svg';
import './App.css';
import React from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value,
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
  
        <h1>API Call</h1>
        <form>
          <label>Enter City:
            <input type="text" />
            <button type="submit">Explore!</button>
          </label>
  
  
        </form>
      </>
  
      
    );
  }

  
}

export default App;
