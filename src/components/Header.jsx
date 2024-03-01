import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';



const Header = () => {
  return (
    <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
        <div className='flex gap-4'>
        <MenuItem title="home" address='/' Icon={AiFillHome} />
        <MenuItem title="about" address='/about' Icon={BsFillInfoCircleFill} />
        </div>
        <Link href={'/'} className='flex items-center gap-1'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
    </div>
  )
}

export default Header
