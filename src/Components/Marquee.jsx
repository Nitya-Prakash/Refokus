import React from 'react'

const Marquee = ({imagesurls}) => {
    return (
        <div className='flex w-full py-5 gap-16 whitespace-nowrap overflow-hidden'>
            {imagesurls.map(url => <img src={url} className='w-[8vw] flex-shrink-0' />)}
            {imagesurls.map(url => <img src={url} className='w-[8vw] flex-shrink-0' />)}
        </div>
    )
}

export default Marquee