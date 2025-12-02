import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center mt-4 p-6'>
                <span
                    className='text-4xl max-md:text-2xl text-[#0a0a0ae6]'>Vernit Tyagi
                </span>
                <span><Link to="/contact" className='text-purple-500 border-2 hover:border-0 border-purple-500 rounded-full py-3 px-6 hover:bg-[#6e07f3] hover:text-white' >Say Hello</Link></span>
            </div>
        </>
    )
}

export default Navbar