import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='max-w-screen-lg mx-auto py-5 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className="nleft flex items-center">
                <a href="https://refokus-puce.vercel.app/" className='z-10 relative'>
                    <img src="https://web.archive.org/web/20240216094729im_/https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                </a>
                <div className='links flex items-center gap-10 ml-20'>
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
                        elem.length === 0 ? <span className='w-0.5 h-7 bg-zinc-700' key={index}></span> : <a className='flex items-center gap-1 cursor-pointer z-10 relative' key={index} href='#'>
                            {index === 1 && <span style={{ boxShadow: "0 0 0.35em #00FF19" }} className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full'></span>}
                            {elem}
                        </a>)
                    }
                </div>
            </div>
            <Button />

        </div>
    )
}

export default Navbar