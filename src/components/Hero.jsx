import React from 'react';
import myImage from '../assets/profile_pic.png';
import office from '../assets/office.png'
import { motion } from "motion/react"


const Hero = () => {
    console.log("myImage is - ", myImage);

    return (
        <>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.1 }}
                className='flex flex-col justify-center items-center mt-20 text-center p-2'>
                <span className='font-extrabold text-[48px] max-md:text-[35px] text-[#141c3a]'>Designer, Frontend Developer & Mentor</span>
                <span className='font-normal text-[24px] max-md:text-[20px] text-[#0a0a0ae6]'>I design and code beautifully simple things, and I love what I do.</span>
                <img src={myImage} alt="profile-pic" className='mt-15 rounded-full bg-[#6e07f3] max-md:w-45' />
            </motion.div>
            <div className='flex flex-col justify-center items-center'>
                <span>
                    <img src={office} alt="workspace" className='w-screen' />
                </span>
                <div className=' bg-[#6e07f3] text-center flex flex-col gap-4 justify-center items-center text-white pt-30 max-md:pt-15 pb-80 max-md:pb-60'>
                    <span className='font-extrabold text-[32px] max-md:text-[25px] leading-9'>Hi, I’m Vernit Nice to meet you.</span>
                    <h2 className='text-center font-light text-[20px] max-md:text-[18px] text-wrap  w-[50%] max-md:w-[80%] leading-[30px] mb-10'>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</h2>
                </div>
            </div>
        </>
    )
}

export default Hero
