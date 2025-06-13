import React, { useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='bg-white text-gray-800 flex flex-col md:flex-row w-full h-auto md:h-20 m-0 p-0'>
            {/* Logo */}
            <div className='w-full md:w-1/3 justify-between md:justify-center flex items-center px-4 py-3'>
                <img src='./assets/Logo.png' alt='Logo' className='w-16 md:w-20' />
                <button
                    className='md:hidden text-gray-800'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Navigation Links */}
            <div
                className={`w-full md:w-1/3 flex-col md:flex-row md:flex items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden md:flex'
                    }`}
            >
                <a href="#" className='py-2 md:py-0 px-4 hover:text-red-600'>Menu</a>
                <a href="#" className='py-2 md:py-0 px-4 hover:text-red-600'>Location</a>
                <a href="#" className='py-2 md:py-0 px-4 hover:text-red-600'>About</a>
                <a href="#" className='py-2 md:py-0 px-4 hover:text-red-600'>Contact</a>
            </div>

            {/* Login Button */}
            <div className={`w-full md:w-1/3 flex justify-center items-center px-4 py-3  ${menuOpen ? 'flex' : 'hidden md:flex'} `}>
                <button className='bg-red-600 text-white py-2 px-4 w-full md:w-auto'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header