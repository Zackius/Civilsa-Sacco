import React from 'react'
import { james } from '../img'

const Testimonials = () => {
  return (
    <section name="testimonials" className='md:h-[300px] bg-gray-200 grid  grid-cols-1 place-items-center container '>
         <h2 className='text-lg md:text-xl font-bold '>Clients'  Testimonials </h2>
      <div className="flex  gap-2   justify-between place-items-center bg-gray-200 shadow-xl ">
          <div className="flex-1 justify-center m-2 ">
            <img className="max-w-[150px] md:max-w-[300px] rounded-full" src={james} alt="" />
          </div>
          <div className=" flex-1  ">
            <h1 className=" font-bold  text-blue-400">
       James Peterson Mwangi 
            </h1>
            <p  className='underline'>Business Man </p>
            <p className="text-sm md:text-md">
           "I took a Biashara loan and purchased a saloon vehicle. I later resigned from my job and am doing quite well with my car hire vehicle."
            </p>
        </div>
        </div>

    </section>
  )
}

export default Testimonials