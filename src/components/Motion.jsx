import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Motion = () => {

    
  const [isToggled, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <motion.h1 animate={{ opacity: isToggled ? 1 : 0 }}transition={{ duration: 0.5 }}className="text-3xl font-bold" > Hello</motion.h1>
      <button onClick={() => setToggle(!isToggled)} className="px-4 py-2 bg-blue-500 text-white rounded" > Toggle </button>
    </div>
  );
};

export default Motion;
