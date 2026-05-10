import React from 'react'
import { motion } from 'motion/react'

const Navbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.50, delay: 0.2 }}
            className='max-w-[100%] bg-slate-50 py-3 sticky top-0 z-50 shadow-md'>
            <div className='w-[90%] md:w-[90%] lg:w-[90%] mx-auto grid grid-cols-1'>
                <div className='flex items-center justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.50, delay: 0.5 }}
                        className='flex items-center gap-3'>
                        <img className='w-[50px]' src="https://ik.imagekit.io/frr8txkzi/MERN%20Stack/shop-app-logo-png_seeklogo-502747.png" alt="logo" />
                        <h1 className='font-bold text-xl'>E-commers</h1>
                    </motion.div>
                    <motion.ul
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.50, delay: 0.5 }}
                        className='flex items-center justify-around w-[50%] '>
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="#Hero">Home</a></li>
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="#product">Product</a></li>
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="">Account</a></li>
                        <li className='font-semibold text-xl bg-black px-5 py-2 rounded-full hover:bg-orange-500 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                        </li>
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar