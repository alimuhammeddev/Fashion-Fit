import React, { useState } from 'react'
import { cart, logo, person, search, wishlist } from '../assets';

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About us",link:"/"},
      {name:"Collections",link:"/"},
      {name:"Contact us",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-48 px-7'>
            <div className='cursor-pointer'>
              <img src={logo} alt="" />
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] bg-[#ffffff] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} lg:shadow-transparent shadow-md`}>
              {
                Links.map((link)=>(
                  <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                  </li>
                ))
              }
              <div className='flex items-center space-x-8 lg:hidden'>
                <img src={search} alt="" />
                <img src={person} alt="" />
                <img src={cart} alt="" />
                <img src={wishlist} alt="" />
              </div>
            </ul>
            <div className='lg:flex items-center space-x-8 hidden'>
              <img src={search} alt="" />
              <img src={person} alt="" />
              <img src={cart} alt="" />
              <img src={wishlist} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Navbar