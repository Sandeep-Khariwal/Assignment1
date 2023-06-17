import React from 'react'
import arrow from "../images/arrow.png"
import girl from "../images/girlClap.png"
import heart from "../images/main-heart.png"
import stage from "../images/awardPlatform.png"
import avtar from "../images/avtar2.png"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const Screen2 = () => {
  const navigate = useNavigate()

  return (
    <div className="screen2">
    <div className='content' >
    <motion.div className='profile' initial={{x:+100 , opacity:0}}  whileInView={{x:0 , opacity:1 }} transition={{duration:0.5 ,delay:0.3}}  >
      <img src={avtar} alt='not'/>
      <div className='info' >
        <h2>D-Lister</h2>
        <p>Sally</p>
      </div>
    </motion.div>
    <h2>Gave you some Love </h2>
    <img src={heart} alt='not found'/>
    <h2>1500</h2>
    </div>
    <div className='girl'>
        <img src={girl} alt='not found' />
        <img src={arrow} alt='not found' onClick={()=>{navigate("/screen3")}} />
    </div>
    <div className='stage' >
      <img src={stage} alt='not found'/>
    </div>
  </div>
  )
}

export default Screen2
