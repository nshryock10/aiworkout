import React from 'react';
import { useState, useEffect } from 'react';
import './Loading.css'

function LoadingDots() {


  return (
    <div>
        <p>Generating workout...</p>
        <span className="loader"></span>
    </div>
    
  );
}

export default LoadingDots;