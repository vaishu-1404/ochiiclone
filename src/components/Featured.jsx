import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all';


function Featured() {

    const cards =[useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({y: "0"});

    }

    const handleHoverEnd = (index) => {
        cards[index].start({y: "100%"});

    }

  return (
    <div className='w-full h-fit bg-zinc-950 '>
        <h1 className="text-zinc-100 font-light pt-28 pl-16 text-6xl font-['Neue_Montreal'] mm:text-5xl ">Featured Projects</h1>
        <div className='border-2 border-zinc-700 mt-14'></div>
        <div className='px-20 mm:px-4 sm:px-4 md:px-4 '>
        <div className='flex items-center mt-16'>
         <div className='w-3 h-3 rounded-full bg-zinc-100 '></div>
         <span className="ml-2 font-['Neue_Montreal']">FYDE</span>
         <div className='w-3 h-3 rounded-full ml-[640px] bg-zinc-100'></div>
         <span className="ml-2 font-['Neue_Montreal']">VISE</span>
          </div>
            <div className='card relative w-full flex gap-10 mt-6 mm:flex-col md:flex-col sm:flex-col'>
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)}  className='cardcontainer relative w-[700] h-[650] '>
                <div className=" flex absolute lg:hidden text-[#CDEA68] z-[9] text-8xl font-['Neue_Montreal'] overflow-hidden font-semibold left-full -translate-x-1/2 top-1/2 translate-y-1/2 ">
                {"FYDE".split('').map((item, index) =>(
                    <motion.span 
                    initial={{y : "100%"}} 
                    animate={cards[0]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    className=' inline-block ' >{item}</motion.span>))}
                </div>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""/>
                    </div>
                    <div className='links flex gap-3'>
                    {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDE DESIGN"].map((item, index) => {
                        return <button className='border-zinc-100 mt-4 font-light text-xx border-2 py-1 rounded-full hover:bg-zinc-700 px-3'>{item}</button>
                    })}
                     </div>

                </motion.div>
                <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}  className='cardcontainer relative w-[700] h-[650]'>
                <div className="lg:hidden absolute flex overflow-hidden text-[#CDEA68] text-8xl font-['Neue_Montreal'] font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2s">
                {"VISE".split('').map((item, index) =>(
                    <motion.span 
                    initial={{y : "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    className=' inline-block' >{item}</motion.span>))}
                </div>
                    <div className='card w-full h-full  rounded-2xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt=""/>
                    </div>
                    <div className='links flex gap-3'>
                    {["AGENCY", "COMPANY PRESENTATION"].map((item, index) => {
                        return <button className='border-zinc-100 mt-4 font-light text-xx border-2 py-1 rounded-full hover:bg-zinc-700 px-3'>{item}</button>
                    })}
                     </div>
                </motion.div>
            </div>
        </div>

        <div className='px-20 mm:px-4 sm:px-4 md:px-4'>
        <div className='flex items-center mt-28 mm:mt-12 sm:mt-12 md:mt-12'>
         <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
         <span className="ml-2 font-['Neue_Montreal']">TRAWA</span>
         <div className='w-3 h-3 rounded-full ml-[640px] bg-zinc-100'></div>
         <span className="ml-2 font-['Neue_Montreal']">PREMIUM BLEND</span>
          </div>
            <div className='card w-full flex gap-10 mt-6 mm:flex-col md:flex-col sm:flex-col'>
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer relative w-[700] h-[650]'>
                <div className="lg:hidden absolute flex overflow-hidden z-[9] text-[#CDEA68] text-8xl font-['Neue_Montreal'] font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2s">
                {"TRAWA".split('').map((item, index) =>(
                <motion.span 
                initial={{y : "100%"}} 
                animate={cards[0]} 
                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                className=' inline-block' >{item}</motion.span>))}
                </div>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt=""/>
                    </div>
                    <div className='links flex gap-3'>
                    {["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"].map((item, index) => {
                        return <button className='border-zinc-100 mt-4 font-light text-xx border-2 py-1 rounded-full hover:bg-zinc-700 px-3'>{item}</button>
                    })}
                     </div>

                </motion.div>
                <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative w-[700] h-[650]'>
                <div className="lg:hidden flex overflow-hidden absolute text-[#CDEA68] text-8xl font-['Neue_Montreal'] font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2s">
                {"PREMIUM BLEND".split('').map((item, index) =>(
                    <motion.span 
                    initial={{y : "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    className=' inline-block' >{item}</motion.span>))}
                </div>
                    <div className='card w-full h-full rounded-2xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt=""/>
                    </div>
                    <div className='links flex gap-3'>
                    {["BRANDED TEMPLATE"].map((item, index) => {
                        return <button className='border-zinc-100 mt-4 font-light text-xx border-2 py-1 rounded-full hover:bg-zinc-700 px-3'>{item}</button>
                    })}
                     </div>
                </motion.div>
            </div>
        </div>
        <div className='ml-[600px] lg:ml-[80px] '>
        <button className=' mm:mt-10 sm:mt-16 md:mt-10 lg:mt-[120px] mb-20 flex px-10 items-center py-4 ml-10 mt-40 border-2 border-zinc-100  rounded-full gap-4 bg-zinc-950'>VIEW ALL CASE STUDIES
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>

    </div>
  )
}

export default Featured
