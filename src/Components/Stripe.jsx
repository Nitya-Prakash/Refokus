import React from 'react'

const Stripe = ({ val }) => {
    return (
        <div className='w-[16.66%] h-14 px-6 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex items-center justify-between'>
            <img className='w-[50%]' src={val.url} alt="" />
            <span className='font-semibold'>{val.number}</span>
        </div>
    )
}

export default Stripe