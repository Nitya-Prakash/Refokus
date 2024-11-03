import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
    return (
        <div className='min-w-40 px-6 py-1.5 bg-zinc-100 text-black rounded-full cursor-pointer flex items-center justify-between'>
            <span className='text-sm font-medium'>Get Started</span>
            <IoIosReturnRight />
        </div>
    )
}

export default Button