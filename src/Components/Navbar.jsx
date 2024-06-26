import React, { useState } from 'react'
import { cart, logo, person, search, wishlist } from '../assets';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const Links =[
      {name: "Home",link:"/" },
      {name: "About us", link:"/about" },
      {name: "Collections", link:"/collections" },
      {name: "Contact us", link:"/contact" },
    ];

    const navigate = useNavigate();
    const [open,setOpen]=useState(false);

    const handleNavigation = (link) => {
      navigate(link);
      setOpen(false); // Close the menu after navigation
    };
return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white lg:py-8 py-4 lg:px-48 px-7'>
            <div className='cursor-pointer'>
              <img src={logo} alt="" />
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] bg-[#ffffff] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} lg:shadow-none md:shadow-none shadow-md`}>
              {
                Links.map((link, index)=>(
                  <li key={index} className='md:ml-8 text-xl md:my-0 my-7 md:mr-14 lg:mr-5 cursor-pointer'>
                    <a onClick={() => handleNavigation(link.link)} className="text-gray-800 hover:text-[#307098] duration-500">{link.name}</a>
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
  );
};


const CustomLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
      event.preventDefault();
      navigate(to);
  };

  return (
      <a href={to} onClick={handleClick} className="text-gray-800 hover:text-[#307098] duration-500">
          {children}
      </a>
  );
};

export default Navbar