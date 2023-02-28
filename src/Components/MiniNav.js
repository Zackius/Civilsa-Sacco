import React from 'react'

const Nav = () => {
  return (
      <section className='bg-blue-400 w-full h-[80px] flex justify-evenly p-6'>
          <div className='font-semibold text-lg hover:text-xl'>
              <a href="Home" >Home</a>
          </div>
          <div className='font-semibold text-lg hover:text-xl'>
              <a href="/" >Our Services</a>
          </div>
          <div className='font-semibold text-lg hover:text-xl'>
              <a href="Home" >Home</a>
          </div>
          <div className='font-semibold text-lg hover:text-xl'>
              <a href="Home" >Home</a>
             </div>
      </section>
  )
}

export default Nav