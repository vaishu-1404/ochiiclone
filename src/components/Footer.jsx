import React, { useEffect, useState } from 'react'

function Footer() {

    const [rotate, setRoatate] = useState(0);

    useEffect ( () => {
        window.addEventListener ("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRoatate(angle-180);
        })
    })

  return (
    <div className=" relative w-full h-[150vh] bg-lime-300 flex items-center text-black  justify-center">
        <div className='  font-["Test_Founders_Grotesk_X"]  leading-none tracking-tighter font-extrabold text-center relative'>
        <h1 className=' text-[230px] lg:text-[200px] -mb-12' >READY</h1>
        <h1 className='text-[230px] -mb-12 lg:text-[200px]' >TO START</h1>
        <h1 className='text-[230px] tracking-normal leading-none lg:text-[200px] ' >THE PROJECT?</h1>
        </div>  
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
        <div className='items-center justify-center flex w-[30vh] h-[30vh] bg-zinc-100 rounded-full '>
        <div className='w-[20vh] h-[20vh] items-center justify-center relative  bg-zinc-900 rounded-full'>
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg) `}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
        </div>
        </div>
        </div>
        <div className='items-center justify-center flex w-[30vh] h-[30vh] bg-zinc-100 rounded-full'>
        <div className='items-center justify-center relative  w-[20vh] h-[20vh] bg-zinc-900 rounded-full'>
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
        </div>
        </div>
        </div>
        </div>
        <div className=' absolute'>
        <button className='flex items-center y-3 p-5 font-light mt-[700px] text-white rounded-full gap-10 bg-zinc-950'>START THE PROJECT
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>
        <h1 className=' absolute mt-[830px] mb-8'>OR</h1>
        <div className=' absolute'>
        <button className='flex items-center y-3 mb-10 p-5 font-light mt-[950px] border-2 border-zinc-900 text-zinc-950 rounded-full gap-10'>HELLO@OCHI.DESIGN
          <div className='w-2 h-2 rounded-full bg-black'></div>
        </button>
        </div>

        
        
            
    </div>
  )
}

export default Footer
