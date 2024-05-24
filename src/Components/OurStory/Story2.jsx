import React from 'react'
import { smilecloth, smileywoman } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Story2 = () => {
  return (
    <section className='lg:mt-40 mt-28 pb-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20'>
            <div>
                <img src={smileywoman} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='text-[#215373] font-semibold lg:text-[32px] text-[25px] -mt-3'>The ultimate fashion guide</h1>
                    <p className='text-[#307098] font-semibold'>by Rachel Funde</p>
                </div>
                <div className='lg:space-y-[35px] space-y-3'>
                <div className='mt-2'>
                    <h1 className='text-[#141415] text-[20px] font-semibold'>The ultimate fashion guide is here</h1>
                    <p className='text-[#141415] font-medium'>The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop from us. <br className='lg:block hidden'/>
                    Here are some tips to keep your fashion sense tight every time.</p>
                </div>
                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style</h1>
                    <h2 className='ml-4 text-[#141415]'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Plan ahead</h1>
                    <h2 className='ml-4 text-[#141415]'>Take a few moments each evening or on weekends to plan your outfits for the upcoming week. This saves time and prevents rushed decisions that might lead to mismatched outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Mix and match</h1>
                    <h2 className='ml-4 text-[#141415]'>Experiment with mixing different clothing items to create new combinations. Don't be afraid to pair unexpected pieces together, like a casual t-shirt with a tailored blazer or a flowy dress with a denim jacket.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Focus on basic</h1>
                    <h2 className='ml-4 text-[#141415]'>Invest in high-quality basic pieces like plain t-shirts, well-fitting jeans, neutral-colored blouses, and versatile jackets. These form the foundation of your wardrobe and can be easily paired with statement pieces.</h2>
                </div>
            </div>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-24 mt-5'>
            <div className='lg:order-1 order-2'>
                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style</h1>
                    <h2 className='ml-4 text-[#141415]'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style</h1>
                    <h2 className='ml-4 text-[#141415]'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style</h1>
                    <h2 className='ml-4 text-[#141415]'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>

                <div className='mt-2'>
                    <h1 className='font-bold text-[#141415] flex items-center'>
                    <FontAwesomeIcon icon={faCircle} className='text-[#141415] mr-2' style={{ fontSize: '7px' }} />
                    Know your personal style</h1>
                    <h2 className='ml-4 text-[#141415]'>Start by identifying your personal style preferences. Are you drawn to classic, minimalistic, bohemian, edgy, or eclectic styles? Knowing your style will guide your clothing choices and help you create cohesive outfits.</h2>
                </div>
            </div>
            <div className='mt-5 lg:order-2 order-1'>
                <img src={smilecloth} alt="" />
            </div>
        </div>

        <div className='mt-5 text-[#141415]'>
            <h1>While it's great to draw inspiration from fashion trends, stay true to your personal style. The most important thing is feeling comfortable and confident in what you're wearing. Remember that fashion is an art, and there's no one-size-fits-all formula. Express your individuality and have fun with your clothing choices.</h1>
        </div>

        <div className='mx-auto text-center mt-6'>
            <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff] hover:text-[#307098] transition duration-500 ease-out hover:bg-[#ffffff] border border-[#307098]'>More Stories</button>
        </div>
    </section>
  );
};

export default Story2