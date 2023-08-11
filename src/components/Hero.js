import React from 'react'
import hero from "../assets/hero.svg"
import herotextt from "../assets/herotextt.svg"
import mint from "../assets/mint.svg"
import gal from "../assets/gal.svg"
import discord from "../assets/discord.svg"
import twitter from "../assets/twitter.svg"
import telegram from "../assets/telegram.svg"

function Hero() {
  return (
    <div className=' background sbg-red-400 min-h-screen flex flex-col justify-center items-center '>
        

        <img src={hero} alt="" className='w-60 mb-5     lg:w-72 pt-16' />
        <img src={herotextt} alt="" className='w-80 mb-10     lg:w-[700px]' />
       
       <div className="buttons flex flex-col items-center">
        <a href="#">
        <img src={mint} alt="" className='w-40 mb-5     lg:w-64 lg:mb-10' />
        </a>
<a href="#">
<img src={gal} alt="" className='w-44 mb-5     lg:w-72 lg:mb-10' />
</a>

       </div>

       <div className="social buttons flex items-center mb-10">
       
        <a href="https://t.me/BasedBriansNFTonBase">
        <img src={telegram} alt="" className='w-9 mb-5 mx-3      lg:w-14' />
        </a>
        <a href="twitter.com/buyinbriannfts">
        <img src={twitter} alt="" className='w-9 mb-5 mx-3      lg:w-14' />
        </a>

       </div>
       
    </div>
    <div>
     
    </div>
  )
}

export default Hero