
import React, { Component } from 'react';
import "./Home.css"
import HomeSearchWeather from '../Components/HomeSearchWeather/HomeSearchWeather'

class Home extends Component {
  state = {
  };

  render() {
    return (
      <div className="HomePage" >
        <div className="title">
          <h1>Home Page</h1>
        </div>
        <HomeSearchWeather></HomeSearchWeather>
      </div >
    );
  }
}

export default Home;

