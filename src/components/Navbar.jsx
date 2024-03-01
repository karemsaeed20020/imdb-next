import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    
  return (
    <div className='flex dark:bg-gray-600 gap-4 justify-center p-4 bg-amber-100 lg:text-lg'>
      <NavbarItem title="Trending" params="fetchTrending"  />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  )
}

export default Navbar
