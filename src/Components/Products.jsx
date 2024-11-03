import React from 'react'
import Product from './Product'

const Products = () => {
    const products = [
        { title: "arqitel", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, mollitia voluptas unde nostrum omnis animi", live: true, case: false },
        { title: "ttr", description: "The old library smelled of worn paper and wood polish, a sanctuary for those seeking knowledge and escape", live: true, case: false },
        { title: "yir 2022", description: "Brightly colored flowers bloom across the meadow, swaying gently as a warm breeze passes through", live: true, case: true },
        { title: "yahoo", description: "Tall mountains stand proudly, their peaks covered in snow, overlooking valleys filled with green forests", live: true, case: true },
        { title: "rainfall", description: "Birds chirped softly in the early morning, welcoming the sunrise as the sky turned shades of pink and orange", live: true, case: true },
    ]

    return (
        <div className='mt-20'>
            {products.map((val, index) => <Product val={val} key={index} />)}
        </div>
    )
}

export default Products