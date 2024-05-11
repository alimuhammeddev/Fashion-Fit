import React from 'react'
import { check, group, user } from '../../assets'

const Values = () => {
  return (
    <section>
        <div>
            <h1 className='lg:text-[36px] text-[24px] font-bold text-center'>Our Values</h1>
            <h2 className='text-center lg:text-[24px] text-[18px] font-semibold'>What do we cherish?</h2>
        </div>

        <div className='flex justify-center'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 gap-5'>
                <div className='flex items-center space-x-2'>
                    <img src={check} alt=""/>
                    <div className='lg:mt-10 mt-5'>
                        <h1 className='text-[20px] font-bold'>High Quality</h1>
                        <p>We are committed to creating high-quality <br className='lg:block hidden'/> garments using skilled craftsmanship and <br className='lg:block hidden'/> attention to detail. We use premium <br className='lg:block hidden'/> materials, and expert tailoring.</p>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <img src={user} alt=""/>
                    <div className='lg:mt-10 mt-3'>
                        <h1 className='text-[20px] font-bold'>User First</h1>
                        <p>We are committed to putting our <br className='lg:block hidden'/> customer's needs first. We believe in <br className='lg:block hidden'/> establishing a good relation with our <br className='lg:block hidden'/> customers.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className='mt-4 flex justify-center'>
              <div className='flex items-center space-x-2'>
                    <img src={group} alt=""/>
                    <div className='lg:mt-10 mt-5'>
                        <h1 className='text-[20px] font-bold'>Inclusivity and Diversity</h1>
                        <p>Our designs are thoughtfully created to <br className='lg:block hidden'/> celebrate the beauty in every shade, shape, <br className='lg:block hidden'/> and size. We help everyone find their <br className='lg:block hidden'/> taste in our collections.</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Values