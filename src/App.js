import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "fd164944bfe4636a98d2ded48e93821f",
      text: "",
      latitude: "",
      longitude: "",
    }
  }
  componentWillMount() {
    this.getLocation();
  }

  componentWillUpdate() {
    this.getSampleText();
  }

  getLocation() {
    const posPass = (position) => {
      console.log(position.coords);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }
    const posFail = (positionError) => {
      console.log(positionError);
      prompt("allow site to gather your location information or enter it manually please");
    }
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(posPass,posFail);
    }
  }

  getSampleText() {
    axios.get(`api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.key}`)
    .then((response) => {
      this.setState({
        text: response.data.cod
      }, function() {
        console.log("worked");
      },timeout);
    })
    .catch((err) => {
      console.log(err);
      console.log(`api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${this.state.key}`);
      console.log(this.state.latitude);
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
