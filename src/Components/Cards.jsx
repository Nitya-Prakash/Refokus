import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-lg mx-auto py-16 flex gap-2'>
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} hover="true" Headingwidth={"w-[30%]"} />
      </div>
    </div>
  )
}

export default Cards