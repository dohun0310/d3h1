import React, { useEffect, useState } from 'react'
import BG1 from '../assets/bg-1.jpg';
import BG2 from '../assets/bg-2.jpg';
import BG3 from '../assets/bg-3.jpg';
import BG4 from '../assets/bg-4.jpg';
import BG5 from '../assets/bg-5.jpg';
import BG6 from '../assets/bg-6.jpg';
import BG7 from '../assets/bg-7.jpg';

const Background = () => {

  // states
  const [ bg, setBg ] = useState(1);

  // bgs
  const bgs = { BG1, BG2, BG3, BG4, BG5, BG6, BG7 }; // eslint-disable-line

  // random number generator
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    const previousResult = localStorage.getItem("BGInt");
    while ( result === previousResult ) {
      result = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    localStorage.setItem("BGInt", result);
    return result;
  }
  
  useEffect(() => {
    setBg(bgs["BG" + getRandomInt(1, 7)]);
  }, [])

  return (
    <div 
      className='Background'
      style={{
        backgroundImage: `url(${bg})`
      }}
    />
  )
}

export default Background
