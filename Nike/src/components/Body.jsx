import React from 'react'

const Body = () => {
    return (
        <div className='bg-white text-gray-800 flex w-full max-h-screen m-0 p-0'>
            <div className='w-1/2  px-11 my-10 flex-col h-full flex justify-center items-center'>
                <div className='flex px-11  my-5  justify-center items-center w-full h-full'>
                    <p className='font-black text-7xl'>YOUR FEET DESERVE THE BEST</p>
                </div>
                <div className='w-full px-11 h-full flex justify-center items-center'>
                    <p className='h-full font-normal'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div className='w-full my-5 px-11 h-full  flex flex-row justify-center items-center'>
                    <div className='flex justify-center items-center w-full h-full'>
                        <button className='bg-red-600 text-white py-2 px-4 font-bold'>Shop Now</button>
                    </div>
                    <div className='flex justify-center items-center w-full h-full'>
                        <button className='bg-white text-gray-600 border border-solid font-bold border-gray-600  py-2 px-4'>Category</button>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center '>
                    <img src="../src/assets/Shoes.png" alt=""  className='w-full hover:animate-[shrinkBounce_1.5s_ease-in-out_infinite]   '/>
                </div>
            </div>
        </div>
    )
}

export default Body