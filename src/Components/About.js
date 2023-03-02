import React from 'react'

const About = () => {
  return (
    <section name="about" className=' h-[400px] bg-about bg-cover object-cover pb-12 bg-accent-dark bg-no-repeat container mx-auto  '>
      <h1 className="text-[26px] font-bold mb-2 max-w-[45 0px] mx-auto text-center underline p-12 text-white">
            About 
            </h1>
            <div className="flex flex-cols  md:m-6 ">   
            <p className="text-sm md:text-xl text-white md:max-w-auto ">
            ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "
            </p>
          </div>
    </section>
  )
}

export default About