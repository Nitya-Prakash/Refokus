import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion'

const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "25px" }} className={`min-h-[67vh] bg-zinc-700 p-5 rounded-lg cursor-pointer ${width} flex flex-col justify-between`}>
      <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-5'>Whatever Heading</h1>
      </div>
      <div className='down w-full'>
        {start && <> <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
          <button className='px-6 py-1.5 mt-5 rounded-full border-[1px] border-zinc-50'>Contact Us</button> </>}
        {para && <p className='text-sm text-zinc-400 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>}
      </div>
    </motion.div>
  )
}

export default Card