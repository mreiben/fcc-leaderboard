import React, { Component } from 'react';
import CamperList from './components/CamperList.js';
import Camper from './components/Camper.js';
import logo from './fcc-logo.svg';
const request = require('request');
import './App.css';
import './components/Camper.css';

let count = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state = { campers: [] }

    request({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      json: true
    }, function(err,data){
      if(err) { throw err; }
      else {
        this.setState({ campers: data.body });
        console.log(this.state.campers[0]['username']);
      }
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="table-header">Leaderboard</div>
        <CamperList id="table" list={this.state.campers}/>
      </div>
    );
  }
}

export default App;
