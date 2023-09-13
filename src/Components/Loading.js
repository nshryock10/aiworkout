import React from 'react';
import { useState, useEffect } from 'react';
import './Loading.css'

function LoadingDots(props) {

  const message = props.message;

  return (
    <div>
        {props.message ? <p>{message}</p> : <p>Generating workout...</p>}
        <p>This will take 1 to 2 minutes. Don't refresh</p>
        <span className="loader"></span>
    </div>
    
  );
}

export default LoadingDots;