import React from 'react'
import { james } from '../img'

const Testimonials = () => {
  return (
    <section className='md:h-[300px]  max-w-full grid grid-cols-1 place-items-center bg-slate-400  '>
        <div className="flex  place-items-center">
          <div className=" items-center">
            <img className="max-h-[400px] md:max-w-[300px] rounded-full" src={james} alt="" />
          </div>
          <div className="  items-center w-[600px]">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto">
       James Peterson Mwangi 
            </h1>
            <p  className='text-lg text-semibold mb-2'>Business Man </p>
            <p className="text-sm">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur "
            </p>
        </div>
        </div>

    </section>
  )
}

export default Testimonials