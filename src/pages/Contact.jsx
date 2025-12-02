import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import { div, span } from 'motion/react-client'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';


const Contact = () => {
  const [loading, setloading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const handleCloseContact = () => {
    navigate("/")
  }

  const onsubmit = async (data) => {
    setloading(true)
    try {
      const res = await fetch("http://localhost:3000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
  
      const response = await res.json()
      if(response.success){
        alert("thank you, your query is registered successfully !");
        reset();
      }
      else{
        alert("There seems to be some issue with submission, pls try again !");
      }
    } 
    catch (error) {
      console.log("error in submission is - ", error);
      alert(error)
    }
    setloading(false)
    
  }

  return (
    <>
      <div className='flex justify-between items-center p-6 border-b border-gray-300'>
        <span
          className='text-4xl max-md:text-2xl text-[#0a0a0ae6]'>Vernit Tyagi
        </span>
        <span className='text-4xl hover:cursor-pointer text-[#6e07f3]' onClick={handleCloseContact}>
          <IoMdClose />
        </span>
      </div>
      <div className='mt-15 flex flex-col gap-10 justify-center items-center'>
        <div className='flex flex-col text-[35px] max-md:text-[24px] font-normal text-center max-md:w-[80vw]'>
          <span>Thanks for your time to reach me out !!!</span>
          <span>How can I help you ?</span>
        </div>
        <form className='flex flex-col justify-center items-center gap-2 ' onSubmit={handleSubmit(onsubmit)}>
          <div className='flex max-md:flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label>Name</label>
              <input className='border border-gray-300 py-4 px-4 w-[18vw] max-md:w-[90vw] rounded-lg focus:outline-none' {...register("name")} />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Email</label>
              <input className='border border-gray-300 py-4 px-4 w-[18vw] max-md:w-[90vw] rounded-lg focus:outline-none'  {...register("email", { required: true })}  />
              {errors.email && <span>This filed is required !!!</span>}
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            <label>Message</label>
            <textarea className='border border-gray-300 py-4 px-4 rounded-lg focus:outline-none w-[37vw] max-md:w-[90vw] h-[20vh]' {...register("message")}></textarea>
          </div>
          <div className='mt-10 mb-10'>
            <button type="submit" value="Submit" disabled={loading} className='text-purple-500 border-2 hover:border-0 border-purple-500 rounded-full py-3 px-6 hover:bg-[#6e07f3] hover:text-white hover: cursor-pointer w-[10vw] max-md:w-[90vw]'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
