import React from 'react'
import { bike, discount, support, verification } from '../assets'

const Benefit = () => {
  return (
    <section>
        <div>
            <h1 className='lg:text-[32px] text-[24px] font-bold text-center text-[#141415]'>Benefits</h1>
            <h2 className='lg:text-[24px] text-[18px] text-center text-[#141415]'>Why patronize us?</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:px-28 lg:gap-0 gap-10 mt-10'>
            <div>
                <div className='bg-[#EEF2F5] lg:p-7 p-5 w-fit rounded-full mx-auto'>
                    <img src={bike} alt="" />
                </div>
                <h1 className='text-[16px] font-bold text-[#141415] text-center mt-3'>Prompt Delivery</h1>
                <p className='text-[12px] font-medium text-[#141415] text-center mt-1'>You get your orders without <br className='lg:block hidden'/> delay.</p>
            </div>

            <div>
                <div className='bg-[#EEF2F5] lg:p-7 p-5 w-fit rounded-full mx-auto'>
                    <img src={verification} alt="" />
                </div>
                <h1 className='text-[16px] font-bold text-[#141415] text-center mt-3'>Quality Products</h1>
                <p className='text-[12px] font-medium text-[#141415] text-center mt-1'>Our products are super <br className='lg:block hidden'/> affordable and of good <br className='lg:block hidden'/> quality.</p>
            </div>

            <div>
                <div className='bg-[#EEF2F5] lg:p-7 p-5 w-fit rounded-full mx-auto'>
                    <img src={support} alt="" />
                </div>
                <h1 className='text-[16px] font-bold text-[#141415] text-center mt-3'>Customer support 24/7</h1>
                <p className='text-[12px] font-medium text-[#141415] text-center mt-1'>We are ready to help you <br className='lg:block hidden'/> with any challenge.</p>
            </div>

            <div>
                <div className='bg-[#EEF2F5] lg:p-7 p-5 w-fit rounded-full mx-auto'>
                    <img src={discount} alt="" />
                </div>
                <h1 className='text-[16px] font-bold text-[#141415] text-center mt-3'>10% off first order</h1>
                <p className='text-[12px] font-medium text-[#141415] text-center mt-1'>Special discount for all <br className='lg:block hidden'/> new clients.</p>
            </div>
        </div>
    </section>
  )
}

export default Benefit