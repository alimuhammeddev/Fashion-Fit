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
                    Know your personal style</h1>
                    <h2 className='ml-4'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Plan ahead</h1>
                    <h2 className='ml-4'>Take a few moments each evening or on weekends to plan your outfits for the upcoming week. This saves time and prevents rushed decisions that might lead to mismatched outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Mix and match</h1>
                    <h2 className='ml-4'>Experiment with mixing different clothing items to create new combinations. Don't be afraid to pair unexpected pieces together, like a casual t-shirt with a tailored blazer or a flowy dress with a denim jacket.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Focus on basic</h1>
                    <h2 className='ml-4'>Invest in high-quality basic pieces like plain t-shirts, well-fitting jeans, neutral-colored blouses, and versatile jackets. These form the foundation of your wardrobe and can be easily paired with statement pieces.</h2>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Story2