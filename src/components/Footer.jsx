import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";


const Footer = () => {
    return (
        <div
            className=' bg-[#6e07f3] flex flex-col gap-4 justify-center items-center text-white py-50 -mt-20'>
            <div>
                <a href="#">
                    <span
                        className='font-extrabold text-4xl text-white'>Vernit Tyagi
                    </span>
                </a>
            </div>
            <div className='flex gap-10 mt-10'>
                <a href="https://www.linkedin.com/in/tyagivernit/" target='_blank' className='text-2xl hover:text-[#6e07f3] rounded-full border-2 border-gray-400 p-3 hover:bg-white'><FaLinkedinIn /></a>
                <a href="https://github.com/vernittyagi" target='_blank' className='text-2xl hover:text-[#6e07f3] rounded-full border-2 border-gray-400 p-3 hover:bg-white'><FaGithub /></a>
                <a href="mailto:vernittyagi@gmail.com" target='_blank' className='text-2xl hover:text-[#6e07f3] rounded-full border-2 border-gray-400 p-3 hover:bg-white'><MdOutlineMail /></a>
            </div>
            <div className='mt-20 flex flex-col justify-center items-center'>
                <span className='font-light'>Created by Vernit©2025</span>
                <div className='flex justify-center items-center gap-2 mt-10'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='text-[10px]  gap-2 justify-center items-centertext-gray-300'>Made with</span>
                        <span className='text-2xl'><RiTailwindCssLine /></span>
                        <span>Tailwind CSS</span>
                    </div>
                    <div className='h-5 w-px bg-gray-300'></div>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='text-[10px]  gap-2 justify-center items-centertext-gray-300'>Powered by</span>
                        <span className='text-2xl'><TbBrandVite /></span>
                        <span>Vite</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
