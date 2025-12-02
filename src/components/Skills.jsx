import React from 'react'
import { GoTerminal } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { IoMdInfinite } from "react-icons/io";


const Skills = () => {
    return (
        <>
            <div className='-mt-30 w-[90vw] 2xl:w-[70vw] bg-white flex max-md:flex-col justify-center items-stretch border border-gray-300 rounded-2xl shadow-xl shadow-blue-100 text-center'>
                <div className="frontend w-1/3 max-md:w-full flex flex-col gap-10 items-center max-md:justify-center p-20 h-full">
                    <span className='text-4xl bg-[#5be9b9] p-4 rounded-full'><GoTerminal /></span>
                    <h1 className='font-extrabold text-2xl leading-[27px]'>Frontend</h1>
                    <span className='font-light text-[18px] leading-[27px]'>HTML</span>
                    <span className='font-light text-[18px] leading-[27px]'>CSS</span>
                    <span className='font-light text-[18px] leading-[27px]'>JavaScript</span>
                    <h2 className='font-extrabold text-2xl leading-[27px]'>Frameworks</h2>
                    <span className='font-light text-[18px] leading-[27px]'>Tailwind CSS</span>
                    <span className='font-light text-[18px] leading-[27px]'>React</span>
                </div>
                <div className='w-px max-md:w-full h-full max-md:h-px bg-gray-300'></div>
                <div className="backend w-1/3 max-md:w-full flex flex-col gap-10 items-center max-md:justify-center p-20 h-full">
                    <span className='text-4xl bg-[#5be9b9] p-4 rounded-full'><FiDatabase /></span>
                    <h1 className='font-extrabold text-2xl leading-[27px]'>Backend</h1>
                    <span className='font-light text-[18px] leading-[27px]'>JavaScript</span>
                    <span className='font-light text-[18px] leading-[27px]'>Mongo DB</span>
                    <h2 className='font-extrabold text-2xl leading-[27px]'>Frameworks</h2>
                    <span className='font-light text-[18px] leading-[27px]'>Express</span>
                    <span className='font-light text-[18px] leading-[27px]'>NodeJs</span>
                </div>
                <div className='w-px max-md:w-full h-full max-md:h-px bg-gray-300'></div>
                <div className="devops w-1/3 max-md:w-full flex flex-col gap-10 items-center max-md:justify-center p-20 h-full">
                    <span className='text-4xl bg-[#5be9b9] p-4 rounded-full'><IoMdInfinite /></span>
                    <h1 className='font-extrabold text-2xl leading-[27px]'>DevOps</h1>
                    <span className='font-light text-[18px] leading-[27px]'>Jenkins</span>
                    <span className='font-light text-[18px] leading-[27px]'>CI/CD</span>
                    <span className='font-light text-[18px] leading-[27px]'>Docker</span>
                    <span className='font-light text-[18px] leading-[27px]'>Kubernetes</span>
                    <h2 className='font-extrabold text-2xl leading-[27px]'>Verison Control System</h2>
                    <span className='font-light text-[18px] leading-[27px]'>Git</span>
                    <span className='font-light text-[18px] leading-[27px]'>GitHub</span>
                </div>
            </div>
        </>
    )
}

export default Skills
