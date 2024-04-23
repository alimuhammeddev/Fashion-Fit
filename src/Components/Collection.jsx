import React from 'react'
import { man1 } from '../assets'

const Collection = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#141415] text-[36px] font-medium'>New Collection!</h1>
            <p className='text-[#141415] text-[24px]'>Our collections are elegant and of the best quality</p>
        </div>
        
        <div>
            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md'>
                <div>
                    <img src={man1} alt="" />
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px]'>Jean Jacket</h1>
                    <h2 className='text-[16px]'>N22,000</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection