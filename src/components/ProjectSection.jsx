import React, { useState } from 'react'
import toDo from '../assets/toDO.png'
import talkmate from "../assets/talkmate.png"

const ProjectSection = () => {
    const [hovredId, sethovredId] = useState(null)
    const projects = [
        { project_id: 1, project_name: "iNoteX - Smart way to manage your tasks daily", image: toDo, project_link: "https://i-note-x-to-do-app.vercel.app" },
        { project_id: 2, project_name: "TalkMate", image: talkmate, project_link: "https://frontend-chat-app.vercel.app/" }
    ]


    return (
        <div className='h-[50vh]  w-screen  mt-20 max-md:mt-60 flex flex-col gap-2 justify-center items-center text-center'>
            <div className='flex flex-col p-2'>
                <span className='font-extrabold text-[32px] max-md:text-[25px] leading-9'>My Recent Work</span>
                <span className='font-normal text-[20px] max-md:text-[18px] leading-[30px]'>Here are a few past design projects I've worked on. Want to see more? Email me.</span>
            </div>
            <div className='flex max-md:flex-col  gap-10 max-md:gap-5 justify-center items-center mt-20'>
                {projects.map(project => {
                    return (
                        <div
                            key={project.project_id}
                            onMouseEnter={() => sethovredId(project.project_id)}
                            onMouseLeave={() => sethovredId(null)}
                            className='bg-gray-800  max-md:w-[90vw] rounded-2xl overflow-hidden relative border border-gray-300 hover:shadow-lg shadow-gray-500 hover:scale-101 transition-all text-center'>
                            <div className='flex flex-col justify-center items-center'>
                                {hovredId === project.project_id && <span className='absolute top-1/3 z-10 text-2xl text-white font-extrabold p-2'>{project.project_name}</span>}
                                {hovredId === project.project_id && <span><a href={project.project_link} target='_blank' className='text-white absolute bottom-1/5 z-10  right-1/3 max-md:right-25 border-2 hover:border-0 border-purple-500 rounded-full py-3 px-6 hover:bg-[#6e07f3]'>See live demo</a></span>}
                            </div>
                            <img src={project.image} alt={project.project_name} className={`${hovredId === project.project_id ? "opacity-0 scale-130 transition duration-1000" : "opacity-50"} w-md h-72 object-cover`} />
                        </div>)
                })}
            </div>
        </div>
    )
}

export default ProjectSection
