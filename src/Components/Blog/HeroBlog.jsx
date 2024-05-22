import React from 'react'
import { hero1 } from '../../assets'

const HeroBlog = () => {
  return (
    <section>
        <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src={hero1} className='w-full lg:h-full h-[210px]' alt="" />

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='mt-1'>
                <h1 className='text-[#141415] lg:text-[48px] text-[20px] font-bold'>Blog</h1>
                <h2 className='text-[#141415] lg:text-[24px]'>Read tips to upgrade your fashion style</h2>
            </div>
        </div>
    </section>
  )
}

export default HeroBlog