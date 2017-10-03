import React, { Component } from 'react';
import './App.css';
import { getWeatherForLocation } from './services/WeatherService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      latitude: "",
      longitude: "",
    }
  }
  componentWillMount() {
    return getWeatherForLocation()
      .then((response) => {
        this.setState({
          text: response.data.cod
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillUpdate() {
    return getWeatherForLocation()
      .then((response) => {
        this.setState({
          text: response.data.cod
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <h1>{this.state.latitude}</h1>
        <h1>{this.state.longitude}</h1>
      </div>
    );
  }
}

export default App;
