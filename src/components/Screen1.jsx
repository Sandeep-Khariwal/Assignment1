import React from 'react'
import arrow from "../images/arrow.png"
import girl from "../images/girlClap.png"
import heart from "../images/castingLogo.png"
import stage from "../images/awardPlatform.png"
import { useNavigate } from "react-router-dom"

const Screen1 = () => {
  const navigate = useNavigate()
   
  return (
    <div className="screen1">
      <div className='content' >
      <img src={heart} alt='not found'/>
      <h2>The Results R In!</h2>
      </div>
      <div className='girl'>
          <img src={girl} alt='not found' />
          <img src={arrow} alt='not found' onClick={()=>{navigate("/screen2")}} />
      </div>
      <div className='stage' >
        <img src={stage} alt='not found'/>
      </div>
    </div>
  )
}

export default Screen1
