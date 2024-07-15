import React from 'react'
import { call, contact, email } from '../../assets'

const Hero3 = () => {
  return (
    <section>
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={contact} className='w-full lg:h-full h-[210px]' alt="" />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='lg:mt-36 mt-14'>
                <h1 className='lg:text-[24px] text-[#141415]'>Need help?</h1>
                <h2 className='text-[#141415] lg:text-[48px] text-[20px] font-bold'>Get in touch</h2>
            </div>
        </div>
        <div className='mt-10'>
            <h1 className='text-[#141415] text-[24px] font-semibold text-center'>Do you have any enquires?</h1>
            <p className='text-[#141415] text-[16px] text-center'>We are available 24 hours, 7 days.</p>
        </div>
        <div className='flex lg:flex-row flex-col lg:items-center lg:justify-center lg:gap-28 lg:mt-10 mt-5'>
            <div className='flex items-center'>
                <img src={call} alt="" className='lg:w-fit w-20'/>
                <div className='-mt-5'>
                    <h1 className='text-[#141415] lg:text-[20px] font-semibold'>Give us a call today!</h1>
                    <div className='mt-2'>
                        <p className='text-[#2BA646] lg:text-[16px] text-[10px] font-semibold'>+2348103704179</p>
                        <p className='text-[#2BA646] lg:text-[16px] text-[10px] font-semibold'>+2349012347654</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={email} alt="" className='lg:w-fit w-20'/>
                <div className='-mt-5'>
                    <h1 className='text-[#141415] lg:text-[20px] font-semibold'>You can also send a mail</h1>
                    <p className='text-[#2BA646] lg:text-[16px] text-[10px] font-semibold mt-3'>fashionfit@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero3