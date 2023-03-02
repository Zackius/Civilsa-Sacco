import React from 'react'
import { james } from '../img'

const Testimonials = () => {
  return (
    <section className='md:h-[300px] bg-gray-300  pt-12  grid grid-cols-1 place-items-center container '>
        <div className="flex m-2 gap-8   justify-between place-items-center shadow-xl ">
          <div className="flex-1 justify-center m-2 ">
            <img className="max-w-auto md:max-w-[300px] rounded-full" src={james} alt="" />
          </div>
          <div className=" flex-1 text-white m-2 ">
            <h1 className=" font-bold ">
       James Peterson Mwangi 
            </h1>
            <p  className='mb-2'>Business Man </p>
            <p className="text-sm">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ."
            </p>
        </div>
        </div>

    </section>
  )
}

export default Testimonials