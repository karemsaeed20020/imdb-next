'use client';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const NavbarItem = ({title, params}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
      <Link href={`/?genre=${params}`} className={`hover:text-amber-600 font-semibold ${genre === params ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}>

        {title}
      </Link>
    </div>
  )
}

export default NavbarItem
