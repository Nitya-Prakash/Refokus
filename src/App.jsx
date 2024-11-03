import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'

const App = () => {
    return (
        <div className='w-full h-screen bg-[#0F1215] text-white font-["Satoshi_Variable"]'>
            <Navbar />
            <Work />
        </div>
    )
}

export default App