import React from 'react'
import { logo } from "../img"
import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <section className=' container pt-4'>
      <div className=" grid md:grid-cols-1 h-auto bg-blue-400 ">
        <div className="flex flex-col  md:flex-row  pt-4 justify-evenly items-center">
        <div className="flex flex-1 justify-center items-center">
            <img className="max-w-[200px] md:max-w-[200px] shadow-xl" src={logo} alt="" />
          </div>
        <div className='flex-1 text-sm pt-2'>
          <div className='text-white  text-xl font-bold underline'>Contact</div>
        <div class="flex p-2 ">
        <CallIcon  color='primary'/>
<p class="pl-2 font-light text-sm md:text-lg text-white" >0715 679 789</p>        
        </div>
        <div  class="flex p-2">
        <DraftsIcon  color='primary' /> 
        <p class="pl-2 font-light text-sm md:text-lg text-white " >info@civilsasaccolimited.co.ke</p>
          </div>
          <div  class="flex p-2">
        <LocationOnIcon  color='primary' /> 
        <p class="pl-2 font-light text-sm md:text-lg text-white " >Banana: Opposite Chantily School </p>
      </div>
          </div>
        <div className=' flex-1 text-sm pt-2 '>
          <div className='text-white  text-xl font-bold underline'>Our Services</div>
        <div class="p-2">
<p class=" font-light text-lg md:text-lg text-white" >Biashara Loan </p>        
        </div>
        <div class="p-2">
        <p class=" font-light text-lg md:text-lg text-white " >Soma Loan</p>
          </div>
          <div class="p-2">
        <p class=" font-light text-lg md:text-lg text-white " >Jenga Loan  </p>
            </div>
            <div class="p-2">
        <p class=" font-light text-lg md:text-lg text-white " >Mkulima Loan  </p>
            </div>
            <div class="pl-2" >
        <p class=" font-light text-lg md:text-lg text-white " >Salary Advance </p>
      </div>
          </div>
          </div>
      </div>
      <section>
           <div className="bg-blue-400 w-full h-[70px] ">
          <div className=" flex flex-row  py-8  justify-center  text-black font-bold">
          <CopyrightIcon />
        <p className="px-4">
       CivilSa Sacco
        </p>
      </div>
    </div>
    </section>
    </section>
    )
}

export default Footer