import React, { Component } from 'react';
import './Camper.css';

class Camper extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: this.props.name,
      number: this.props.number ,
      name: this.props.name,
      last30: this.props.last30,
      total: this.props.total,
      icon: this.props.iconURL
    }
  }

  render(){
    return (
      <div className="row">
        <div className="cell number">{this.state.number}</div>
        <div className="cell name"><img className="icon" src={this.state.icon}/> {this.state.name}</div>
        <div className="cell last30">{this.state.last30}</div>
        <div className="cell total">{this.state.total}</div>
      </div>
    );
  }
}

export default Camper;
