import React from 'react'
import { bag, man1, man2, necklace, wishlist, woman1, woman2 } from '../../assets'

const Collection = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#141415] lg:text-[36px] text-[26px] font-medium'>New Collection!</h1>
            <p className='text-[#141415] lg:text-[24px] text-[15px] mt-2'>Our collections are elegant and of the best quality</p>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-3'>
            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md hover:shadow-[#307098] cursor-pointer transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={man1} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Jean Jacket</h1>
                    <h2 className='text-[16px]'>N22,000</h2>
                </div>
            </div>

            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md cursor-pointer hover:shadow-[#307098] transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={woman1} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Wide-leg pants</h1>
                    <h2 className='text-[16px]'>N25,000</h2>
                </div>
            </div>

            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md cursor-pointer hover:shadow-[#307098] transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={bag} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Brown Bags Set</h1>
                    <h2 className='text-[16px]'>N60,000</h2>
                </div>
            </div>

            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md cursor-pointer hover:shadow-[#307098] transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={necklace} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Layered necklace</h1>
                    <h2 className='text-[16px]'>N12,000</h2>
                </div>
            </div>

            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md cursor-pointer hover:shadow-[#307098] transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={man2} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Hoodie</h1>
                    <h2 className='text-[16px]'>N15,000</h2>
                </div>
            </div>

            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#CAD7DF] border shadow-md cursor-pointer hover:shadow-[#307098] transition duration-700 ease-out'>
                <div className='relative'>
                    <img src={woman2} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Blue Crop Top</h1>
                    <h2 className='text-[16px]'>N8,000</h2>
                </div>
            </div>
        </div>
        <div className='mx-auto text-center mt-7'>
            <button className='bg-[#307098] w-[190px] h-[48px] transition duration-500 ease-out text-[#ffffff] border border-[#307098]'>Shop all</button>
        </div>
    </section>
  )
}

export default Collection