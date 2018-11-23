import React, { Component } from 'react';

const GifList = props => (
  <div className='gif-list-container'>
    {props.gifHistory.map((image, index) =>
      <img src={image} key={index} />
    )}
  </div>
)

export default GifList;