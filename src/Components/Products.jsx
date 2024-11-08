import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import arqitelVideo from '../Assets/arqitel-43.webm'
import ttrVideo from '../Assets/ttr-43.webm'
import rainfallVideo from '../Assets/rainfall-43.webm'
import yahooVideo from '../Assets/yahoo-43.webm'
import yirVideo from '../Assets/yir2022-43.webm'

const Products = () => {
    const products = [
        { title: "arqitel", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, mollitia voluptas unde nostrum omnis animi", live: true, case: false },
        { title: "ttr", description: "The old library smelled of worn paper and wood polish, a sanctuary for those seeking knowledge and escape", live: true, case: false },
        { title: "yir 2022", description: "Brightly colored flowers bloom across the meadow, swaying gently as a warm breeze passes through", live: true, case: true },
        { title: "yahoo", description: "Tall mountains stand proudly, their peaks covered in snow, overlooking valleys filled with green forests", live: true, case: true },
        { title: "rainfall", description: "Birds chirped softly in the early morning, welcoming the sunrise as the sky turned shades of pink and orange", live: true, case: true },
    ]

    const [pos, setPos] = useState(0);
    const mover = (val) => {
        setPos(val * 16);
    }

    return (
        <div className='mt-20 relative'>
            {products.map((val, index) => <Product val={val} key={index} mover={mover} count={index} />)}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div initial={{ y: pos, x: "-50%" }} animate={{ y: pos + 'rem' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }} className='window w-[24rem] h-[16rem] absolute left-[45%] overflow-hidden rounded-xl'>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -pos + 'rem' }} className='w-full h-full rounded-xl'>
                        <video autoPlay muted loop src={arqitelVideo} className='w-full h-full object-cover'></video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -pos + 'rem' }} className='w-full h-full bg-green-950 rounded-xl'>
                        <video autoPlay muted loop src={ttrVideo} className='w-full h-full object-cover'></video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -pos + 'rem' }} className='w-full h-full bg-red-950 rounded-xl'>
                        <video autoPlay muted loop src={yirVideo} className='w-full h-full object-cover'></video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -pos + 'rem' }} className='w-full h-full bg-blue-950 rounded-xl'>
                        <video autoPlay muted loop src={yahooVideo} className='w-full h-full object-cover'></video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -pos + 'rem' }} className='w-full h-full bg-yellow-950 rounded-xl'>
                        <video autoPlay muted loop src={rainfallVideo} className='w-full h-full object-cover'></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Products