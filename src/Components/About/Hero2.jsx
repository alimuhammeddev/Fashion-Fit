import React from 'react'
import { walking } from '../../assets'

const Hero2 = () => {
  return (
    <section>
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={walking} className='w-full lg:h-full h-[210px]' alt="" />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='mt-1'>
                <h1 className='text-[#ffffff] lg:text-[48px] text-[20px] font-bold'>How did FASHION FIT become a huge success</h1>
                <h2 className='text-[#ffffff] lg:text-[24px]'>Get inspired as you read about us</h2>
                <div className='mx-auto text-center lg:mt-10 mt-1'>
                    <button className='bg-[#307098] w-[190px] h-[48px] transition duration-500 ease-out text-[#ffffff] border border-[#307098]'>Shop now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero2