import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Work = () => {
    const [images, setImages] = useState(
        [
            { url: "https://plus.unsplash.com/premium_photo-1720192861537-e9a54875365a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "50%", left: "50%", isActive: false },
            { url: "https://plus.unsplash.com/premium_photo-1720503225766-21dff692f754?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", top: "56%", left: "44%", isActive: false },
            { url: "https://plus.unsplash.com/premium_photo-1722155330821-2557249cdb52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", top: "45%", left: "56%", isActive: false },
            { url: "https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", top: "60%", left: "53%", isActive: false },
            { url: "https://imgs.search.brave.com/gFLyCTQlVmlvRXeiykI-pxvwWaxQbw9Ts1wh572UD_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnR1Ymlrc3R1ZGlv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNS9kZXNp/Z25lcl9wb3J0Zm9s/aW9fd2Vic2l0ZV90/dWJpay0xMDI0eDc2/OC5wbmc", top: "43%", left: "40%", isActive: false },
            { url: "https://imgs.search.brave.com/l__wGnJvFRMBV8y0mmgl_9C-5T5JTMi6kyWybUUm8f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lcnAtZW50ZXJw/cmlzZS1yZXNvdXJj/ZS1wbGFubmluZy1j/b25jZXB0LWNvbXBh/bnktcHJvZHVjdGl2/aXR5LWltcHJvdmVt/ZW50LWlsbHVzdHJh/dGlvbi13ZWJzaXRl/Xzk0ODI2NS0yODU1/NDguanBnP3NlbXQ9/YWlzX2h5YnJpZA", top: "65%", left: "55%", isActive: false }
        ]
    )

    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages(prev => (
                prev.map((item, index) => (
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                ))
            ))
        }


        let scrollVal = Math.floor(data * 100);
        switch (scrollVal) {
            case 0:
                imagesShow([])
                break;
            case 2:
                imagesShow([0])
                break;
            case 3:
                imagesShow([0, 1])
                break;
            case 4:
                imagesShow([0, 1, 2])
                break;
            case 5:
                imagesShow([0, 1, 2, 3])
                break;
            case 7:
                imagesShow([0, 1, 2, 3, 4])
                break;
            case 8:
                imagesShow([0, 1, 2, 3, 4, 5])
                break;
        }
    })

    return (
        <div className='w-full'>
            <div className='relative max-w-screen-lg mx-auto text-center'>
                <h1 className="text-[33vw] leading-none font-medium select-none tracking-tight">work</h1>
                <div className='absolute h-full w-full top-0'>
                    {images.map((elem, index) => (elem.isActive && (<img className='w-64 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' key={index} src={elem.url} style={{ top: elem.top, left: elem.left }} alt="" />)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work