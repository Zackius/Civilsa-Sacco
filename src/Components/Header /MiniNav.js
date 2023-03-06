import React from 'react'
import { Link } from "react-scroll";

const Nav = () => {
  return (
      <section className='bg-blue-400 w-full h-[80px] flex justify-evenly p-6'>
          <div className='font-semibold text-lg hover:text-xl p-1'>
              <Link to="home" smooth={true} duration={300}>Home</Link>
          </div>
          <div className='font-semibold text-lg hover:text-xl p-1'>
              <Link to="services" smooth={true} duration={300}>Our Services</Link>
          </div>
          <div className='font-semibold text-lg hover:text-xl p-1'>
              <Link to="about"smooth={true} duration={300} >About</Link>
          </div>
          <div className='font-semibold text-lg hover:text-xl p-1'>
              <Link to="testimonials" smooth={true} duration={300} >Testimonials</Link>
             </div>
      </section>
  )
}

export default Nav