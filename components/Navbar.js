import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className=" py-2 px-1 md:p-2 ">
            <div className="container mx-auto flex justify-between items-center p-0">
            <div className="text-white text-lg font-bold">
                <img className="w-38 h-12 object-cover" src="ChatGPT Image Jul 6, 2025, 02_01_48 AM.png" alt="" />
            </div>
            <ul className="flex space-x-3 md:space-x-4">
                <li><Link href="/" className="text-white  transition-colors font-bold delay-150 hover:bg-yellow-400 p-3 rounded-2xl hover:text-white">Home</Link></li>
                <li><Link href="/contact" className="text-white transition-colors font-bold delay-150 hover:bg-yellow-400 p-3 rounded-2xl hover:text-white">Contact</Link></li>
                <li><Link href="/about" className="text-white  transition-colors font-bold delay-150 hover:bg-yellow-400 p-3 rounded-2xl hover:text-white">About</Link></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
