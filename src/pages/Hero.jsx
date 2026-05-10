import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <div id='Hero' className='max-w-[100%] bg-white pt-3 pb-5'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.50, delay: 0.60 }}
                className='w-[90%] md:w-[90%] lg:w-[90%] grid grid-cols-1 md:grid-cols-2 mx-auto bg-orange-500 my-2 rounded-lg'>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.50, delay: 1 }}
                    className='flex flex-col gap-3 text-center justify-center pl-3 text-white '>
                    <h1 className='font-bold text-3xl'>
                        Grab Upto 50% Off On Your First Order!
                    </h1>
                    <h2 className='font-bold text-2xl'>
                        Select the Product you want.
                    </h2>
                    <div className='mt-3 flex items-center justify-center'>
                        <button className='bg-black font-semibold shadow-md rounded-full px-5 py-2 text-white hover:bg-highlight hover:text-black outline-none'>Buy Now</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.50, delay: 1 }}
                    className='flex items-center justify-center'>
                    <img className='w-[300px]' src="https://ik.imagekit.io/frr8txkzi/MERN%20Stack/download.png" alt="Headphone" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero