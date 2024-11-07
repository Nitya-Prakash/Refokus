import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
    return (
        <div className='w-36 h-8 px-4 py-1.5 bg-zinc-100 text-black rounded-full cursor-pointer flex flex-col items-center justify-between select-none pointer-events-auto relative z-10 overflow-hidden group'>
            <span className='text-sm font-medium flex items-center justify-between w-full transition-transform duration-300 group-hover:-translate-y-[125%]'>
                {title} <IoIosReturnRight />
            </span>
            <span className='text-sm font-medium flex items-center justify-between w-full absolute top-[100%] left-0 px-4 transition-transform duration-300 group-hover:-translate-y-[125%]'>
                {title} <IoIosReturnRight />
            </span>
        </div>
    )
}

export default Button