import React from 'react'
import { motion } from 'framer-motion'
import animationImg from '../assets/animation.png'

const Motion = () => {
  return (
    <div className="space-y-6 p-6">
      {/* <motion.div
        className="h-[200px] w-[200px] border-2 border-black bg-pink-500"
        animate={{
          x: 600,
          rotate: 360,
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat:Infinity,
          ease:'anticipate'
        }}
      ></motion.div> */}
   <motion.img
   className='w-[100px] h-[100px] rounded-full'
   initial={{
    x:0,
    y:0
   }}
      animate={{
          x: [0,300,300,0,0],
          y:[0,0,100,100,0]
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat:Infinity
        }}
   src={animationImg}/>
     
    </div>
  )
}

export default Motion
