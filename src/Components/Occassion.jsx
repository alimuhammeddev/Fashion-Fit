import React from 'react'
import { woman } from '../assets'

const Occassion = () => {
  return (
    <section className='flex items-center justify-center mx-auto lg:px-10 lg:gap-20 gap-10 flex-col lg:flex-row'>
        <div>
            <img src={woman} alt="" />
        </div>
        <div>
            <h1 className='text-[#141415] text-[36px] text-center'>Outfit for every occassion</h1>
            <p className='text-[24px] text-[#141415] text-center'>Explore outfits that are perfect for your next beach outing</p>
            <div className='mx-auto text-center mt-5'>
                <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff]'>Shop now</button>
            </div>
        </div>
    </section>
  )
}

export default Occassion