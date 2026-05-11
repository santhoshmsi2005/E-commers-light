import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductsDetail = () => {

    const data = useParams()

    const [productDetailData, setProductDetailData] = useState(null)
    const [selectedView, setSelectedView] = useState('full')

    const fetchProductDetail = async () => {
        const productDetailres = await fetch(`https://fakestoreapi.com/products/${data.id}`)
        const productDetailData = await productDetailres.json()
        setProductDetailData(productDetailData)
    }

    useEffect(() => {
        fetchProductDetail()
    }, [data.id])

    if (!productDetailData) {
        return (
            <div className='max-w-[100%] py-5 bg-slate-50 h-screen flex items-center justify-center'>
                <h1 className='font-bold text-2xl'>Loading...</h1>
            </div>
        )
    }

    // Since the API only returns 1 image, we simulate different angles/close-ups using CSS transforms
    const imageViews = [
        { id: 'full', imgClass: 'object-contain scale-100', thumbClass: 'object-contain p-2' },
        { id: 'top', imgClass: 'object-contain scale-[1.7] origin-top', thumbClass: 'object-cover object-top' },
        { id: 'center', imgClass: 'object-contain scale-[2] origin-center', thumbClass: 'object-cover object-center' },
        { id: 'bottom', imgClass: 'object-contain scale-[1.7] origin-bottom', thumbClass: 'object-cover object-bottom' },
    ];

    const currentView = imageViews.find(v => v.id === selectedView);

    return (
        <div id='product-detail' className='max-w-[100%] py-5 bg-slate-50 min-h-screen'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='w-[90%] md:w-[90%] lg:w-[90%] mx-auto p-5'>
                <h1 className='font-bold text-3xl'>Product Details</h1>
            </motion.div>
            <div className='w-[90%] md:w-[90%] lg:w-[80%] mx-auto mt-5'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.50, delay: 0.2 }}
                    className='flex flex-col lg:flex-row items-start justify-between gap-10 border w-full rounded-lg p-5 md:p-10 transition-all duration-300 hover:shadow-2xl bg-white'>
                    
                    <div className='flex flex-col gap-4 w-full lg:w-1/2'>
                        <div className='flex items-center justify-center w-full h-[400px] md:h-[500px] p-7 rounded-lg bg-gray-100 overflow-hidden relative border border-gray-200'>
                            <img 
                                src={productDetailData.image} 
                                alt="product-Img" 
                                className={`w-full h-full transition-transform duration-500 ease-in-out ${currentView.imgClass}`} 
                            />
                        </div>
                        {/* Thumbnails Gallery */}
                        <div className='flex items-center justify-center gap-4 w-full'>
                            {imageViews.map((view) => (
                                <div 
                                    key={view.id} 
                                    onMouseEnter={() => setSelectedView(view.id)}
                                    onClick={() => setSelectedView(view.id)}
                                    className={`w-20 h-20 bg-gray-100 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:shadow-md ${selectedView === view.id ? 'border-orange-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <img 
                                        src={productDetailData.image} 
                                        alt={`view-${view.id}`} 
                                        className={`w-full h-full ${view.thumbClass}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-5 items-start justify-between w-full lg:w-1/2 py-4'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-bold text-2xl md:text-3xl'>{productDetailData.title}</h1>
                            <h2 className='font-bold text-2xl text-orange-600'>${productDetailData.price}</h2>
                            <p className='text-gray-700 text-lg leading-relaxed border-t border-gray-200 pt-4'>{productDetailData.description}</p>
                            <div className='flex flex-col gap-1 mt-2'>
                                <p className='text-lg'>⭐⭐⭐⭐⭐ <span className='font-semibold'>{productDetailData.rating?.rate}</span></p>
                                <p className='text-blue-600 font-medium text-sm hover:underline cursor-pointer'>{productDetailData.rating?.count} ratings</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-4 w-full mt-6'>
                            <Link className='w-full sm:w-1/2'>
                                <button className='w-full whitespace-nowrap bg-black px-5 py-4 rounded-full text-white hover:bg-gray-800 transition-colors font-semibold shadow-lg hover:shadow-xl'>Add To Cart</button>
                            </Link>
                            <Link className='w-full sm:w-1/2'>
                                <button className='w-full whitespace-nowrap bg-orange-500 px-5 py-4 rounded-full text-white hover:bg-orange-600 transition-colors font-semibold shadow-lg hover:shadow-xl'>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    )
}

export default ProductsDetail