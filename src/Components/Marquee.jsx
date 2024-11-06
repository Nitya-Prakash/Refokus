import React from 'react'
import { motion } from 'framer-motion'

const Marquee = ({ imagesurls, direction }) => {
    return (
        <div className="flex w-full overflow-hidden">
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 45, repeat: Infinity }} className='flex flex-shrink-0 py-4 pr-20 gap-20'>
                {imagesurls.map((url, index) => <img src={url} key={index} className='w-[8vw] flex-shrink-0' />)}
            </motion.div>
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 45, repeat: Infinity }} className='flex flex-shrink-0 py-4 pr-20 gap-20'>
                {imagesurls.map((url, index) => <img src={url} key={index} className='w-[8vw] flex-shrink-0' />)}
            </motion.div>
        </div>
    )
}

export default Marquee