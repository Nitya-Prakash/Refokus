import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-5 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[9rem] font-medium tracking-tight leading-none'>refokus.</h1>
                <div className='p-2 mt-5 flex gap-10'>
                    {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((link, index) =>{ return <a className='text-xs text-zinc-400' href='#' key={index}> {link} </a> })}
                </div>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='text-sm text-zinc-500 mb-7 capitalize'>socials</h4>
                    {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => <a href='#' className='block mt-2 text-zinc-500 text-sm capitalize' key={index}>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='text-sm text-zinc-500 mb-7 capitalize'>sitemap</h4>
                    {["home", "work", "careers", "contact"].map((item, index) => <a href='#' className='block mt-2 text-zinc-300 text-sm capitalize' key={index}>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-sm text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img className='w-44 mt-10' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer