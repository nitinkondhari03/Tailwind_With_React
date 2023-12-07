import React from 'react'
import BlueShape from "../assets/Blue-Shape.svg"
import PinkShape from "../assets/Pink-Shape.svg"
import PurpleShape from "../assets/Purple-Shape.svg"
import HeroModel from "../assets/Hero-Model.png"
import Checkmark from "../assets/Checkmark.svg"
const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className='flex items-center justify-center lg:flex-1 lg:order-2'>
        <img src={BlueShape} alt="1st" className="-rotate-45 h-64 md;h-72 lg:h-[400px]"/>
        <img src={PinkShape} alt="1st" className='absolute -rotate-[30deg] h-64 md;h-72 lg:h-[400px]'/>
        <img src={PurpleShape} alt="1st" className='absolute -rotate-[15deg] h-64 md;h-72 lg:h-[400px]' />
        <img src={HeroModel} alt="1st" className='absolute h-64 md;h-72 lg:h-[400px]'/>
      </div>
      <div className="flex-1 lg:order-1">
        <h1 className='text-5xl font-bold leading-tight'>Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-400">With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online</p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input className="rounded-md px-4 py-3 bg-slate-100 placeholder:text-gray-600 " type="email" placeholder='Enter email address'/>
         <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className='flex gap-2'>
          <img src={Checkmark} alt="check" />
          <p className="font-lato text-gray-400">No spam,ever Unsubscribe anytimes</p>
        </div>
      </div>
    </div>
  )
}

export default Body
