import React from 'react'
import { smileywoman } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Story2 = () => {
  return (
    <section className='lg:mt-40 mt-28'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div>
                <img src={smileywoman} alt="" />
            </div>
            <div>
                <h1 className='text-[#215373] font-semibold lg:text-[32px] -mt-3'>The ultimate fashion guide</h1>
                <p className='text-[#307098] font-semibold'>by Rachel Funde</p>
                <div className='mt-2'>
                    <h1 className='text-[#141415] text-[20px] font-semibold'>The ultimate fashion guide is here</h1>
                    <p className='text-[#141415] font-medium'>The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop from us. <br className='lg:block hidden'/>
                    Here are some tips to keep your fashion sense tight every time.</p>
                </div>
                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style </h1>
                    <h2 className='ml-4'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
               </div>

               <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style </h1>
                    <h2 className='ml-4'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
               </div>

               <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style </h1>
                    <h2 className='ml-4'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
               </div>

               <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style </h1>
                    <h2 className='ml-4'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Story2