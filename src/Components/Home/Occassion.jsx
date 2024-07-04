import React from 'react'
import { woman } from '../../assets'

const Occassion = () => {
  return (
    <section className='flex items-center justify-center mx-auto lg:gap-20 lg:px-[3%] gap-5 flex-col lg:flex-row'>
        <div>
            <img src={woman} alt="" />
        </div>
        <div className='lg:px-2'>
            <h1 className='text-[#141415] lg:text-[36px] text-[26px] font-semibold text-center'>Outfit for every occassion</h1>
            <p className='lg:text-[24px] text-[18px] mt-2 text-[#141415] text-center'>Explore outfits that are perfect for your next beach outing</p>
            <div className='mx-auto text-center mt-5'>
              <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff] transition duration-500 ease-out border border-[#307098]'>Shop now</button>
            </div>
        </div>
    </section>
  )
}

export default Occassion