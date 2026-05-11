import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart } from 'lucide-react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.50, delay: 0.2 }}
            className='max-w-[100%] bg-slate-50 py-3 sticky top-0 z-50 shadow-md'>
            <div className='w-[90%] md:w-[90%] lg:w-[90%] mx-auto grid grid-cols-1'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.50, delay: 0.5 }}
                        className='flex items-center gap-3'>
                        <img className='w-[50px]' src="https://ik.imagekit.io/frr8txkzi/MERN%20Stack/shop-app-logo-png_seeklogo-502747.png" alt="logo" />
                        <h1 className='font-bold text-xl'>E-commer</h1>
                    </motion.div>
                    <motion.ul
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.50, delay: 0.5 }}
                        className='hidden md:flex items-center gap-14'> {/* flex items-center justify-around w-[50%]  */}
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="#Hero">Home</a></li>
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="#product">Product</a></li>
                        <li className='font-semibold hover:text-orange-500 hover:scale-110 hover:font-bold'><a href="">Account</a></li>
                        <li className='font-semibold text-xl bg-black px-5 py-2 rounded-full hover:bg-orange-500 cursor-pointer'>
                            <ShoppingCart color='white' size={24} />
                        </li>
                    </motion.ul>
                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => {
                            setOpen(!open)
                        }}>
                            {
                                open ? <X size={30} /> : <Menu size={30} />
                            }

                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {
                    open && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration:1, ease: "easeInOut"}}
                            
                            className='md:hidden flex flex-col items-center gap-5 py-5 bg-slate-50 '
                        >
                            <li>
                                <a href="#Hero">Home</a>
                            </li>
                            <li>
                                <a href="#product">Product</a>
                            </li>
                            <li>
                                <a href="">Account</a>
                            </li>
                            <li className='bg-black text-white px-5 py-2 rounded-full'>
                                Cart
                            </li>
                        </motion.ul>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Navbar