import React from 'react'
import { motion } from 'framer-motion'

function Banner() {
  return (  
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[60%] rounded-tl-3xl rounded-tr-3xl py-[50px] bg-blue-800'>
       <div className='text border-t-2 border-b-2 border-zinc-400 overflow-hidden flex pr-20 whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{duration:5, ease: "linear", repeat: Infinity}} className="text-[24vw] leading-none -mt-4 pb-2 font-['Test_Founders_Grotesk_X']">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 5, ease: "linear", repeat: Infinity}} className="text-[24vw] leading-none -mt-4 pb-2 font-['Test_Founders_Grotesk_X'] ">&nbsp; WE ARE OCHI</motion.h1>
        
       </div>
    </div>
  )
}

export default Banner
