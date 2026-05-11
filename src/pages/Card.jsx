import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CardDesign = (props) => {
    return (
        <div className='flex flex-col items-center justify-between flex-1 mt-auto gap-5 border w-full h-full rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'>
            <div className='flex items-center justify-center mx-auto w-full h-[360px] p-7 rounded-lg bg-gray-400 '>
                <img src={props.image} alt="product-Img" className='w-[200px] h-[200px] object-contain' />
            </div>
            <div className='flex flex-col gap-3 items-center justify-between '>
                <div className='flex flex-col items-center justify-center gap-'>
                    <h1 className='font-bold text-lg text-center line-clamp-2 pb-1'>{props.title}</h1>
                    <h2 className='font-semibold'>Price : ${props.price}</h2>
                    {/* <p className=''>{props.description}</p> */}
                    <p>⭐⭐⭐⭐⭐{props.rating}</p>
                    <p>Rating Count: {props.count}</p>
                </div>
                <div className='flex flex-col justify-center md:flex-row items-center gap-4 w-full'>
                    <Link >
                        <button className='w-full whitespace-nowrap bg-black px-5 py-2 rounded-full text-white hover:bg-orange-500'>Add To Cart</button>
                    </Link>
                    <Link to={`/productsDetail/${props.id}`} >
                        <button className='w-full whitespace-nowrap bg-black px-5 py-2 rounded-full text-white hover:bg-orange-500' >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Card = () => {

    const [product, setProduct] = useState([])

    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProduct(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div id='product' className='max-w-[100%] py-5 bg-slate-50'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.90 }}
                className='w-[90%] md:w-[90%] lg:w-[90%] mx-auto p-5'>
                <h1 className='font-bold text-3xl'>Products for you!</h1>
            </motion.div>
            <div className='w-[90%] md:w-[90%] lg:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5'>
                {
                    product.map((item, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.50, delay: 0.2 }}
                                key={index} className='flex'>
                                <CardDesign
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating.rate}
                                    count={item.rating.count}
                                    description={item.description}
                                />
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card