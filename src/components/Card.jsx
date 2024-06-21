import React from 'react'

function Card() {
  return (
    <div className='w-full pt-40 h-fit mb-10 px-10 flex gap-5 items-center bg-zinc-950 md:flex-col lg:flex-col xl:px-10  '>
        <div className='cardcontainer ml-16 w-[700px] h-[400px] lg:w-[500px] lg:m-10 xl:m-0'>
            <div className='w-full h-full rounded-xl flex items-center justify-center bg-emerald-800'>
                <img className='w-40' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt=''/>
                <button className=" absolute mr-[550px] mt-[300px] rounded-full px-2 border-lime-200 border-2 p-1 text-lime-200 y-2 font-['Neue_Montreal'] lg:mr-1 lg:mt-[200px] xl:mr-1 ">&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-[660px] h-[400px] md:flex-col md:h-[800px] md:w-[500px] md:m-10'>
            <div className='w-full h-full flex items-center justify-center rounded-xl bg-[#202222] '>
                <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt=''/>
                <button className=" md:m-10 md:mt-[250px] absolute mr-[70px] mt-[300px] rounded-full px-2 border-zinc-200 border-2 p-1 text-zinc-200 y-2 font-['Neue_Montreal'] xl:mr-1 ">RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='w-full h-full items-center flex justify-center rounded-xl bg-[#202222]'>
                <img className='' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='' />
                <button className=" absolute mr-[2  0px] mt-[300px] rounded-full px-2 border-zinc-200 border-2 p-1 text-zinc-200 y-2 font-['Neue_Montreal'] xl:text-[13px] ">BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
      
    </div>
  )
}

export default Card
