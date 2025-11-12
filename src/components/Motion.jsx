import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Motion = () => {


  const [isToggled, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <motion.h1 animate={{ opacity: isToggled ? 1 : 0 }}transition={{ duration: 0.5 }}className="text-3xl font-bold" >  Food Share believes everyone deserves access to nutritious, healthy food. We partner with a network of 40+ food pantries and meal sites to provide free groceries, fresh produce, and nutritious meals for all.</motion.h1>
      <button onClick={() => setToggle(!isToggled)} className="px-4 py-2 bg-blue-500 text-white rounded" > GreenPlate </button>
    </div>
  );
};

export default Motion;
