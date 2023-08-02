import React from 'react'
import hero from "../../assets/hero2.svg"
import mintnow from "../../assets/mintnow.svg"

function Mint() {
  return (
    <div className="lg:pl-60 mint bg-grdeen-900 w-full lg:w-2/4 flex flex-col items-center  ">
    <img src={hero} alt="" className='w-60     lg:w-52' />


    <h3 className='text-xl lg:text-2xl self-center justify-self-center align mt-5 text-center'>
    3333 Baldies
       </h3>
    <h3 className='text-xl lg:text-2xl self-center justify-self-center align mt-5 mb-5 text-center'>
    Mint price : 0.1 ETH
       </h3>

       

       <div className="mintsection flex flex-col justify-center items-center mb-10">

<div className="mintbutton flex justify-center  ">
    <img src={mintnow} alt="" className='w-44 mb-5     lg:w-64 lg:mb-2' />
    <input className='  w-[52px] h-[52px] rounded-lg ml-2 lg:h-[77px] lg:w-[77px] text-center lg:text-xl' type="text"  placeholder='1'/>
</div>
    <input className=' w-[234px] h-[52px] rounded-lg ml-2 lg:h-[77px] lg:w-[343px] text-center lg:text-xl !m-0 p-0' type="text"
    placeholder='??? ETHEREUM'
    />


       </div>

    </div>
  )
}

export default Mint