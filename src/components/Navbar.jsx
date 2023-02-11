/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Navbar = () => {
  return (

<>
<div className="navbar h-36 bg-[#F0F8EA] px-10 font-serif">
{/* bg-logo bg-no-repeat bg-contain  */}
    <div className="flex-1 bg-left h-[5.5rem] min-h-20 min-w-20 bg-logo bg-no-repeat bg-contain min-w-40 hover:cursor-pointer "></div>
    <div className="flex-none">
      <ul className="menu menu-horizontal  text font-semibold text-[#293241]">
        <li><a href='https://carleton.ca/campus/' target={'_blank'}>Campus</a></li>
        <li><a href='https://research.carleton.ca' target={'_blank'}>Research</a></li>
        <li><a href='https://carleton.ca/prospective' target={'_blank'}>Admissions</a></li>
        <li><a href='https://carleton.ca/about/' target={'_blank'}>About</a></li>
      </ul>
    </div>
</div>

</>

  )
}

export default Navbar