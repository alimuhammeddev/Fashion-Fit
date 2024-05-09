import React from 'react'
import { arrowdown, facebook, instagram, logo, twitter } from '../../assets'
import styles from '../../style'

const Footer = () => {
  return (
    <section>
        <div className="lg:px-32">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} mt-16`}>
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 lg:gap-36 md:gap-5 gap-5'>
            <div>
                <img src={logo} alt="" />
                <div className='flex items-center gap-3 border border-[#141415] w-fit p-2 mt-5'>
                    <h1 className='text-[#0A3B5A] font-semibold'>English</h1>
                    <img src={arrowdown} alt="" />
                </div>
            </div>

            <div>
                <h1 className='text-[20px] font-bold text-[#141415]'>About</h1>
                <div className='space-y-3 mt-2'>
                    <ul className='space-y-2'>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Our Story</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Blog</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Legal</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>FAQs</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Contact us</a>
                    </li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 className='text-[20px] font-bold text-[#141415]'>Product</h1>
                <div className='space-y-3 mt-2'>
                    <ul className='space-y-2'>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Men</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Women</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>Sales</a>
                    </li>
                    <li>
                        <a href="#!" className='text-[#141415] hover:text-[#307098] duration-500 transition ease-out'>New in</a>
                    </li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 className='text-[20px] font-bold text-[#141415]'>Connect with us</h1>
                <div className='mt-2 flex items-center gap-5'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div>
            <h1 className='border border-[#82776D] mt-10'></h1>
        </div>
        <div className='lg:flex lg:gap-5 text-[12px] items-center mx-auto justify-center mt-10'>
          <h1 className='flex items-center space-x-2 text-center justify-center lg:text-left'>2023 FASHION FIT <span><h1 className='bg-[#82776D] p-1 w-fit rounded-full ml-2'></h1></span> <p>All right reserved.</p></h1>
          <p className='text-center lg:text-left'>Designed by Adenike Abioye</p>
        </div>
    </section>
  )
}

export default Footer