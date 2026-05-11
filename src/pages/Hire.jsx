import React from 'react'

const Hire = () => {
    return (
        <div className='max-w-[100%] max-h-screen bg-gray-100'>
            <div className='w-[90%] md:w-[80%] lg:w-[75%] mx-auto flex flex-col gap-5'>
                <div className='flex flex-col justify-center py-24 gap-5'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="name" className='font-semibold'>Name:</label>
                        <input className='border py-2 pl-2 rounded-lg outline-blue-500' type="text" name='name' placeholder='Enter your name...' required />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor="email">Email:</label>
                        <input className='border py-2 pl-2 rounded-lg outline-blue-500' type="email" name='email' placeholder='Enter your Email...' required />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='font-semibold' htmlFor="message">Message:</label>
                        <textarea className='h-40 rounded-lg outline-blue-500 py-2 px-2' name="message" id="message" placeholder='Enter your message...' required >
                        </textarea>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='rounded-lg py-3 px-5 text-white bg-green-600 font-bold cursor-pointer hover:bg-green-700'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hire;