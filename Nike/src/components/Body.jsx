import React from 'react'

const Body = () => {
    return (
        <div className='bg-white text-gray-800 flex flex-col md:flex-row w-full max-h-screen m-0 p-0'>
            {/* Left Section (Text) */}
            <div className='w-full md:w-1/2 px-6 md:px-11 py-8 flex-col h-full flex justify-center items-center'>
                <div className='flex px-4 md:px-11 my-5 justify-center items-center w-full'>
                    <p className='font-black text-4xl md:text-7xl text-center md:text-left'>
                        YOUR FEET DESERVE THE BEST
                    </p>
                </div>

                <div className='w-full px-4 md:px-11 flex justify-center items-center'>
                    <p className='text-center md:text-left font-normal'>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                </div>

                {/* Buttons */}
                <div className='w-full my-5 px-4 md:px-11 flex flex-col md:flex-row justify-center items-center gap-4'>
                    <button className='bg-red-600 text-white py-2 px-4 font-bold w-full md:w-auto'>
                        Shop Now
                    </button>
                    <button className='bg-white text-gray-600 border border-solid font-bold border-gray-600 py-2 px-4 w-full md:w-auto'>
                        Category
                    </button>
                </div>

                {/* Available On */}
                <div className='w-full my-5 px-4 md:px-11 flex justify-center md:justify-start flex-col items-center md:items-start'>
                    <p className='font-normal text-gray-600'>Also Available On</p>
                    <div className='my-4 flex flex-row items-center gap-6'>
                        <img src="/assets/Flipkart.png" alt="Flipkart" className='w-7' />
                        <img src="/assets/Amazon.png" alt="Amazon" className='w-7' />
                    </div>
                </div>
            </div>

            {/* Right Section (Image) */}
            <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center'>
                    <img
                        src="/assets/Shoes.png"
                        alt="Shoes"
                        className='w-3/4 md:w-full animate-[shrinkBounce_1.5s_ease-in-out_infinite]'
                    />
                </div>
            </div>
        </div>

    )
}

export default Body