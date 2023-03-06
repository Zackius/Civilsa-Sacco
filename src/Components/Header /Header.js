import React from 'react'
import { logo } from "../../img"
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';


const Header = () => {
  return (
    <section class=" hidden md:flex  justify-center md:justify-around  w-full bg-gray-200 h-[100px]">
          <div class="items-center">
          <img class="w-42 h-20 m-3 " src={logo} alt="civilsa" /> 
          </div>
          <div class="  md:visible invisible flex md:m-7 ">
              <div  class="flex">
                  <div>
                  <DownloadDoneIcon color='primary' />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg pl-2">Licensed By SASRA</h1>
                      <p class="text-center">2010</p>
                  </div>
              </div>
              <div class="flex pl-8">
                  <div>
                  <DownloadDoneIcon color='primary' />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg pl-2">Truested By</h1>
                      <p class="text-center">5,000</p>
                  </div>
              </div>
              <div class="flex pl-8">
                  <div>
                  <DownloadDoneIcon color='primary' />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg pl-2">Founded </h1>
                      <p class="text-center"> Jan 4 2020</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Header