import React, {useState , useEffect } from 'react'

import arrow from "../images/arrow.png"
import girl from "../images/girlClap.png"
import heart from "../images/main-heart.png"
import stage from "../images/awardPlatform.png"

// import { useNavigate } from "react-router-dom"

const Screen3 = () => {
  var [count,setCount] = useState(1500)
    const [buttonClicked, setButtonClicked] = useState(false);
  
    useEffect(() => {
      let intervalId;
  
      if (buttonClicked) {
        intervalId = setInterval(() => {
          setCount((prevValue) => {
            if (prevValue < 4000) {
              return prevValue + 1;
            } else {
              clearInterval(intervalId);
              return prevValue;
            }
          });
        }, 0.1);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [buttonClicked]);
  
    const onclickHandle = () => {
      setButtonClicked(true);
    };
  
  return (
    <div className="screen3">
    <div className='content' >
    <h2> 4 Friends Give you some Love </h2>
    <img src={heart} alt='not found'/>
    <h2>{count}</h2>
    </div>
    <div className='girl'>
        <img src={girl} alt='not found' />
        <img src={arrow} alt='not found' onClick={onclickHandle}  />
    </div>
    <div className='stage' >
      <img src={stage} alt='not found'/>
    </div>
  </div>
  )
}

export default Screen3
