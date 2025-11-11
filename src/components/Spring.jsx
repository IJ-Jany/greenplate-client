import React from 'react';
import { useSpring, animated } from '@react-spring/web';

   
const Spring = () => {
   const move = useSpring({
    loop:true,
    to:{
        left:"0"
    },
    from:{
        left:"1000px"
    }
   })
    return (

        <div>
            <animated.h1 style={move} className="absolute">Israt Jany</animated.h1>
        </div>
    );
};

export default Spring;