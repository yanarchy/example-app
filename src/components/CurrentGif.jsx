import React, { Component } from 'react';

const CurrentGif = (props) => (
  <div className='current-gif-container'>
    <h2>{props.searchWords}</h2>
    <img alt={`gif of ${props.searchWords}`} src={props.image} />
  </div>
)

export default CurrentGif;