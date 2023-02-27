import React from 'react'
import { logo } from "../img"
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const Header = () => {
  return (
      <section class=" flex justify-around  w-full bg-gray-200 h-[100px]">
          <div>
          <img class="w-42 h-20 m-3" src={logo} alt="civilsa" /> 
          </div>
          <div class="flex  m-7 ">
              <div  class="flex">
                  <div>
                  <DownloadDoneIcon />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg">Licensed By SASRA</h1>
                      <p class="text-center">2010</p>
                  </div>
              </div>
              <div class="flex pl-8">
                  <div>
                  <DownloadDoneIcon />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg">Truested By</h1>
                      <p class="text-center">5,000</p>
                  </div>
              </div>
              <div class="flex pl-8">
                  <div>
                  <DownloadDoneIcon />
                  </div>
                  <div>
                      <h1 class="font-semibold text-sm md:text-lg">Founded </h1>
                      <p class="text-center"> Jan 4 2020</p>
                  </div>
              </div>
        </div>
          
    </section>
  )
}

export default Header