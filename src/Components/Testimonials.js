import React from 'react'
import { james } from '../img'

const Testimonials = () => {
  return (
    <section className='md:h-[300px] bg-gray-400 grid  grid-cols-1 place-items-center container '>
        <div className="flex  gap-2   justify-between place-items-center bg-gray-200 shadow-xl ">
          <div className="flex-1 justify-center m-2 ">
            <img className="max-w-[150px] md:max-w-[300px] rounded-full" src={james} alt="" />
          </div>
          <div className=" flex-1  ">
            <h1 className=" font-bold ">
       James Peterson Mwangi 
            </h1>
            <p  className='underline'>Business Man </p>
            <p className="text-sm">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ."
            </p>
        </div>
        </div>

    </section>
  )
}

export default Testimonials