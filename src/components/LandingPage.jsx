import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-[100vh] bg-zinc-900 border-t-2 '>
        <div className='textstrructure mt-[160px] px-2 mm:px-10 sm:px-10 md:mt-[150px] md:px-10  '>
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index)=>{
                    return <div className='masker'>
                        <div className='w-fit flex mm:w-[100vw] sm:w-fit md:w-fit'>
                            {index === 1 && (
                                <motion.div initial={{width: 0}} animate={{width: "100px"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[120px] mr-3 mt-4 rounded-md h-[80px] bg-green-500 mm:w-[10px] mm:rounded-md mm:h-[45px] sm:w-5 sm:h-[55px] md:w-5 md:h-[55px] lg:h-[55px] '>
                                    <img className='h-full w-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt='' />
                                </motion.div>
                            )}
                    <h1 className="uppercase text-9xl leading-[6.6vw] font-medium font-['Test_Founders_Grotesk_X'] mm:text-xl mm:leading-[60px] sm:text-[80px] sm:leading-[70px] md:text-[80px] md:leading-[70px] lg:text-[90px] lg:leading-[70px] ">{item}</h1>
                </div>
                </div>
                })}  
                <div className='w-fit p-3 h-fit lg:hidden font-["Castellar"] gap-3 text-4xl ml-[1000px] whitespace-nowrap font-bold flex text-black rounded-2xl bg-amber-400 border-4 border-zinc-100'>Scroll Down
                    <div className=' border-4 p-1 rounded-full border-amber-200'>
                        <FaArrowDown size={25}/>
                    </div>
                </div>
        </div>
        <div className='border-t-2 border-zinc-800 mt-[80px] flex justify-between items-center  md:mt-[50px] md:flex-col md:justify-start md:items-start'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
                return <div className={`pt-4 font-light leading-none ml-[70px] inline-flex font-['Neue_Montreal'] mm:ml-6 mm:mt-6 sm:ml-6 sm:mt-6 md:ml-6 md:mt-6`}>{item}</div>
            })}
            <div className='start pt-4 pr-7 mm:mt-6 mm:ml-6 sm:mt-6 sm:ml-6 md:mt-6 md:ml-6 '>
                <button className='px-4 py-1 border-zinc-500 font-light text-xx border-2 rounded-full hover:bg-zinc-500 capitalize'>START THE PROJECT</button>
                <button className='px-2 ml-2 py-2  border-zinc-500 font-light border-2 hover:bg-zinc-500 rounded-full capitalize '><MdOutlineArrowOutward size={15}  /></button>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
