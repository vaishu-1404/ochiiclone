import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01" className='w-full h-fit rounded-3xl text-black bg-lime-300 mm:h-[175vh] sm:h-fit md:h-fit xl:h-fit'> 
      <div className="text-[50px] text-zinc-900 leading-none mr-48 tracking-normal ml-12 pt-20 font-['Neue_Montreal'] mm:text-[30px] mm:mr-2 mm:ml-4 sm:text-[30px] sm:mr-2 sm:ml-4 md:text-[30px] md:mr-2 md:ml-4 lg:text-[30px] lg:mr-2 lg:ml-4 xl:text-[30px] xl:mr-2 xl:ml-4">Ochi is a strategic partner for fast-grow­ing tech businesses that need to <u>raise funds, sell prod­ucts, ex­plain com­plex ideas</u>, and <u>hire great peo­ple.</u></div>
      <div className='text border-b-2 border-t-2 border-lime-500 pb-20 mt-16 overflow-hidden flex gap-10 '>
        <div className=' text-[20px] text flex justify-between pt-4 mm:flex-col mm:justify-start sm:flex-col sm:justify-start md:flex-col md:justify-start'>
       <div className="ml-10 font-['Neue_Montreal'] mm:ml-24 sm:ml-24 md:ml-24">What you can expect:</div>
       <div className=" ml-[470px] lg:ml-10 xl:ml-24 w-72 font-['Neue_Montreal'] mm:ml-10 mm:mt-4 sm:ml-10 sm:mt-4 md:ml-10 md:mt-4  ">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, 
        delivered for one or a hundred people.<br></br> <br></br>We believe the mix of strategy and design (with a bit of coffee) is what makes your message
         clear, convincing, and captivating.</div>
         <div className="ml-40 mt-[80px] font-['Neue_Montreal'] mm:ml-24 sm:ml-24 md:ml-24  mm:mt-4 sm:mt-4  md:mt-4 ">S:<br></br><br></br>Instagram<br></br>Behance<br></br>Facebook<br></br>Linkedin</div>
       </div>
       </div>
       <div className='pt-4 flex mm:flex-col sm:flex-col md:flex-col' >
        <div>
        <h1 className='text-5xl ml-10'>Our approach:</h1>
        <button className='text-white flex px-10 items-center py-3 ml-10 mt-6 rounded-full gap-4 bg-zinc-950'>READ MORE
          <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>
        <div className='h-[70vh]  ml-[280px] rounded-3xl w-[100vh] mb-10 bg-lime-500 mm:ml-10 mm:mt-4 mm:w-[80vw] mm:h-[50vh] mm:mb-10 sm:ml-10 sm:mt-4 sm:w-[80vw] sm:h-[50vh] sm:mb-10 md:ml-10 md:mt-4 md:w-[80vw] md:h-[80vh] md:mb-10 lg:w-[80vw] lg:h-[50vh]'>
          <img className='w-full h-full rounded-2xl bg-cover' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='' />
        </div>
       </div>
      
    </div>
  )
}
 export default About
