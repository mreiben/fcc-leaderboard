import React, { Component } from 'react';
import Camper from './Camper.js';
import './CamperList.css';

const CamperList = (props) => {
  let count = 0;
  const camperList = props.list.map(function(camper){
    count++;
    return (
      <Camper
        key={count.toString()}
        number={count}
        name={camper['username']}
        last30={camper['recent']}
        total={camper['alltime']}
        iconURL={camper['img']}
      />
    );
  });

  return(
    <div className="row all-campers">
      <div className="cell number number-title">#</div>
      <div className="cell name name-title">Camper Name</div>
      <div className="cell last30 recent-title">Recent</div>
      <div className="cell total total-title">Total</div>
      {camperList}
    </div>
  );
}

export default CamperList
