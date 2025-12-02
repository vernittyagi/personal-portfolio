import React from 'react'
import { Link } from 'react-router-dom';


const CallToAction = () => {

  return (
    <div className='w-[90vw] 2xl:w-[70vw] mt-20 max-md:mt-60 flex max-md:flex-col max-md:gap-10 justify-around items-center bg-[#131c3a] text-white p-15 rounded-2xl text-center'>
      <span className='font-extrabold text-[32px] leading-9 max-md:w-full'>Start a project</span>
      <span className='font-normal text-[18px] leading-7 w-1/4 text-center text-wrap max-md:w-full'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</span>
      <span><Link to="/contact" className='border-2 border-green-300 rounded-full py-3 px-6 hover:bg-green-300 hover:text-black transition-all' >Let's do this</Link></span>
    </div>
  )
}

export default CallToAction
