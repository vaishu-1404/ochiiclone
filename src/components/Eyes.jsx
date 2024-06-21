import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect (() => {
        window.addEventListener ("mousemove", (e) =>{

            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);

        });
    });

  return (

    <div className='eye w-full h-screen pt-20 overflow-hidden mm:h-screen'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
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
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg) `}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Eyes
