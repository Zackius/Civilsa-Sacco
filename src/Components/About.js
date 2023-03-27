import React from 'react'
import Zoom from 'react-reveal/Zoom';

const About = () => {
  return (
    <section name="about" className=' h-[400px] bg-yellow-300 container   mx-auto  '>
      <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-center underline p-12">
            About 
            </h1>
            <div className="flex flex-cols text-center md:px-24  px-12 md:m-6 ">   
            <Zoom left>
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "
            </Zoom>
          </div>
    </section>
  )
}

export default About