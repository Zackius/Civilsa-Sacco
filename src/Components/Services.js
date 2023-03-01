import React from 'react'
import { busines, farm, school } from '../img'

const Services = () => {
  return (
    <section className=' md:container md:mx-auto px-16 pt-12'>
      <div>
        <h1 className='text-center font-bold text-3xl md:text-4xl underline pb-4'>Our Services</h1>
      </div>
        <div className=" grid md:grid-cols-1  md:px-8 pb-4">
        <div className="flex flex-col  float-right  bg-white shadow-md  lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-auto md:max-w-[600px] rounded-xl" src={school} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-blue-400">
              Soma Loan 
            </h1>
            <p className="text-sm">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "
            </p>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-1  md:px-8 pb-4">
        <div className="flex flex-col  float-right  bg-white shadow-md  lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-blue-400">
           Farming Loans
            </h1>
            <p className="text-sm">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-auto md:max-w-[600px] rounded-xl" src={farm} alt="" />
          </div>
         
        </div>
      </div>
      <div className=" hidden  md:grid md:grid-cols-1 md:px-8 pb-4">
        <div className="flex flex-col  float-right  bg-white shadow-md  lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-auto md:max-w-[600px] rounded-xl" src={busines} alt="" />
          </div>
          <div className="flex-1 text-center items-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-blue-400">
              Business Loans
            </h1>
            <p className="text-sm text-">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur "
            </p>
          </div>
        </div>
      </div>
      <div className=" md:hidden grid md:grid-cols-1 md:px-8 pb-4">
        <div className="flex flex-col  float-right  bg-white shadow-md  lg:flex-row items-center">
          <div className="flex-1 text-center items-center lg:text-left">
            <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-blue-400">
              Business Loans
            </h1>
            <p className="text-sm text-">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur "
            </p>
          </div>
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-auto md:max-w-[600px] rounded-xl" src={busines} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services