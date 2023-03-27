import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



const Navbar = () => {
  return (
    <section class="bg-blue-400 border-b-2  flex  flex-col justify-evenly  md:flex-row p-4
       w-full h-auto bottom-1">
      <div class="flex flex-col md:flex-row justify-center pb-2 ">
      <div>
         <p class="pl-2 font-light text-sm md:text-lg" >MON -FRI  0800 - 1600 HRS  SAT 0800-12:30 HRS</p>
      </div>
      {/* phone number */}
      <div class="flex  justify-center pl-6">
        <CallIcon />
<p class="pl-2 font-light text-sm md:text-lg" >0715 679 789</p>        
      </div>
      </div>

      <div class="flex flex-col md:flex-row">
 {/* Mail */}
 <div  class="flex justify-center">
        <DraftsIcon /> 
        <p class="pl-2 font-light text-sm md:text-lg" >info@civilsasaccolimited.co.ke</p>
      </div>
      {/*Social Icons */}
      <div class="flex pl-4 justify-center">
        <div >
        <TwitterIcon />
        </div>
        <div  class="pl-2">
          <FacebookIcon />
        </div>
        <div class="pl-2">
<InstagramIcon />
        </div>
      </div>
      </div>    
    </section>
  )
}

export default Navbar