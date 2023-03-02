import React from 'react'
import { logo } from "../img"
import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <section className=' container'>
      <div className=" grid md:grid-cols-1 h-[500px]  pb-6">
        <div className="flex flex-col  float-right  bg-black shadow-md  lg:flex-row items-center">
        <div className='flex-1 text-sm'>
          <div className='text-white  text-xl font-bold'>Contact</div>
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
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-auto md:max-w-[200px] rounded-full" src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Footer