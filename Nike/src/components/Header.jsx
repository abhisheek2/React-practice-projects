import React from 'react'

const Header = () => {
    return (
        <div className='bg-white text-gray-800 flex w-full h-20 m-0 p-0'>
            <div className='w-1/3 justify-center flex items-center'>
                <div className='flex items-center justify-center w-full h-full'>
                    <img src='../src/assets/Logo.png' alt="Logo"  className='w-20'/>
                </div>
            </div>
            <div className='w-1/3 justify-center flex items-center'>
                <div className='flex items-center justify-between w-full h-full'>
                    <div className='flex justify-center items-center w-full h-full '>
                        <a href="#">Menu</a>
                    </div>
                    <div className='flex justify-center items-center w-full h-full '>
                        <a href="#">Location</a>
                    </div>
                    <div className='flex justify-center items-center w-full h-full '>
                        <a href="#">About</a>
                    </div>
                    <div className='flex justify-center items-center w-full h-full '>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
            <div className='w-1/3 justify-center flex items-center'>
                <div className='flex items-center justify-center w-full h-full'>
                    <button className='bg-red-600 text-white py-2 px-4'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header