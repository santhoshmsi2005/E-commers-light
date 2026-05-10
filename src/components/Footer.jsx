import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <div className='max-w-[100%] bg-black text-white'>
            <div className='flex flex-col justify-center items-center p-5 gap-4'>
                <div>
                    <h1 className='font-bold'>Thanks for visiting out website</h1>
                </div>
                <div className='flex gap-8'>
                    <motion.a whileHover={{scale:1.3, }}
                    transition={{duration:0.2}} className='text-3xl text-blue-500 hover:cursor-pointer rounded-full'>
                        <FaFacebook />
                    </motion.a>
                    <motion.a whileHover={{scale:1.3, }}
                    transition={{duration:0.2}} className='text-3xl text-red-500 hover:cursor-pointer rounded-full' href="https://instagram.com/king_of_darkness_santhosh" target='_blank' rel='noopener noreferrer'>
                        <FaInstagram />
                    </motion.a>
                    <motion.a whileHover={{scale:1.3, }}
                    transition={{duration:0.2}} className='text-3xl text-blue-500 hover:cursor-pointer rounded-full ' href="">
                        <FaTwitter />
                    </motion.a>
                </div>
                <div>
                    <p className='font-semibold'>@Copyrights for @santhosh2005
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer