import React from 'react'
import { couple } from '../../assets'

const Story = () => {
  return (
    <section className='bg-[#F1E0D2] lg:w-[1200px] lg:h-[529px] mt-36 mb-10 px-10 mx-auto lg:p-0 p-10'>
        <div>
            <div className='lg:ml-28'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center space-x-5'>
                    <div className='-mt-16'>
                        <img src={couple} alt="" />
                    </div>
                    <div className='lg:mt-0 mt-7'>
                        <h1 className='font-bold lg:text-[36px] text-[24px]'>Read our Story</h1>
                        <h2 className='lg:text-[24px] text-[18px] font-semibold'>How did we start?</h2>
                        <p>Our fashion brand is an online brand that was <br className='lg:block hidden'/> established in 2010 to enable women access <br className='lg:block hidden'/> premium wears at an affordable price. Over time, we <br className='lg:block hidden'/> have evolved and included men as a part of our target <br className='lg:block hidden'/> audience. We are dedicated to serving fashion needs <br className='lg:block hidden'/> as best as we can while also ensuring that they are of <br className='lg:block hidden'/> the best quality.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story